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

    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
        // 데이터를 db.json에 저장하기 위해 백엔드 API 호출
        axios.post('http://localhost:4000/user', formData)
            .then(response => {
                console.log(response.data);
                // 성공적인 회원가입 후 처리 로직
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
            </div>
            <div>
                <button type="submit">가입하기</button>
            </div>
        </form>
    );
}

export default SignUp;
