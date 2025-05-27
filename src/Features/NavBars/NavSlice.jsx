import { createSlice } from "@reduxjs/toolkit";

import { LocalData } from "../../Local Data/NavData";

const initialState = {
  title: "",
  location: {},
  navHeight: 0,
  isLinkOpen: false,
  isModalOpen: false,
  isNavLinksClicked: false,
  isDesktopModalOpen: false,
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
    OpenDesktopModal: (state) => {
      state.isDesktopModalOpen = true;
    },
    CloseDesktopModal: (state) => {
      state.isDesktopModalOpen = false;
    },
    setNavHeight: (state, action) => {
      state.navHeight = action.payload;
    },
    OpenSubNavLink: (state, action) => {
      state.isNavLinksClicked = true;
      state.title = action.payload;
    },
    OpenDesktopNav: (state, action) => {
      state.title = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const {
  ChangeTitleHeader,
  OpenModal,
  CloseModal,
  OpenSubNavLink,
  setLocation,
  OpenDesktopNav,
  OpenDesktopModal,
  CloseDesktopModal,
  setNavHeight,
} = NavSlice.actions;

export default NavSlice.reducer;
