import { useNavigate } from 'react-router-dom';
import { StyledProfileDetails } from './profileDetails.styles';

const ProfileDetails = ({
	profileImage,
	name,
	age,
	username,
	email,
	address,
	phone
}) => {

	const navigate = useNavigate();
	return (
		<>
			<StyledProfileDetails>
				<img src={profileImage} alt='Profile Image' />
				<h2>{name}</h2>
				<span>Im {age}</span>
				<span>My username is @{username}</span>
				<span>You can contact me in {email}</span>
				<span>My address is: {address.street}, {address.city}, {address.zipCode}</span>
				<span>You can call me at {phone}</span>
				<button onClick={() => navigate('/')}>Volver a usuarios</button>
			</StyledProfileDetails>
		</>
	);
};

export default ProfileDetails;
