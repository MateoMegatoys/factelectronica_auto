import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';

export default function ({value, onChange, onClick, showBtn}) {

  const [showBtnClear, setShowBtnClear] = useState(false);
  
  const handleInputChange = (event) => {
    onChange(event);
    setShowBtnClear(event.target.value.length > 0); // Mostrar el botón si hay texto
  };

 
  const handleClearInput = () => {
    onChange({ target: { value: '' } }); // Limpia el valor del input
    setShowBtnClear(false); // Oculta el botón de limpiar
  };

  return (
    <div className='flex flex-col items-center w-full '>
      <h1 className='text-5xl text-center text-cyan-400 font-bold font-sans mb-3'>Revisar facturación electrónica</h1>
      <h2 className='text-center'>Pega aquí el listado para revisar</h2>

      {showBtnClear && (
          <div className='mt-5'>
            <Button color='info' variant="outlined" onClick={handleClearInput}>
              Limpiar
            </Button>
          </div>
        )}
      
      
      <Box className='mt-10' component="form" autoComplete='off'>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Facturas"
            required={true}
            multiline
            rows={10}
            value={value}
            onChange={handleInputChange}
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
