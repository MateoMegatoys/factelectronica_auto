import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function FactureTable({facturas}) {
  return (
    <div>
         { facturas.length > 0 && (
        <TableContainer component={Paper} className='mt-10'>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ backgroundColor: '#333', color: '#fff' }}>Facturas por enviar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {facturas.map((factura, index) => (
                <TableRow key={index}>
                  <TableCell align="center" sx={{ backgroundColor: '#555', color: '#fff' }}>{factura}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}
