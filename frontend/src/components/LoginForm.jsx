/**
 * Componente que se muestra cuando el usuario NO está logueado
 * Formulario controlado con validación
 */
function LoginForm({ usuario, contraseña, setUsuario, setContraseña, handleLogin, mensajeError }) {
  
  // Manejar el envío del formulario con Enter
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  // Verificar si el botón debe estar deshabilitado
  const botonDeshabilitado = usuario.trim() === '' || contraseña.trim() === '';

  return (
    <div style={{
      padding: '30px',
      backgroundColor: '#ff9800',
      color: 'white',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2>🔒 Acceso Restringido</h2>
      <p style={{ fontSize: '16px', marginTop: '10px' }}>
        Por favor, inicia sesión para continuar
      </p>
      
      <form onSubmit={handleSubmit} style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: '5px',
        color: '#333'
      }}>
        <h3 style={{ marginBottom: '15px' }}>Formulario de Login</h3>
        
        {/* Campo de Usuario */}
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="text" 
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            style={{
              padding: '10px',
              width: '80%',
              borderRadius: '5px',
              border: usuario.trim() === '' && mensajeError ? '2px solid #f44336' : '1px solid #ccc',
              fontSize: '14px',
              outline: 'none'
            }}
          />
        </div>
        
        {/* Campo de Contraseña */}
        <div style={{ marginBottom: '15px' }}>
          <input 
            type="password" 
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            style={{
              padding: '10px',
              width: '80%',
              borderRadius: '5px',
              border: contraseña.trim() === '' && mensajeError ? '2px solid #f44336' : '1px solid #ccc',
              fontSize: '14px',
              outline: 'none'
            }}
          />
        </div>

        {/* Mensaje de Error */}
        {mensajeError && (
          <p style={{ 
            color: '#f44336', 
            fontSize: '14px', 
            fontWeight: 'bold',
            marginBottom: '10px',
            backgroundColor: '#ffebee',
            padding: '8px',
            borderRadius: '5px'
          }}>
            {mensajeError}
          </p>
        )}

        {/* Botón de Login */}
        <button 
          type="submit"
          disabled={botonDeshabilitado}
          style={{
            padding: '12px 30px',
            fontSize: '16px',
            backgroundColor: botonDeshabilitado ? '#ccc' : '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: botonDeshabilitado ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s',
            width: '80%'
          }}
        >
          🔑 Iniciar Sesión
        </button>

        <p style={{ fontSize: '12px', color: '#666', marginTop: '15px' }}>
          ℹ️ Completa ambos campos para continuar
        </p>
      </form>
    </div>
  );
}

export default LoginForm;