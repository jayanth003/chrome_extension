// import logo from "./logo.svg";
import "./App.css";
import Launcher from "./components/Launcher";
import Quotes from "./components/Quotes";
import { useState } from "react";
function App() {
  const [showPortalName, setShowPortalName] = useState("Welcome To Sandbox");
  return (
    <section className="app-background">
      <Quotes />
      <Launcher setShowPortalName={setShowPortalName} />
      <section className="portal-name">{showPortalName}</section>
    </section>
  );
}

export default App;
