import MenuList from "../components/lists/MenuList";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import './Menus.css';

function Menus() {

    const userInfoString = sessionStorage.getItem('userInfo');
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
    const isAdmin = userInfo && userInfo.isAdmin; // Check if user is admin

    console.log('[Menus] isAdmin:', isAdmin); // 확인을 위해 관리자 여부 출력

    const navigate = useNavigate();
    const { state } = useLocation();
    const categoryType = state?.categoryType || '';

    console.log('[Menus] state: ', state);
    console.log('[Menus] categoryCode : ', categoryType);

    return (
        <div id="Menus" > 
        <div className='Main-background menu-background'></div>
            <div className="menuHead">
                <h2>메뉴 목록 </h2>
                {isAdmin && (
                    <button id="Menus-regist" onClick={() => navigate(`/menu/regist`)}>메뉴 추가</button>
                )} 
            </div>
            <MenuList categoryType={categoryType}/>
        </div>
    );
}

export default Menus;
