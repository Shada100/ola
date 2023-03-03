import "./App.css";
import NavbarH from "./components/Navbar";
import caring from "./images/caring.jpeg";
import Footer from "./components/Footer";
import ModalDialog from "./components/ModalDialog";

function App() {
  return (
    <div className="App">
      <div>
        <NavbarH />
      </div>
      <br />
      <br />
      <br />
      <ModalDialog />
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
          <div className="text-block a">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              ducimus tempore possimus modi, laudantium vel aliquam quasi!
              Asperiores similique maxime dolores. Sed debitis, amet consequatur
              libero eveniet ad. Exercitationem, quaerat?
            </p>
          </div>
        </div>
      </div>
      <section className="section1">
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              margin: "auto",
            }}
          >
            <p className="text-a">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              repudiandae assumenda minima obcaecati fuga inventore nulla magni
              aliquam amet? Voluptates adipisci velit enim assumenda accusamus
              natus! Doloribus atque excepturi accusamus.
              <br />
              <button>click here</button>
            </p>
            <div className="text">
              <img src={caring} alt="Home" width={"100%"} height={"100%"} />
            </div>
          </div>
        </div>
      </section>
      <section className="section1">
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              margin: "auto",
            }}
          >
            <p className="text-a">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              repudiandae assumenda minima obcaecati fuga inventore nulla magni
              aliquam amet? Voluptates adipisci velit enim assumenda accusamus
              natus! Doloribus atque excepturi accusamus.
              <br />
              <button>click here</button>
            </p>
            <div className="text">
              <img src={caring} alt="Home" width={"100%"} height={"100%"} />
            </div>
          </div>
        </div>
      </section>
      <section className="section1">
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              margin: "auto",
            }}
          >
            <p className="text-a">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              repudiandae assumenda minima obcaecati fuga inventore nulla magni
              aliquam amet? Voluptates adipisci velit enim assumenda accusamus
              natus! Doloribus atque excepturi accusamus.
              <br />
              <button>click here</button>
            </p>
            <div className="text">
              <img src={caring} alt="Home" width={"100%"} height={"100%"} />
            </div>
          </div>
        </div>
      </section>
      <section className="section1">
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              margin: "auto",
            }}
          >
            <p className="text-a">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              repudiandae assumenda minima obcaecati fuga inventore nulla magni
              aliquam amet? Voluptates adipisci velit enim assumenda accusamus
              natus! Doloribus atque excepturi accusamus.
              <br />
              <button>click here</button>
            </p>
            <div className="text">
              <img src={caring} alt="Home" width={"100%"} height={"100%"} />
            </div>
          </div>
        </div>
      </section>
      <section className="list">
        <article>
          <div className="coll">
            <img src={caring} alt="Home" width={"100%"} height={"100%"} />
          </div>

          <h3>Live In Care</h3>
        </article>
        <article>
          <div className="coll">
            <img src={caring} alt="Home" width={"100%"} height={"100%"} />
          </div>
          <h3>Domiciliary Care</h3>
        </article>
        <article>
          <div className="coll">
            <img src={caring} alt="Home" width={"100%"} height={"100%"} />
          </div>
          <h3>Dementia Care</h3>
        </article>
        <article>
          <div className="coll">
            <img src={caring} alt="Home" width={"100%"} height={"100%"} />
          </div>
          <h3>Children Care</h3>
        </article>
        <article>
          <div className="coll">
            <img src={caring} alt="Home" width={"100%"} height={"100%"} />
          </div>
          <h3>Respite Care</h3>
        </article>
        <article>
          <div className="coll">
            <img src={caring} alt="Home" width={"100%"} height={"100%"} />
          </div>
          <h3>Learning Disability Care</h3>
        </article>
        <span></span>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "200px",
            height: "50px",
            margin: "auto",
          }}
        >
          click me
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default App;
