import { useNavigate, Navigate, useParams, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { callDeleteUserAPI } from '../apis/UserAPICalls';
import { resetLoginUser } from "../modules/UserModule";

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
    const result = useSelector(state => state.userReducer);

    const verifyStatus = !!localStorage.getItem('isVerify');

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
        dispatch(callDeleteUserAPI(signOutInfo));

        localStorage.removeItem('isLogin');
		localStorage.removeItem('isVerify');
        alert('회원 탈퇴 완료');
		dispatch(resetLoginUser());
		navigate('/');
    };


    return (
        
				<>
           			<ul>
				        <li><NavLink to={`/user/${id}`}>회원정보 조회 & 수정</NavLink></li>
				        <li><NavLink to={`/user/orderhistory/${id}`}>주문내역 조회</NavLink></li>
				        <li><NavLink to={`/user/signout/${id}`}>회원탈퇴</NavLink></li>
		        	</ul>
                    <h1>회원탈퇴를 하시려면 아이디와 비밀번호를 다시 입력해 주세요</h1>
                    <label>아이디 : </label>
                    <input name='userid' value={signOutInfo.userid} onChange={onChangeHandler}></input>
                    <label>비밀번호 : </label>
                    <input name='password' value={signOutInfo.password} onChange={onChangeHandler}></input>
                    <button onClick={onClickHandler}>회원탈퇴</button>
				</>
	);

}

export default SignOut;