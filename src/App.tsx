import UserTable from "./components/UserTable/UserTable";
import { UserContext } from "./context/UserContext";

function App() {
  return (
    <div className='App'>
      <h1>Project</h1>
      <UserContext>
        <UserTable />
      </UserContext>
    </div>
  );
}

export default App;
