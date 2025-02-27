'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Typography, Box } from '@mui/material';
import Heading from '../shared/Heading';
import { motion } from 'framer-motion';

import { verticalLoop } from '../verticalScroll';
import Image from 'next/image';

const people_info = [
	{
		name: 'Trang',
		cardSrc: '/assets/card/card_trang.JPG',
		profileSrc: '/assets/people/main_trang_cut.png',
		role1: 'Community',
		role2: 'Lead',
		hue: 0,
	},
	{
		name: 'Felix',
		cardSrc: '/assets/card/card_felix.JPG',
		profileSrc: '/assets/people/main_felix_cut.JPG',
		role1: 'Tech',
		role2: 'Lead',
		hue: 180,
	},
	{
		name: 'Fernanda',
		cardSrc: '/assets/card/card_feh.JPG',
		profileSrc: '/assets/people/main_feh_cut.JPG',
		role1: 'Design',
		role2: 'Lead',
		hue: 270,
	},
	{
		name: 'Jhoon',
		cardSrc: '/assets/card/card_jhoon.JPG',
		profileSrc: '/assets/people/main_jhoon_cut.JPG',
		role1: 'Tech',
		role2: 'Chair',
		hue: 180,
	},
	{
		name: 'Guilliherme',
		cardSrc: '/assets/card/card_gui.JPG',
		profileSrc: '/assets/people/main_gui_cut.JPG',
		role1: 'Community',
		role2: 'Lead',
		hue: 0,
	},
	{
		name: 'Kritvi',
		cardSrc: '/assets/card/card_kritvi.JPG',
		profileSrc: '/assets/people/main_kritvi_cut.JPG',
		role1: 'Finance',
		role2: 'Chair',
		hue: 90,
	},
	{
		name: 'Maria',
		cardSrc: '/assets/card/card_maria.JPG',
		profileSrc: '/assets/people/main_maria_cut.JPG',
		role1: 'Community',
		role2: 'Chair',
		hue: 0,
	},
	{
		name: 'Hieu',
		cardSrc: '/assets/card/card_hieu.JPG',
		profileSrc: '/assets/people/main_hieu_cut.JPG',
		role1: 'Tech',
		role2: 'Lead',
		hue: 180,
	},
	{
		name: 'Tien',
		cardSrc: '/assets/card/card_tien.JPG',
		profileSrc: '/assets/people/main_tien_cut.png',
		role1: 'Design',
		role2: 'Chair',
		hue: 270,
	},
	{
		name: 'Minh Ha',
		cardSrc: '/assets/card/card_mina.JPG',
		profileSrc: '/assets/people/main_mina_cut.JPG',
		role1: 'Vice Prez.',
		role2: '',
		hue: 206,
	},
	{
		name: 'Neeraj',
		cardSrc: '/assets/card/card_neeraj.JPG',
		profileSrc: '/assets/people/main_neeraj_cut.JPG',
		role1: 'President',
		role2: '',
		hue: 206,
	},
	{
		name: 'Ninad',
		cardSrc: '/assets/card/card_ninad.JPG',
		profileSrc: '/assets/people/main_ninad_cut.JPG',
		role1: 'Finance',
		role2: 'Chair',
		hue: 90,
	},
];

