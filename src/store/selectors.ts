import { RootState } from '../react-app-env';

export const getFavoritesSelector = (state: RootState) => state.favorits;
export const getSelectedCartSelector = (state: RootState) => state.selectedcart;
export const getQuery = (state: RootState) => state.query;
