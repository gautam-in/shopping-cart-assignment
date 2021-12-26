import { createSelector } from "reselect";

const selectAvatars = state => state.avatars;

export const selectAvatarsSections = createSelector(
  [selectAvatars],
  avatars => avatars.sections
);
