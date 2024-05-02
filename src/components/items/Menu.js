import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callGetMenuAPI } from '../../apis/MenuAPICalls';
import './Menu.css';

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
				<div id='menu-detail'>
					
					<tbody className='menu-info'>
					<h2>{menu.name} 상세정보</h2>
						<tr>
							<td className='menu-detail-info-name'>품 명</td>
							<td>{menu.name}</td>
							<td className='menu-detail-info-name'>종 류</td>
							<td>{menu.category.type}</td>
							<td className='menu-detail-info-name'>가 격</td>
							<td>{menu.price}원</td>
						</tr>
						<tr>
							<td className='menu-detail-info-name'>나트륨</td>
							<td>{menu.Information.Sodium}</td>
							<td className='menu-detail-info-name'>당 류</td>
							<td>{menu.Information.Sugar}</td>
							<td className='menu-detail-info-name'>지 방</td>
							<td>{menu.Information.Fat}</td>
						</tr>
						<tr> 
							<td className='menu-detail-info-name'>트랜스지방</td>
							<td>{menu.Information.TransFat}</td>
							<td className='menu-detail-info-name'>콜레스테롤</td>
							<td>{menu.Information.Cholesterol}</td>
							<td className='menu-detail-info-name'>단백질</td>
							<td>{menu.Information.protein}</td>
						</tr>
					</tbody>
					<div className='menu-img'>
						<img src={menu.image} style={{ maxWidth: 300 }} alt={menu.name} />
					</div>
				</div>
				<p className='menu-detail-p'>기준용량(150ml)당 열량 265kcal / *영양성분 기준치 : 1일 영양성분 기준치에 대한 비율</p>
			</>
		)
	);
}

export default Menu;