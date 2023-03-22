import { configureStore } from "@reduxjs/toolkit"
import { api } from "@/store/api"

export default configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
