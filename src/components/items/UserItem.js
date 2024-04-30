
function UserItem({ user }) {

	return (
		<>
			<div className="userItem">
                <div   div>				
                    <h3>이름 : {user.name}</h3>
                    <h3>전화번호 : {user.phone}</h3>
                    <h3>이메일 : {user.email}</h3>
                    <h3>주소 : {user.address}</h3>
                    <h3>아이디 : {user.userid}</h3>
                </div>
			</div>
			</>
);
}

export default UserItem;