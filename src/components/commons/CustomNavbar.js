import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { resetLoginUser } from "../../modules/UserModule";
import NavDropdown from 'react-bootstrap/NavDropdown';

function CustomeNavbar() {

	const userInfoString = sessionStorage.getItem('userInfo');
	const userInfo = JSON.parse(userInfoString);

	const isAuthorized = !!sessionStorage.getItem('isLogin');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	
	/* 로그아웃 호출 시: sessionStorage 저장 값 삭제, userReducer 값 리셋, 루트로 이동 */
	const logoutHandler = () => {
		sessionStorage.removeItem('isLogin');
		sessionStorage.removeItem('isVerify');
		sessionStorage.removeItem('userInfo');
		dispatch(resetLoginUser());
		navigate('/');
	}

	return (
		<>
			<Navbar bg="light" data-bs-theme="light" fixed="top">
				<Container>
					<Navbar.Brand as={NavLink} to='/'>BANG-GRE</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link as={NavLink} to='/'>HOME</Nav.Link>
						<Nav.Link as={NavLink} to='/menu'>PRODUCT</Nav.Link>
						<Nav.Link as={NavLink} to='/qna'>FAQLIST</Nav.Link>
					</Nav>
					{!isAuthorized ? (
						<Nav.Link as={NavLink} to='/login'>LOGIN</Nav.Link>
					) : (
						<>
						<Navbar.Text style={{marginRight:'15px'}}>{`${userInfo.userid} 님 안녕하세요.`}</Navbar.Text>
						<NavDropdown title="MyPage" id="basic-nav-dropdown">
							<NavDropdown.Item as={NavLink} to={`/user/passwordcheck/${userInfo.id}`}>MyPage</NavDropdown.Item>
							<NavDropdown.Item onClick={logoutHandler}>LogOut</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to='/cart'>Cart</NavDropdown.Item>

						</NavDropdown>
						</>
					)
					}
				</Container>
			</Navbar>
		</>
	);
}

export default CustomeNavbar;