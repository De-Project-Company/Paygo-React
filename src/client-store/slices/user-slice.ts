import { StateCreator } from 'zustand';
import { UserType } from '../../types/user.types';

export interface UserSessionSliceType {
  currentUser: UserType | null;
  setUser: (data: UserType) => void;
  clearUser: () => void;
}

export const userSlice: StateCreator<UserSessionSliceType> = (set) => ({
  currentUser: null,
  setUser: (data) => {
    set({ currentUser: data });
  },
  clearUser: () => {
    set({ currentUser: null });
  },
});
