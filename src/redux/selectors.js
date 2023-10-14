export const selectAuth = state => state.auth;

export const selectAllObjects = state => state.cars.allItems;
export const selectObjectsPerPage = state => state.cars.itemsPerPage; 
export const selectObjectById = state => state.cars.itemById;
export const selectisLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

export const selectFavoriteObjects = state => state.favorite.favoriteObjects;

export const selectFilterLocation = state => state.filter.filterLocation;
export const selectInvestmentValue = state => state.filter.investmentValue;
export const selectSharePrice = state => state.filter.sharePrice;
export const selectYield = state => state.filter.yield;