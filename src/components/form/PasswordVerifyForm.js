import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { callVerifyAPI } from '../../apis/UserAPICalls';

function PasswordVerifyForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const result = useSelector(state => state.userReducer);
    const isVerify = !!localStorage.getItem('isVerify');

    const onClickHandler = () => {

		dispatch(callVerifyAPI(password));

	};

    useEffect(
		() => {
			if (result?.message) {
				alert('비밀번호를 확인해주세요');
				setPassword('');
				
			} else if (isVerify) {
				navigate(`/user/${result.id}`);
			}
		}, // eslint-disable-next-line
		[result, isVerify, navigate, dispatch]
	);

    return (
        <>
        <label>비밀번호: </label>
        <input type="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
        <button onClick={onClickHandler}>확인</button>
        <button >취소</button>
        </>
    );

}

export default PasswordVerifyForm;