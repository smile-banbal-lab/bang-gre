import React from 'react';
import Searchbar from "../components/commons/Searchbar";
import "./Main.css";
function Main() {

	return (
		<div id="mainContainer">
            <section id="section01">
            <img src={process.env.PUBLIC_URL + '/images/Main-front-text.png'} alt="Main Front Text" />
                <div className="main-search-bar">
                    <Searchbar/>
                </div>
                <div className='main-hash-tag'>
                   <div className='main-hash-tag-item'>#바나나맛</div>
                   <div className='main-hash-tag-item'>#우유</div>
                   <div className='main-hash-tag-item'>#아이스크림</div>
                   <div className='main-hash-tag-item'>#MD추천</div>
                   <div className='main-hash-tag-item'>#여름추천</div>
                </div>
            </section>
            <section id="section02">
                <div id='main-category-box'>
                    <div className='category-box-item'></div>
                </div>
            </section>
            <section id="section03">

            </section>
		</div>
	);
}

export default Main;