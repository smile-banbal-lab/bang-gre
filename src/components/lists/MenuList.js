import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MenuItem from '../items/MenuItem';
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";
import { useLocation } from 'react-router-dom';
import "../commons/Commons.css"


function MenuList() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialSearch = queryParams.get('search') || '';

    const [searchInput, setSearchInput] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredMenuList, setFilteredMenuList] = useState([]);

    const result = useSelector(state => state.menuReducer);
    const menuList = result.menulist;
	console.log('메뉴 리스트: ', menuList);
    const dispatch = useDispatch();

    useEffect(() => {
        /* menuList 호출 API */
        dispatch(callGetMenuListAPI());
    }, [dispatch]);

    useEffect(() => {
        // URL의 쿼리 파라미터에서 검색어가 변경될 때 필터링을 다시 수행
        setSearchInput(initialSearch);
    }, [initialSearch]);

    useEffect(() => {
		if (menuList && menuList.length > 0) {
			// 메뉴 목록이 업데이트되면 필터링을 수행합니다.
			filterMenuList();

		}
    }, [menuList, selectedCategories]);
    // }, [menuList]);

    const filterMenuList = () => {
        let filtered = [...menuList];

        if (selectedCategories.length > 0) {
            filtered = filtered.filter(menu => selectedCategories.includes(menu.category.type));
        }
        if (searchInput.trim() !== '') {
            filtered = filtered.filter(menu => menu.name.toLowerCase().includes(searchInput.toLowerCase()));
        }

        // filteredMenuList 상태를 업데이트합니다.
        setFilteredMenuList(filtered);
    };

    const handleCategoryChange = categoryType => {
        const newSelectedCategories = [...selectedCategories];
    
        if (newSelectedCategories.includes(categoryType)) {
            // 이미 선택된 카테고리면 제거합니다.
            const index = newSelectedCategories.indexOf(categoryType);
            newSelectedCategories.splice(index, 1);
        } else {
            // 선택된 카테고리 목록에 추가합니다.
            newSelectedCategories.push(categoryType);
        }
    
        // 선택된 카테고리 목록을 업데이트합니다.
        setSelectedCategories(newSelectedCategories); 
    };


    const handleSearch = () => {
        // 검색어 상태를 업데이트하고 필터링을 수행합니다.
        filterMenuList();
    };

    const handleKeyPress = e => {
        // 엔터를 누르면 검색이 실행됩니다.
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

	return (
		menuList && (
			<>
				<div id='MenuList'>
					{/* 카테고리 선택 필터 */}
                    <div id='category-select'>
                    <button onClick={() => handleCategoryChange('아이스크림')} style={{ backgroundColor: selectedCategories.includes('아이스크림') ? '#FFDEFE' : 'rgb(19, 157, 232)', color: 'black', fontWeight: 'bold' }}>아이스크림</button>
                    <button onClick={() => handleCategoryChange('우유')} style={{ backgroundColor: selectedCategories.includes('우유') ? '#FFDEFE' : 'rgb(19, 157, 232)', color: 'black', fontWeight: 'bold' }}>우유</button>
                    <button onClick={() => handleCategoryChange('발효유')} style={{ backgroundColor: selectedCategories.includes('발효유') ? '#FFDEFE' : 'rgb(19, 157, 232)', color: 'black', fontWeight: 'bold' }}>발효유</button>
                    <button onClick={() => handleCategoryChange('커피')} style={{ backgroundColor: selectedCategories.includes('커피') ? '#FFDEFE' : 'rgb(19, 157, 232)', color: 'black', fontWeight: 'bold' }}>커피</button>
                    <button onClick={() => handleCategoryChange('주스')} style={{ backgroundColor: selectedCategories.includes('주스') ? '#FFDEFE' : 'rgb(19, 157, 232)', color: 'black', fontWeight: 'bold' }}>주스</button>
                    <button onClick={() => handleCategoryChange('음료')} style={{ backgroundColor: selectedCategories.includes('음료') ? '#FFDEFE' : 'rgb(19, 157, 232)', color: 'black'}}>음료</button>
                    </div>
					<br/>
					<br/>
					{/* 검색 필터 */}
                    <div id='Category-Searchbar'>
                        <input
                            type='search'
                            placeholder={'메뉴 이름을 입력해주세요'}
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                            onKeyDown= {handleKeyPress} // 엔터를 눌렀을 때 검색이 실행됩니다.
                            id="category-search-input"
                        />
                        <br/>
                        <button onClick={handleSearch} id="category-search-button">SEARCH</button>
                    </div>
                </div>

                <div className="menuBox">
                    {/* 필터링된 메뉴 목록을 표시합니다. */}
                    {filteredMenuList.map(menu => (
                        <MenuItem key={menu.id} menu={menu} />
                    ))}
                </div>
			</>
		)
	);
}

export default MenuList;