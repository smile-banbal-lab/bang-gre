import { useState } from 'react';
import axios from 'axios';

function SignUp() {
	const [formData, setFormData] = useState({
		id: '',
		name: '',
		username: '',
		password: '',
		address: '',
		email: '',
		phone: '',
	});

	const [duplicate, setDuplicate] = useState({
		id: false,
		phone: false,
	});

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});

	// 중복 확인 필드에 대한 검사 실행
	if (name === 'id' || name === 'phone') {
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
		<form onSubmit={onSubmitHandler}>
			<div>
				<label>아이디:</label>
				<input
					type="text"
					name="id"
					value={formData.id}
					onChange={onChangeHandler}
				/>
				{duplicate.id && <p style={{color: 'red'}}>이 아이디는 사용할 수 없습니다.</p>}
			</div>
			<div>
				<label>이름:</label>
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={onChangeHandler}
				/>
			</div>
			<div>
				<label>별명:</label>
				<input
					type="text"
					name="username"
					value={formData.username}
					onChange={onChangeHandler}
				/>
			</div>
			<div>
				<label>비밀번호:</label>
				<input
					type="password"
					name="password"
					value={formData.password}
					onChange={onChangeHandler}
				/>
			</div>
			<div>
				<label>주소:</label>
				<input
					type="text"
					name="address"
					value={formData.address}
					onChange={onChangeHandler}
				/>
			</div>
			<div>
				<label>이메일:</label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={onChangeHandler}
				/>
			</div>
			<div>
				<label>핸드폰번호:</label>
				<input
					type="tel"
					name="phone"
					value={formData.phone}
					onChange={onChangeHandler}
				/>
				{duplicate.phone && <p style={{color: 'red'}}>이 핸드폰 번호는 사용할 수 없습니다.</p>}
			</div>
			<div>
				<button type="submit">가입하기</button>
			</div>
		</form>
	);
}

export default SignUp;
