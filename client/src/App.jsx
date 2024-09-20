// Import necessary dependencies and hooks from React, React-Redux, and React-Route
import React, { useEffect, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Import CoreUI components like spinner and color mode hooks
import { CSpinner, useColorModes } from '@coreui/react'

//Import custom styles (SCSS)
import './scss/style.scss'

// Lazy load the DefaultLayout component to improve performance by loading it only when needed
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

const Page404 = React.lazy(() => import('./page/Page404'))

// The main App component that handles routing and theme management
function App() {
  // Destructure the color mode functions from CoreUI's useColorModes hook
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template')

  // Use Redux's useSelector to access the stored theme from the Redux store
  const storedTheme = useSelector((state) => state.theme)

  // useEffect hook to handle color mode based on URL query parameter or stored theme
  useEffect(() => {
    // Extract URL parameters
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])

    // Check for a 'theme' query parameter and sanitize it using regex
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]

    // If a theme is found in the URL parameters, set the color mode to that theme
    if (theme) {
      setColorMode(theme)
    }

    // If no color mode is set, apply the theme from the Redux store
    if (!isColorModeSet()) {
      setColorMode(storedTheme)
    }
  }, [storedTheme, isColorModeSet, setColorMode]) //Re-run the effect when  storedTheme, isColorModeSet, or setColorMode changes
  return (
    // BrowserRouter component wraps the entire app to enable routing
    <BrowserRouter>
      {/* Suspense is used to handle lazy-loaded components; it display a fallback while the component is being loaded */}
      <Suspense
        // Fallback UI: Spinner to show a loading indicator while waiting for lazy components to load
        fallback={
          /**
           * style
           * padding-top: '16px',
           * textAlign: 'center'
           */
          <div className="pt-3 text-center">
            {/* color: '#0d6efd' */}
            {/* variant: it's a CoreUI prop */}
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        {/* Define routes for the app using React Router's Routes and Route components */}
        <Routes>
          {/* DefaultLayout is lazily loaded and displayed when navigating to the root ("/") */}
          <Route path="/" name="Home" element={<DefaultLayout />} />

          {/* Catch-all route for any path that doesn't match, showing the Page404 component */}
          <Route path="*" name="Page 404" element={<Page404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

// Export the App component as the default export to be used in other parts of the application
export default App
