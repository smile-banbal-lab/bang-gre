import { useState } from 'react';
import axios from 'axios';
import './Login.css';
import './Main.css';
import '../components/form/LoginForm.css';

function SignUp() {
	const [formData, setFormData] = useState({
		userid: '', //'id' 대신 'userid'를 사용함 (id는 pk로 해야되기 때문임)
		name: '',
		username: '',
		password: '',
		address: '',
		email: '',
		phone: '',
		isAdmin: false //isAdmin 필드를 추가하고 초기값을 'false'로 설정
	});

	const [duplicate, setDuplicate] = useState({
		userid: false, //'id'대신 'userid'로 중복 검사함
		phone: false,
	});

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});

	// 중복 확인 필드에 대한 검사 실행
	if (name === 'userid' || name === 'phone') {
		checkDuplicate(name, value);
		}
	};

	const checkDuplicate = (field, value) => {
        axios.get(`http://localhost:4000/user?${field}=${value}`)
            .then(response => {
                if (response.data.length > 0) { // 데이터가 존재하면 중복
                    setDuplicate({
                        ...duplicate,
                        [field]: true
                    });
                } else {
                    setDuplicate({
                        ...duplicate,
                        [field]: false
                    });
                }
            })
            .catch(error => {
                console.error('중복 검사 중 에러 발생', error);
            });
    };

	const onSubmitHandler = (e) => {
        e.preventDefault();
		// 모든 필드가 채워져 있는지 확인
		const isFormValid = Object.values(formData).every(x => x !== '');
		if (!isFormValid){
			alert('모든 필드를 채워주세요.');
			return;
		}
        if (duplicate.id || duplicate.phone) {
            alert('아이디 또는 핸드폰 번호가 중복되었습니다.');
            return;
        }
        axios.post('http://localhost:4000/user', formData)
            .then(response => {
                console.log(response.data);
                alert('회원가입 성공!');
            })
            .catch(error => {
                console.error('회원가입 에러', error);
            });
    };

	return (
		
		<section id="section01">
		<h1>회원가입</h1>
		<div className="login-form-container">
			<form onSubmit={onSubmitHandler}>
				<div className="input-group">
					<label>사용자 ID:</label>
					<input
						type="text"
						name="userid"
						value={formData.userid}
						onChange={onChangeHandler}
					/>
					{duplicate.userid && <p style={{color: 'red'}}>이 아이디는 사용할 수 없습니다.</p>}
				</div>
				<div className="input-group">
					<label>이름:</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={onChangeHandler}
					/>
				</div>
				<div className="input-group">
					<label>별명:</label>
					<input
						type="text"
						name="username"
						value={formData.username}
						onChange={onChangeHandler}
					/>
				</div>
				<div className="input-group">
					<label>비밀번호:</label>
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={onChangeHandler}
					/>
				</div>
				<div className="input-group">
					<label>주소:</label>
					<input
						type="text"
						name="address"
						value={formData.address}
						onChange={onChangeHandler}
					/>
				</div>
				<div className="input-group">
					<label>이메일:</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={onChangeHandler}
					/>
				</div>
				<div className="input-group">
					<label>핸드폰번호:</label>
					<input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={onChangeHandler}
					/>
					{duplicate.phone && <p style={{color: 'red'}}>이 핸드폰 번호는 사용할 수 없습니다.</p>}
				</div>
				<div className="signup-button-group">
					<button type="submit">가입하기</button>
				</div>
			</form>
		</div>
		</section>
	);
}

export default SignUp;
