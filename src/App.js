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
import Cart from './pages/Carts';
import SignOut from './pages/SignOut';
import SearchIdPw from './pages/SearchIdPw';
import QnaPage from './pages/QnaPage';
import QnaDetail from './pages/QnaDetail';
import FAQForm from './pages/FAQForm';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/lists/UserList';
import CartHistory from './pages/CartHistory';

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
				<Route path='main' element={<Main />} />
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
				<Route path="/searchidpw" element={<SearchIdPw/>} />

				<Route path="user" >
					<Route path=":id" element={<MyPage/>} />
					<Route path="passwordcheck" >
						<Route path=":id" element={<PasswordCheck />} />
					</Route>
					<Route path="signout" >
					<Route path=":id" element={<SignOut />} />
					</Route>
					<Route path="list" element={<UserList />} />
				</Route>
				<Route path="cart"  element={<Cart/>} >
					<Route index element={<Cart />} />
					
				</Route>
				<Route path="carthistory" element={<CartHistory />} />
					<Route path="/qna" element={<QnaPage />} />
					<Route path="/qna/:id" element={<QnaDetail />} />
				<Route path="contact" element={<FAQForm />} />
			</Route>
			<Route path="*" element={<Error />} />
		</Routes>
	</BrowserRouter>
	);
}

export default App;
