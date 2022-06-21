import {Typography} from '@mui/material';
import theme from '../../theme';
import MuiButton from '../common/muiButton';
import './styles.scss';

const CategoryCard = ({details, index}) => {
	return (
		<>
			<section style={{gridTemplateColumns: index % 2 === 0 ? '0.75fr 1.25fr' : '1.25fr 0.75fr'}} className='catcard-wrapper'>
				<figure style={{order: index % 2 === 0 ? 0 : 1}} className='catcard-item1'>
					<img src={details?.imageUrl} alt={details?.description} />
				</figure>
				<article className='catcard-item2'>
					<Typography component="h6" variant='h6'  >
						{details?.name}
					</Typography>
					<Typography gutterBottom variant='p' fontWeight={theme.typography.fontWeightMedium} component="p" >
						{details?.description}
					</Typography>
					<a href="/products">

						<MuiButton variant="contained">
							<span>
							Explore {details?.name}
							</span>
						</MuiButton>
					</a>
				</article>
			</section>

		</>
	);
};

export default CategoryCard;