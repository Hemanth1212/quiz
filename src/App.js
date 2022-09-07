import Quizpage from "./quiz-page/quiz-page";
import Header from "./components/header";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <Quizpage />
    </div>
  );
}

export default App;
