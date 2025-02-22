import { create } from 'zustand';

export const useSidebar = create((set) => ({
  isOpen: false,

  openSidebar: () => {
    set({ isOpen: true });
  },

  closeSidebar: () => {
    set({ isOpen: false });
  },

  toggleSidebar: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },
}));
