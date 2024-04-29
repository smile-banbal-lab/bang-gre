import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MenuItem from '../items/MenuItem';
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";


function CustomerService() {

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
			<div class="titlelist">
				<ul>
					<li class> Home </li>
					<li class> About </li>
					<li class> Product </li>
					<li class> Contact </li>
					<li class>환영합니다 <br/> user님 </li>   
					<li class> Mypage <br/> Logout </li>   
				</ul>
			</div>
			<div>
				<p class="notice-title">FAQ</p>
			</div>
			<div class="categorysection1">
				<ul>
					<li>이메일 상담</li>
					<li>
						빙그레에 궁금한 사항을 문의해 주세요.
						최대한 빠른 시일내에 친절하게 답변해드리겠습니다.</li>
					<li><button>상담하기</button></li>
					
				</ul>
			</div>
			<div class="categorysection2">
				<ul>
					<li>전화상담</li>
					<li> 080-200-0056 </li>
					<li>월~금(공휴일 제외) <br/>09:00~17:30</li>
				</ul>
			</div>
			
			</>
		)
	);
}

export default MenuList;