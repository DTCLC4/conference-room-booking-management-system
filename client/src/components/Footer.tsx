// Import the CFooter component from CoreUi
import { CFooter } from '@coreui/react'
import React from 'react'

const AppFooter: React.FC = () => {
  return (
    // stye = {{padding: '0 16px'}}
    <CFooter className="px-4">
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          CoreUI
        </a>
        {/* marginLeft: '4px' */}
        <span className="ms-1">&copy; 2024 creativeLabs.</span>
      </div>
      {/* marginLeft: 'auto' */}
      <div className="ms-auto">
        {/* marginRight: '4px' */}
        <span className="me-1">Powered by</span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          CoreUI React Admin &amp; Dashboard Template
        </a>
      </div>
    </CFooter>
  )
}

// React.memo optimizes the component, only re-rendering when props or state change
export default React.memo(AppFooter)
