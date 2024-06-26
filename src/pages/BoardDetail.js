import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function MenuDetail() {

	/* 로그인 상태 확인 */
	const isAuthorized = !!sessionStorage.getItem('isLogin');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id } = useParams();
	const result = useSelector(state => state.CustomerReducer);

	const updateHandler = () => navigate(`/CustomerService/modify/${id}`);
	const deleteHandler = () => dispatch(callDeleteCustomerServiceAPI(id));

	useEffect(
		() => {
			/* 메뉴 삭제 완료 확인 후 /menu로 이동 */
			if (result.delete) {
				alert('게시판 삭제');
				navigate(`/CustomerService`);
			}
		}, // eslint-disable-next-line
		[result]
	);

	return (
		<div>
			<Menu id={id} />
			<div className="admin-buttonBox">
				{ /* 로그인 된 상황에만 button이 보이도록 조건부 랜더링 */}
				{(isAuthorized) &&
					<>
						<button onClick={updateHandler}>메뉴 수정</button>
						<button onClick={deleteHandler}>메뉴 삭제</button>
					</>
				}
			</div>
		</div>
	);
}

export default BoardDetail;