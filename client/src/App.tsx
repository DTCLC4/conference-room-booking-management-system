import { CSpinner, useColorModes } from '@coreui/react'
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Page404 from './pages/Page404'
import './scss/style.scss'
import { useSelector } from 'react-redux'
import { RootState } from './store'; // Import the root state type from the store

const App: React.FC = () => {
  // Destructure the color mode functions from CoreUI's useColorModes hook
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')

  // Use Redux's useSelector to access the stored theme from the Redux store
  const storedTheme = useSelector((state: RootState) => state.app.theme)

  // useEffect hook to handle color mode based on URL query parameter or stored theme
  React.useEffect(() => {
    // Extract URL parameters
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])

    // Check for a 'theme' query parameter and sanitize it using regex
    const theme = urlParams.get('theme')?.match(/^[A-Za-z0-9\s]+/)?.[0]

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
    <BrowserRouter>
      <Suspense
        fallback={
          <div className='pt-3 text-center'>
            <CSpinner color='primary' variant='grow' />
          </div>
        }
      >
        <Routes>
          <Route path='/' element={<DefaultLayout />} ></Route>
          <Route path='*' element={<Page404 />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
