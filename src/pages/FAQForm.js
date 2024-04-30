import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Main.css';

function FAQForm() {
    const userInfo = useSelector(state => state.userReducer); 
    // 폼 데이터를 state로 관리함
    const [formData, setFormData] = React.useState({
        name: userInfo.name || '',
        userid: userInfo.userid || '',
        email: userInfo.email || '',
        phone: userInfo.phone || '',
        address: '',
        message: ''
    });

    useEffect(() => {
        // 사용자 정보가 업데이트되면 폼 데이터 업데이트
        setFormData(prevFormData => ({
            name: userInfo.name || '',
            userid: userInfo.userid || '',
            email: userInfo.email || '',
            phone: userInfo.phone || ''
        }));
    }, [userInfo]);

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
        const payload = {
            id: formData.userid, // Assuming `userid` is the ID to be sent
            message: formData.message
        };
        try {
            const response = await fetch('http://localhost:4000/qna', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('문의가 등록되었습니다.');
                setFormData({ name: '', userid: '', email: '', phone: '', address: '', message: '' });
            }
        } catch (error) {
            alert('문의 등록에 실패하였습니다.');
        }
    };
    return (
        <>          
            <div className="header">
                <ul>
                    <h2>FAQ</h2>
                </ul>
            </div>
            <div className="text">
                <p>
                    빙그레에 궁금한 사항을 문의해 주세요.<br/>
                    최대한 빠른 시일 내에 친절하게 답변해드리겠습니다.<br/>
                    (토,일,공휴일 문의는 평일 운영시간 순차적으로 답변됩니다)
                </p>
            </div>
            <div className="category">
                <ul>
                    <li className="active">고객상담</li>
                    
                </ul>
            </div>

            <form onSubmit={handleSubmit} className="form">
                <div>
                    <div>
                        <label htmlFor="name">이름</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="userId">사용자아이디</label>
                        <input type="text" id="userid" name="userid" value={formData.userid} onChange={handleChange}/>
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <div>
                            <input type="email" id="email" name="email" className="email1" value={formData.email} onChange={handleChange}/> @
                            <input type="emailaddress" id="emailaddress" name="emailaddress" className="email2" value={formData.emailaddress} onChange={handleChange}/>
                            <select id="domain" name="domain">
                                <option value="@gmail.com">@gmail.com</option>
                                <option value="@naver.com">@naver.com</option>
                                <option value="@hanmail.net">@hanmail.net</option>
                                <option value="@hanmail.net">@gmail.com</option>
                            </select>
                        </div>
                    </div>
                    <div className="phone">
                        <label htmlFor="phoneNumber">연락처</label>
                        <div>
                            <input type="text" id="phone1" name="phone1" className="email2" value={formData.phone1} onChange={handleChange}/>
                            <span>-</span>
                            <input type="text" id="phone2" name="phone2" value={formData.phone2} onChange={handleChange}/>
                            <span>-</span>
                            <input type="text" id="phone3" name="phone3" value={formData.phone3} onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="address">
                        <label htmlFor="address">주소</label>
                        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange}/>
                    </div>
                    <div className="message">
                        <label htmlFor="message">내용</label>
                        <textarea id="message" name="message" rows="4" cols="50"
                            placeholder="주민등록번호등의 개인정보는 절대 노출하지 마세요."></textarea>
                    </div>
                    {/* <div className="file">
                        <label htmlFor="file">첨부파일</label>
                        <input type="file" id="attachment" name="attachment"/>
                    </div> */}
                    <div className="btn">
                        <button type="button" className="form-button">취소하기</button>
                        <button type="submit" className="form-button">등록하기</button>
                    </div>

                </div>
            </form>

            <footer id="footer">
                <div className="text">
                <ul>
                    <li>회사명:빙그레</li>
                    <li>경기도 남양주시 다산동 4344-3 / 경기도 남양주시 다산순환로 45(다산동)</li>
                    <li>ⓒ Binggrae all rights reserved.</li>
                </ul>
                </div>
            </footer>

        </>
        
    );
}

export default FAQForm;

