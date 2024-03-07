import { useParams } from 'react-router-dom';
import ProfileDetails from '../../components/profileDetails/ProfileDetails';
import { USERS } from '../../constants/users';
import { StyledDetails } from './details.styles';

const Details = () => {
	const { id } = useParams();
    const user = USERS.find(user => user.userId === id)
    console.log(user)

	if (!user) {return <div>No se encontró ningún usuario con el ID proporcionado</div>;}

	return (
		<StyledDetails>
			<ProfileDetails {...user}/>
		</StyledDetails>
	);
};

export default Details;
