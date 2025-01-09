import { Box } from '@mui/material';
import { Instagram, LinkedIn, Email, GitHub } from '@mui/icons-material';

const links = {
	lt: 'https://google.com',
	inst: 'https://google.com',
	bullsc: 'https://google.com',
};

const CircleButton = ({ children, ...props }) => {
	return (
		<Box
			sx={{
				cursor: 'pointer',
				backgroundColor: 'gray',
				borderRadius: '50%',
				width: 40,
				height: 40,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				transition: 'background-color 0.15s ease',
				...props.sx,
				'&:hover': {
					backgroundColor: 'white',
				},
			}}
		>
			{children}
		</Box>
	);
};

const Floater = () => {
	return (
		<Box
			sx={{
				position: 'fixed',
				bottom: 10,
				right: 10,
				display: 'flex',
				gap: 2,
			}}
		>
			<CircleButton
				sx={{ backgroundColor: (theme) => theme.palette.seaGreen.main }}
			>
				<Instagram />
			</CircleButton>
			<CircleButton
				sx={{ backgroundColor: (theme) => theme.palette.blueberry.main }}
			>
				<LinkedIn />
			</CircleButton>
			<CircleButton
				sx={{ backgroundColor: (theme) => theme.palette.selectiveYellow.main }}
			>
				<GitHub />
			</CircleButton>
			<CircleButton
				sx={{ backgroundColor: (theme) => theme.palette.cinnabar.main }}
			>
				<Email />
			</CircleButton>
		</Box>
	);
};

export default Floater;
