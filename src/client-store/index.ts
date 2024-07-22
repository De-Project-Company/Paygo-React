import { create } from 'zustand';

import { UserSessionSliceType, userSlice } from './slices/user-slice';

type StoreTypes = UserSessionSliceType;

export const useStore = create<StoreTypes>((...a) => ({
  ...userSlice(...a),
}));
