import { lista } from "./model/adatok";
import "./App.css";
import Kartya from "./componens/Kartya";

function App() {
function kattintas(id){
  console.log("szülőkomponens", id)
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Első react project</h1>
      </header>
      <article className="row">
        {lista.map((elem, index) => {
          return <Kartya obj={elem} key={index} kattintas = {kattintas} />;
        })}

        <p>Ez itt a tartalom helye</p>
      </article>
    </div>
  );
}

export default App;
