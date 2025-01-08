import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Heading from '../shared/Heading';

const MissionBox = ({ title, description }) => {
	return (
		<Box
			sx={{
				border: '2px solid black',
				padding: '20px',
				minHeight: '300px',
				background: (theme) => theme.palette.primary.dark,
				borderRadius: '8px',
			}}
		>
			<Typography
				variant="h6"
				mb={'16px'}
				sx={{
					color: (theme) => theme.palette.primary.contrastText,
				}}
			>
				{title}
			</Typography>
			<Typography
				sx={{
					color: (theme) => theme.palette.primary.contrastText,
				}}
			>
				{description}
			</Typography>
		</Box>
	);
};

const IntroSection = () => {
	return (
		<Box
			sx={{
				backgroundColor: (theme) => theme.palette.primary.light,
				width: '100vw',
				minHeight: '100vh',
				padding: '64px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Heading variant={'h1'} margin="64px">
				Mission
			</Heading>
			<Typography width={'600px'} textAlign={'center'} variant="h5">
				We provide students with a platform to do the most important thing a CS
				education is meant to:
			</Typography>
			<Typography width={'600px'} textAlign={'center'} variant="h5">
				<strong>bridge theory and practice.</strong>
			</Typography>
			<Box
				display={'grid'}
				gridTemplateColumns={'1fr 1fr 1fr'}
				gap={8}
				marginY={8}
			>
				<MissionBox
					title="Lorem ipsum dolor"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugit autem dignissimos, dolor nemo ex totam, obcaecati in facilis dolorum est. Qui saepe natus, ex facilis harum placeat eveniet error."
				></MissionBox>
				<MissionBox
					title="Lorem ipsum dolor"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugit autem dignissimos, dolor nemo ex totam, obcaecati in facilis dolorum est. Qui saepe natus, ex facilis harum placeat eveniet error."
				></MissionBox>
				<MissionBox
					title="Lorem ipsum dolor"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugit autem dignissimos, dolor nemo ex totam, obcaecati in facilis dolorum est. Qui saepe natus, ex facilis harum placeat eveniet error."
				></MissionBox>
			</Box>
		</Box>
	);
};

export default IntroSection;
