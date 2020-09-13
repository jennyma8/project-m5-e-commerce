//Once we get to this point, we should fetch multiple sets of data
//through the use of dynamic fetch functions based on this one here.

export function fetchFromAPI(endpoint) {
  return fetch(endpoint).then(res.json());
}
