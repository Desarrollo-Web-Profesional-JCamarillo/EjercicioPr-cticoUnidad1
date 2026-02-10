/**
 * Componente hijo que recibe el estado y la función desde el padre
 */
function BotonContador({ count, onIncrement, nombreBoton }) {
  return (
    <div style={{ margin: '10px' }}>
      <button
        onClick={onIncrement}
        style={{
          padding: '12px 25px',
          fontSize: '16px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          minWidth: '150px'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0b7dda'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#2196F3'}
      >
        {nombreBoton}: {count}
      </button>
    </div>
  );
}

export default BotonContador;