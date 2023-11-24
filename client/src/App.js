import ListUsers from "./components/ListUsers";
import MainChat from "./components/MainChat";
import AppRouter from "./pages/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter/>
      <ListUsers/>
    </div>
  );
}

export default App;
