import { useNavigate, Navigate, useParams, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { callDeleteUserAPI } from '../apis/UserAPICalls';
import { resetLoginUser } from "../modules/UserModule";
import './SignOut.css';

function SignOut () {

    const navigate = useNavigate();
	const dispatch = useDispatch();
    const { id } = useParams();
    const [signOutInfo, setSignOutInfo] = useState(
        {
            id : id,
            userid: '',
            password: ''
        }
    );

    const userString = sessionStorage.getItem('userInfo');
	const user = JSON.parse(userString);
    
    const result = useSelector(state => state.userReducer);

    const verifyStatus = !!sessionStorage.getItem('isVerify');

    if(!verifyStatus) {
        return (
        <Navigate to={`/passwordcheck/${id}`} replace={ true }/>
        )
    }

    const onChangeHandler = (e) => {
        setSignOutInfo({
                ...signOutInfo,
                [e.target.name]: e.target.value
            });
    }

    const onClickHandler = () => {

        if (signOutInfo.userid == result.userid && signOutInfo.password == result.password) {
        dispatch(callDeleteUserAPI(signOutInfo));

        localStorage.removeItem('isLogin');
		localStorage.removeItem('isVerify');
        alert('회원 탈퇴 완료');
		dispatch(resetLoginUser());
		navigate('/');
        } else {
            alert('아이디 혹은 비밀번호가 다릅니다');
            setSignOutInfo({
                userid: '',
                password: ''
            })
        }
    };


    return (
        <div className="signout-container">
        <ul>
            <li><NavLink to={`/user/${id}`}>회원정보 조회 & 수정</NavLink></li>
            <li><NavLink to={`/user/signout/${id}`}>회원탈퇴</NavLink></li>
            {user && user.isAdmin && ( 
                <li><NavLink to={`/user/list`}>유저 목록 조회</NavLink></li>
			)}
        </ul>
        <h2>회원탈퇴를 하시려면 아이디와 비밀번호를 다시 입력해 주세요</h2>
        <br/>
            <div className='form-box'>
                <div className="form-group">
                    <label>아이디 : </label>
                    <input className='form-input' name='userid' value={signOutInfo.userid} onChange={onChangeHandler}></input>
                </div>
                <div className="form-group">
                    <label>비밀번호 : </label>
                    <input className='form-input' name='password' value={signOutInfo.password} onChange={onChangeHandler}></input>
                </div>
            </div>
        <button className="submit-button" onClick={onClickHandler}>회원탈퇴</button>
        <br />
    </div>
);

}

export default SignOut;