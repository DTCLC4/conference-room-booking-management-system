// Import 'createRoot' from React's new rendering API (React 18+)
// This is used to render the root of the React app into the DOM
import { createRoot } from 'react-dom/client'

// Import 'Provider' from React-Redux to make the Redux store available to the entire app
import { Provider } from 'react-redux'

// Import 'core-js' for polyfills to ensure compatibility with older browsers
import 'core-js'

// Import the main App component that serves as the entry point of your React application
import App from './App'

// Import the Redux store that was configured in 'store.ts'
import store from './store'

// Ensure the type of the root element is not null
const rootElement = document.getElementById('root') as HTMLElement;

/**
 * Render the React app into the DOM by selecting the 'root' element
 * Wrap the App component with the 'Provider' component to provide the Redux store
 */
createRoot(rootElement).render(
  <Provider store={store}>
    {/* The Redux store is passed to the Provider to make it available throughout the app */}
    <App /> {/* Main App component, where the rest of the app is structured */}
  </Provider>,
)
