import Header from "./components/Header";
import Trabajo from "./components/Trabajo";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section>
        <Profile
          nombre="Rafael Aliani"
          areaTrabajo="Desarrollador Web"
          resumen="Soy un desarrollador web apasionado por crear aplicaciones increíbles."
          imagenUrl="ruta_a_tu_imagen.jpg"
          urlBoton1="url_de_la_pagina_web_1"
          urlBoton2="url_de_la_pagina_web_2"
          urlBoton3="url_de_la_pagina_web_3"
        ></Profile>
      </section>
      <section id="proyectos">
        <h1>Experiencia</h1>
        <Trabajo title="hello" anex="textos" text="palabras" />
      </section>
    </div>
  );
}

export default App;
