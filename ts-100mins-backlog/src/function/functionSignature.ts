/*
 * Function signatures
 * ([arg: type, ...]) => type
 */
// Simple function signature
export type func = (x: number) => number;

// Higher-order function signature
export type hoFunc = (callback: func) => number;

// Higher-order function signature (return function)
export type hoFuncRetFunc = (callback: func) => func;
