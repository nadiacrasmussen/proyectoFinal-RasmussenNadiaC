import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscriptions from './inscriptions.reduce';

export const selectInscriptionsState = createFeatureSelector<fromInscriptions.State>(
  fromInscriptions.inscriptionsFeatureKey
);


export const selectInscription = createSelector(
  selectInscriptionsState,
  (state) => state.inscriptions
);

export const selectInscriptionIsLoading = createSelector(
  selectInscriptionsState,
  (state) => state.loading
)

export const selectInscriptionsSubscribers = createSelector(
  selectInscriptionsState,
  (state) => state.subscribers
)
