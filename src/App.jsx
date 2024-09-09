import { useState } from 'react'
import Header from './components/Header'
import FactureTable from './components/FactureTable';

function App() {
  const [facturas, setFacturas] = useState([]);
  const [facturasFaltantes, setFacturasFaltantes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleRevisarClick = () => {


    if (inputValue.trim()) {
      const facturasArray = inputValue.split('\n').map(factura => parseInt(factura.trim()));
      facturasArray.sort((a,b) => b - a);

      const faltantes = [];
      for (let i = 0; i < facturasArray.length - 1; i++) {
        const diferencia = facturasArray[i] - facturasArray[i + 1];
        if (diferencia > 1) {
          for (let j = 1; j < diferencia; j++) {
            faltantes.push(facturasArray[i] - j); 
          }
        }
      }
      setFacturas(facturasArray);
      setFacturasFaltantes(faltantes);
    }
  };

  return (
    <body className='w-full h-full px-10'>
      <div className='min-h-screen flex justify-center flex-col'>
        <Header value={inputValue} onChange={handleInputChange} onClick={handleRevisarClick}/>
        <FactureTable facturas={facturasFaltantes} />
      </div>
    </body>
  )
}

export default App
