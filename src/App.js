import "./App.css";
import Landing from "./components/Landing";
import { ProfileProvider } from "./context/ProfileContext";

function App() {
  return (
    <ProfileProvider>
      <div className="bg">
        <Landing />
      </div>
    </ProfileProvider>
  );
}

export default App;
