import MyPageForm from '../components/form/MyPageForm';
import { Navigate, useNavigate } from 'react-router-dom';
import './MyPage.css';

function MyPage() {

	const userString = sessionStorage.getItem('userInfo');
	const user = JSON.parse(userString);
	const navigate = useNavigate();

	const verifyStatus = !!sessionStorage.getItem('isVerify');

    if(!verifyStatus) {
        return (
        <Navigate to={`/passwordcheck/${user.id}`} replace={ true }/>
        )
    }

	return (
		<>
		<div className='mypage-button-list'>
			<div className='mypage-select'>
				<button className='mypage-button' onClick={() => navigate(`/user/${user.id}`)}>회원정보 조회 & 수정</button>
				<button className='mypage-button' onClick={() => navigate(`/user/signout/${user.id}`)}>회원탈퇴</button>
				{user && user.isAdmin && ( 
                <button className='mypage-button' onClick={() => navigate(`/user/list`)}>유저 목록 조회</button>
				)}
			</div>
		</div>
			<h1>회원정보 수정</h1>
			<hr />
			<MyPageForm />
			<br/>
		</>
	);
}

export default MyPage;