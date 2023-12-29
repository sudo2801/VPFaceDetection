import { AppDispatch, dispatch } from "@state/store";

import slice from "./slices";


const {
  actions: {
    setSearchParams,
  },
} = slice;
const setSearchParamsThunk =
  ({ filters }: { filters: any }) =>
  async (dispatch: AppDispatch) => {
    dispatch(setSearchParams({ filters }));
  };



export default {
  setSearchParamsThunk
};
