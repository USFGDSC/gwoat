'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: 'var(--font-epilogue)',
	},
	palette: {
		primary: {
			main: '#34A853',
		},
		blueberry: {
			main: '#4285F4',
		},
		cinnabar: {
			main: '#EA4335',
		},
		selectiveYellow: {
			main: '#FBBC05',
		},
		seaGreen: {
			main: '#34A853',
		},
	},
});

export default theme;
