import { createSlice } from "@reduxjs/toolkit";

export interface DataType {
	isMenuOpen: boolean;
	isModal: boolean;
}

const initialState = {
	isMenuOpen: false,
	isModal: false,
} as DataType;

export const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setMenuOpen: (state) => {
			state.isMenuOpen = !state.isMenuOpen;
		},
		setIsModal: (state) => {
			state.isModal = !state.isModal;
		},
	},
});

export const { setMenuOpen, setIsModal } = globalSlice.actions;
