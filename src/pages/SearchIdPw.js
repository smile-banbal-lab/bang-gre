import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import './Main.css';
import '../components/form/LoginForm.css';

function SearchIdPw() {
    const [email, setEmail] = useState('');
    const [foundData, setFoundData] = useState({
        userid: null,
        password: null,
        error: null
    });

    const handleSearch = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:4000/user?email=${email}`)
            .then(response => {
                const users = response.data;
                if (users.length > 0) {
                    const user = users[0]; // 첫 번째 매칭되는 사용자의 정보를 사용
                    setFoundData({
                        userid: user.userid,
                        password: user.password,
                        error: null
                    });
                } else {
                    setFoundData({
                        userid: null,
                        password: null,
                        error: "입력하신 이메일에 해당하는 사용자가 없습니다."
                    });
                }
            })
            .catch(error => {
                setFoundData({
                    userid: null,
                    password: null,
                    error: "검색 중 오류가 발생했습니다."
                });
            });
    };

    return (
        <section id="section01">
        <div className='Main-background'></div>
        <h1>사용자 ID 및 비밀번호 찾기</h1>
        <div className="login-form-container">
            
            <form onSubmit={handleSearch}>
                <div className="input-group">
                    <label>이메일 입력:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                    <div className="signup-button-group">
                        <button type="submit">ID/PW 찾기</button>
                    </div>
                
            </form>
            {foundData.error && <p style={{ color: 'red' }}>{foundData.error}</p>}
            {foundData.userid && <p>사용자 ID: {foundData.userid}</p>}
            {foundData.password && <p>비밀번호: {foundData.password}</p>}
        </div>
        </section>
    );
}

export default SearchIdPw;
