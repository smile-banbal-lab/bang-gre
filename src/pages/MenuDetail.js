import Menu from "../components/items/Menu";
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callDeleteMenuAPI } from '../apis/MenuAPICalls';
import Button from 'react-bootstrap/Button';


function MenuDetail() {

    /* 로그인 상태 확인 */
    const isAuthorized = !!sessionStorage.getItem('isLogin');
    const userInfoString = sessionStorage.getItem('userInfo');
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
    const isAdmin = userInfo && userInfo.isAdmin; // Check if user is admin
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const result = useSelector(state => state.menuReducer);

    const updateHandler = () => navigate(`/menu/modify/${id}`);
    const deleteHandler = () => dispatch(callDeleteMenuAPI(id));

    useEffect(
        () => {
            /* 메뉴 삭제 완료 확인 후 /menu로 이동 */
            if (result.delete) {
                alert('메뉴 삭제');
                navigate(`/menu`);
            }
        }, // eslint-disable-next-line
        [result]
    );

    return (
        <div id="MenuDetail-page">
            <Menu id={id} />
            <div className="admin-buttonBox">
                { /* 로그인 된 상황에만 button이 보이도록 조건부 랜더링 */}
                {(isAuthorized && isAdmin) && // 관리자인 경우에만 버튼 표시
                    <>
                        <Button variant="primary" onClick={updateHandler}>메뉴수정</Button>{''}
                        <Button variant="danger" onClick={deleteHandler}>메뉴삭제</Button>{''}
                    </>
                }
            </div>
        </div>
    );
}

export default MenuDetail;
