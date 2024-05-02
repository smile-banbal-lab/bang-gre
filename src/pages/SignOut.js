import { useNavigate, Navigate, useParams } from 'react-router-dom';
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

        sessionStorage.removeItem('isLogin');
		sessionStorage.removeItem('isVerify');
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
        <div className="signout-container">
            <div className='form-box'>
                <h5>아이디와 비밀번호를 다시 입력해 주세요</h5>
                <div className="form-group">
                    <label>아이디 : </label>
                    <input className='form-input' name='userid' value={signOutInfo.userid} onChange={onChangeHandler}></input>
                </div>
                <div className="form-group">
                    <label>비밀번호 : </label>
                    <input className='form-input' type='password' name='password' value={signOutInfo.password} onChange={onChangeHandler}></input>
                </div>
            </div>
        <button className="signout-button" onClick={onClickHandler}>회원탈퇴</button>
        <br />
    </div>
    </>
);

}

export default SignOut;