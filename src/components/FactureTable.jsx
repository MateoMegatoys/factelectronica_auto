import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function FactureTable({ facturas }) {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  return (
    <div>
      {facturas.length > 0 ? (
        <TableContainer component={Paper} className="mt-10">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ backgroundColor: '#333', color: '#fff' }}>
                  Facturas por enviar
                  <CopyToClipboard text={facturas.join(', ')} onCopy={() => setCopied(true)}>
                    <IconButton  color="inherit" size='small' aria-label="copy-all">
                      <ContentCopyIcon sx={{ color: '#fff' }} />
                    </IconButton>
                  </CopyToClipboard>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {facturas.map((factura, index) => (
                <TableRow key={index}>
                  <TableCell align="center" sx={{ backgroundColor: '#555', color: '#fff' }}>
                    {factura}
                    <CopyToClipboard text={factura} onCopy={() => setCopied(true)}>
                      <IconButton sx={'size'} color="inherit" size="small" aria-label="copy">
                        <ContentCopyIcon sx={{ color: '#fff' }} />
                      </IconButton>
                    </CopyToClipboard>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h2 className="text-xl text-center mt-10">{text}</h2>
      )}
    </div>
  );
}
