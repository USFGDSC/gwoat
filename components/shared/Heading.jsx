import { Typography } from '@mui/material';

const Heading = ({ children, variant, ...props }) => {
	return (
		<Typography
			variant={variant ? variant : 'h1'}
			component={variant ? variant : 'h1'}
			fontWeight="bold"
			{...props}
		>
			{children}
		</Typography>
	);
};

export default Heading;
