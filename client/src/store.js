// Import 'configureStore' from Redux Toolkit to create the Redux store
import { configureStore } from '@reduxjs/toolkit'

// Import the reducer for the app slice (created in appSlice.js)
import appReducer from './appSlice'

/**
 * Configure the Redux store
 * The 'configureStore' function automatically sets up the Redux store with good defaults like the Redux DevTools extension and middleware (e.g, thunk for async actions)
 */
const store = configureStore({
  // The 'reducer' option allows you to define the top-level slices of the state
  // Here, we're assigning the 'app' slice to be managed by 'appReducer'
  reducer: {
    // The app slice's state will be managed by appReducer
    app: appReducer,
  },
})

// Export the store to be used in the app's root component, typically within the Redux <Provider> component
export default store
