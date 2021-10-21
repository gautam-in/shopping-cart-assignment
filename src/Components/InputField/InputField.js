import React from 'react';
import styled from 'styled-components';
import './inputField.css';

const InputFieldError = styled.p`
	color: #D8000C;
	text-transform: capitalize;
	text-align: left;
`;

export default function InputField({
	type,
	name,
	value,
	label,
	handleForm,
	handleError,
	error,
	regex,
	autoComplete,
	required
}) {
	return (
		<>
			<div className="input-cont">
				<input
					type={type}
					name={name}
					required={required}
					onChange={(e) => { handleForm(e); handleError(e, regex) }}
					value={value}
					autoComplete={autoComplete}
				/>
				<label className="label-name">
					<span className="content-name">
						{label}
					</span>
				</label>
			</div>
			{error && <InputFieldError tabIndex='0' aria-label={error}>{error}</InputFieldError>}
		</>
	)

}


