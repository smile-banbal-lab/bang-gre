import React from 'react';
import Searchbar from "../components/commons/Searchbar";
import { useNavigate } from 'react-router-dom'; // useNavigate 가져오기
import "../../src/components/lists/MenuList"
import ServiceAccodion from '../components/commons/ServiceAccodion';
// import "./Main.css";
function Main() {
    const navigate = useNavigate(); // useNavigate 사용

    const handleSearchClick = (keyWord) => {
        // /menuList 경로로 이동하면서 검색값을 쿼리 파라미터로 전달
        navigate(`/menu?search=${keyWord}`);
    }
	return (
		<div id="mainContainer">
            <section id="section01">
            <div className='Main-background'></div>
            <img className='Main-front-text' src={process.env.PUBLIC_URL + '/images/Main-front-text.png'} alt="Main Front Text" />
               <div id='section01-box'>
                    <div className="main-search-bar">
                        <Searchbar/>
                    </div>
                        <div className='main-hash-tag' >
                        {/* 바나나맛 태그를 클릭하면 handleSearchClick 함수를 호출합니다. */}
                        <a onClick={() => handleSearchClick("바나나")}>
                            <div className='main-hash-tag-item'>#바나나맛</div>
                        </a>             
                        <a onClick={() => handleSearchClick("우유")}>          
                            <div className='main-hash-tag-item'>#우유</div>
                        </a> 
                        <a onClick={() => handleSearchClick("아이스크림")}> 
                            <div className='main-hash-tag-item'>#아이스크림</div>
                        </a>
                        <a onClick={() => handleSearchClick("투게더")}>
                            <div className='main-hash-tag-item'>#MD추천</div>
                        </a>
                        <a onClick={() => handleSearchClick("에이드")}>
                            <div className='main-hash-tag-item'>#여름추천</div>
                        </a>
                    </div>
                </div>
            </section>
            <section id="section02">
                <h2>방그레를 소개합니다:)</h2>
                <div id='main-category-box'>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/product01.png'} alt="product-category-01"/>
                        <p>아이스크림</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/product67.png'} alt="product-category-01"/>
                        <p>발효유</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/product81.png'} alt="product-category-01"/>
                        <p>주스</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/product43.png'} alt="product-category-01"/>
                        <p>우유/치즈</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/product74.png'} alt="product-category-01"/>
                        <p>커피</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/product69.png'} alt="product-category-01"/>
                        <p>음료</p>
                    </div>
                </div>
            </section>
            <section id="section03">
                <h2>그 다음엔...?</h2>
                <ServiceAccodion/>
            </section>
		</div>
	);
}

export default Main;