function CreditCard(props) {
  return (
    <div
      style={{
        color: `${props.color}`,
        backgroundColor: `${props.bgColor}`,
      }}
    >
      <div>Type: {props.type}</div>
      <div>Number: **** **** **** {props.number.substring(12)}</div>
      <div>Expiration Month: {props.expirationMonth}</div>
      <div>Bank: {props.bank}</div>
      <div>Owner: {props.owner}</div>
    </div>
  );
}

export default CreditCard;
