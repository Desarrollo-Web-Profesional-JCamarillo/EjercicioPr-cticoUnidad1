/**
 * Desafío 1: Creación y Anidación de Componentes
 * Componente que muestra información del usuario
 */
function UserProfile() {
  return (
    <div style={{
      padding: '30px',
      backgroundColor: '#4CAF50',
      color: 'white',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      marginBottom: '20px'
    }}>
      <h2>👤 Perfil de Usuario</h2>
      <div style={{ 
        marginTop: '20px',
        padding: '20px',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: '5px'
      }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
          Nombre: Juana Jaqueline Camarillo Olaez
        </p>
        <p style={{ fontSize: '16px' }}>
          Carrera: Desarrollo y Gestión de Software 
        </p>
        <p style={{ fontSize: '16px' }}>
          Universidad: Universidad Tecnologica del Norte de Guanajuato
        </p>
        <p style={{ fontSize: '14px', marginTop: '10px' }}>
          📧 Email: juanaolaez95@gmail.com
        </p>
      </div>
    </div>
  );
}

export default UserProfile;