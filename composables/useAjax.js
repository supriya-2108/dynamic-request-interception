import { useRequestStore } from "../store/request.store";
let controller;
let signal;
let request = {};
let timerId;
const debounceSearch = (searchQuery) => {
  clearTimeout(timerId);
  timerId = setTimeout(() => fetchData(searchQuery), 100);
};
const fetchData = (searchQuery) => {
  const store = useRequestStore();
  try {
    const response = fetch(`/api/request?search=${searchQuery}`, { signal })
      .then((data) => data.json())
      .then((json) => (store.searchRes = json.res));
    return response;
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request aborted", signal.reason);
    } else {
      console.error("Error making API call:", error);
    }
  }
};
export const useAjax = (searchQuery, overwatch = false) => {
  if (controller && overwatch) {
    controller.abort();
  }
  controller = new AbortController();
  signal = controller.signal;
  request = controller;
  debounceSearch(searchQuery);
};
