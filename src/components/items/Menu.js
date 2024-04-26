import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callGetMenuAPI } from '../../apis/MenuAPICalls';

function Menu({ id }) {

	const result = useSelector(state => state.menuReducer);
	const menu = result.menu;
	const dispatch = useDispatch();

	useEffect(
		() => {
			/* menu 호출 API */
			dispatch(callGetMenuAPI(id));
		},
		[]
	);

	return (
		menu && (
			<>
				<h3>메뉴 이름 : {menu.name}</h3>
				<h3>메뉴 가격 : {menu.price}</h3>
				<h3>메뉴 종류 : {menu.category.type}</h3>
				<h3>메뉴 상세 : {`'염분: '${menu.Information.Sodium}`}</h3>
				<img src={menu.image} style={{ maxWidth: 500 }} alt={menu.name} />
			</>
		)
	);
}

export default Menu;