import React, { useState } from 'react'; // useState 가져오기
import { useNavigate } from 'react-router-dom'; // useNavigate 가져오기
import "../lists/MenuList"
import "./Commons.css";

function Searchbar() {
    const [searchValue, setSearchValue] = useState(''); // useState 사용
    const navigate = useNavigate(); // useNavigate 사용

    const handleSearchClick = () => {
        // /menuList 경로로 이동하면서 검색값을 쿼리 파라미터로 전달
        navigate(`/menu?search=${searchValue}`);
    }


    return (
        <div id="Searchbar">
            <input 
                id="menu-search-input"
                type="search"
                placeholder="검색어를 입력해주세요"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)} />
            <button id="menu-search-button" onClick={handleSearchClick} >SEARCH</button>
        </div>
    );
}

export default Searchbar;