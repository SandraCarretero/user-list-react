import { useState } from 'react';
import Filters from '../filters/Filters';
import Users from '../users/Users';
import { StyledTitle } from './container.styles';
import { USERS } from '../../constants/users';

const Container = () => {
	const [filterActive, setFilterActive] = useState(false);
	const [sortBy, setSortBy] = useState(0);
	const [search, setSearch] = useState(0);

	let filteredUsers = filteredUsersByActive(USERS, filterActive);
	filteredUsers = sortUsers(filteredUsers, sortBy);
	filteredUsers = filteredUsersByName(filteredUsers, search);

	return (
		<>
			<div>
				<StyledTitle>Listado de usuarios</StyledTitle>

				<Filters
					setFilterActive={setFilterActive}
					setSortBy={setSortBy}
					setSearch={setSearch}
				/>

				<Users users={filteredUsers} />
			</div>
		</>
	);
};

// Mostrar solo activos
const filteredUsersByActive = (users, filterActive) => {
	// return una copia del array
	if (!filterActive) return [...users];
	return users.filter(user => user.active);
};

// Ordenar por defecto o por orden alfabético
const sortUsers = (users, sortValue) => {
	const usersCopy = [...users];
	const sortValueNumber = Number(sortValue);
	if (sortValueNumber === 0) return usersCopy;
	return usersCopy.sort((a, b) => a.name.localeCompare(b.name));
};

const normalizeString = name => {
	return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const filteredUsersByName = (users, search) => {
	if (!search) return [...users];

	//
	const searchValue = normalizeString(search.toLowerCase());

	const filteredUsers = users.filter(user => {
		const normalizeUserName = normalizeString(user.name);

		return normalizeUserName.toLowerCase().includes(searchValue);
	});

	return filteredUsers;
};

export default Container;
