import "./App.css";
import NavbarH from "./components/Navbar";
import caring from "./images/caring.jpeg";

function App() {
  return (
    <div className="App">
      <div>
        <NavbarH />
      </div>
      <br />
      <br />
      <br />
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "90vw",
            height: "100%",
            margin: "auto",
            marginTop: "0",
          }}
        >
          <img src={caring} alt="Home" width={"100%"} height={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default App;
