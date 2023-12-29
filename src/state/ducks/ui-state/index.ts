import slice from "./slices";
import thunks from "./thunks";
import selector from "./selector";
export default {
  reducer: slice.reducer,
  ...selector,
  ...slice.actions,
  ...thunks,
};
