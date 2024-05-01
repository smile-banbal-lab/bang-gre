import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Main.css';
// import './Login.css';
import './FAQForm.css';

function FAQForm() {
	
	const userInfo = useSelector(state => state.userReducer); 
	// 폼 데이터를 state로 관리함
	const [formData, setFormData] = React.useState({
		name: userInfo.name || '',
		userid: userInfo.userid || '',
		email: userInfo.email || '',
		phone: userInfo.phone || '',
		title: '',
		content: '',
		id: ''
	});
	console.log(userInfo);  // Redux로부터 불러온 사용자 정보
	console.log(formData);  // 현재 폼 데이터의 상태

	useEffect(() => {
        // Fetch current posts to determine the next id
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:4000/qna');
                const data = await response.json();
                const nextId = data.length + 1; // Assuming id starts at 1
                setFormData(prevFormData => ({
                    ...prevFormData,
                    id: nextId.toString() // Update formData with the next id
                }));
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }
        };

        fetchPosts();
    }, []);
	// console.log(userInfo);  // Redux로부터 불러온 사용자 정보
	// console.log(formData);  // 현재 폼 데이터의 상태
	
	    // 추가된 useEffect: userInfo가 변경될 때마다 formData 업데이트
		useEffect(() => {
			if (userInfo) {
				setFormData({
					name: userInfo.name || '',
					userid: userInfo.userid || '',
					email: userInfo.email || '',
					phone: userInfo.phone || '',
					title: '',
					content: '',
					id: ''
				});
			}
		}, [userInfo]); // userInfo 의존성 추가
		// console.log(userInfo);
	//입력 필드의 변화를 처리
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]:value
		}));
	};

	// 폼 제출 처리
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, phone, ...rest } = formData; // email과 phone도 제거
		const currentDate = new Date().toISOString().split('T')[0];
	
		try {
			const response = await fetch('http://localhost:4000/qna', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					...rest, // email과 phone을 제외한 나머지 데이터 전송
					date: currentDate
				})
			});
	
			if (response.ok) {
				alert('문의가 등록되었습니다.');
				setFormData({
					name: '',
					userid: '',
					// email: '', // 필요없으면 주석 처리
					// phone: '', // 필요없으면 주석 처리
					// address: '', // 필요없으면 주석 처리
					title: '',
					content: '',
					// date: '',
					id: '' // Reset the id along with other fields
				});
			}
		} catch (error) {
			alert('문의 등록에 실패하였습니다.');
		}
	};
	return (
		
		<>        
		<section id='section01'>
		<div className='Main-background'></div>
			<div className='FAQ-container'>
				<div className="header">
					<ul>
						<h1>FAQ</h1>
					</ul>
				</div>
				<div className="text">
					<p>
						빙그레에 궁금한 사항을 문의해 주세요.<br/>
						최대한 빠른 시일 내에 친절하게 답변해드리겠습니다.<br/>
						(토,일,공휴일 문의는 평일 운영시간 순차적으로 답변됩니다)
					</p>
				</div>


				<form onSubmit={handleSubmit} className="FAQ-form">
					<div className="input-group">
						<label htmlFor="name">이름</label>
						<input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
					</div>
					<div className="input-group">
						<label htmlFor="userid">사용자아이디</label>
						<input type="text" id="userid" name="userid" value={formData.userid} onChange={handleChange}/>
					</div>
					<div className="input-group">
						<label htmlFor="title">제목</label>
						<input type="text" id="title" name="title" value={formData.title} onChange={handleChange}/>
					</div>
					<div className="content">
						<label htmlFor="content">내용</label>
						<textarea id="content" name="content" value={formData.content} onChange={handleChange} rows="4" cols="50"
							placeholder="주민등록번호 등의 개인정보는 절대 노출하지 마세요."></textarea>
					</div>
					<div className="btn">
						<button type="button" className="FAQ-button">취소하기</button>
						<button type="submit" className="FAQ-button">등록하기</button>
					</div>
				</form>
			</div>
			</section>
		</>
		
	);
}

export default FAQForm;

