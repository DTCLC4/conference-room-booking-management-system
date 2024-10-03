import { Content, Footer, Header, Sidebar } from '../components/index'

const DefaultLayout = () => {
  return (
    <>
      <Sidebar />
      <div className='wrapper d-flex flex-column min-vh-100'>
        <Header />
        <div className='body flex-grow-1'>
          <Content />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout
