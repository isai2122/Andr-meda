import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from 'react';
import supabase from '../lib/supabaseClient' 

// Componente de Login con modificaciones para búsquedas y favoritos
const Login = ({ onLogin, onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificación básica
    if (!email || !password) {
      setError("Por favor ingresa email y contraseña");
      return;
    }

    // Simulamos verificación con localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      // Aseguramos que el usuario tenga las propiedades necesarias
      if (!user.searchHistory) user.searchHistory = [];
      if (!user.favorites) user.favorites = [];

      localStorage.setItem("currentUser", JSON.stringify(user));
      onLogin(user);
    } else {
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Iniciar Sesión en Andrómeda</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Iniciar Sesión
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm">
              ¿No tienes cuenta?{" "}
              <button
                type="button"
                onClick={onSwitchToRegister}
                className="text-blue-700 hover:text-blue-900"
              >
                Regístrate aquí
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

// Componente de Registro con soporte para favoritos y búsquedas
const Register = ({ onRegister, onSwitchToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!name || !email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    // Simulamos registro guardando en localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
      setError("Este correo ya está registrado");
      return;
    }

    // Añadimos campos para favoritos y búsquedas recientes
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      favorites: [],
      searchHistory: []
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    onRegister(newUser);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Crear Cuenta en Andrómeda</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
              Confirmar Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Registrarse
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm">
              ¿Ya tienes cuenta?{" "}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="text-blue-700 hover:text-blue-900"
              >
                Inicia sesión
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

// Componente de Perfil de Usuario
const UserProfile = ({ user, onLogout, onClose }) => {
  return (
    <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded shadow-md z-20 p-4">
      <div className="text-center mb-4">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full mx-auto flex items-center justify-center mb-2">
          <span className="text-white text-2xl font-bold">{user.name.charAt(0).toUpperCase()}</span>
        </div>
        <h3 className="font-bold text-lg">{user.name}</h3>
        <p className="text-gray-600 text-sm">{user.email}</p>
      </div>
      <hr className="my-2" />
      <button
        onClick={onLogout}
        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 font-medium"
      >
        Cerrar Sesión
      </button>
      <button
        onClick={onClose}
        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
      >
        Cerrar
      </button>
    </div>
  );
};

// Modificaciones en el componente ProductoCard para mejorar visualización en móvil
const ProductoCard = ({ producto, esFavorito, toggleFavorito }) => {
  return (
    <div className="bg-white bg-opacity-95 rounded-2xl shadow-lg p-4 flex flex-col items-center relative">
      {/* Botón de favorito */}
      <button
        onClick={() => toggleFavorito(producto.id)}
        className="absolute top-2 right-2 z-10"
      >
        {esFavorito ? (
          <HeartSolidIcon className="h-6 w-6 text-red-500" />
        ) : (
          <HeartIcon className="h-6 w-6 text-gray-400" />
        )}
      </button>

      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-36 h-36 object-contain mb-4"
      />
      <h2 className="text-md font-extrabold text-center text-blue-900 mb-2 leading-tight min-h-14">
        {producto.nombre}
      </h2>
      <p className="text-lg font-semibold text-gray-900 mb-4">
        {producto.precio}
      </p>
      <a
        href={producto.enlace}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold uppercase text-sm px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-center"
      >
        Ver producto
      </a>
    </div>
  );
};

// Modificaciones en el componente principal para mejorar visualización en móvil
export default function Home() {
  const [busqueda, setBusqueda] = useState("");
  const [filtroTienda, setFiltroTienda] = useState("");
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [mostrarCategorias, setMostrarCategorias] = useState(false);
  const [productosMezclados, setProductosMezclados] = useState([]);
  const [productosVisibles, setProductosVisibles] = useState(12);
  const [cargando, setCargando] = useState(false);
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

  // Estados para autenticación
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);

  // Verificar si hay un usuario guardado al cargar la página
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);


  {Array.isArray(productosMezclados) ? (
  productosMezclados.map((producto) => (
    <div key={producto.id} className="border p-2 m-2 bg-white rounded">
      <h3 className="text-lg font-bold">{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <a href={producto.enlace} target="_blank" rel="noopener noreferrer">
        Ver producto
      </a>
    </div>
  ))
) : (

  <p>No hay productos</p>
)}
  // Función para actualizar la búsqueda y guardarla en el historial del usuario
  const handleBusqueda = (valor) => {
    setBusqueda(valor);

    // Si hay un usuario logueado, guardamos la búsqueda en su historial
    if (user && valor.trim() !== "") {
      const updatedUser = { ...user };

      // Añadir al inicio y eliminar duplicados
      updatedUser.searchHistory = [valor, ...updatedUser.searchHistory.filter(s => s !== valor)];

      // Limitamos a las últimas 10 búsquedas
      if (updatedUser.searchHistory.length > 10) {
        updatedUser.searchHistory = updatedUser.searchHistory.slice(0, 10);
      }

      // Actualizamos el usuario en localStorage y en el estado
      setUser(updatedUser);

      // Actualizar también en el array de usuarios
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userIndex = users.findIndex(u => u.id === user.id);
      if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        localStorage.setItem("users", JSON.stringify(users));
      }

      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }
  };

  // Función para alternar favoritos
  const toggleFavorito = (productoId) => {
    if (!user) {
      setShowLogin(true);
      return;
    }

    const updatedUser = { ...user };

    // Si ya está en favoritos, lo quitamos
    if (updatedUser.favorites.includes(productoId)) {
      updatedUser.favorites = updatedUser.favorites.filter(id => id !== productoId);
    } else {
      // Si no está, lo añadimos
      updatedUser.favorites.push(productoId);
    }

    // Actualizamos el usuario
    setUser(updatedUser);

    // Actualizar en localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = users.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      localStorage.setItem("users", JSON.stringify(users));
    }

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
  };

  // Función para verificar si un producto es favorito
  const esFavorito = (productoId) => {
    return user && user.favorites && user.favorites.includes(productoId);
  };

  // Ordenar productos según el historial de búsquedas del usuario
  const ordenarProductosPersonalizados = (productos) => {
    if (!user || !user.searchHistory || user.searchHistory.length === 0) {
      return productos;
    }

    return [...productos].sort((a, b) => {
      // Puntuación basada en cuántas palabras del historial coinciden con el nombre
      const scoreA = user.searchHistory.reduce((score, term) => {
        return a.nombre.toLowerCase().includes(term.toLowerCase()) ? score + 1 : score;
      }, 0);

      const scoreB = user.searchHistory.reduce((score, term) => {
        return b.nombre.toLowerCase().includes(term.toLowerCase()) ? score + 1 : score;
      }, 0);

      return scoreB - scoreA; // Ordenar de mayor a menor coincidencia
    });
  };

  // Filtrar productos según los criterios de búsqueda, tienda y categoría
  const filtrarProductos = () => {
    let filtrados = productosMezclados;

    // Aplicar filtro de búsqueda
    if (busqueda) {
      filtrados = filtrados.filter(prod =>
        prod.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    // Aplicar filtro de tienda
    if (filtroTienda) {
      filtrados = filtrados.filter(prod => prod.tienda === filtroTienda);
    }

    // Aplicar filtro de categoría
    if (filtroCategoria) {
      filtrados = filtrados.filter(prod => prod.categoria === filtroCategoria);
    }

    // Aplicar filtro de favoritos
    if (mostrarFavoritos && user && user.favorites) {
      filtrados = filtrados.filter(prod => user.favorites.includes(prod.id));
    }

    // Si el usuario está logueado, ordenar según historial de búsqueda
    if (user && !mostrarFavoritos) {
      filtrados = ordenarProductosPersonalizados(filtrados);
    }

    return filtrados;
  };

  const productosFiltrados = filtrarProductos();

  // Efecto para cargar más productos al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200 &&
        !cargando &&
        productosVisibles < productosFiltrados.length
      ) {
        setCargando(true);
        setTimeout(() => {
          setProductosVisibles((prev) => prev + 8);
          setCargando(false);
        }, 800);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cargando, productosFiltrados.length, productosVisibles]);

  const handleLogin = (userData) => {
    setUser(userData);
    setShowLogin(false);
  };

  const handleRegister = (userData) => {
    setUser(userData);
    setShowRegister(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    setShowUserProfile(false);
    setMostrarFavoritos(false);
  };

  // Resetear vista cuando cambiamos entre favoritos y todos los productos
  useEffect(() => {
    setProductosVisibles(12);
  }, [mostrarFavoritos]);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/galaxia.jpg')" }}
    >
      {/* Barra de navegación */}
      <nav className="bg-[#0b1c39] bg-opacity-90 text-white px-4 md:px-6 py-4 flex flex-wrap md:flex-nowrap justify-between items-center relative">
        <h1 className="text-2xl font-bold mb-2 md:mb-0 w-full md:w-auto text-center md:text-left">Andrómeda</h1>
        <div className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-3 w-full md:w-auto">
          {/* Botón Comprar en */}
          <div className="relative inline-block mb-2 md:mb-0">
            <button
              onClick={() => setMostrarMenu(!mostrarMenu)}
              className="bg-blue-800 hover:bg-blue-900 px-3 md:px-4 py-2 rounded text-sm md:text-base"
            >
              Comprar en
            </button>
            {mostrarMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-md z-10">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setFiltroTienda("Natura");
                    setMostrarFavoritos(false);
                    setMostrarMenu(false);
                  }}
                >
                  Natura
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setFiltroTienda("Alibaba");
                    setMostrarFavoritos(false);
                    setMostrarMenu(false);
                  }}
                >
                  Alibaba
                </button>
                {/* Opción de Favoritos */}
                {user && (
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 font-medium"
                    onClick={() => {
                      setMostrarFavoritos(!mostrarFavoritos);
                      setFiltroTienda("");
                      setMostrarMenu(false);
                    }}
                  >
                    {mostrarFavoritos ? "Todos los productos" : "Favoritos ❤"}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Botón Quitar filtro */}
          {(filtroTienda || mostrarFavoritos) && (
            <button
              onClick={() => {
                setFiltroTienda("");
                setMostrarFavoritos(false);
              }}
              className="bg-blue-800 hover:bg-blue-900 px-3 md:px-4 py-2 rounded text-sm md:text-base mb-2 md:mb-0"
            >
              Quitar filtro
            </button>
          )}

          {/* Botón Categorías */}
          <div className="relative inline-block mb-2 md:mb-0">
            <button
              onClick={() => setMostrarCategorias(!mostrarCategorias)}
              className="bg-[#700c2f] hover:bg-[#5b0926] px-3 md:px-4 py-2 rounded text-sm md:text-base"
            >
              Categorías
            </button>
            {mostrarCategorias && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-md z-10">
                {[
                  "Perfumes",
                  "Aseo personal",
                  "Maquillaje",
                  "Tecnologia",
                  "Ropa",
                  "Para el Hogar",
                  "Electrodomésticos",
                  "Deportes y entrenamiento",
                  "Ala moda",
                ].map((cat) => (
                  <button
                    key={cat}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setFiltroCategoria(cat);
                      setMostrarCategorias(false);
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Botón Quitar categoría */}
          {filtroCategoria && (
            <button
              onClick={() => setFiltroCategoria("")}
              className="bg-blue-800 hover:bg-blue-900 px-3 md:px-4 py-2 rounded text-sm md:text-base mb-2 md:mb-0"
            >
              Quitar categoría
            </button>
          )}

          {/* Icono de usuario o botón de inicio de sesión */}
          {user ? (
            <div className="relative mb-2 md:mb-0">
              <button
                onClick={() => setShowUserProfile(!showUserProfile)}
                className="bg-blue-700 hover:bg-blue-800 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
              >
                <span className="text-white font-bold">{user.name.charAt(0).toUpperCase()}</span>
              </button>
              {showUserProfile && (
                <UserProfile
                  user={user}
                  onLogout={handleLogout}
                  onClose={() => setShowUserProfile(false)}
                />
              )}
            </div>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-blue-700 hover:bg-blue-800 px-3 md:px-4 py-2 rounded text-sm md:text-base mb-2 md:mb-0"
            >
              Iniciar Sesión
            </button>
          )}
        </div>
      </nav>

      {/* Buscador */}
      <div className="max-w-xl mx-auto px-4 py-4 md:py-6">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => handleBusqueda(e.target.value)}
          className="w-full p-3 rounded border border-gray-300 shadow-sm"
        />
      </div>

      {/* Mostrar título para favoritos */}
      {mostrarFavoritos && (
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-white bg-black bg-opacity-40 inline-block px-4 md:px-6 py-1 md:py-2 rounded">
            Tus Productos Favoritos ❤
          </h2>
        </div>
      )}

      {/* Productos - ajustado para mejor visualización en móvil */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6">
        {productosFiltrados.slice(0, productosVisibles).map((producto) => (
          <ProductoCard
            key={producto.id}
            producto={producto}
            esFavorito={esFavorito(producto.id)}
            toggleFavorito={toggleFavorito}
          />
        ))}

        {/* Mensaje cuando no hay favoritos */}
        {mostrarFavoritos && productosFiltrados.length === 0 && (
          <div className="col-span-full text-center py-6 md:py-10">
            <div className="bg-white bg-opacity-80 rounded-lg p-4 md:p-6 inline-block">
              <p className="text-lg md:text-xl font-bold mb-2">No tienes productos favoritos</p>
              <p>Añade productos a favoritos haciendo clic en el ícono del corazón</p>
            </div>
          </div>
        )}

        {/* Saturno girando como loader */}
        {cargando && (
          <div className="col-span-full flex justify-center mt-4">
            <video
              src="/images/saturno-loader.mp4"
              autoPlay
              loop
              muted
              className="w-16 h-16 md:w-24 md:h-24"
            />
          </div>
        )}
      </div>

      {/* Modal de Login */}
      {showLogin && (
        <Login
          onLogin={handleLogin}
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}

      {/* Modal de Registro */}
      {showRegister && (
        <Register
          onRegister={handleRegister}
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}
    </div>
  );
}