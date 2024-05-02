import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Commons.css";

function Searchbar() {
    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();

    const handleSearchClick = () => {
        if (searchValue.trim()) {  // 검색어가 비어있지 않은 경우에만 네비게이트 실행
            navigate(`/menu?search=${searchValue}`);
        }
    }

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && searchValue.trim()) {
            handleSearchClick();
        }
    }

    return (
        <div id="Searchbar">
            <input 
                id="menu-search-input"
                type="search"
                placeholder="검색어를 입력해주세요"
                value={searchValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <button id="menu-search-button" onClick={handleSearchClick}>SEARCH</button>
        </div>
    );
}

export default Searchbar;
