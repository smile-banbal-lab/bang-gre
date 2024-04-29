import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { resetLoginUser } from "../../modules/UserModule";

function Navbar() {

	const isAuthorized = !!sessionStorage.getItem('isLogin');
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector(state => state.userReducer);

	const { id } = user;

	/* 로그아웃 호출 시: localStorage 저장 값 삭제, userReducer 값 리셋, 루트로 이동 */
	const logoutHandler = () => {
		sessionStorage.removeItem('isLogin');
		sessionStorage.removeItem('isVerify');
		dispatch(resetLoginUser());
		navigate('/');
	}

	return (
		<div>
			<ul id='Navbar'>
				<li><NavLink to='/'>HOME</NavLink></li>
				<li><NavLink to='/menu'>PRODUCT</NavLink></li>
				<li><NavLink to='/'>MY</NavLink></li>
				<li><NavLink to='/customerservice'>Board</NavLink></li>
				{/* localStorage 안의 값으로 로그인 여부 판단하여 조건부 랜더링 */}
				{!isAuthorized ? (
					<li><NavLink to='/login'>LOGIN</NavLink></li>
				) : (
					<>
					<li><NavLink to={`/user/passwordcheck/${id}`}>마이페이지</NavLink></li>
					<li onClick={logoutHandler}><a href="">로그아웃</a></li>
					</>
				)
				}

			</ul>
		</div>
	);
}

export default Navbar;