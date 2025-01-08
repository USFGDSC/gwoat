import React from 'react';
import { Typography, Box } from '@mui/material';
import Heading from '../shared/Heading';

// todo: add a carousel
const PeopleEntry = () => {
	return (
		<Box
			sx={{
				border: '2px solid black',
				padding: '16px',
				display: 'flex',
				flexDirection: 'center',
				justifyContent: 'center,',
				height: '350px',
				background: '#ececec',
				margin: '32px',
			}}
		>
			<Box
				sx={{
					height: '180px',
					width: '250px',
					backgroundColor: 'grey',
				}}
			></Box>
			<Box></Box>
		</Box>
	);
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PeopleSection = () => {
	return (
		<Box
			sx={{
				width: '100vw',
				minHeight: '100vh',
				backgroundColor: (theme) => theme.palette.blueberry.main,
				overflowX: 'scroll',
				padding: '64px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Box>
				<Heading>meet our e-board</Heading>
			</Box>
			<Box
				sx={{
					width: '100%',
					overflowX: 'scroll',
					display: 'flex',
					alignItems: 'center',
					flexGrow: 1,
				}}
			>
				{array.map((item, index) => (
					<PeopleEntry key={'people' + index} />
				))}
			</Box>
		</Box>
	);
};

export default PeopleSection;
