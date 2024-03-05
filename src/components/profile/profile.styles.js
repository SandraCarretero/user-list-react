import styled from 'styled-components';

const StyledProfile = styled.div`
	width: 500px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem;
	margin: 1rem auto;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
	border-radius: 0.75rem;
`;

const StyledInfoProfile = styled.div`
	display: flex;
	align-items: center;
`;

const StyledColumn = styled.span`
	width: 200px;
	display: flex;
	flex-direction: column;
`;

const StyledProfileImage = styled.img`
	width: 50px;
	border-radius: 50%;
	margin-right: 1rem;
`;

const StyledName = styled.h2`
	font-size: 1rem;
	margin: 0.25rem 0px;
`;

const StyledUserName = styled.span`
	font-size: 0.75rem;
	margin: 0px;
`;

const StyledActive = styled.span`
	color: ${({ $active }) => ($active ? '#13b176' : '#ce3131')};
`;

export {
	StyledProfile,
	StyledInfoProfile,
	StyledProfileImage,
	StyledColumn,
	StyledName,
	StyledUserName,
	StyledActive
};
