'use client';

import { Container, Typography, Box } from '@mui/material';
import Heading from '../shared/Heading';
import TitleBoxes from '../landing/DisplayBoxes';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import EventsSection from '../landing/EventsSection';
import PeopleSection from '../landing/PeopleSection';
import IntroSection from '../landing/IntroSection';

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<Container
				sx={{
					padding: 6,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100vw',
				}}
			>
				<Box
					sx={{
						marginBottom: 16,
						marginTop: 10,
					}}
				>
					<Heading variant="h1">Google Developers Student Club</Heading>
					<Heading variant="h3">USF Chapter</Heading>
				</Box>
				<IntroSection />
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						margin: 16,
					}}
				>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
							gap: 8,
						}}
					>
						<TitleBoxes
							sx={{
								backgroundColor: (theme) => theme.palette.blueberry.main,
							}}
						>
							<Heading variant="h4" marginBottom={2} color="black">
								Create
							</Heading>
							<Typography color="black">
								We foster creativity and curiosity, encouraging members to bring
								their ideas to life. Every project starts with a vision, and we
								are here to transform visions into reality.
							</Typography>
						</TitleBoxes>
						<TitleBoxes
							sx={{
								backgroundColor: (theme) => theme.palette.cinnabar.main,
							}}
						>
							<Heading variant="h4" marginBottom={2}>
								Design
							</Heading>
							<Typography>
								We craft solutions that are not only functional but also
								intuitive and user-friendly. By understanding the needs of
								others, we create designs that resonate with everyone.
							</Typography>
						</TitleBoxes>
						<TitleBoxes
							sx={{
								backgroundColor: (theme) => theme.palette.seaGreen.main,
							}}
						>
							<Heading variant="h4" marginBottom={2}>
								Code
							</Heading>
							<Typography>
								Through clean, efficient, and innovative coding practices, we
								bring our ideas and designs to life. Every line of code is a
								step towards a better solution.
							</Typography>
						</TitleBoxes>
						<TitleBoxes
							sx={{
								backgroundColor: (theme) => theme.palette.selectiveYellow.main,
							}}
						>
							<Heading variant="h4" marginBottom={2} color="black">
								Build
							</Heading>
							<Typography color="black">
								We transform concepts into tangible, impactful projects. By
								building robust and scalable solutions, we ensure our work makes
								a difference
							</Typography>
						</TitleBoxes>
					</Box>
				</Box>
				<EventsSection></EventsSection>
				<PeopleSection />
			</Container>
			<Footer />
		</>
	);
};

export default LandingPage;
