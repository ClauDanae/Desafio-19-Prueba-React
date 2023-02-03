import MiApi from "./components/MiApi"

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand mx-3">Libros de The Lord of the Ring</a>
       

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          </ul>
        </div>
      </nav>
      <MiApi/>
    </div>
  );
}

export default App;
