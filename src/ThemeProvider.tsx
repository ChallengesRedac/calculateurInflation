import { MantineProvider, MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'light',
  primaryShade: 5,
  // fontFamily: 'Garamond, sans-serif',
  colors: {
    brand: [
      '#d69692',
      '#cd807c',
      '#c56b66',
      '#bd5650',
      '#b4413a',
      '#ac2c24',
      '#e6c0bd',
      '#eed5d3',
      '#f7eae9',
      '#ffffff',
    ],
  },
  primaryColor: 'brand',
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      {children}
    </MantineProvider>
  );
}
