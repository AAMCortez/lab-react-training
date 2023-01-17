function Greetings(props) {
  if (props.lang === 'de') {
    return <div>Hallo {props.children}</div>;
  } else if (props.lang === 'pt') {
    return <div>Olá {props.children}</div>;
  } else if (props.lang === 'fr') {
    return <div>Bonjour {props.children}</div>;
  } else if (props.lang === 'es') {
    return <div>Hola {props.children}</div>;
  }
}
export default Greetings;
