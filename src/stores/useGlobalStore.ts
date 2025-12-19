'use client';

import { create } from 'zustand';

/**
 * 전역 상태 타입
 */
interface GlobalState {
  isSidebarOpen: boolean;
  theme: 'light' | 'dark';
}

/**
 * 전역 액션 타입
 */
interface GlobalActions {
  toggleSidebar: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

/**
 * 전역 상태 관리 Zustand Store
 */
export const useGlobalStore = create<GlobalState & GlobalActions>((set) => ({
  isSidebarOpen: false,
  theme: 'light',

  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

  setSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),

  setTheme: (theme) => set({ theme }),
}));
