const Formulario = (props) => {
  return <form id={props.id} name={props.name} action={props.action} method={props.method} content-type={props.type} autoComplete={props.autoComplete} onSubmit={props.onSubmit} >
    {props.children}
  </form>
};
export default Formulario;
