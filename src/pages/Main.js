import React from 'react';
import Searchbar from "../components/commons/Searchbar";
import { useNavigate } from 'react-router-dom'; // useNavigate 가져오기
import "../../src/components/lists/MenuList"
import "./Main.css";
import { useDispatch, useSelector } from "react-redux"; // useSelector, useDispatch 추가
import { callGetMenuListAPI } from "../apis/MenuAPICalls"; // API 호출 함수 추가


function Main() {
    const navigate = useNavigate(); // useNavigate 사용
    const dispatch = useDispatch(); // useDispatch 사용

     // 메뉴 목록을 Redux Store에서 가져옴

    const handleSearchClick = (keyWord) => {
        // /menuList 경로로 이동하면서 검색값을 쿼리 파라미터로 전달
        navigate(`/menu?search=${keyWord}`);
    }

    // 이미지 클릭 핸들러
    const handleCategoryClick = (categoryType) => {
        // 선택한 카테고리를 Redux Store에 업데이트
        // dispatch(callGetMenuListAPI(categoryType)); // 선택한 카테고리를 기반으로 API 호출하여 메뉴 목록 가져옴
        // console.log('카테고리 타입',categoryType)
        // MenuList 페이지로 이동하면서 선택한 카테고리를 쿼리 파라미터로 전달
        // navigate(`/menu?category=${categoryType}`);
        navigate('/menu', { state: { categoryType: categoryType } });
        // console.log(`/menu?category=${categoryType}`);
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
                        <img src={process.env.PUBLIC_URL + '/images/product01.png'} alt="product-category-01" onClick={() => {handleCategoryClick("아이스크림")}}/>
                        <p>아이스크림</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/product67.png'} alt="product-category-01" onClick={() => {handleCategoryClick("발효유")}}/>
                        <p>발효유</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/product81.png'} alt="product-category-01" onClick={() => {handleCategoryClick("주스")}}/>
                        <p>주스</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/product43.png'} alt="product-category-01" onClick={() => {handleCategoryClick("우유")}}/>
                        <p>우유/치즈</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/product74.png'} alt="product-category-01" onClick={() => {handleCategoryClick("커피")}}/>
                        <p>커피</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/product69.png'} alt="product-category-01" onClick={() => {handleCategoryClick("음료")}}/>
                        <p>음료</p>
                    </div>
                </div>
            </section>
            <section id="section03">
                <h2>그 다음엔...?</h2>
                <div></div>
            </section>
		</div>
	);
}

export default Main;