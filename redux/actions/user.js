import * as t from '../types';

export const setUser = (user=null)=> ( {type:t.SET_USER,payload:user} )