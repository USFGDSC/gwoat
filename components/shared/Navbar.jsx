import { Box, Typography } from '@mui/material';

const Navbar = () => {
	return (
		<Box
			component={'nav'}
			sx={{
				height: '64px',
				width: '100vw',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				// position: 'fixed',
				zIndex: 999,
				background: 'var(--background)',
			}}
		>
			<Typography fontWeight="bold" margin={2}>
				Home
			</Typography>
			<Typography fontWeight="bold" margin={2}>
				About
			</Typography>
			<Typography fontWeight="bold" margin={2}>
				Projects
			</Typography>
			<Typography fontWeight="bold" margin={2}>
				People
			</Typography>
		</Box>
	);
};

export default Navbar;
