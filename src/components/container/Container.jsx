import { USERS } from '../../constants/users';
import Form from '../form/Form';
import Profile from '../profile/Profile';
import { StyledTitle } from './container.styles';

const Container = () => {
	return (
		<>
			<div>
				<StyledTitle>Listado de usuarios</StyledTitle>

				<Form />

				{USERS.map(user => (
					<Profile key={user.userId} {...user} />
				))}
			</div>
		</>
	);
};

export default Container;
