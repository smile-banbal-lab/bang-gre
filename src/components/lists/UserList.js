import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import UserItem from '../items/UserItem';
import { callGetUserListAPI } from "../../apis/UserAPICalls";
import { NavLink, Navigate } from 'react-router-dom';


function UserList() {

    const userString = sessionStorage.getItem('userInfo');
	const user = JSON.parse(userString);

    const result = useSelector(state => state.userReducer);
    const userList = result.userList;
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
                <ul>
				    <li><NavLink to={`/user/${user.id}`}>회원정보 조회 & 수정</NavLink></li>
				    <li><NavLink to={`/user/signout/${user.id}`}>회원탈퇴</NavLink></li>
				    {user && user.isAdmin && ( 
                    <li><NavLink to={`/user/list`}>유저 목록 조회</NavLink></li>
				    )}
			    </ul>
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