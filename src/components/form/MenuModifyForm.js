import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callModifyMenuAPI } from '../../apis/MenuAPICalls';

function MenuModifyForm() {

	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const result = useSelector(state => state.menuReducer);

	/* 입력 값 state 저장 */
	const [modifyMenu, setModifyMenu] = useState(
		{
			id: 0,
			name: '',
			category: {
				type: '',
				image: ''
			},
			flavor: [''],
			price: '',
			image: ''
		}
	);

	/* 입력 값 변경 시 이벤트 핸들러 */
	const onChangeHandler = (e) => {

		let name = e.target.name;
		let value = e.target.value;

		/* json-server에 저장될 데이터 타입 맞추기 위한 코드 */
		switch (name) {
            case 'price':
                value = parseInt(value);
                break;

			case 'category':
				setModifyMenu({
					...modifyMenu,
					category:{
						...modifyMenu.category,
						type: value
					}
				});
				return;
            
        }
		setModifyMenu(
			{
				...modifyMenu,
				id: id,
				[name]: value
			}
		);

	}

	/* 파일 첨부 시 동작하는 이벤트 핸들러 */
	const fileChangeHandler = async (e) => {
		const file = e.target.files[0];
		const base64 = await convertBase64(file);
		setModifyMenu(
			{
				...modifyMenu,
				detail: {
					description: modifyMenu.detail.description,
					image: base64
				}
			}
		);
	}

	/* FileReader API를 통해 input type="file"에 첨부 된 파일을 base64 인코딩 형식으로 변환 */
	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file)
			fileReader.onload = () => {
				resolve(fileReader.result);
			}
			fileReader.onerror = (error) => {
				reject(error);
			}
		})
	}

	useEffect(
		() => {
			/* 메뉴 수정 완료 확인 후 /menu로 이동 */
			if (result.modify) {
				alert('메뉴 수정');
				navigate(`/menu`);
			}
		},
		[result]
	);

	const onClickHandler = () => {
		/* modifyMenu에 대한 유효성 검사 후 호출 */
		dispatch(callModifyMenuAPI(modifyMenu));
	}

	return (
		<>
			<h1>{id}번 메뉴 수정</h1>
			<label>메뉴 이름 : </label>
			<input type="text" name="name" value={modifyMenu.name} onChange={onChangeHandler} />
			<br />
			<label>메뉴 가격 : </label>
			<input type="number" name="price" value={modifyMenu.price} onChange={onChangeHandler} />
			<br />
			<label>메뉴 특징(맛) : </label>
			<input type="text" name="flavor" value={modifyMenu.flavor} onChange={onChangeHandler} />
			<br/>
			<label>카테고리 : </label>
			<select name="category" value={modifyMenu.category.type} onChange={onChangeHandler}>
				<option >아이스크림</option>
				<option>우유</option>
				<option >발효유</option>
				<option>커피</option>
				<option>주스</option>
				<option >음료</option>
				<option>기타</option>
			</select>
			<br/>
			<label>사진 : </label>
			<input
				type="file"
				name="image"
				accept='image/*'
				onChange={fileChangeHandler}
			/>
			<br />
			<button onClick={onClickHandler}>메뉴 수정</button>
		</>
	)
}

export default MenuModifyForm;