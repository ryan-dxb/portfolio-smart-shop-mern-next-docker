import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface SidebarState {
  openTab: string;
}

const initialState: SidebarState = {
  openTab: "Chats",
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setOpenTab: (state: SidebarState, action: { payload: string }) => {
      state.openTab = action.payload;
    },
  },
});

export const selectOpenTab = (state: RootState) => state.sidebar.openTab;
export const { setOpenTab } = sidebarSlice.actions;

export default sidebarSlice.reducer;
