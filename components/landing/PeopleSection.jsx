'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Typography, Box } from '@mui/material';
import Heading from '../shared/Heading';

import { verticalLoop } from '../verticalScroll';

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
				marginX: '10px',
				marginY: '20px',
				// transform: 'skewX(-10deg)',
			}}
		>
			<Box
				sx={{
					height: '180px',
					width: '250px',
					backgroundColor: 'grey',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						transform: 'skewX(-10deg)',
					}}
				>
					<Typography sx={{ fontSize: '1.2rem' }}>Empty... for now</Typography>
				</Box>
			</Box>
			<Box></Box>
		</Box>
	);
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PeopleSection = () => {
	const scrollRef = useRef(null);
	const originalElement = useRef(null);
	const tlRef = useRef(null);

	useEffect(() => {
		let tl = verticalLoop('.slant-container', {
			repeat: -1,
			paused: false,
			center: true,
			draggable: true, // I'm just being fancy
		});
		tlRef.current = tl;
	}, []);

	return (
		<>
			{/* <Box
				sx={{
					height: '25vh',
					width: '100vw',
					backgroundColor: 'white',
				}}
			></Box> */}
			<Box
				sx={{
					width: '100vw',
					height: '100vh',
					backgroundColor: (theme) => theme.palette.blueberry.main,
					padding: '64px',
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					// flexDirection: 'column',
					// alignItems: 'center',
					overflow: 'hidden',
				}}
			>
				<Box
					sx={{
						transform: 'skewX(10deg)',
						height: '20%',
						width: '50%',
					}}
					ref={scrollRef}
					onMouseOver={() => {
						tlRef.current.pause();
					}}
					onMouseOut={() => {
						tlRef.current.play();
					}}
				>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr 1fr',
						}}
						ref={originalElement}
						className="slant-container"
					>
						<Box
							className="people-section-column1"
							sx={{
								flexDirection: 'column',
							}}
						>
							{array.map((item, index) =>
								index % 3 === 0 ? <PeopleEntry key={index} /> : null
							)}
						</Box>
						<Box
							className="people-section-column2"
							sx={{
								transform: ' translateY(-150px)',
							}}
						>
							{array.map((item, index) =>
								index % 3 === 1 ? <PeopleEntry key={index} /> : null
							)}
						</Box>
						<Box className="people-section-column3" sx={{}}>
							{array.map((item, index) =>
								index % 3 === 2 ? <PeopleEntry key={index} /> : null
							)}
						</Box>
					</Box>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr 1fr',
							marginTop: '-20px',
						}}
						className="slant-container"
					>
						<Box
							className="people-section-column1"
							sx={{
								flexDirection: 'column',
							}}
						>
							{array.map((item, index) =>
								index % 3 === 0 ? <PeopleEntry key={index} /> : null
							)}
						</Box>
						<Box
							className="people-section-column2"
							sx={{
								transform: ' translateY(-150px)',
							}}
						>
							{array.map((item, index) =>
								index % 3 === 1 ? <PeopleEntry key={index} /> : null
							)}
						</Box>
						<Box className="people-section-column3" sx={{}}>
							{array.map((item, index) =>
								index % 3 === 2 ? <PeopleEntry key={index} /> : null
							)}
						</Box>
					</Box>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr 1fr',
							marginTop: '-20px',
						}}
						className="slant-container"
					>
						<Box
							className="people-section-column1"
							sx={{
								flexDirection: 'column',
							}}
						>
							{array.map((item, index) =>
								index % 3 === 0 ? <PeopleEntry key={index} /> : null
							)}
						</Box>
						<Box
							className="people-section-column2"
							sx={{
								transform: ' translateY(-150px)',
							}}
						>
							{array.map((item, index) =>
								index % 3 === 1 ? <PeopleEntry key={index} /> : null
							)}
						</Box>
						<Box className="people-section-column3" sx={{}}>
							{array.map((item, index) =>
								index % 3 === 2 ? <PeopleEntry key={index} /> : null
							)}
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default PeopleSection;
