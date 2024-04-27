import MyPageForm from '../components/form/MyPageForm';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";


function MyPage() {

	const user = useSelector(state => state.userReducer);

	const { id } = user;

	return (
		<>
			<ul>
				<li><NavLink to={`/user/${id}`}>회원정보 조회 & 수정</NavLink></li>
				<li><NavLink to={`/user/orderhistory/${id}`}>주문내역 조회</NavLink></li>
				<li><NavLink to={`/user/signout/${id}`}>회원탈퇴</NavLink></li>
			</ul>
			<h1>회원정보 수정</h1>
			<MyPageForm />
		</>
	);
}

export default MyPage;