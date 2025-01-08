import React from 'react';
import { useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import Heading from '../shared/Heading';

const events = [
	{
		name: 'Embarc Collective Company Tour',
		date: 'November 18, 2024',
		description: 'Exclusive company tour and internship showcase event.',
		attendees: 50,
	},
	{
		name: 'DevFest Tampa Bay 2024',
		date: 'October 5, 2024',
		description: 'A large-scale event with over 400 attendees.',
		attendees: 400,
	},
	{
		name: 'DevCon Tampa Bay 2024',
		date: 'April 6, 2024',
		description:
			'Event featuring over 100 attendees and more than 25 technical experts/speakers.',
		attendees: 100,
	},
	{
		name: 'DevFest Tampa Bay 2023',
		date: 'October 21, 2023',
		description:
			'Largest technical event during Fall 2023, partnered with 5 organizations across campus, achieved almost 200 attendees.',
		attendees: 200,
	},
	{
		name: 'Build Your Own Portfolio Workshop',
		date: 'September 25, 2023',
		description:
			'A hands-on workshop where 70 attendees left happily with their very own website portfolio.',
		attendees: 70,
	},
	{
		name: 'Innovation Fest 2023',
		date: 'February 25, 2023',
		description: 'A major event with over 300 attendees.',
		attendees: 300,
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
				gridTemplateColumns="4fr 5fr"
				gap={16}
				margin="64px"
			>
				<Box>
					<Divider sx={{ border: '1px solid black' }} />
					{events.map((event, index) => (
						<Box key={'event' + index} onMouseOver={() => setEvent(index)}>
							<Typography
								variant="h5"
								fontWeight={600}
								margin="16px"
								marginY={'24px'}
							>
								{event.name}
							</Typography>
							<Divider sx={{ border: '1px solid black' }} />
						</Box>
					))}
				</Box>
				<Box>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
							flexDirection: 'center',
							marginBottom: '56px',
						}}
					>
						<Box
							border="2px solid black"
							width="70%"
							sx={{
								aspectRatio: 16 / 10,
								backgroundColor: 'white',
							}}
						></Box>
					</Box>
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
	);
};

export default EventsSection;
