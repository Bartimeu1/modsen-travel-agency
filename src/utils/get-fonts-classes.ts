import { NextFontWithVariable } from 'next/dist/compiled/@next/font';

export const getFontsClasses = (fonts: NextFontWithVariable[]) => {
  return fonts.map((font) => font.variable).join(' ');
};
