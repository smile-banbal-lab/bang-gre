import { Link } from 'react-router-dom';
import { addToCart } from '../../actions/cartActions';
import { useDispatch } from 'react-redux';

function MenuItem({ menu, categoryType }) {
	const dispatch = useDispatch();
	// const categoryType = menu.category ? menu.category.type : '';

	const addToCartHandler = () =>{
		dispatch(addToCart(menu)); 
		// console.log('menu 확인', menu)
	};

	return (
		<>
		<Link to={`/menu/${menu.id}`}>
			<div className="menuItem">
				<h3>이름 : {menu.name}</h3>
				<h3>가격 : {menu.price}</h3>
				{categoryType && <h4>종류 : {categoryType}</h4>}
				<img src={menu.image} style={{ maxWidth: 200 , maxHeight: 200}} alt={menu.name} />
				<button className='menuItem-button' onClick={addToCartHandler}>장바구니 넣기</button>
			</div>
		</Link>
			</>
);
}

export default MenuItem;