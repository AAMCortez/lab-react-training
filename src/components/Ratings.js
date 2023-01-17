function Ratings(props) {
  if (props.children >= 0 && props.children <= 0.4) {
    return <div> ☆☆☆☆☆ </div>;
  } else if (props.children >= 0.5 && props.children <= 1.4) {
    return <div> ★☆☆☆☆ </div>;
  }else if (props.children >= 2.5 && props.children <= 3.4){
  } else if (props.children >= 1.5 && props.children <= 2.4){
    return <div> ★★☆☆☆ </div>;
  }else if (props.children >= 2.5 && props.children <= 3.4){
    return <div> ★★★☆☆ </div>;
  }else if (props.children >= 3.5 && props.children <= 4.4){
    return <div> ★★★★☆ </div>;
  }else if (props.children >= 4.5 && props.children <= 5){
    return <div> ★★★★★ </div>;
  }
}

export default Ratings;
