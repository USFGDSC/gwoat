import React from 'react';
import { Box, fontWeight } from '@mui/system';
import Heading from './Heading';
import { Typography } from '@mui/material';
import Link from 'next/link';

const Footer = () => {
	return (
		<Box
			sx={{
				backgroundColor: 'black',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					// flexDirection: 'column',
					// alignItems: 'center',
					justifyContent: 'space-evenly',
					minHeight: '40vh',
					backgroundColor: 'black',
					color: 'white',
					padding: '128px',
				}}
			>
				<Box>
					<Typography sx={{ marginBottom: '16px' }}>
						get in touch with us
					</Typography>
					<Heading variant="h2">Google Developers</Heading>
					<Heading variant="h2">Student Club</Heading>
					<Heading variant="h3">@ Uni of South Florida</Heading>
				</Box>
				<Box>
					<Typography sx={{ marginBottom: '16px' }}>
						contact information
					</Typography>
					<Heading variant="h3" sx={{ fontWeight: 400 }}>
						gdscatusf@gmail.com
					</Heading>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
							marginTop: '32px',
						}}
					>
						{/* navigation element here */}
						<Link href="/">
							<Typography fontSize="1.4rem">Home</Typography>
						</Link>

						<Link href="/about">
							<Typography fontSize="1.4rem">About</Typography>
						</Link>

						<Link href="/events">
							<Typography fontSize="1.4rem">Events</Typography>
						</Link>

						<Link href="/projects">
							<Typography fontSize="1.4rem">Projects</Typography>
						</Link>
					</Box>
				</Box>
			</Box>
			<Box>
				<Typography
					sx={{ textAlign: 'center', padding: '16px', color: 'white' }}
				>
					&copy; 2021 Google Developers Student Club @ USF
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
