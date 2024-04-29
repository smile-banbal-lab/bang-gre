import { Outlet } from 'react-router-dom';
import Header from '../components/commons/Header';
import CustomeNavbar from '../components/commons/CustomNavbar';

function Layout() {

	return (
		<div>
			<Header />
			<CustomeNavbar />
			<Outlet />
		</div>
	);
}

export default Layout;
