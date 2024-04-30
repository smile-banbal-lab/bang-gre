import MyPageForm from '../components/form/MyPageForm';
import { NavLink, Navigate } from 'react-router-dom';
import './MyPage.css';

function MyPage() {

	const userString = sessionStorage.getItem('userInfo');
	const user = JSON.parse(userString);

	const verifyStatus = !!sessionStorage.getItem('isVerify');

    if(!verifyStatus) {
        return (
        <Navigate to={`/passwordcheck/${user.id}`} replace={ true }/>
        )
    }

	return (
		<>
			<ul>
				<li><NavLink to={`/user/${user.id}`}>회원정보 조회 & 수정</NavLink></li>
				<li><NavLink to={`/user/signout/${user.id}`}>회원탈퇴</NavLink></li>
				{user && user.isAdmin && ( 
                <li><NavLink to={`/user/list`}>유저 목록 조회</NavLink></li>
				)}
			</ul>
			<h1>회원정보 수정</h1>
			<MyPageForm />
		</>
	);
}

export default MyPage;