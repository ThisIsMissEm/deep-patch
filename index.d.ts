type PatchObjectType = {
  [key in string | number]: any;
};

// Set a mixed value to path.
interface PatchOperationSet {
  $set: any | PatchObjectType;
}
// Push value to Array in path.
interface PatchOperationPush {
  $push: typeof Array.prototype.push;
}
// Unshift value to Array in path.
interface PatchOperationUnshift {
  $unshift: typeof Array.prototype.unshift;
}
// Runs value as filter Function to Array in path.
interface PatchOperationFilter {
  $filter: typeof Array.prototype.filter;
}

// Runs value as map Function to Array in path.
interface PatchOperationMap {
  $map: typeof Array.prototype.map;
}

// Runs value as Function to any value in path. Input value in same path is provided as first argument.
interface PatchOperationApply {
  $apply: PatchOperationApplyFn;
}

interface PatchOperationApplyFn {
  (source: any): any;
}

// Merges value into path Object.
interface PatchOperationMerge {
  $merge: PatchObjectType;
}

type PatchOperation =
  | PatchOperationSet
  | PatchOperationPush
  | PatchOperationUnshift
  | PatchOperationFilter
  | PatchOperationMap
  | PatchOperationApply
  | PatchOperationMerge;

export type Patch = {
  [key in string | number]: Patch | PatchOperation;
};

export type Patches = Patch[];

declare function patch<T extends object>(input: T, patches: Patches): T;
export default patch;
