/**
 * Desafío 2: Renderizado de Listas
 * Componente que muestra una lista de tecnologías usando map()
 */
function ListaTecnologias() {
  // Arreglo de objetos con tecnologías
  const tecnologias = [
    { id: 1, nombre: 'React' },
    { id: 2, nombre: 'JavaScript' },
    { id: 3, nombre: 'HTML5' },
    { id: 4, nombre: 'CSS3' },
    { id: 5, nombre: 'Node.js' },
    { id: 6, nombre: 'Git' },
    { id: 7, nombre: 'Vite' },
    { id: 8, nombre: 'npm' }
  ];

  return (
    <div style={{
      padding: '30px',
      backgroundColor: '#2196F3',
      color: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        🚀 Tecnologías Web
      </h2>
      
      {/* Lista desordenada generada con map() */}
      <ul style={{
        listStyleType: 'none',
        padding: 0,
        maxWidth: '400px',
        margin: '0 auto'
      }}>
        {tecnologias.map((tecnologia) => (
          // key única usando el id del objeto
          <li 
            key={tecnologia.id}
            style={{
              padding: '12px 20px',
              marginBottom: '10px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '5px',
              borderLeft: '4px solid #fff',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(255,255,255,0.3)';
              e.target.style.transform = 'translateX(5px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateX(0)';
            }}
          >
            ✓ {tecnologia.nombre}
          </li>
        ))}
      </ul>

      <p style={{ 
        textAlign: 'center', 
        marginTop: '20px',
        fontSize: '14px',
        opacity: 0.8
      }}>
        Total de tecnologías: {tecnologias.length}
      </p>
    </div>
  );
}

export default ListaTecnologias;