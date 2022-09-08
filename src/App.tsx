import { Container } from "@mui/system";
import UserTable from "./components/UserTable/UserTable";
import Modal from "./components/Modal/Modal";

import { UserContext } from "./context/UserContext";

function App() {
  return (
    <Container maxWidth="lg">
      <UserContext>
        <UserTable />
        <Modal/>
      </UserContext>
    </Container>
  );
}

export default App;
