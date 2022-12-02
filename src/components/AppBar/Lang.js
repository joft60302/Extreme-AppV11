import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import LanguageIcon from '@mui/icons-material/Language';
import { grey } from '@mui/material/colors';

export default function Lang() {
  return (
    <Box sx={{ minWidth: 10 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        <LanguageIcon fontSize="medium" sx={{ color: grey[50] }}/>
        </InputLabel>
        <NativeSelect
         defaultValue={10}
         style={{ background:'transparent' }}
         sx={{ color: grey[50] }}
        >
          <option value={10}>EN</option>
          <option value={20}>TH</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
