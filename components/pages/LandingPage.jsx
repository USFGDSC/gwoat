'use client';

import { Container, Typography, Box, Grid2 as Grid } from '@mui/material';

import Heading from '../shared/Heading';
import Navbar from '../shared/Navbar';
import Floater from '../shared/Floater';
import Footer from '../shared/Footer';

import TitleBoxes from '../landing/DisplayBoxes';
import EventsSection from '../landing/EventsSection';
import PeopleSection from '../landing/PeopleSection';
import IntroSection from '../landing/IntroSection';

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<Container
				sx={{
					paddingX: 6,
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
						minHeight: '50vh',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
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
						width: '100vw',
						margin: 16,
						padding: {
							xs: 4,
							md: 16,
						},
					}}
				>
					<Grid container spacing={8} width={'100%'}>
						<Grid
							size={{
								xs: 12,
								md: 6,
								lg: 3,
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
									We foster creativity and curiosity, encouraging members to
									bring their ideas to life. Every project starts with a vision,
									and we are here to transform visions into reality.
								</Typography>
							</TitleBoxes>
						</Grid>
						<Grid
							size={{
								xs: 12,
								md: 6,
								lg: 3,
							}}
						>
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
						</Grid>

						<Grid
							size={{
								xs: 12,
								md: 6,
								lg: 3,
							}}
						>
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
						</Grid>

						<Grid
							size={{
								xs: 12,
								md: 6,
								lg: 3,
							}}
						>
							<TitleBoxes
								sx={{
									backgroundColor: (theme) =>
										theme.palette.selectiveYellow.main,
								}}
							>
								<Heading variant="h4" marginBottom={2} color="black">
									Build
								</Heading>
								<Typography color="black">
									We transform concepts into tangible, impactful projects. By
									building robust and scalable solutions, we ensure our work
									makes a difference
								</Typography>
							</TitleBoxes>
						</Grid>
					</Grid>
				</Box>
				<EventsSection />
				{/* <PeopleSection /> */}
			</Container>
			<Floater />
			<Footer />
		</>
	);
};

export default LandingPage;
