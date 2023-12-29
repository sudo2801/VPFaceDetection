import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  uiState: {},
};
const slice = createSlice({
  name: "uiState",
  initialState,
  reducers: {
    setSearchParams: (state, { payload }) => {
      state.uiState.filters = payload.filters;
    },
  },
});
export default slice;
