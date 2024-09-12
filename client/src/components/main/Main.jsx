import { Outlet } from 'react-router-dom';

const Main = () => {
	return (
		<main className="p-3" style={{ marginLeft: '250px' }}>
			<Outlet />
		</main>
	);
};

export default Main;
