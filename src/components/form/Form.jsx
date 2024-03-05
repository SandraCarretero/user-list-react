import { StyledForm } from './form.styles';

const Form = () => {
	return (
		<>
			<StyledForm>
				<div>
					<input type='text' />
				</div>
				<div>
					<label htmlFor='only-active'>Sólo activos</label>
					<input type='checkbox' id='only-active' />
				</div>
				<select>
					<option value='0'>Por defecto</option>
					<option value='1'>Por nombre</option>
				</select>
			</StyledForm>
		</>
	);
};

export default Form;
