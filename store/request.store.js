import { defineStore } from "pinia";
export const useRequestStore = defineStore({
  id: "request",
  state: () => ({
    requests: {},
    searchQuery: "",
    searchRes: [],
  }),
  actions: {
    addRequest(requestId, controller) {
      this.requests[requestId] = controller;
    },
    abortRequest(requestId) {
      this.requests[requestId]?.abort();
      delete this.requests[requestId];
    },
    requestStatus(requestId) {
      return this.requests[requestId] ? "Active" : "Inactive";
    },
  },
});
