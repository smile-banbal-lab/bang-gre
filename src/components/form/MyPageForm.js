import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callModifyUserInfoAPI } from '../../apis/UserAPICalls';
import './MyPageForm.css';

function MyPageForm() {

	const { id } = useParams();

	const StoredUserInfoString = sessionStorage.getItem('userInfo');
	const storedUserInfo = JSON.parse(StoredUserInfoString);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const result = useSelector(state => state.userReducer);

	/* 입력 값 state 저장 */
	const [userInfo, setUserInfo] = useState(
		{
			id: storedUserInfo.id,
			name: storedUserInfo.name,
			phone: storedUserInfo.phone,
			email: storedUserInfo.email,
			address: storedUserInfo.address,
			userid: storedUserInfo.userid,
            password: storedUserInfo.password
		}
	);

	const [isToggleModify, setIsToggleModify] = useState(false);

    const [isReadOnly, setIsReadOnly] = useState(true);

    const toggleModify = () => {

		setIsToggleModify(!isToggleModify);
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
				navigate(`/user/${storedUserInfo.id}`);
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
		<div className='modify-container'>
  			<button className={isToggleModify ? 'modify-button-clicked' : 'modify-button'} onClick={toggleModify}>{isToggleModify ? '회원정보 수정 종료' : '회원정보 수정 시작'}</button><br />
			<div className='userData-container'>
  				<div className="form-group">
  					<label>이름</label>
  					<input className="form-input" type="text" name="name" value={userInfo.name} onChange={onChangeHandler} readOnly={isReadOnly} />
  				</div>
  				<div className="form-group">
  				  	<label>전화 번호</label>
  				  	<input className="form-input" type="text" name="phone" value={userInfo.phone} onChange={onChangeHandler} readOnly={isReadOnly} />
  				</div>
  				<div className="form-group">
  				  	<label>이메일</label>
  				  	<input className="form-input" type="text" name="email" value={userInfo.email} onChange={onChangeHandler} readOnly={isReadOnly} />
  				</div>
  				<div className="form-group">
  				  	<label>주소</label>
  				  	<input className="form-input" type="text" name="address" value={userInfo.address} onChange={onChangeHandler} readOnly={isReadOnly} />
  				</div>
  				<div className="form-group">
  				  	<label>아이디</label>
  				  	<input className="form-input" type="text" name="userid" value={userInfo.userid} onChange={onChangeHandler} readOnly={isReadOnly} />
  				</div>
  				<div className="form-group">
  				  	<label>비밀번호</label>
  				  	<input className="form-input" type="text" name="password" value={userInfo.password} onChange={onChangeHandler} readOnly={isReadOnly} />
  				</div>
			</div>
  			<button className="submit-button" onClick={onClickHandler}>수정하기</button>
		</div>
		</>

    	)
    }



export default MyPageForm;