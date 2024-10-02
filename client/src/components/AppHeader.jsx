import React, { useEffect, useRef } from 'react'
import {
  CHeader,
  CContainer,
  CHeaderToggler,
  CHeaderNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  useColorModes,
  CForm,
  CFormInput,
  CInputGroup,
  CBadge,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilMenu,
  cilBell,
  cilList,
  cilEnvelopeOpen,
  cilSun,
  cilContrast,
  cilMoon,
  cilSearch,
} from '@coreui/icons'
import { AppHeaderDropdown } from './header'
import { useDispatch, useSelector } from 'react-redux'
import { set } from '../appSlice'

const AppHeader = () => {
  const headerRef = useRef() // Ref to access the header element for scroll effect
  const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme') // Get and manage the color mode (light, dark, auto)

  const dispatch = useDispatch() // Hook to dispatch actions to Redux store
  const sidebarShow = useSelector((state) => state.app.sidebarShow) // Get the current sidebar state from the Redux store

  useEffect(() => {
    // Add a scroll event listener to toggle shadow class on the header when scrolling
    document.addEventListener('scroll', () => {
      headerRef.current && // Check if headerRef is defined
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0) // Toggle shadow if scrolled
    })
  }, []) // Empty dependency array ensures this effect runs only once on mount

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
      {/* Sticky positioned header with margin bottom and no padding */}
      <CContainer className="border-bottom px-4" fluid>
        {/* Full-width fluid container with border at the bottom and padding-x */}
        <CHeaderToggler
          onClick={() => dispatch(set({ sidebarShow: !sidebarShow }))} // Dispatch Redux action to toggle sidebar visibility
          style={{ marginInlineStart: '-14px' }} // Inline style to adjust left margin
        >
          <CIcon icon={cilMenu} size="lg" /> {/* Menu icon for toggling sidebar */}
        </CHeaderToggler>

        {/* Search form for desktop view */}
        <CHeaderNav className="d-none d-md-flex">
          {/* Hide search form on small screens (d-none), show on medium and larger screens (d-md-flex) */}
          <CForm>
            <CInputGroup>
              {/* Input group for search form */}
              <span className="input-group-text bg-body-secondary border-0 px-1" id="search-addon">
                <CIcon icon={cilSearch} size="lg" /> {/* Search icon inside input group */}
              </span>
              {/* Search input field */}
              <CFormInput
                style={{ boxShadow: 'none' }} // Remove box shadow from input field
                className="bg-body-secondary border-0"
                placeholder="search"
                type="text"
                aria-label="Search" // Accessibility label
                aria-describedby="search-addon" // Describes the input group (search)
              />
            </CInputGroup>
          </CForm>
        </CHeaderNav>

        {/* Notification and message icons on the right side of the header */}
        <CHeaderNav className="ms-auto">
          {/* Right-aligned header navigation (ms-auto) */}
          <CNavItem>
            <CNavLink href="javascript:void(0);">
              {/* Link for notifications */}
              <span className="d-inline-block my-1 mx-2 position-relative">
                <CIcon icon={cilBell} size="lg" /> {/* Notification bell icon */}
                <CBadge
                  className="border border-light p-1" // Badge with border and padding
                  color="danger" // Red badge for notifications
                  position="top-end" // Badge positioned at the top-right of the icon
                  shape="rounded-circle" // Rounded shape for the badge
                >
                  <span className="visually-hidden"></span>{' '}
                  {/* Visually hidden for accessibility */}
                </CBadge>
              </span>
            </CNavLink>
          </CNavItem>

          {/* List icon for additional notifications */}
          <CNavItem>
            <CNavLink href="javascript:void(0);">
              <span className="d-inline-block my-1 mx-2 position-relative">
                <CIcon icon={cilList} size="lg" /> {/* List icon for notifications */}
                <CBadge
                  className="border border-light p-1"
                  color="danger"
                  position="top-end"
                  shape="rounded-circle"
                >
                  <span className="visually-hidden"></span> {/* Accessible label */}
                </CBadge>
              </span>
            </CNavLink>
          </CNavItem>

          {/* Envelope icon for unread messages */}
          <CNavItem>
            <CNavLink href="javascript:void(0);">
              <span className="d-inline-block my-1 mx-2 position-relative">
                <CIcon icon={cilEnvelopeOpen} size="lg" /> {/* Envelope icon for unread messages */}
                <CBadge
                  className="border border-light p-1"
                  color="danger"
                  position="top-end"
                  shape="rounded-circle"
                >
                  <span className="visually-hidden"></span> {/* Accessible label */}
                </CBadge>
              </span>
            </CNavLink>
          </CNavItem>
        </CHeaderNav>

        {/* Color mode toggle (light, dark, auto) and user profile dropdown */}
        <CHeaderNav>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 tex-body text-opacity-75"></div> {/* Vertical divider */}
          </li>
          {/* Dropdown for switching color modes */}
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {/* Show the appropriate icon based on the current color mode */}
              {colorMode === 'dark' ? (
                <CIcon icon={cilMoon} size="lg" /> // Moon icon for dark mode
              ) : colorMode === 'auto' ? (
                <CIcon icon={cilContrast} size="lg" /> // Contrast icon for auto mode
              ) : (
                <CIcon icon={cilSun} size="lg" /> // Sun icon for light mode
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={colorMode === 'light'} // Highlight if active
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('light')} // Set light mode on click
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light {/* Sun icon with label */}
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'dark'} // Highlight if active
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('dark')} // Set dark mode on click
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark{' '}
                {/* Moon icon with label */}
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'auto'} // Highlight if active
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('auto')} // Set auto mode on click
              >
                <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto{' '}
                {/* Auto mode icon with label */}
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          {/* Divider between sections */}
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 tex-body text-opacity-75"></div>
          </li>
          {/* User profile dropdown */}
          <AppHeaderDropdown /> {/* Custom component for user profile and settings */}
        </CHeaderNav>
      </CContainer>

      {/* Empty container for additional elements or spacing */}
      <CContainer className="px-4"></CContainer>
    </CHeader>
  )
}

export default React.memo(AppHeader) // Use React.memo to prevent unnecessary re-renders of the header
