import { useState } from 'react';
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';

/**
 * Desafío 5: Lógica Condicional
 * Componente que muestra contenido diferente según una condición
 */
function ContenidoCondicional() {
  // Estado para controlar si el usuario está logueado
  const [estaLogueado, setEstaLogueado] = useState(false);
  
  // Estados para los campos del formulario
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  // Función para manejar el login con validación
  const handleLogin = () => {
    // Validar que ambos campos tengan información
    if (usuario.trim() === '' || contraseña.trim() === '') {
      setMensajeError('⚠️ Por favor, completa todos los campos');
      return;
    }
    
    // Si la validación pasa, hacer login
    setEstaLogueado(true);
    setMensajeError('');
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    setEstaLogueado(false);
    setUsuario('');
    setContraseña('');
    setMensajeError('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ textAlign: 'center' }}>Desafío 5: Lógica Condicional</h3>
      
      {/* Mostrar botón de logout solo si está logueado */}
      {estaLogueado && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button
            onClick={handleLogout}
            style={{
              padding: '12px 30px',
              fontSize: '16px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            🚪 Cerrar Sesión
          </button>
          <p style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>
            Estado actual: ✅ Logueado como <strong>{usuario}</strong>
          </p>
        </div>
      )}

      {/* Renderizado condicional usando operador ternario */}
      <div>
        {estaLogueado ? (
          <Dashboard usuario={usuario} />
        ) : (
          <LoginForm 
            usuario={usuario}
            contraseña={contraseña}
            setUsuario={setUsuario}
            setContraseña={setContraseña}
            handleLogin={handleLogin}
            mensajeError={mensajeError}
          />
        )}
      </div>

      {/* Ejemplo alternativo con && (comentado) */}
      {/* 
      <div>
        {estaLogueado && <Dashboard />}
        {!estaLogueado && <LoginForm />}
      </div>
      */}
    </div>
  );
}

export default ContenidoCondicional;