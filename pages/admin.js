import { useState } from 'react';
import supabase from '../lib/supabaseClient';

export default function AdminForm() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [codigoAfiliado, setCodigoAfiliado] = useState('');
  const [imagenFile, setImagenFile] = useState<File | null>(null);

   const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imagenFile) return alert("Selecciona una imagen");

    // 1. Subir imagen
    const nombreArchivo = `${Date.now()}_${imagenFile.name}`;
    const { data: imagenSubida, error: errorImg } = await supabase.storage
      .from('imagenes-productos')
      .upload(nombreArchivo, imagenFile);

    if (errorImg) {
      console.error(errorImg);
      return alert("Error subiendo imagen");
    }

    const { data: urlPublica } = supabase.storage
      .from('imagenes-productos')
      .getPublicUrl(nombreArchivo);

    // 2. Insertar en tabla
    const { error: errorInsert } = await supabase
      .from('productos')
      .insert([
        {
          nombre,
          precio,
          codigoAfiliado,
          imagenUrl: urlPublica.publicUrl
        }
      ]);

    if (errorInsert) {
      console.error(errorInsert);
      alert("Error guardando producto");
    } else {
      alert("Producto guardado correctamente");
      // limpia el formulario
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
      <input value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Precio" required />
      <input value={codigoAfiliado} onChange={(e) => setCodigoAfiliado(e.target.value)} placeholder="Enlace afiliado" required />
      <input type="file" accept="image/*" onChange={(e) => setImagenFile(e.target.files?.[0] || null)} required />
      <button type="submit">Subir producto</button>
    </form>
  );
}
export async function getServerSideProps() {
  return { props: {} };
}