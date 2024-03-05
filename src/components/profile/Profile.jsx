import {
	StyledActive,
	StyledColumn,
	StyledInfoProfile,
	StyledName,
	StyledProfile,
	StyledProfileImage,
	StyledUserName
} from './profile.styles';

const Profile = ({ profileImage, name, username, active }) => {
	return (
		<>
			<StyledProfile>
				<StyledInfoProfile>
					<StyledProfileImage src={profileImage} alt='Profile Image' />
					<StyledColumn>
						<StyledName>{name}</StyledName>
						<StyledUserName>@{username}</StyledUserName>
					</StyledColumn>
				</StyledInfoProfile>
				<StyledActive $active={active}>
					{active ? 'Activo' : 'Inactivo'}
				</StyledActive>
				<button>Ver detalles</button>
			</StyledProfile>
		</>
	);
};

export default Profile;
