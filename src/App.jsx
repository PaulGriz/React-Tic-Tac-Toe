import Game from "./components/Game";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-gray-900 text-white min-h-screen">
      <div className="flex justify-center mt-10">
        <h1 className="text-4xl mb-10">Tic-Tac-Toe</h1>
      </div>

      <div className="flex justify-center">
        <Game />
      </div>
      <Footer />
    </div>
  );
}

export default App;
