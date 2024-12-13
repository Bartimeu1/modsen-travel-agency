import {
  Dancing_Script,
  Inter,
  Mulish,
  Poppins,
  Raleway,
  Roboto,
  Sen,
} from 'next/font/google';

const fontSen = Sen({ subsets: ['latin'], variable: '--font-sen' });
const fontInter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const fontRaleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const fontDancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
});
const fontPoppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500'],
});
const fontMulish = Mulish({ subsets: ['latin'], variable: '--font-mulish' });
const fontRoboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700'],
});

export const baseFonts = [
  fontSen,
  fontInter,
  fontRaleway,
  fontDancingScript,
  fontPoppins,
  fontMulish,
  fontRoboto,
];
