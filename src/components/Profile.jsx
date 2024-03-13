import "./../Css/Profile.css";

function Profile({
  nombre,
  areaTrabajo,
  resumen,
  imagenUrl,
  urlBoton1,
  urlBoton2,
  urlBoton3,
}) {
  return (
    <>
      <div className="perfil-container">
        <div className="perfil-content">
          <div className="perfil-image">
            <img src={imagenUrl} alt="Foto de perfil" />
          </div>
          <div className="perfil-info">
            <h2>{nombre}</h2>
            <p>{areaTrabajo}</p>
            <p>{resumen}</p>
            <div className="buttons-container">
              <button onClick={() => (window.location.href = urlBoton1)}>
                Botón 1
              </button>
              <button onClick={() => (window.location.href = urlBoton2)}>
                Botón 2
              </button>
              <button onClick={() => (window.location.href = urlBoton3)}>
                Botón 3
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
