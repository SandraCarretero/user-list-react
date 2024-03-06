import { SORTED_OPTIONS } from '../../constants/sortedOptions';
import { StyledFilters } from './filters.styles';

const Filters = ({ setFilterActive, setSortBy, setSearch }) => {
	return (
		<>
			<StyledFilters>
				<div>
					<input type='text'
					name='name'
					onInput={event => setSearch(event.target.value)} />
				</div>
				<div>
					<label htmlFor='only-active'>Sólo activos</label>
					<input
						type='checkbox'
						onChange={event => setFilterActive(event.target.checked)}
					/>
				</div>
				<select onChange={(event)=> setSortBy(event.target.value)}>
					<option value={0}>{SORTED_OPTIONS[0]}</option>
					<option value={1}>{SORTED_OPTIONS[1]}</option>
				</select>
			</StyledFilters>
		</>
	);
};

export default Filters;
