import Alamat from "./component/Alamat";
import Form from "./component/form";
import Nama from "./component/Nama";

function App() {
  return (
    <div className="App">
      <Nama nama="masukan nama"/>
      <Alamat nama="alamat"/>
      <hr/>
      <Form/>
    </div>
  );
}

export default App;
