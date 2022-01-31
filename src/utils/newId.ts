/*
 *  Simple module to create unique ids for usage as keys when rendering collections witch React.
 *  Not very best practice but works for demos.
 */

let id = 0;
let tempId = -999;

export const getNewId = () => ++id;

export const getNewTempId = () => --tempId;
