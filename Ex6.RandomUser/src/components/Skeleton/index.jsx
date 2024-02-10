import "./index.css";

function Skeleton() {
  return (
    <div className="cardContainer">
      <div className="card">
        <img className="skeletonImage" />
        <h1 className="skeletonName"></h1>
        <p className="skeletonData">
          <span style={{ fontWeight: "700" }}>Gender :</span>
          <span style={{ marginLeft: "20px", fontWeight: "700" }}>Age : </span>
        </p>
        <button className="skeletonBtn"></button>
      </div>
    </div>
  );
}

export default Skeleton;
