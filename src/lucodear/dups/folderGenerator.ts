import merge from 'lodash.merge';
import {
  getEnabledFolderTheme,
  highContrastColorFileEnding,
  iconFolderPath,
  lightColorFileEnding,
  openedFolder,
  setDefaultFolderIcons,
  setFolderNames,
} from '../../icons';
import type {
  DefaultIcon,
  FolderIcon,
  FolderTheme,
  IconAssociations,
  IconConfiguration,
  IconJsonOptions,
} from '../../models';
import { lucodearIconsPath } from '../constants';
import type { LucodearFolderIcon, LucodearFolderTheme } from '../model';

export const loadLucodearFolderIconDefinitions = (
  folderThemes: LucodearFolderTheme[],
  config: IconConfiguration,
  options: IconJsonOptions
): IconConfiguration => {
  config = merge({}, config);
  config.hidesExplorerArrows = options.hidesExplorerArrows;
  const activeTheme = getEnabledFolderTheme(
    folderThemes as FolderTheme[],
    options.folders?.theme
  );
  if (!activeTheme) {
    return {};
  }
  const enabledIcons = disableIconsByPack(activeTheme, options.activeIconPack);

  if (options.folders?.theme === 'none') {
    return config;
  }

  enabledIcons.forEach((icon) => {
    if (icon.disabled) return;
    config = setFolderIconDefinitions(config, icon);
    config = merge({}, config, setFolderNames(icon.name, icon.folderNames));
    config.light = icon.light
      ? merge(
          {},
          config.light,
          setFolderNames(icon.name, icon.folderNames, lightColorFileEnding)
        )
      : config.light;
    config.highContrast = icon.highContrast
      ? merge(
          {},
          config.highContrast,
          setFolderNames(
            icon.name,
            icon.folderNames,
            highContrastColorFileEnding
          )
        )
      : config.highContrast;
  });

  config = setDefaultFolderIcons(activeTheme, config);
  return config;
};

const disableIconsByPack = (
  folderIcons: FolderTheme | undefined,
  activatedIconPack: string | undefined
): FolderIcon[] => {
  if (!folderIcons?.icons || folderIcons.icons.length === 0) {
    return [];
  }
  return folderIcons.icons.filter((icon) => {
    return !icon.enabledFor
      ? true
      : icon.enabledFor.some((p) => p === activatedIconPack);
  });
};

export const setFolderIconDefinitions = (
  config: IconConfiguration,
  icon: LucodearFolderIcon | DefaultIcon,
  // 🍭
  path: string = lucodearIconsPath
) => {
  config = merge({}, config);
  config = createIconDefinitions(config, icon, '', path);
  if (icon.light) {
    config = merge(
      {},
      config,
      createIconDefinitions(config, icon, lightColorFileEnding, path)
    );
  }
  if (icon.highContrast) {
    config = merge(
      {},
      config,
      createIconDefinitions(config, icon, highContrastColorFileEnding, path)
    );
  }
  return config;
};

const createIconDefinitions = (
  config: IconConfiguration,
  icon: LucodearFolderIcon | DefaultIcon,
  appendix: string = '',
  path: string = iconFolderPath
) => {
  config = merge({}, config);
  const configIconDefinitions = config.iconDefinitions;

  const iconName = icon.name;
  const theme =
    (icon as LucodearFolderIcon).theme === undefined
      ? ''
      : `${(icon as LucodearFolderIcon).theme}/`;

  if (configIconDefinitions) {
    configIconDefinitions[iconName + appendix] = {
      iconPath: `${path}${theme}${iconName}${appendix}.svg`,
    };
    configIconDefinitions[`${iconName}${openedFolder}${appendix}`] = {
      iconPath: `${path}${theme}${iconName}${openedFolder}${appendix}.svg`,
    };
  }
  return config;
};

export function getCustomFolderIcons(
  folderAssociations: IconAssociations | undefined
) {
  if (!folderAssociations) return [];

  const icons: FolderIcon[] = Object.keys(folderAssociations).map((fa) => ({
    // use default folder if icon name is empty
    name:
      folderAssociations[fa].length > 0
        ? 'folder-' + folderAssociations[fa].toLowerCase()
        : 'folder',
    folderNames: [fa.toLowerCase()],
  }));

  return icons;
}
