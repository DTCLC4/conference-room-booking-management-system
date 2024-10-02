import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

// Importing avatar image
import avatar8 from '../../assets/avatars/8.jpg'

// Importing icons from CoreUI
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'

// Defining the AppHeaderDropdown functional component
const AppHeaderDropdown = () => {
  return (
    // Main dropdown component acting as a navigation item
    <CDropdown variant="nav-item">
      {/* Toggle button for the dropdown, displaying an avatar */}
      <CDropdownToggle
        placement="bottom-end"
        className="py-0 pe-0" // paddingTop: '0px', paddingRight: '0px'
        caret={false}
      >
        <CAvatar src={avatar8} size="md" /> {/* Avatar with medium size */}
      </CDropdownToggle>

      {/* Dropdown menu with items */}
      <CDropdownMenu className="pt-0" placement="bottom-end">
        {/* Header for the Account section */}
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">
          {/*backgroundColor: '#f8f9fa', fontWeight: '600', marginBottom: '8px'  */}
          Account
        </CDropdownHeader>

        {/* Dropdown item for updates, with a bell icon and badge */}
        <CDropdownItem href="javascript:void(0);">
          <CIcon icon={cilBell} className="me-2" /> {/* marginRight: '8px' */}
          Updates
          <CBadge color="info" className="ms-2">
            {' '}
            {/* marginLeft: '8px' */}
            42
          </CBadge>{' '}
          {/* Notification badge */}
        </CDropdownItem>

        {/* Dropdown item for messages, with envelope icon and badge */}
        <CDropdownItem href="javascript:void(0);">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Messages
          <CBadge color="success" className="ms-2">
            42
          </CBadge>{' '}
          {/* Notification badge */}
        </CDropdownItem>

        {/* Dropdown item for tasks, with task icon and badge */}
        <CDropdownItem href="javascript:void(0);">
          <CIcon icon={cilTask} className="me-2" />
          Tasks
          <CBadge color="danger" className="ms-2">
            42
          </CBadge>{' '}
          {/* Notification badge */}
        </CDropdownItem>

        {/* Dropdown item for comments, with comment icon and badge */}
        <CDropdownItem href="javascript:void(0);">
          <CIcon icon={cilCommentSquare} className="me-2" />
          Comments
          <CBadge color="warning" className="ms-2">
            42
          </CBadge>{' '}
          {/* Notification badge */}
        </CDropdownItem>

        {/* Header for the Settings section */}
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Settings</CDropdownHeader>

        {/* Dropdown item for profile settings, with user icon */}
        <CDropdownItem href="javascript:void(0);">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>

        {/* Dropdown item for general settings, with settings icon */}
        <CDropdownItem href="javascript:void(0);">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>

        {/* Dropdown item for payments, with credit card icon and badge */}
        <CDropdownItem href="javascript:void(0);">
          <CIcon icon={cilCreditCard} className="me-2" />
          Payments
          <CBadge color="secondary" className="ms-2">
            42
          </CBadge>{' '}
          {/* Notification badge */}
        </CDropdownItem>

        {/* Dropdown item for projects, with file icon and badge */}
        <CDropdownItem href="javascript:void(0);">
          <CIcon icon={cilFile} className="me-2" />
          Projects
          <CBadge color="primary" className="ms-2">
            42
          </CBadge>{' '}
          {/* Notification badge */}
        </CDropdownItem>

        {/* Divider line between sections */}
        <CDropdownDivider />

        {/* Dropdown item for locking the account, with lock icon */}
        <CDropdownItem href="logout">
          <CIcon icon={cilLockLocked} className="me-2" />
          Lock Account
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

// Exporting the component for use in other parts of the app
export default AppHeaderDropdown
