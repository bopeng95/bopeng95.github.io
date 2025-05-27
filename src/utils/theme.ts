import { createTheme } from '@mui/material';

const fontFamily = '"Nunito Sans", sans-serif';

export const theme = createTheme({
  typography: {
    fontFamily,
  },
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        background: {
          default: '#E4EFE7',
        },
      },
    },
  },
});
