import MyPageForm from '../components/form/MyPageForm';
import { NavLink } from 'react-router-dom';
import './MyPage.css';

function MyPage() {

	const userString = sessionStorage.getItem('userInfo');
	const user = JSON.parse(userString);

	return (
		<>
			<ul>
				<li><NavLink to={`/user/${user.id}`}>회원정보 조회 & 수정</NavLink></li>
				<li><NavLink to={`/user/orderhistory/${user.id}`}>주문내역 조회</NavLink></li>
				<li><NavLink to={`/user/signout/${user.id}`}>회원탈퇴</NavLink></li>
			</ul>
			<h1>회원정보 수정</h1>
			<MyPageForm />
		</>
	);
}

export default MyPage;