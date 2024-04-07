import { LucodearFolderIcon } from '../../model';
import { lucodear } from '../utils';

export const folders = lucodear('misc', [
  {
    name: 'aggregate',
    folderNames: ['aggregate', 'aggregates', 'aggs', 'agg'],
  },
  {
    name: 'azure',
    folderNames: ['azure', 'az'],
  },
  {
    name: 'bin',
    folderNames: ['bin', 'binary', 'binaries', 'bins'],
  },
  {
    name: 'calendar',
    folderNames: [
      'calendar',
      'calendars',
      'agenda',
      'schedule',
      'schedules',
      'sched',
    ],
  },
  {
    name: 'binance',
    looseFolderIcon: true,
  },
  {
    name: 'cocos-cap',
    looseFolderIcon: true,
  },
  {
    name: 'controller',
    folderNames: ['controller', 'controllers', 'ctrl'],
  },
  {
    name: 'conversion',
    folderNames: ['conversion', 'convert', 'conversions'],
  },
  {
    name: 'subcommand',
    folderNames: [
      'subcommand',
      'subcommands',
      'subcmd',
      'subcmds',
      'sub-cmd',
      'sub-cmds',
    ],
    light: true,
  },
  {
    name: 'subprogram',
    folderNames: [
      'subprogram',
      'subprograms',
      'subprog',
      'subprogs',
      'sub-prog',
      'sub-progs',
    ],
  },
  {
    name: 'decorator',
    folderNames: ['decorator', 'decorators'],
  },
  {
    name: 'di',
    folderNames: [
      'di',
      'ioc',
      'injection',
      'injector',
      'injections',
      'container',
    ],
  },
  {
    name: 'dto',
    folderNames: ['dto', 'dtos'],
  },
  {
    name: 'exceptions',
    folderNames: [
      'exceptions',
      'exception',
      'errors',
      'error',
      'faults',
      'fault',
      'failures',
      'failure',
    ],
  },
  {
    name: 'factory',
    folderNames: ['factory', 'factories'],
  },
  {
    name: 'grpc',
    folderNames: [
      'grpc',
      'rpc',
      'gRPC',
      'gRPCs',
      'grpc-api',
      'grpc-server',
      'grpc_api',
      'grpc_server',
    ],
  },
  {
    name: 'help',
    folderNames: ['help', 'question', 'questions', 'faq', 'faqs'],
  },
  {
    name: 'idea',
    folderNames: ['idea', 'ideas', '.idea', '.ideas', '💡'],
  },
  {
    name: 'metadata',
    folderNames: ['metadata', 'meta', 'data', 'tags', 'tag'],
  },
  {
    name: 'middleware',
    folderNames: ['middleware', 'middlewares', 'mdw'],
  },
  {
    name: 'migration',
    folderNames: ['migration', 'migrations', 'mig'],
  },
  {
    name: 'model',
    folderNames: ['model', 'models', 'entities', 'entity'],
  },
  {
    name: 'module',
    folderNames: ['module', 'modules', 'mod', 'domain', 'domains'],
  },
  {
    name: 'oracle',
    folderNames: ['oracle', 'osb', 'soa'],
  },
  {
    name: 'provider',
    folderNames: [
      'provider',
      'providers',
      'infra',
      'infrastructure',
      'infrastructures',
    ],
  },
  {
    name: 'repo',
    folderNames: ['repo', 'repos', 'repository', 'repositories', 'branches'],
  },
  {
    name: 'result',
    folderNames: ['result', 'results', 'res'],
  },
  {
    name: 'runtime',
    folderNames: ['runtime', 'runtimes', 'rt', 'realtime', 'real-time'],
  },
  {
    name: 'service',
    folderNames: ['service', 'services', 'srv', 'svc'],
  },
  {
    name: 'socket',
    folderNames: ['socket', 'sockets', 'gateway', 'gateways'],
  },
  {
    name: 'tasks',
    folderNames: ['tasks', 'task', 'todo', 'todos'],
  },
  {
    name: 'transformation',
    folderNames: [
      'transformations',
      'transformation',
      'transformer',
      'transformers',
      'trx',
      'convert',
      'conversion',
    ],
  },

  {
    name: 'ui',
    folderNames: ['ui', 'ux', 'gui', 'front', 'frontend', 'front-end'],
  },
  {
    name: 'tui',
    folderNames: ['tui', 'terminal-ui', 'terminalui', 'terminal-ui'],
  },
  {
    name: 'version',
    folderNames: ['version', 'versions', 'vx'],
  },
  {
    name: 'workflow',
    folderNames: ['workflow', 'workflows', 'flow', 'flows'],
  },
  {
    name: 'yahoo',
    looseFolderIcon: true,
  },
] satisfies LucodearFolderIcon[]);
