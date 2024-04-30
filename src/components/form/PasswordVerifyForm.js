import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { callVerifyAPI } from '../../apis/UserAPICalls';
import './PasswordVerifyForm.css';

function PasswordVerifyForm() {

    const userString = sessionStorage.getItem('userInfo');
	const user = JSON.parse(userString);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const result = useSelector(state => state.userReducer);
    const isVerify = !!sessionStorage.getItem('isVerify');

    const onClickHandler = () => {

		dispatch(callVerifyAPI(password));

	};

    useEffect(
		() => {
			if (result?.message) {
				alert('비밀번호를 확인해주세요');
				setPassword('');
				
			} else if (isVerify) {
				navigate(`/user/${user.id}`);
			}
		}, // eslint-disable-next-line
		[result, isVerify, navigate, dispatch]
	);

    return (
        <>
        <div className="check-container">
            <div className="check-form-container">
                <h1>비밀번호를 다시 한번 확인해 주세요</h1>
                    <label>비밀번호: </label>
                    <input type="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                <div className="button-container">
                    <button onClick={onClickHandler}>확인</button>
                    <button onClick={() => navigate('/')}>취소</button>
                </div>
            </div>
        </div>
        </>
    );

}

export default PasswordVerifyForm;