
import { Route, Routes } from 'react-router-dom';
import About from '../../pages/about/About';
import Work from '../../pages/work/Work';


const Main = () => {
  return (
    <main className="p-3" style={{ marginLeft: '250px' }}>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </main>
  );
}

export default Main
