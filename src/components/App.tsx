import { createStyles, getStylesRef, rem } from '@mantine/core';
import { Formulaire } from './Formulaire';
import { ThemeProvider } from '../ThemeProvider';

const useStyles = createStyles((theme) => {
  return {
    wrapper: {
      maxWidth: rem(350),
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: theme.radius.sm,
      '& strong': {
        color: '#ac2c24',
      },
      '& h2': {
        color: '#ac2c24',
      },

      // Dynamic media queries, define breakpoints in theme, use anywhere
      [theme.fn.smallerThan('sm')]: {
        // Child reference in nested selectors via ref
        [`& .${getStylesRef('child')}`]: {
          fontSize: theme.fontSizes.xs,
        },
      },
    },
  };
});

export default function App() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <ThemeProvider>
        <Formulaire />
      </ThemeProvider>
    </div>
  );
}
