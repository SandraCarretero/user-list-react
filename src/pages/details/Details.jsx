import { useParams } from 'react-router-dom';
import ProfileDetails from '../../components/profileDetails/ProfileDetails';
import { USERS } from '../../constants/users';
import { StyledDetails } from './details.styles';

const Details = () => {
	const { userId } = useParams();
    const user = USERS.find(user => user.userId === userId)

	return (
		<StyledDetails>
			<ProfileDetails {...user}/>
		</StyledDetails>
	);
};

export default Details;
