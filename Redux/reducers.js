// reducers.js
const initialState = {
  favorites: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const productId = action.payload;
      const isFavorite = state.favorites.includes(productId);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter((id) => id !== productId)
          : [...state.favorites, productId],
      };
    default:
      return state;
  }
};
