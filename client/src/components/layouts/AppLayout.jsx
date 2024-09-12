import './AppLayout.css';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
	return (
		<div className="">
			<Header />
			<Sidebar />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</div>
	);
};

export default AppLayout;
