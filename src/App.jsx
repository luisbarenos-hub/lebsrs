import { useEffect, useState } from 'react';
import { supabase } from './supabase';

export default function App() {
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function obtenerDatos() {
      // Reemplaza 'nombre_de_tu_tabla' por una tabla real de tu Supabase
      const { data, error } = await supabase.from('productos').select('*');
      
      if (error) {
        console.error('Error al consultar Supabase:', error.message);
        setError(error.message);
      } else {
        console.log('Datos recibidos:', data);
        setDatos(data);
      }
    }

    obtenerDatos();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Proyecto Lebsrs</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <h3>Registros en base de datos:</h3>
      <pre>{JSON.stringify(datos, null, 2)}</pre>
    </div>
  );
}