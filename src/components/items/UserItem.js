
function UserItem({ user }) {

	return (
		<>
			<div className="userItem">
                <div   div>
                    <ul className="userData">
                        <li>이름 : {user.name}</li>
                        <li>전화번호 : {user.phone}</li>
                        <li>이메일 : {user.email}</li>
                        <li>주소 : {user.address}</li>
                        <li>아이디 : {user.userid}</li>
                    </ul>
                </div>
			</div>
			</>
);
}

export default UserItem;