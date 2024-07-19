import { fileIcons } from '../../core/icons/fileIcons';
import { folderIcons } from '../../core/icons/folderIcons';
import { languageIcons } from '../../core/icons/languageIcons';
import { generatePreview } from './preview';

const basicFileIcons = getFiles(
  fileIcons.icons
    .filter((i) => i.clone === undefined)
    .map((i) => ({ name: i.name, theme: (i as any).theme }) as IconDefinition)
    .concat(languageIcons.map((i) => ({ name: i.icon.name }) as IconDefinition))
);
const folderThemes = getFolders(folderIcons);

generatePreview('fileIcons', basicFileIcons, 5, [
  'virtual',
  'powerpoint',
  'word',
  'credits',
]);
generatePreview('folderIcons', folderThemes, 5, [
  'folder-aurelia',
  'folder-phpmailer',
  'folder-syntax',
  'folder-ansible',
]);
