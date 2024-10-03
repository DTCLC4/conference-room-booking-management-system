import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass, cilArrowLeft } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {
  const navigate = useNavigate() // Hook to programmatically navigate to different routes

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      {/* Outer container with a tertiary background, minimum height of the viewport, and flexbox for alignment */}
      <CContainer>
        <CRow className="justify-content-center">
          {' '}
          {/* Centers the row's content horizontally */}
          <CCol md={6}>
            {' '}
            {/* Column occupies half the width on medium and larger screens */}
            <div className="clearfix">
              {' '}
              {/* Clears floating elements within the div */}
              <h1 className="float-start display-3 me-4">404</h1>{' '}
              {/* Displays the error code, floated left with a margin */}
              <h4 className="pt-3">Oops! You {"'"}re lost.</h4>{' '}
              {/* Message indicating the user is lost */}
              <p className="text-body-secondary float-start">
                {' '}
                {/* Secondary text styled with muted color, floated left */}
                The page you are looking for was not found.
              </p>
            </div>
            {/* Input group for search functionality */}
            <CInputGroup className="input-prepend">
              {' '}
              {/* Groups input and icon for styling */}
              <CInputGroupText>
                <CIcon icon={cilMagnifyingGlass} />{' '}
                {/* Search icon displayed inside the input group */}
              </CInputGroupText>
              <CFormInput
                style={{
                  boxShadow: 'none', // Removes box shadow from the input for a cleaner look
                }}
                type="text"
                placeholder="What are you looking for?" // Placeholder text within the input field
              />
              <CButton color="primary">Search</CButton>{' '}
              {/* Primary color button for search action */}
            </CInputGroup>
            {/* Back to Home Button */}
            <CRow className="justify-content-center mt-3">
              {' '}
              {/* Centers the row and adds margin on top for spacing */}
              <CButton
                color="primary" // Sets the button to primary color for emphasis
                className="w-auto d-flex align-items-center" // Flexbox properties for button layout and spacing
                onClick={() => navigate('/')} // Navigate to home route on button click
              >
                <CIcon icon={cilArrowLeft} className="me-2" />{' '}
                {/* Left arrow icon with right margin for spacing */}
                Back to Home {/* Text displayed on the button */}
              </CButton>
            </CRow>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404 // Exporting the Page404 component for use in other parts of the application
