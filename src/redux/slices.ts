import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DataType {
	isMenuOpen: boolean;
	isModal: boolean;
	searchTerm: string;
}

const initialState = {
	isMenuOpen: false,
	isModal: false,
	searchTerm: "",
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

		setSearchTerm: (state, action: PayloadAction<string>) => {
			state.searchTerm = action.payload;
		},
	},
});

export const { setMenuOpen, setIsModal, setSearchTerm } = globalSlice.actions;
