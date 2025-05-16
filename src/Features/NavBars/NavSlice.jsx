import { createSlice } from "@reduxjs/toolkit";

import { LocalData } from "../../Local Data/NavData";

const initialState = {
  title: "",
  isLinkOpen: false,
  isModalOpen: false,
  isNavLinksClicked: false,
};

const NavSlice = createSlice({
  name: "NavBar",
  initialState,
  reducers: {
    ChangeTitleHeader: (state, action) => {
      state.isLinkOpen = action.payload;

      state.isNavLinksClicked = false;
    },
    OpenModal: (state) => {
      state.isModalOpen = true;
    },
    CloseModal: (state) => {
      state.isModalOpen = false;
    },
    OpenSubNavLink: (state, action) => {
      state.isNavLinksClicked = true;
      state.title = action.payload;
    },
  },
});

export const { ChangeTitleHeader, OpenModal, CloseModal, OpenSubNavLink } =
  NavSlice.actions;

export default NavSlice.reducer;
