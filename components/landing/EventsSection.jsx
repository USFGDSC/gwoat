import React from 'react';
import { useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { EmergencyOutlined } from '@mui/icons-material';
import Heading from '../shared/Heading';
import Image from 'next/image';

const events = [
	{
		name: 'Embarc Collective Company Tour',
		date: 'November 18, 2024',
		description: 'Exclusive company tour and internship showcase event.',
		attendees: 50,
		images: ['/assets/images/Embarc.jpg', '/assets/images/Embarc1.jpg'],
	},
	{
		name: 'DevFest Tampa Bay 2024',
		date: 'October 5, 2024',
		description: 'A large-scale event with over 400 attendees.',
		attendees: 400,
		images: ['/assets/images/DevFest2024.jpg'],
	},
	{
		name: 'DevCon Tampa Bay 2024',
		date: 'April 6, 2024',
		description:
			'Event featuring over 100 attendees and more than 25 technical experts/speakers.',
		attendees: 100,
		images: [
			'/assets/images/DevCon2024.jpg',
			'/assets/images/DevCon20241.jpg',
			'/assets/images/DevCon20242.jpg',
		],
	},
	{
		name: 'DevFest Tampa Bay 2023',
		date: 'October 21, 2023',
		description:
			'Largest technical event during Fall 2023, partnered with 5 organizations across campus, achieved almost 200 attendees.',
		attendees: 200,
		images: [
			'/assets/images/DevFest2023.jpg',
			'/assets/images/DevFest20231.jpg',
		],
	},
	{
		name: 'Build Your Own Portfolio Workshop',
		date: 'September 25, 2023',
		description:
			'A hands-on workshop where 70 attendees left happily with their very own website portfolio.',
		attendees: 70,
		images: [
			'/assets/images/pfolio.jpg',
			'/assets/images/pfolio1.jpg',
			'/assets/images/pfolio2.jpg',
		],
	},
	{
		name: 'Innovation Fest 2023',
		date: 'February 25, 2023',
		description: 'A major event with over 300 attendees.',
		attendees: 300,
		images: ['/assets/images/innofest.jpg', '/assets/images/innofest2.jpg'],
	},
];

const EventsSection = () => {
	const [event, setEvent] = useState(0);

	return (
		<Box
			sx={{
				backgroundColor: (theme) => theme.palette.selectiveYellow.main,
				padding: '64px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100vw',
			}}
			component="section"
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					margin: '64px',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Heading margin={2}>1 club.</Heading>
				<Heading margin={2}>100+ events.</Heading>
				<Heading margin={2}>10000+ attendees.</Heading>
			</Box>

			<Box
				width="100%"
				display="grid"
				gridTemplateColumns={{
					xs: '1fr',
					sm: '1fr 1fr',
				}}
				margin="64px"
				gap={{ xs: 2, sm: 4 }}
			>
				<Box>
					<Divider sx={{ border: '1px solid black' }} />
					{events.map((eventItem, index) => (
						<Box key={'event' + index}>
							<Box
								onMouseOver={() => setEvent(index)}
								sx={{
									padding: '32px',
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<EmergencyOutlined
									sx={{
										opacity: event === index ? 1 : 0,
										transition: 'opacity 0.15s ease-in-out',
										marginLeft: '16px',
										fontSize: '1.2rem',
									}}
								/>
								<Typography
									variant="h5"
									fontWeight={600}
									sx={{
										marginLeft: event === index ? '16px' : '24px',
										transition: 'margin-left 0.15s ease-in-out',
									}}
								>
									{eventItem.name}
								</Typography>
							</Box>
							<Divider sx={{ border: '1px solid black' }} />
						</Box>
					))}
				</Box>
				<Box
					height="100%"
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					}}
				>
					<Box
						sx={{
							marginBottom: '56px',
							height: '100%',
						}}
					>
						<Box
							border="2px solid black"
							height="100%"
							sx={{
								aspectRatio: '16 / 10',
								backgroundColor: 'white',
								position: 'relative',
							}}
						>
							<Image
								src={events[event].images[0]}
								alt={events[event].name}
								style={{
									objectFit: 'cover',
								}}
								fill
							/>
						</Box>
					</Box>
					<Box width="80%" minHeight="20%">
						<Typography variant="body1" marginBottom="8px" fontSize={'1.2rem'}>
							{events[event].date}
						</Typography>
						<Typography variant="body1" fontWeight={600} fontSize={'1.2rem'}>
							Attendees: {events[event].attendees}
						</Typography>
						<Typography variant="body1" marginBottom="8px" fontSize={'1.2rem'}>
							{events[event].description}
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default EventsSection;
