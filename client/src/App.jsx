import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

function App() {
	return (
		<Router>
			<Header />
			<Sidebar />
			<Main />
			<Footer />
		</Router>
	);
}

export default App;
