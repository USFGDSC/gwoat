import { Geist, Geist_Mono, Epilogue } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import '@fontsource-variable/epilogue';

import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';

// const epilogue = Epilogue({
// 	weight: ['300', '400', '500', '700'],
// 	subsets: ['latin'],
// 	display: 'swap',
// 	variable: '--font-epilogue',
// });

// const geistSans = Geist({
// 	variable: '--font-geist-sans',
// 	subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
// 	variable: '--font-geist-mono',
// 	subsets: ['latin'],
// });

export const metadata = {
	title: 'USF GDSC',
	description:
		'The premier website for the Google Developer Student Club at the University of South Florida.',
};

export default function RootLayout(props) {
	const { children } = props;
	return (
		<html lang="en">
			<body style={{ fontFamily: 'Epilogue Variable' }}>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
