import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callModifyUserInfoAPI } from '../../apis/UserAPICalls';

function MyPageForm() {

	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const result = useSelector(state => state.userReducer);

	/* 입력 값 state 저장 */
	const [userInfo, setUserInfo] = useState(
		{
			id: result.id,
			name: result.name,
			phone: result.phone,
			email: result.email,
			address: result.address,
			userid: result.userid,
            password: result.password
		}
	);

    const [isReadOnly, setIsReadOnly] = useState(true);

    const toggleModify = () => {

        setIsReadOnly(!isReadOnly);

    };

	/* 입력 값 변경 시 이벤트 핸들러 */
	const onChangeHandler = (e) => {

		let name = e.target.name;
		let value = e.target.value;

		setUserInfo(
			{
				...userInfo,
				id: id,
				[name]: value
			}
		);

	}

	useEffect(
		() => {
			/* 메뉴 수정 완료 확인 후 회원 정보로 이동 */
			if (result.modify) {
				alert('회원 정보 수정');
				navigate(`/user/${id}`);
			}
		},
		[result]
	);

	const onClickHandler = () => {
		/* modifyUser에 대한 유효성 검사 후 호출 */
		dispatch(callModifyUserInfoAPI(userInfo));
    }

        return (
		<>
            <button onClick={toggleModify}>회원정보 수정</button><br />
			<label>이름 : </label>
            <br />
			<input type="text" name="name" value={userInfo.name} onChange={onChangeHandler} readOnly={isReadOnly}/>
			<br />
			<label>전화 번호 : </label>
			<input type="text" name="phone" value={userInfo.phone} onChange={onChangeHandler} readOnly={isReadOnly}/>
			<br />
			<label>이메일 : </label>
			<input type="text" name="email" value={userInfo.email} onChange={onChangeHandler} readOnly={isReadOnly}/>
			<br />
			<label>주소 : </label>
			<input type="text" name="address" value={userInfo.address} onChange={onChangeHandler} readOnly={isReadOnly}/>
			<br />
			<label>아이디 : </label>
			<input type="text" name="userid" value={userInfo.userid} onChange={onChangeHandler} readOnly={isReadOnly}/>
			<br />
			<label>비밀번호 : </label>
			<input type="text" name="password" value={userInfo.password} onChange={onChangeHandler} readOnly={isReadOnly}/>
			<br />

			<button onClick={onClickHandler}>수정</button>
		</>
    	)
    }



export default MyPageForm;