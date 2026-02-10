import { useState } from 'react';
import BotonContador from './Botoncontador';

/**
 * Desafío 4: Levantar el Estado (Lifting State Up)
 * Componente padre que mantiene el estado compartido
 */
function ContadorCompartido() {
  // 1. Estado movido al componente padre
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Función para resetear el contador
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center',
      border: '2px solid #2196F3',
      borderRadius: '10px',
      backgroundColor: '#f0f8ff'
    }}>
      <h3>Desafío 4: Levantar el Estado</h3>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Los dos botones comparten el mismo contador
      </p>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        {/* 2 y 3. Pasar el estado y la función a los hijos mediante props */}
        <BotonContador 
          count={count} 
          onIncrement={handleIncrement}
          nombreBoton="Botón A"
        />
        
        <BotonContador 
          count={count} 
          onIncrement={handleIncrement}
          nombreBoton="Botón B"
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#2196F3' }}>
          Contador compartido: {count}
        </p>
        <button
          onClick={handleReset}
          style={{
            marginTop: '10px',
            padding: '8px 20px',
            fontSize: '14px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Resetear
        </button>
      </div>
    </div>
  );
}

export default ContadorCompartido;