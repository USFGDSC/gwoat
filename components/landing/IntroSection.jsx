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
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Typography
				variant="h4"
				mb={'16px'}
				sx={{
					fontWeight: 'bold',
					color: (theme) => theme.palette.primary.contrastText,
				}}
			>
				{title}
			</Typography>
			<Typography
				sx={{
					color: (theme) => theme.palette.primary.contrastText,
					textAlign: 'center',
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
				padding: 16,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Heading variant={'h1'}>Mission</Heading>
			<Typography textAlign={'center'} variant="h5">
				We provide students with a platform to do the most important thing a CS
				education is meant to: <strong>bridge theory and practice.</strong>
			</Typography>
			{/* <Typography width={'600px'} textAlign={'center'} variant="h5">
				<strong></strong>
			</Typography> */}
			<Box
				display={'grid'}
				gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }}
				gap={8}
				marginY={8}
			>
				<MissionBox
					title="Student Engagement"
					description="We wish to straighten the gap between theory and practice for our 800+ members."
				></MissionBox>
				<MissionBox
					title="Innovation and Creativity"
					description="We aim to encourage innovation, creativity, and problem-solving among students."
				></MissionBox>
				<MissionBox
					title="Strong Community"
					description="We want to nurture and foster a supportive and collaborative community of tech enthusiasts."
				></MissionBox>
			</Box>
		</Box>
	);
};

export default IntroSection;
