import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { callLoginAPI } from '../../apis/UserAPICalls';
import { resetLoginUser } from "../../modules/UserModule";
import './LoginForm.css';
/*
* useEffect, useState: React의 훅으로 컴포넌트의 상태 관리와 생명주기 관리에 사용됨.
* useDispatch, useSelector: Redux 훅으로, Redux store의 상태를 읽거나 액션을 디스패치하는 데 사용됨.
* useNavigate: React Router의 훅으로, 프로그래밍 방식으로 라우팅할 때 사용됨.
* callLoginAPI: 사용자 로그인을 처리하는 API 호출 함수.
* resetLoginUser: 로그인 관련 상태를 초기화하는 Redux 액션.
*/

function LoginForm() {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const result = useSelector(state => state.userReducer);
	const isAuthorized = !!sessionStorage.getItem('isLogin');

/**** 컴포넌트() input 태그 입력 값)의 상태(state) 관리 *****/
	//usestate: React에서 상태관리를 위해 제공하는 훅 중 하나로, 함수형 컴포넌트 내에서 상태를 가질 수 있게 해줌.
	//'useState'는 한 쌍의 값들, 즉 현재 상태값과 그 상태를 업데이트하는 함수를 반환한다.
	const [loginInfo, setLoginInfo] = useState(
		{
			userid: '',
			password: ''
		}
	);
	// useState({ userid: '', password: '' }): useState를 호출할 때 초기 상태를 { userid: '', password: '' }로 설정합니다. 이 객체는 두 개의 프로퍼티 userid와 password를 포함하고 있으며, 각각의 초기값은 빈 문자열('')입니다. 이 초기 상태는 사용자가 양식에 아무런 입력도 하지 않았을 때의 상태를 나타냅니다.
	// loginInfo: 이 변수는 현재 상태를 저장하며, 초기에는 위에서 정의한 대로 { userid: '', password: '' } 객체로 설정됩니다. loginInfo는 로그인 양식에서 사용자의 입력을 저장하고 언제든지 참조할 수 있게 해주는 상태 변수입니다.
	// setLoginInfo: 이 함수는 loginInfo 상태를 업데이트하는 데 사용됩니다. useState 훅에서 반환된 업데이트 함수는 인자로 새로운 상태를 받고 컴포넌트를 해당 상태로 리렌더링합니다. 예를 들어, 사용자가 ID 또는 비밀번호 입력 필드를 변경할 때마다 이 함수를 호출하여 loginInfo의 상태를 새로운 입력 값으로 업데이트할 수 있습니다.
	// loginInfo: 사용자 입력(사용자 ID와 비밀번호)을 관리하는 상태 변수임
	// setLoginInfo: loginInfo 상태를 업데이트하는 함수임
	


	/* 입력 값 변경 시 이벤트 핸들러 */
	// onChangeHandler 함수는 사용자가 로그인 양식의 입력 필드에 값을 입력할 때마다 호출되는 이벤트 핸들러입니다. 이 함수는 React의 useState 훅에서 제공하는 setLoginInfo 함수를 사용하여 loginInfo 상태를 업데이트합니다

	const onChangeHandler = (e) => {
		setLoginInfo(
			{
				...loginInfo,
				[e.target.name]: e.target.value
			}
		);
	}
//e: 이벤트 객체로, 이벤트가 발생한 요소에 대한 정보를 포함하고 있습니다.
// e.target: 이벤트가 발생한 DOM 요소, 즉 입력 필드(input)를 가리킵니다.
// e.target.name: 입력 필드의 name 속성의 값입니다. 이 예에서는 입력 필드가 사용자 ID를 위한 것이면 name="userid", 비밀번호를 위한 것이면 name="password"가 됩니다.
// e.target.value: 입력 필드에 현재 입력된 값입니다.

// *******상태 업데이트 로직**********
// setLoginInfo(...): setLoginInfo 함수는 loginInfo 상태를 새로운 값으로 설정합니다. 이 함수를 호출할 때 제공하는 객체는 새로운 상태 값이 됩니다.
// { ...loginInfo }: 이는 ES6의 스프레드 연산자를 사용하여 기존의 loginInfo 객체를 새 객체 안으로 펼치는 것을 의미합니다. 즉, loginInfo의 현재 상태(기존의 userid와 password 값)를 새 객체로 복사합니다.
// [e.target.name]: e.target.value: 계산된 속성명(computed property name)을 사용하여, 입력 필드의 name 속성에 해당하는 키를 갖는 값을 e.target.value로 설정합니다. 예를 들어, 사용자가 비밀번호 필드를 업데이트하면 e.target.name은 "password"가 되고, e.target.value는 사용자가 입력한 새로운 비밀번호가 됩니다. 결과적으로 {password: 사용자가 입력한 값} 형태로 객체가 업데이트됩니다.
// 이 함수는 입력 필드의 값이 변경될 때마다 해당 필드의 이름과 매치되는 loginInfo의 상태를 업데이트하므로, 양식의 모든 필드가 동일한 핸들러 함수를 통해 효율적으로 관리될 수 있습니다. 이렇게 하면 여러 입력 필드를 각각의 상태로 관리할 필요 없이, 하나의 객체 내에서 모든 필드를 쉽게 관리할 수 있습니다.


	/* 로그인 버튼 클릭 시 동작 */
	const onClickHandler = () => {

		/* loginInfo에 대한 유효성 검사 후 호출 */
		dispatch(callLoginAPI(loginInfo));
	}
	/*
	로그인 버튼 클릭 시, callLoginAPI 함수를 호출하여 로그인을 시도한다. 이 함수는 Redux를 통해 관리됨
	*/

	const onSignUpClickHandler = () => {
        // 회원가입 페이지로 이동
        navigate('/signup');
    }
	/*
	회원가입 버튼 클릭 시, 회원가입 페이지(/signup)로 라우팅
	*/


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
	/*
	** result: Redux store에서 로그인 요청 결과를 가져옴. 오류 메시지가 있는 경우 사용자에게 알리고 입력 필드를 초기화함.
	** isAuthorized: 로컬 스토리지를 확인하여 로그인 상태를 검사함. 로그인이 성공적이라면 메인 페이지(/)로 리다이렉션한다.
	*/

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