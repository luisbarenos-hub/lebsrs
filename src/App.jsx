import { useState } from 'react'

function App() {
  const [notas, setNotas] = useState([]);
  const [texto, setTexto] = useState('');

  const agregarNota = () => {
    if (texto.trim() !== '') {
      setNotas([...notas, texto]);
      setTexto('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Mis Notas (App Original)</h1>
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Escribe una nota..."
        style={{ padding: '10px', width: '70%' }}
      />
      <button onClick={agregarNota} style={{ padding: '10px 15px', marginLeft: '10px' }}>
        Agregar
      </button>
      <ul style={{ marginTop: '20px', textAlign: 'left' }}>
        {notas.map((nota, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>{nota}</li>
        ))}
      </ul>
    </div>
  )
}

export default App