import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BannerState } from '../../models/banner-state.model';

export const selectBannerState = createFeatureSelector<BannerState>('banner');
