import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Form from "./components/Form";
import Result from "./components/Result";
import Dialog from "./components/Dialog";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Form />
        <Result />
      </main>
      <Footer />
      <Dialog />
    </>
  );
}
export default App;
