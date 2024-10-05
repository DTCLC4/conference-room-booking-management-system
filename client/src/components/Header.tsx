import { cilBell, cilContrast, cilEnvelopeOpen, cilList, cilMenu, cilMoon, cilSearch, cilSun } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CBadge, CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CForm, CFormInput, CHeader, CHeaderNav, CHeaderToggler, CInputGroup, CNavItem, CNavLink, useColorModes } from '@coreui/react'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { set } from '../appSlice'
import { HeaderDropdown } from './header'

const Header: React.FC = () => {

  const headerRef = useRef<HTMLDivElement>(null)

  const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')

  const dispatch = useDispatch();

  const sidebarShow = useSelector((state: RootState) => state.app.sidebarShow)

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0);
      }
    };

    document.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    < CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
      {/* Sticky positioned header with margin bottom and no padding */}
      < CContainer className="border-bottom px-4" fluid >
        {/* Full-width fluid container with border at the bottom and padding-x */}
        <CHeaderToggler
          onClick={() => dispatch(set({ sidebarShow: !sidebarShow }))}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" /> {/* Menu icon for toggling sidebar */}
        </CHeaderToggler >

        {/* Search form for desktop view */}
        < CHeaderNav className="d-none d-md-flex" >
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
          </CForm >
        </CHeaderNav >

        {/* Notification and message icons on the right side of the header */}
        < CHeaderNav className="ms-auto" >
          {/* Right-aligned header navigation (ms-auto) */}
          <CNavItem>
            <CNavLink href="#">
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
          </CNavItem >

          {/* List icon for additional notifications */}
          <CNavItem>
            <CNavLink href="#">
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
          </CNavItem >

          {/* Envelope icon for unread messages */}
          <CNavItem>
            <CNavLink href="#">
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
          </CNavItem >
        </CHeaderNav >

        {/* Color mode toggle (light, dark, auto) and user profile dropdown */}
        <CHeaderNav>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 tex-body text-opacity-75"></div> {/* Vertical divider */}
          </li>
          {/* Dropdown for switching color modes */}
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
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
          <HeaderDropdown />
        </CHeaderNav >
      </CContainer >

      {/* Empty container for additional elements or spacing */}
      <CContainer className="px-4" ></CContainer >
    </CHeader >

  )
}
export default Header
