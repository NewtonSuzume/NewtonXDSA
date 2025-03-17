export type ExcludeField<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

export type ExcludeFields<T, K extends (keyof T)[]> = {
  [P in keyof T as P extends K[number] ? never : P]: T[P];
};

export type PartialNull<T> = {
  [P in keyof T]: T[P] | null;
};