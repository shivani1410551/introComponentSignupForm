import "./styles/style.scss";
import HandleForm from "./components/handleForm";
function App() {
  return (
    <div className="container">
      <div className="description">
        <h1>Learn to code by watching others</h1>
        <p className="descriptionPara">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <HandleForm />
    </div>
  );
}

export default App;
