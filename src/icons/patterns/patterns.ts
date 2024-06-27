import {
  type FileIcon,
  type FileIconWithPatterns,
  FileNamePattern,
  type Patterns,
} from '../../models';

/**
 * Maps the patterns to an array of strings.
 * Each pattern is a function that generates file names based on a key.
 *
 * @param patterns The patterns to map.
 * @returns An array of strings generated by applying the patterns.
 */
const mapPatterns = (patterns: Patterns): string[] => {
  return Object.entries(patterns).flatMap(([fileName, pattern]) => {
    switch (pattern) {
      case FileNamePattern.Ecmascript:
        return [
          `${fileName}.js`,
          `${fileName}.mjs`,
          `${fileName}.cjs`,
          `${fileName}.ts`,
          `${fileName}.mts`,
          `${fileName}.cts`,
        ];

      case FileNamePattern.Configuration:
        return [
          `${fileName}.json`,
          `${fileName}.jsonc`,
          `${fileName}.json5`,
          `${fileName}.yaml`,
          `${fileName}.yml`,
          `${fileName}.toml`,
        ];

      case FileNamePattern.NodeEcosystem:
        return [
          `${fileName}.js`,
          `${fileName}.mjs`,
          `${fileName}.cjs`,
          `${fileName}.ts`,
          `${fileName}.mts`,
          `${fileName}.cts`,
          `${fileName}.json`,
          `${fileName}.jsonc`,
          `${fileName}.json5`,
          `${fileName}.yaml`,
          `${fileName}.yml`,
          `${fileName}.toml`,
        ];

      case FileNamePattern.Cosmiconfig:
        return [
          `.${fileName}rc`,
          `.${fileName}rc.json`,
          `.${fileName}rc.jsonc`,
          `.${fileName}rc.json5`,
          `.${fileName}rc.yaml`,
          `.${fileName}rc.yml`,
          `.${fileName}rc.toml`,
          `.${fileName}rc.js`,
          `.${fileName}rc.mjs`,
          `.${fileName}rc.cjs`,
          `.${fileName}rc.ts`,
          `.${fileName}rc.mts`,
          `.${fileName}rc.cts`,
          `.config/${fileName}rc`,
          `.config/${fileName}rc.json`,
          `.config/${fileName}rc.jsonc`,
          `.config/${fileName}rc.json5`,
          `.config/${fileName}rc.yaml`,
          `.config/${fileName}rc.yml`,
          `.config/${fileName}rc.toml`,
          `.config/${fileName}rc.js`,
          `.config/${fileName}rc.mjs`,
          `.config/${fileName}rc.cjs`,
          `.config/${fileName}rc.ts`,
          `.config/${fileName}rc.mts`,
          `.config/${fileName}rc.cts`,
          `${fileName}.config.json`,
          `${fileName}.config.jsonc`,
          `${fileName}.config.json5`,
          `${fileName}.config.yaml`,
          `${fileName}.config.yml`,
          `${fileName}.config.toml`,
          `${fileName}.config.js`,
          `${fileName}.config.mjs`,
          `${fileName}.config.cjs`,
          `${fileName}.config.ts`,
          `${fileName}.config.mts`,
          `${fileName}.config.cts`,
        ];

      default:
        // Check if all potential pattern cases are handled
        const exhaustiveCheck: never = pattern;
        throw new Error(`Unhandled pattern: ${exhaustiveCheck}`);
    }
  });
};

/**
 * Parses the raw file icons by applying the patterns.
 * A pattern helps to generate file names based on a key.
 *
 * @param rawFileIcons - The list of file icons without applied patterns.
 * @returns The list of file icons with applied patterns.
 */
export const parseByPattern = (
  rawFileIcons: FileIconWithPatterns
): FileIcon[] => {
  return rawFileIcons.map(({ patterns, fileNames = [], ...rest }) => ({
    ...rest,
    fileNames: patterns ? [...mapPatterns(patterns), ...fileNames] : fileNames,
  }));
};
