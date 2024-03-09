import Header from "./components/Header";
import Trabajo from "./components/Trabajo";

function App() {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section>
        <h1>Experiencia</h1>
        <Trabajo title="hello" anex="textos" text="palabras" />
      </section>
    </div>
  );
}

export default App;
