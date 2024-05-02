import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import UserItem from '../items/UserItem';
import { callGetUserListAPI } from "../../apis/UserAPICalls";
import { Navigate, useNavigate } from 'react-router-dom';
import './UserList.css';


function UserList() {

    const userString = sessionStorage.getItem('userInfo');
	const user = JSON.parse(userString);

    const result = useSelector(state => state.userReducer);
    const userList = result.userList;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        /* menuList 호출 API */
        dispatch(callGetUserListAPI());
    }, [dispatch]);

    useEffect(() => {
        console.log(user);
    })
    
    if(user.isAdmin === false) {
        return (
            <Navigate to={'/'} replace={ true } />
        )
    }

    const verifyStatus = !!sessionStorage.getItem('isVerify');

    if(!verifyStatus) {
        return (
        <Navigate to={`/passwordcheck/${user.id}`} replace={ true }/>
        )
    }


	return (
		userList && (
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
                <div className="userListBox">
                    {userList.map(users => (
                        <UserItem key={users.id} user={users} />
                    ))}
                </div>
			</>
		)
	);
}

export default UserList;