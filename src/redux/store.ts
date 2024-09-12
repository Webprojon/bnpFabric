import { configureStore } from "@reduxjs/toolkit";
import { globalSlice } from "./slices";

export const store = configureStore({
	reducer: {
		user: globalSlice.reducer,
	},
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
