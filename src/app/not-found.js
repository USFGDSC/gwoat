import React from 'react';
import Heading from '../../components/shared/Heading';
import { Box } from '@mui/material';

const notFound = () => {
	return (
		<Box
			sx={{
				backgroundColor: 'black',
				display: 'flex',
				height: '100vh',
				width: '100vw',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<Heading variant="h2" color="white" sx={{ marginBottom: 4 }}>
				🚧🚧🚧 hold your horses! 🚧🚧🚧
			</Heading>
			<Heading variant="h4" color="white">
				this page is not ready yet. maybe you should check back soon? call me
				later?
			</Heading>
		</Box>
	);
};

export default notFound;
