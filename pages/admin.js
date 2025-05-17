import { useEffect } from "react";

// Tu lista de productos aquí (igual que antes)
const productos = [
  // ... tus productos ...
];

export default function AdminPage() {
  // Esto inserta los estilos CSS en la página
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .admin-container {
        padding: 2rem;
        min-height: 100vh;
        background: #0a1026;
      }
      .admin-title {
        color: #fff;
        margin-bottom: 2rem;
        font-size: 2rem;
        font-weight: bold;
      }
      .admin-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }
      .admin-card {
        background: #151c36;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        min-height: 350px;
      }
      .admin-image {
        width: 120px;
        height: 120px;
        object-fit: contain;
        border-radius: 8px;
        margin-bottom: 1rem;
        background: #fff;
      }
      .admin-productName {
        font-size: 1.1rem;
        font-weight: bold;
        margin: 0.5rem 0;
        text-align: center;
      }
      .admin-price {
        font-size: 1rem;
        color: #b2e6ff;
        margin-bottom: 1rem;
      }
      .admin-button {
        display: inline-block;
        padding: 0.5rem 1.2rem;
        background: #1976d2;
        color: #fff;
        border-radius: 6px;
        text-decoration: none;
        font-weight: bold;
        margin-top: auto;
        transition: background 0.2s;
      }

      /* 4 columnas en pantallas medianas y grandes */
      @media (min-width: 768px) {
        .admin-grid {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="admin-container">
      <h1 className="admin-title">Panel de Administración</h1>
      <div className="admin-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="admin-card">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="admin-image"
              onError={e => { e.target.src = "https://via.placeholder.com/150?text=Sin+Imagen"; }}
            />
            <h2 className="admin-productName">{producto.nombre}</h2>
            <p className="admin-price">{producto.precio}</p>
            <a
              href={producto.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="admin-button"
            >
              VER PRODUCTO
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
