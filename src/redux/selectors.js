export const selectAuth = state => state.auth;

export const selectAllObjects = state => state.objects.allItems;
export const selectObjectsPerPage = state => state.objects.itemsPerPage; 
export const selectObjectById = state => state.objects.itemById;
export const selectisLoading = state => state.objects.isLoading;
export const selectError = state => state.objects.error;

export const selectFavoriteObjects = state => state.favorite.favoriteObjects;

export const selectFilterLocation = state => state.filter.filterLocation;
export const selectInvestmentValue = state => state.filter.investmentValue;
export const selectSharePrice = state => state.filter.sharePrice;
export const selectYield = state => state.filter.yield;