import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MenuItem from '../items/MenuItem';
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";
import "../commons/Commons.css"


function MenuList() {
    const [searchValue, setSearchValue] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredMenuList, setFilteredMenuList] = useState([]);

    const result = useSelector(state => state.menuReducer);
    const menuList = result.menulist;
	console.log('메뉴 리스트: ', menuList);
    const dispatch = useDispatch();

    useEffect(() => {
        /* menuList 호출 API */
        dispatch(callGetMenuListAPI());
    }, []);

    useEffect(() => {
		if (menuList && menuList.length > 0) {
			// 메뉴 목록이 업데이트되면 필터링을 수행합니다.
			filterMenuList();

		}
    }, [menuList, selectedCategories, searchValue]);
    // }, [menuList]);

    const filterMenuList = () => {
        let filtered = [...menuList];

        if (selectedCategories.length > 0) {
            filtered = filtered.filter(menu => selectedCategories.includes(menu.category.type));
        }

        if (searchValue.trim() !== '') {
            filtered = filtered.filter(menu => menu.name.toLowerCase().includes(searchValue.toLowerCase()));
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

	return (
		menuList && (
			<>
				<div id='MenuList'>
					{/* 카테고리 선택 필터 */}
					<label>카테고리 선택:</label>
					<input
						type="checkbox"
						checked={selectedCategories.includes('아이스크림')}
						onChange={() => handleCategoryChange('아이스크림')}
					/>
					<label>아이스크림</label>
					<input
						type="checkbox"
						checked={selectedCategories.includes('우유')}
						onChange={() => handleCategoryChange('우유')}
					/>
					<label>우유</label>
					<input
						type="checkbox"
						checked={selectedCategories.includes('발효유')}
						onChange={() => handleCategoryChange('발효유')}
					/>
					<label>발효유</label>
					<input
						type="checkbox"
						checked={selectedCategories.includes('커피')}
						onChange={() => handleCategoryChange('커피')}
					/>
					<label>커피</label>
					<input
						type="checkbox"
						checked={selectedCategories.includes('주스')}
						onChange={() => handleCategoryChange('주스')}
					/>
					<label>주스</label>
					<input
						type="checkbox"
						checked={selectedCategories.includes('음료')}
						onChange={() => handleCategoryChange('음료')}
					/>
					<label>음료</label>
					<br/>
					{/* 검색 필터 */}
                    <div id='Category-Searchbar'>
                        <input
                            type='search'
                            placeholder={'메뉴 이름을 입력해주세요'}
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                            id="category-search-input"
                        />
                        <br/>
                        <button onClick={filterMenuList} id="category-search-button">SEARCH</button>
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