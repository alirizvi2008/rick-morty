import { createAction } from "@reduxjs/toolkit";
import { Episode } from '../types/Episode';

export const error = createAction<boolean>("error");
export const success = createAction<Episode[]>("success");