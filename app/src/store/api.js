import { createAction } from '@reduxjs/toolkit';

export const apiCallBegan = createAction("api/CallBegan");
export const apiCallFailed = createAction("api/CallFailed");
export const apiCallSuccess = createAction("api/CallSuccess");