import { AuthBlock, InfoBlock, Title, SubTitle } from "./styles";

const AuthContainer = ({ title, subTitle, children }) => (
	<AuthBlock>
		<InfoBlock>
			<Title>{title}</Title>
			<SubTitle>{subTitle}</SubTitle>
		</InfoBlock>
		{children}
	</AuthBlock>
);

export default AuthContainer;
