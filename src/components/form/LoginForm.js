import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { callLoginAPI } from '../../apis/UserAPICalls';
import { resetLoginUser } from "../../modules/UserModule";
import './LoginForm.css';


function LoginForm() {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const result = useSelector(state => state.userReducer);
	const isAuthorized = !!localStorage.getItem('isLogin');

	/* input 태그 입력 값 state 관리 */
	const [loginInfo, setLoginInfo] = useState(
		{
			userid: '',
			password: ''
		}
	);

	/* 입력 값 변경 시 이벤트 핸들러 */
	const onChangeHandler = (e) => {
		setLoginInfo(
			{
				...loginInfo,
				[e.target.name]: e.target.value
			}
		);
	}

	/* 로그인 버튼 클릭 시 동작 */
	const onClickHandler = () => {

		/* loginInfo에 대한 유효성 검사 후 호출 */
		dispatch(callLoginAPI(loginInfo));

	}

	const onSignUpClickHandler = () => {
        // 회원가입 페이지로 이동
        navigate('/signup');
    }


	/* 로그인 요청 후 성공 or 실패 동작 */
	useEffect(

		() => {
			if (result?.message) {
				alert('아이디와 비밀번호를 확인해주세요');
				setLoginInfo(
					{
						userid: '',
						password: ''
					}
				);
				dispatch(resetLoginUser());
			} else if (isAuthorized) {
				navigate('/');
			}
		}, // eslint-disable-next-line
		[result, isAuthorized, navigate, dispatch]
	);

    return (
        <div className="login-form-container">
            <div className="input-group">
                <label>User ID:</label>
                <input
                    type="text"
                    name="userid" //'id'를 'userid'로 변경
                    value={loginInfo.userid}
                    onChange={onChangeHandler}
                />
            </div>
            <div className="input-group">
                <label>PW:</label>
                <input
                    type="password"
                    name="password"
                    value={loginInfo.password}
                    onChange={onChangeHandler}
                />
            </div>
            <div className="button-group">
                <button onClick={onClickHandler}>로그인</button>
                <button onClick={onSignUpClickHandler}>회원가입</button>
            </div>
        </div>
		
	);
}

export default LoginForm;