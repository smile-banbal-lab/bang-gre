import React, { useCallback } from 'react'; // useCallback을 추가로 임포트
import Searchbar from "../components/commons/Searchbar";
import Collapse from './Collapse';
import { useNavigate } from 'react-router-dom';
import "./Main.css";

function Main() {
    const navigate = useNavigate();

    // 키워드를 이용한 검색 핸들러
    const handleSearchClick = (keyWord) => {
        navigate(`/menu?search=${keyWord}`);
    }

    // 카테고리 선택 핸들러
    const handleCategoryClick = useCallback((categoryType) => {
        navigate('/menu', { state: { categoryType } });
    }, [navigate]);

    return (
        <div id="mainContainer">
            <section id="section01">
                <div className='Main-background'></div>
                <img className='Main-front-text' src={process.env.PUBLIC_URL + '/images/Main-front-text.png'} alt="Main Front Text" />
                <div id='section01-box'>
                    <div className="main-search-bar">
                        <Searchbar />
                    </div>
                    <div className='main-hash-tag'>
                        {/* Hash tags for quick search */}
                        <button onClick={() => handleSearchClick("바나나")} className='main-hash-tag-item'>
                            #바나나맛
                        </button>
                        <button onClick={() => handleSearchClick("우유")} className='main-hash-tag-item'>
                            #우유
                        </button>
                        <button onClick={() => handleSearchClick("아이스크림")} className='main-hash-tag-item'>
                            #아이스크림
                        </button>
                        <button onClick={() => handleSearchClick("투게더")} className='main-hash-tag-item'>
                            #MD추천
                        </button>
                        <button onClick={() => handleSearchClick("에이드")} className='main-hash-tag-item'>
                            #여름추천
                        </button>
                    </div>
                </div>
            </section>
            <section id="section02">
                <h2>방그레를 소개합니다 :)</h2>
                <div id='main-category-box'>
                    {/* Product categories with clickable images */}
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/product01.png'} alt="Ice Cream" onClick={() => handleCategoryClick("아이스크림")} />
                        <p>아이스크림</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/product67.png'} alt="Fermented Milk" onClick={() => handleCategoryClick("발효유")} />
                        <p>발효유</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/product81.png'} alt="Juice" onClick={() => handleCategoryClick("주스")} />
                        <p>주스</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/product43.png'} alt="Milk and Cheese" onClick={() => handleCategoryClick("우유")} />
                        <p>우유/치즈</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/product74.png'} alt="Coffee" onClick={() => handleCategoryClick("커피")} />
                        <p>커피</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/product69.png'} alt="Beverage" onClick={() => handleCategoryClick("음료")} />
                        <p>음료</p>
                    </div>
                </div>
            </section>
            <section id="section03">
                <div>
                    <Collapse id="collapse"/>
                </div>
            </section>
        </div>
    );
}

export default Main;
