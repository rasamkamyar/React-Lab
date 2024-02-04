

function Card(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>{props.gender}</p>
      <img src={props.picture} />
    </div>
  );
}
export default Card;
