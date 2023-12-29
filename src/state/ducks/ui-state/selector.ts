import { createSelector, Selector } from "@reduxjs/toolkit";
import { RootState } from "@state/store";

const searchFiltersState: Selector = createSelector(
  (state: RootState) => state.uiState.uiState.filters,
  (filters) => filters
);

const getStageState: Selector = createSelector(
  (state: RootState) => state.uiState.uiState.stage,
  (stage) => stage
);
const getSparePart: Selector = createSelector(
  (state: RootState) => state.uiState.uiState.sparePart,
  (sparePart) => sparePart
);
const getItemMasterPart: Selector = createSelector(
  (state: RootState) => state.uiState.uiState.itemMasterPart,
  (itemMasterPart) => itemMasterPart
);
const getCategory: Selector = createSelector(
  (state: RootState) => state.uiState.uiState.category,
  (category) => category
);
const getMmvState: Selector = createSelector(
  (state: RootState) => state.uiState.uiState.mmvState,
  (mmvState) => mmvState
);

const getSpacDbCategory: Selector = createSelector(
  (state: RootState) => state.uiState.uiState.specDbCategory,
  (specDbCategory) => specDbCategory
);

export default {
  searchFiltersState,
  getStageState,
  getSparePart,
  getItemMasterPart,
  getCategory,
  getMmvState,
  getSpacDbCategory
};
