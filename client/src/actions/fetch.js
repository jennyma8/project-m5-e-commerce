export const requestCompanies = () => ({
  type: "REQUEST_COMPANIES_DATA",
});

export const receiveCompanies = (companies) => ({
  type: "RECEIVE_COMPANIES_DATA",
  companies,
});

export const receiveCompaniesError = () => ({
  type: "REQUEST_COMPANIES_DATA_ERROR",
});

export const requestItems = () => ({
  type: "REQUEST_ITEMS_DATA",
});

export const receiveItems = (items) => ({
  type: "RECEIVE_ITEMS_DATA",
  items,
});

export const receiveItemsError = () => ({
  type: "REQUEST_ITEMS_DATA_ERROR",
});
