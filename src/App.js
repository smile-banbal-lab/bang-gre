import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Menus from './pages/Menus';
import MenuDetail from './pages/MenuDetail';
import MenuRegist from './pages/MenuRegist';
import MenuModify from './pages/MenuModify';
import Login from './pages/Login';
import PasswordCheck from './pages/PasswordCheck';
import MyPage from './pages/MyPage';
import Error from './pages/Error';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import "./App.css";

/* 추가 설치해야 하는 패키지 목록
 * react-router-dom
 * redux
 * react-redux
 * redux-actions
 * redux-thunk
 * redux-logger
 * redux-devtools-extension
 */

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Main />} />
					<Route path="menu" >
						<Route index element={<Menus />} />
						<Route path=":id" element={<MenuDetail />} />
						<Route path="regist" element={<MenuRegist />} />
						<Route path="modify" >
							<Route path=":id" element={<MenuModify />} />
						</Route>
					</Route>
					<Route path="login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />

					<Route path="user" >
						<Route path=":id" element={<MyPage/>} />
						<Route path="passwordcheck" >
							<Route path=":id" element={<PasswordCheck />} />
						</Route>
					</Route>
					<Route path="cart"  element={<Cart/>} />	
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
