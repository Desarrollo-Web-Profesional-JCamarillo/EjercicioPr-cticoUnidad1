import { useState } from 'react'
import './index.css'
import BotonInteractivo from './components/BotonInteractivo'
import ContadorCompartido from './components/Contadorcompartido'
import ContenidoCondicional from './components/ContenidoCondicional'

function App() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{ 
        textAlign: 'center', 
        marginBottom: '40px',
        padding: '20px',
        backgroundColor: '#282c34',
        color: 'white',
        borderRadius: '10px'
      }}>
        <h1>🚀 Desafíos de React</h1>
        <p style={{ fontSize: '16px', marginTop: '10px' }}>
          Implementación de los Desafíos
        </p>
      </header>

      <main style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '30px' 
      }}>
        {/* Desafío 3: Estado e Interacción */}
        <section style={{
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <BotonInteractivo />
        </section>

        {/* Desafío 4: Levantar el Estado */}
        <section style={{
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <ContadorCompartido />
        </section>

        {/* Desafío 5: Lógica Condicional */}
        <section style={{
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <ContenidoCondicional />
        </section>
      </main>

      <footer style={{
        textAlign: 'center',
        marginTop: '40px',
        padding: '20px',
        color: '#666',
        borderTop: '1px solid #ddd'
      }}>
        <p>✨ Todos los desafíos completados con React + Vite</p>
      </footer>
    </div>
  )
}

export default App