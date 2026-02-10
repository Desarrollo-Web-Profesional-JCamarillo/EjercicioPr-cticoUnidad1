import { useState } from 'react';

/**
 * Desafío 3: Estado e Interacción
 * Componente que cambia su texto al ser presionado
 */
function BotonInteractivo() {
  // 1. Declarar variable de estado con useState
  const [textoBoton, setTextoBoton] = useState('¡Haz clic aquí!');
  const [contador, setContador] = useState(0);

  // 2. Función controladora de eventos
  const handleClick = () => {
    setContador(contador + 1);
    
    // Cambiar el texto según el número de clics
    if (contador === 0) {
      setTextoBoton('¡Buen trabajo! Haz clic otra vez');
    } else if (contador === 1) {
      setTextoBoton('¡Excelente! Sigues haciendo clic');
    } else if (contador === 2) {
      setTextoBoton('¡Increíble! ¿Cuántas veces más?');
    } else {
      setTextoBoton(`¡Has hecho clic ${contador + 1} veces!`);
    }
  };

  // 3. Pasar la función al onClick sin paréntesis
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>Desafío 3: Estado e Interacción</h3>
      <button 
        onClick={handleClick}
        style={{
          padding: '15px 30px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'all 0.3s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
      >
        {textoBoton}
      </button>
      <p style={{ marginTop: '10px', color: '#666' }}>
        Contador de clics: {contador}
      </p>
    </div>
  );
}

export default BotonInteractivo;