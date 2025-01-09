import { Box } from '@mui/material';

const TitleBoxes = ({ children, ...props }) => {
	return (
		<Box
			sx={{
				position: 'relative',
				width: '100%',
				overflow: 'visible',
				background: 'transparent',
				border: '2px solid black',
				aspectRatio: 4 / 3,
				'&::before': {
					content: '""',
					position: 'absolute',
					top: 8,
					left: 8,
					width: '100%',
					height: '100%',
					background: 'inherit',
					border: '2px solid black',
					zIndex: -1,
				},
				padding: '32px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				...props.sx,
			}}
		>
			{children}
		</Box>
	);
};

export default TitleBoxes;
