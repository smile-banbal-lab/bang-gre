import React from 'react';

function FAQForm() {
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
                    <li>제품공급문의</li>
                    <li>사이버신고센터</li>
                    <li>안전신문고</li>
                </ul>
            </div>
            <form action="/submit_form" method="post" className="form">
                <div>
                    <div>
                        <label htmlFor="name">이름</label>
                        <input type="text" id="name" name="name"/>
                    </div>
                    <div>
                        <label htmlFor="userId">사용자아이디</label>
                        <input type="text" id="userId" name="userId"/>
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <div>
                            <input type="email" id="email" name="email" className="email1"/> @
                            <input type="emailaddress" id="emailaddress" name="emailaddress" className="email2"/>
                            <select id="domain" name="domain">
                                <option value="@gmail.com">@gmail.com</option>
                                <option value="@naver.com">@naver.com</option>
                                <option value="@hanmail.net">@outlook.com</option>
                            </select>
                        </div>
                    </div>
                    <div className="phone">
                        <label htmlFor="phoneNumber">연락처</label>
                        <div>
                            <input type="text" id="phone1" name="phone1"/>
                            <span>-</span>
                            <input type="text" id="phone2" name="phone2"/>
                            <span>-</span>
                            <input type="text" id="phone3" name="phone3"/>
                        </div>
                    </div>

                    <div className="address">
                        <label htmlFor="address">주소</label>
                        <input type="text" id="address" name="address"/>
                    </div>
                    <div className="message">
                        <label htmlFor="message">내용</label>
                        <textarea id="message" name="message" rows="4" cols="50"
                            placeholder="주민등록번호등의 개인정보는 절대 노출하시마세요."></textarea>
                    </div>
                    <div className="file">
                        <label htmlFor="file">첨부파일</label>
                        <input type="file" id="attachment" name="attachment"/>
                    </div>
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