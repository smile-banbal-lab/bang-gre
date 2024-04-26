import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MenuItem from '../items/MenuItem';
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";


function MenuList() {

	const result = useSelector(state => state.menuReducer);
	const menuList = result.menulist;
	const dispatch = useDispatch();

	console.log(menuList);

	useEffect(
		() => {
			/* menuList 호출 API */
			dispatch(callGetMenuListAPI());
		},
		[]
	);


	return (
		menuList && (
			<>
			<div>
                    <input type="checkbox" />
                    <label >아이스크림</label>
                    <input type="checkbox"  />
                    <label >우유</label>
                    <input type="checkbox" />
                    <label >발효유</label>
                    <input type="checkbox" />
                    <label >커피</label>
                    <input type="checkbox" />
                    <label >주스</label>
                    <input type="checkbox" />
                    <label >음료</label>
                    
                    <input 
                        type='search' 
                        name="menuName" 
                        placeholder={'메뉴 이름을 입력해주세요'}>
                        {/* onChange={e => setSearchValue(e.target.value)} */}
                    </input>
					<button>검색</button>
                </div>
			<div className="menuBox">
				{menuList.map(menu => <MenuItem key={menu.id} menu={menu} />)}
			</div>
			</>
		)
	);
}

export default MenuList;