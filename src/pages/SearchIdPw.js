import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import './Main.css';
import '../components/form/LoginForm.css';

function SearchIdPw() {
	const [emailUser, setEmailUser] = useState(''); //이메일 사용자 이름 부분
	const [emailDomain, setEmailDomain] = useState(''); //이메일 도메인 부분
	const [customDomain, setCustomDomain] = useState(''); // 사용자 정의 도메인 상태
	const [foundData, setFoundData] = useState({
		userid: null,
		password: null,
		error: null
	});

	const handleSearch = (event) => {
		event.preventDefault();
		const email = `${emailUser}@${emailDomain === 'custom' ? customDomain : emailDomain}`;
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
			<h1>ID 및 비밀번호 찾기</h1>
			<div className="login-form-container">
				<form onSubmit={handleSearch}>
					<div className="input-group" style={{ display: 'flex', alignItems: 'center' }}>
						<label>이메일 입력:</label>
						<input
							type="text"
							value={emailUser}
							onChange={e => setEmailUser(e.target.value)}
							placeholder="이메일 사용자명"
							required
							style={{ flex: 1 }}
						/>
						<span style={{ margin: '0 10px' }}>@</span>
						{emailDomain === 'custom' ? (
							<input
								type="text"
								value={customDomain}
								onChange={e => setCustomDomain(e.target.value)}
								placeholder="도메인 입력"
								required
								style={{ flex: 1 }}
							/>
						) : (
							<select
								value={emailDomain}
								onChange={e => setEmailDomain(e.target.value)}
								required
								style={{ flex: 1 }}>
								<option value="">도메인 선택</option>
								<option value="gmail.com">gmail.com</option>
								<option value="kakao.com">kakao.com</option>
								<option value="hotmail.com">hotmail.com</option>
								<option value="custom">직접 입력</option>
							</select>
						)}
					</div>
					<div className="signup-button-group">
						<button type="submit">ID/PW 찾기</button>
					</div>
				</form>
				{foundData.error && <p style={{ color: 'red' }}>{foundData.error}</p>}
				{foundData.userid && <p>귀하의 ID는 "{foundData.userid}" 입니다.</p>}
				{foundData.password && <p>귀하의 비밀번호는 "{foundData.password}" 입니다.</p>}
			</div>
		</section>
	);
}

export default SearchIdPw;
