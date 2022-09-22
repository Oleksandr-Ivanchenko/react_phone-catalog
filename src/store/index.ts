import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState } from '../react-app-env';
import {
  SetFavorites,
  SetSelectedCart,
  ActionType,
  DelFavorites,
  DelFromCart,
  DelQuantity,
  SetQuantity,
  SetQuery,
} from './actions';

const initialState: RootState = {
  favorits: [],
  selectedcart: [],
  query: '',
};

const rootReducer = (
  state = initialState,
  action:
  SetFavorites
  | SetSelectedCart
  | DelFavorites
  | DelFromCart
  | DelQuantity
  | SetQuantity
  | SetQuery,
) => {
  switch (action.type) {
    case ActionType.SET_FAVORITES:
      return {
        ...state,
        favorits: [...state.favorits, action.payload],
      };

    case ActionType.SET_SELECTED_CART:
      return {
        ...state,
        selectedcart: [...state.selectedcart, action.payload],
      };

    case ActionType.DEL_FAVORITES:
      return {
        ...state,
        favorits: state.favorits.filter(item => item !== action.payload),
      };

    case ActionType.DEL_FROM_CART:
      return {
        ...state,
        selectedcart: state.selectedcart
          .filter(item => item.id !== action.payload.id),
      };

    case ActionType.SET_QUANTITY:
      return {
        ...state,
        selectedcart: [...(state.selectedcart
          .filter(item => item.id !== action.payload.id)), action.payload],
      };

    case ActionType.DEL_QUANTITY:
      return {
        ...state,
        selectedcart: [...(state.selectedcart
          .filter(item => item.id !== action.payload.id)), action.payload],
      };

    case ActionType.SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
