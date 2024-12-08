import type { FileIcon } from '../files/fileIcon';

export enum FileNamePattern {
  /** Adds the following extensions to the file name: `js`, `mjs`, `cjs`, `ts`, `mts`, `cts`. */
  Ecmascript = 'ecmascript',

  // #region 🍭 » lucode: new pattern
  /** Adds the following (react) extensions: `tsx`, `jsx`, plus all in `Ecmascript`. */
  React = 'react',
  // #endregion

  /** Adds the following extensions to the file name: `json`, `jsonc`, `json5`, `yaml`, `yml`, `toml`. */
  Configuration = 'configuration',

  /** Adds the following extensions to the file name: `js`, `mjs`, `cjs`, `ts`, `mts`, `cts`, `json`, `jsonc`, `json5`, `yaml`, `yml`, `toml`. */
  NodeEcosystem = 'nodeEcosystem',

  /** It adjusts the name with the following patterns: `.fileNamerc`, `.config/fileNamerc`, `fileName.config` and combines that with the pattern `NodeEcosystem` */
  Cosmiconfig = 'cosmiconfig',
}

export type Patterns = Record<string, FileNamePattern>;
export type FileIconWithPatterns = (FileIcon & { patterns?: Patterns })[];
