// import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
// import { rootReducer } from "./reducers";
// import CartSlice from "./CartSlice";

// export const Store = configureStore({
//   reducer: {
//     CartSlice,
//   },
// });

// export const Store = createStore(rootReducer);

import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { rootReducer } from "./reducers";
import CartSlice from "./CartSlice";

// Use configureStore from redux toolkit
const reduxToolkitStore = configureStore({
  reducer: {
    CartSlice,
  },
});

// Access the Redux store instance from redux toolkit
const mergedStore = reduxToolkitStore.getState();

// Use createStore from redux with your existing rootReducer
const legacyStore = createStore(rootReducer);

// Merge the state from the Redux toolkit store into the createStore store
legacyStore.dispatch({
  type: "MERGE_STATE",
  payload: reduxToolkitStore.getState(),
});

// Now, use mergedStore as your store in other files
export const Store = legacyStore;
