import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';

export default function ({value, onChange, onClick}) {

  return (
    <div className='flex flex-col items-center w-full '>
      <h1 className='text-5xl text-center text-cyan-400 font-bold font-sans mb-3'>Revisar facturación electrónica</h1>
      <h2 className='text-center'>Pega aquí el listado para revisar</h2>

      <Box className='mt-10' component="form" autoComplete='off'>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Facturas"
            required={true}
            multiline
            rows={10}
            value={value}
            onChange={onChange}
            sx={{
              width: '500px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                  borderWidth: '1px',
                },
                '&:hover fieldset': {
                  borderColor: 'gray',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'gray',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'gray',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'white',
              },
              '& .MuiOutlinedInput-input': {
                color: 'white',
              },
              
            }
            }
          />
        </div>

        <div className='mt-7 flex justify-center'>
          <Button color='primary' variant="contained" endIcon={<SendIcon />} onClick={onClick}>
            Revisar
          </Button>
        </div>
      </Box>
    </div>
  );
}
