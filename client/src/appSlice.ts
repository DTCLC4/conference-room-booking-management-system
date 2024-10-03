// Import the 'createSlice' function from Redux Toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Define the shape of the initial state
 * 'sidebarShow' determines whether the sidebar is visible
 * 'theme' determines the current theme ('light' or 'dark')
 */
interface AppState {
	sidebarShow: boolean;
  sidebarUnFoldable: boolean;
	theme: 'light' | 'dark' | 'auto'; // Restrict theme to specific string values
}

// Define the initial state of the application
const initialState: AppState = {
	sidebarShow: true,
  sidebarUnFoldable: false,
	theme: 'auto',
};

/**
 * Create a slice for the app's state using 'createSlice'
 * A slice combines the reducers and actions in one place for easier state management
 */
const appSlice = createSlice({
	// Name of the slice, used as the key in the Redux store
	name: 'app',
	// Set the initial state of the slice
	initialState,
	reducers: {
		// Define the reducer 'set' to update the state
		// PayloadAction is typed to expect a partial AppState (to allow partial updates)
		set: (state, action: PayloadAction<Partial<AppState>>) => {
			// Spread the current state and the action's payload to merge the new values
			return { ...state, ...action.payload };
		},
	},
});

// Export the 'set' action so that it can be used in other parts of the application
export const { set } = appSlice.actions;

// Export the reducer to be included in the Redux store
export default appSlice.reducer;
