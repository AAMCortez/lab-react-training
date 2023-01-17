function IdCard(props) {
  return (
    <div>
      <img src={props.picture} alt="profile" />
      <div>First Name: {props.firstName}</div>
      <div>Last Name: {props.lastName}</div>
      <div>Gender: {props.gender}</div>
      <div>Height: {props.height}</div>
      <div>Birth: {props.birth}</div>
    </div>
  );
}
export default IdCard