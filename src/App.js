import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { InfoContainer } from "./components/InfoContainer";

function App() {
  return (
    <div className="main-layout">
      <Header />
      <InfoContainer />
      <Footer />
    </div>
  );
}

export default App;