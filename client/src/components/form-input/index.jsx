import {
	GroupContainer,
	FormInputContainer,
	FormInputLabel,
	ErrorMessage,
} from "./styles";

const FormInput = ({ handleChange, label, error, ...props }) => {
	return (
		<GroupContainer>
			<FormInputContainer
				placeholder=""
				title={label}
				onChange={handleChange}
				{...props}
			/>
			{label ? (
				<FormInputLabel
					htmlFor={props.id}
					className={props.value.length ? "shrink" : ""}
				>
					{label}
				</FormInputLabel>
			) : null}
			{error ? <ErrorMessage>{error}</ErrorMessage> : null}
		</GroupContainer>
	);
};

export default FormInput;
