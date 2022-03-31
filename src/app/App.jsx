import Formulario from "./components/Formulario";
import Boton from "./components/Boton";
function App() {
  /* const getToken = () => { */

  const handleSubmt = (e) => {
    e.preventDefault();
    console.log(e.target);
    e.target.submit();

    console.log("Formulario enviado");
    
  };
  return (
    <div>
      <h1>Rest API Plantas</h1>
      <h3>Login</h3>
      <form
        id="formulario"
        name="formulario"
        action="/api/auth/login"
        method="POST"
        //enctype="multipart/form-data"
        /* type={"application/json"} */
        //onSubmit={handleSubmt}
      >
        <input
          id="username"
          type="text"
          name="username"
          placeholder="username"
        />
        <input id="email" type="text" name="email"></input>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default App;
