import PersonAdd from "./components/PersonAdd";
import PersonList from "./components/PersonList";
import PersonRemove from "./components/PersonRemove";

function App() {
  return (
    <>
      <h1 className="text-center font-bold text-lg">React Axios Example</h1>
      <PersonAdd />
      <PersonList />
      <PersonRemove />
    </>
  );
}

export default App;
