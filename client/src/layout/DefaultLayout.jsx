import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <>
      {/* Sidebar component to display the navigation menu */}
      <AppSidebar />
      {/**
       * Wrapper div with bootstrap class:
       * 'd-flex' create flex container
       * 'flex-column' ensures the elements are arranged vertically,
       * 'min-vh-100' makes the container take up at least the full heigh of the viewport
       */}
      <div className="wrapper d-flex flex-column min-vh-100">
        {/* Header component to display the navigation bar */}
        <AppHeader />
        {/**
         * Main body of the page
         * 'flex-grow-1' ensures that the body expands to fill available space, keeping the footer at the bottom
         */}
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        {/* Footer component to display the page footer */}
        <AppFooter />
      </div>
    </>
  )
}

export default DefaultLayout
