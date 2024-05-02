import { Outlet } from 'react-router-dom';
import Header from '../components/commons/Header';
import CustomeNavbar from '../components/commons/CustomNavbar';
import Footer from '../components/commons/Footer'

function Layout() {

	return (
		<div>
			<Header />
			<CustomeNavbar />
			<Outlet />
			<Footer/>
		</div>
	);
}

export default Layout;
