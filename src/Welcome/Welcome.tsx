import { Button, Stack, Text } from '@mantine/core';
import { createStyles, getStylesRef, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    maxWidth: rem(400),
    width: '100%',
    height: rem(180),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: theme.radius.sm,

    // Dynamic media queries, define breakpoints in theme, use anywhere
    [theme.fn.smallerThan('sm')]: {
      // Child reference in nested selectors via ref
      [`& .${getStylesRef('child')}`]: {
        fontSize: theme.fontSizes.xs,
      },
    },
  },

  
}));

export function Welcome() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      Coucou
    </div>
  );
}
