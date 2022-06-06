import {
	FooterContainer,
	FooterGrid,
	FooterItemContainer,
	FooterContent,
} from './StyledFooter';

const Footer = () => {
	return (
		<>
			<FooterContainer>
				<FooterGrid item xs={12} md={12}>
					<FooterItemContainer>
						<FooterContent>
							Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies
							Pvt Ltd
						</FooterContent>
					</FooterItemContainer>
				</FooterGrid>
			</FooterContainer>
		</>
	);
};

export default Footer;
