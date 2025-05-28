import { createSlice } from '@reduxjs/toolkit';

const initialstate = {
  modals: {
    mobileMenu: { isOpen: false },
    searchModal: { isOpen: false },
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialstate,
  reducers: {
    toggleModal(state, action) {
      const { modalName } = action.payload;
      if (state.modals[modalName as keyof typeof state.modals]) {
        state.modals[modalName as keyof typeof state.modals].isOpen = !state.modals[modalName as keyof typeof state.modals].isOpen;
      } else {
        console.warn(`Modal with name "${modalName}" does not exist.`);
      }
    },
    closeModal: (state, action) => {
      const { modalName } = action.payload;
      if (state.modals[modalName as keyof typeof state.modals]) {
        state.modals[modalName as keyof typeof state.modals].isOpen = false;
      } else {
        console.warn(`Modal with name "${modalName}" does not exist.`);
      }
    },
  },
});
export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;

export const selectModalByName = (modalName: string) => (state: any) => state.modal.modals[modalName];
