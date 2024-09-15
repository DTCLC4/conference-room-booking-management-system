import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import AppLayout from './components/layouts/AppLayout';
import AuthLayout from './components/layouts/auth/AuthLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import About from './pages/about/About';
import Work from './pages/work/Work';
import NotFound from './pages/notfound/NotFound';
import Help from './pages/help/Help';

function App() {
	return (
		<Router>
			<Routes>
				{/* Route dành cho AuthLayout */}
				<Route path="/auth" element={<AuthLayout />}>
					<Route index element={<Navigate to="/auth/login" />} />{' '}
					{/* Redirect đến /auth/login */}
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
				</Route>

				{/* Route dành cho AppLayout */}
				<Route path="/" element={<AppLayout />}>
					<Route index element={<Navigate to="/about" />} />{' '}
					{/* Redirect đến /about */}
					<Route path="about" element={<About />} />
					<Route path="work" element={<Work />} />
					<Route path="help" element={<Help />} />
				</Route>

				{/* Route cho trang 404 chung */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
