/**
 * Componente que se muestra cuando el usuario está logueado
 */
function Dashboard({ usuario }) {
  return (
    <div style={{
      padding: '30px',
      backgroundColor: '#4CAF50',
      color: 'white',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2>🎉 ¡Bienvenido al Dashboard!</h2>
      <p style={{ fontSize: '18px', marginTop: '10px', fontWeight: 'bold' }}>
        Hola, {usuario}
      </p>
      <p style={{ fontSize: '16px', marginTop: '5px' }}>
        Has iniciado sesión correctamente
      </p>
      <div style={{ 
        marginTop: '20px',
        padding: '15px',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: '5px'
      }}>
        <p>✅ Acceso completo a todas las funcionalidades</p>
        <p>✅ Tu sesión está activa</p>
        <p>✅ Datos sincronizados</p>
      </div>
    </div>
  );
}

export default Dashboard;