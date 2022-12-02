import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

const theme = createTheme({
    palette:{
        primary:{
            main:grey[50],
        },
        secondary:{
            main:grey[800],
        },
        three:{
            main:"#000",
        },
        four:{
            main:"#fff",
        },
        type:'dark',
    },
});

export default theme;