const PeopleEntry = ({ selected, handleClick, cardImageSource }) => {
	return (
		<Box
			sx={{
				border: '1px solid #f7f7f7',
				borderColor: (theme) =>
					selected ? theme.palette.blueberry.main : '#f7f7f7',
				transition:
					'border 0.1s ease-in-out, background 0.1s ease-in-out, filter: 0.1s ease-in-out',
				padding: '8px',
				display: 'flex',
				flexDirection: 'center',
				justifyContent: 'center,',
				height: '350px',
				width: '275px',
				background: (theme) =>
					selected ? theme.palette.blueberry.main : '#f7f7f7',
				marginX: '10px',
				marginY: '20px',
				borderTopRightRadius: '8px',
				borderBottomLeftRadius: '8px',
				cursor: 'pointer',
				// transform: 'skewX(-8deg)',
			}}
			as="button"
			onClick={handleClick}
		>
			<Box
				sx={{
					height: '100%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					overflow: 'hidden',
				}}
			>
				<Box
					sx={{
						height: '120%',
						width: '120%',
						transform: 'skewX(-8deg)',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Image
						src={cardImageSource}
						fill
						objectFit="cover"
						alt="Image of GDSC member"
						style={{
							filter: selected ? 'grayscale(0%)' : 'grayscale(100%)',
						}}
					/>
				</Box>
			</Box>
			<Box></Box>
		</Box>
	);
};

const PersonDisplay = ({ member }) => {
	return (
		<Box
			zIndex={9999}
			display={'flex'}
			flexDirection={'column'}
			alignItems={'center'}
			justifyContent={'flex-end'}
			height={'100%'}
		>
			<Box
				sx={{
					height: 'min(100vh, 900px)',
					position: 'relative',
					width: '600px',
				}}
			>
				<Typography
					sx={{
						position: 'absolute',
						color: 'black',
						transform: 'rotate(90deg)',
						fontSize: '2vw',
						fontWeight: 'bold',
						fontFamily: 'monospace',
						top: '50%',
						left: '-50%',
						background: '#f7f7f7',
					}}
				>
					[{member.role1 + ' ' + member.role2}]
				</Typography>
				<motion.div
					key={member.profileSrc} // Triggers animation on change
					initial={{
						opacity: 0,
						filter: 'blur(10px) brightness(0.5) saturate(0)',
					}}
					animate={{
						opacity: 1,
						filter: 'blur(0px) brightness(1) saturate(1)',
					}}
					exit={{
						opacity: 0,
						filter: 'blur(10px) brightness(0.5) saturate(0)',
					}}
					transition={{ duration: 0.3, ease: 'easeOut' }}
					style={{ position: 'absolute', width: '100%', height: '100%' }}
				>
					<Image
						src={member.profileSrc}
						alt={member.name}
						layout="fill"
						objectFit="contain"
					/>
				</motion.div>
			</Box>
			<Typography variant="h1" fontWeight={'bold'} mt={8} color="#f7f7f7">
				{member.name}
			</Typography>
		</Box>
	);
};

const PeopleSection = () => {
	const scrollRef = useRef(null);
	const originalElement = useRef(null);
	const tlRef = useRef(null);
	const [selectedPerson, setSelectedPerson] = useState(0);

	useEffect(() => {
		let tl = verticalLoop('.slant-container', {
			repeat: -1,
			center: true,
			paused: true,
			draggable: true, // I'm just being fancy
		});
		tlRef.current = tl;
	}, []);

	const handleClick = (index) => {
		setSelectedPerson(index);
	};

	return (
		<>
			<Box
				sx={{
					width: '100vw',
					height: '120vh',
					background: '#000000',
					padding: '64px',
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					// flexDirection: 'column',
					// alignItems: 'center',
					overflow: 'hidden',

					'&::before': {
						filter: `invert(1) grayscale(0) contrast(0.5) sepia(1) hue-rotate(${people_info[selectedPerson].hue}deg);`,
					},
				}}
				className="people-section-container"
			>
				<Box
					sx={{
						transform: 'skewX(8deg)',
						height: '20%',
						width: '50%',
					}}
					ref={scrollRef}
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
							{people_info.map((item, index) =>
								index % 3 === 0 ? (
									<PeopleEntry
										key={index}
										selected={index == selectedPerson}
										handleClick={() => handleClick(index)}
										cardImageSource={item.cardSrc}
									/>
								) : null
							)}
						</Box>
						<Box
							className="people-section-column2"
							sx={{
								transform: ' translateY(-150px)',
							}}
						>
							{people_info.map((item, index) =>
								index % 3 === 1 ? (
									<PeopleEntry
										key={index}
										selected={index == selectedPerson}
										handleClick={() => handleClick(index)}
										cardImageSource={item.cardSrc}
									/>
								) : null
							)}
						</Box>
						<Box className="people-section-column3" sx={{}}>
							{people_info.map((item, index) =>
								index % 3 === 2 ? (
									<PeopleEntry
										key={index}
										selected={index == selectedPerson}
										handleClick={() => handleClick(index)}
										cardImageSource={item.cardSrc}
									/>
								) : null
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
							{people_info.map((item, index) =>
								index % 3 === 0 ? (
									<PeopleEntry
										key={index}
										selected={index == selectedPerson}
										handleClick={() => handleClick(index)}
										cardImageSource={item.cardSrc}
									/>
								) : null
							)}
						</Box>
						<Box
							className="people-section-column2"
							sx={{
								transform: ' translateY(-150px)',
							}}
						>
							{people_info.map((item, index) =>
								index % 3 === 1 ? (
									<PeopleEntry
										key={index}
										selected={index == selectedPerson}
										handleClick={() => handleClick(index)}
										cardImageSource={item.cardSrc}
									/>
								) : null
							)}
						</Box>
						<Box className="people-section-column3" sx={{}}>
							{people_info.map((item, index) =>
								index % 3 === 2 ? (
									<PeopleEntry
										key={index}
										selected={index == selectedPerson}
										handleClick={() => handleClick(index)}
										cardImageSource={item.cardSrc}
									/>
								) : null
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
							{people_info.map((item, index) =>
								index % 3 === 0 ? (
									<PeopleEntry
										key={index}
										selected={index == selectedPerson}
										handleClick={() => handleClick(index)}
										cardImageSource={item.cardSrc}
									/>
								) : null
							)}
						</Box>
						<Box
							className="people-section-column2"
							sx={{
								transform: ' translateY(-150px)',
							}}
						>
							{people_info.map((item, index) =>
								index % 3 === 1 ? (
									<PeopleEntry
										key={index}
										selected={index == selectedPerson}
										handleClick={() => handleClick(index)}
										cardImageSource={item.cardSrc}
									/>
								) : null
							)}
						</Box>
						<Box className="people-section-column3" sx={{}}>
							{people_info.map((item, index) =>
								index % 3 === 2 ? (
									<PeopleEntry
										key={index}
										selected={index == selectedPerson}
										handleClick={() => handleClick(index)}
										cardImageSource={item.cardSrc}
									/>
								) : null
							)}
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						position: 'relative',
						maxHeight: '100vh',
					}}
				>
					<PersonDisplay member={people_info[selectedPerson]} />
				</Box>
			</Box>
		</>
	);
};

export default PeopleSection;
