
    export type RemoteKeys = 'fed_provider/Button';
    type PackageType<T> = T extends 'fed_provider/Button' ? typeof import('fed_provider/Button') :any;