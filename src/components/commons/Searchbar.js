import React, { useState } from 'react'; // useState 가져오기
import "../lists/MenuList"
import "./Commons.css";

function Searchbar() {
    const [searchValue, setSearchValue] = useState(''); // useState 사용

    return (
        <div id="Searchbar">
            <input 
                id="menu-search-input"
                type="search"
                placeholder="검색어를 입력해주세요"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)} />
            <button id="menu-search-button" >SEARCH</button>
        </div>
    );
}

export default Searchbar;s