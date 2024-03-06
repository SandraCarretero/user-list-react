import Profile from '../profile/Profile';

const Users = ({ users }) => {
	if (!users || users.length === 0) return;
	return (
		<>
			{users.map(user => (
				<Profile key={user.userId} {...user} />
			))}
		</>
	);
};

export default Users;
