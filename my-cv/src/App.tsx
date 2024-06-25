import "./App.scss";
import ExperiencesBody from "./components/ExperiencesBody";
import AsideBody from "./components/AsideBody";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <ExperiencesBody />
      <AsideBody />
    </div>
  );
}

export default App;
