import VerifyForm from '../components/form/PasswordVerifyForm';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PasswordCheck() {

	const user = useSelector(state => state.userReducer);

	const { id } = user;

    const verifyStatus = !!sessionStorage.getItem('isVerify');

	if(verifyStatus) {
		return <Navigate to={`/user/${id}`} replace={ true }/>
	}

	return (

		<>
			<VerifyForm />
		</>
	);
}

export default PasswordCheck;