import VerifyForm from '../components/form/PasswordVerifyForm';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PasswordCheck() {

	const user = useSelector(state => state.userReducer);

	const { id } = user;

    const verifyStatus = !!localStorage.getItem('isVerify');

	if(verifyStatus) {
		return <Navigate to={`/user/${id}`} replace={ true }/>
	}

	return (

		<>
			<h1>비밀번호를 다시 한번 확인해 주세요</h1>
			<VerifyForm />
		</>
	);
}

export default PasswordCheck;