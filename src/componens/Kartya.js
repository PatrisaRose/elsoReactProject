export default function Kartya(props) {
  function kattintas(){
    console.log('Yuppie', props.obj.id);
    props.kattintas(props.obj.id)
  }
  return (
    <div className="card col-sm-6">
      <div className="card-header">
        <h3>{props.obj.kutyaNeve}</h3>
      </div>
      <div className="card-body">
        <img
          className="img-thumbnail"
          src={props.obj.img}
        />
        <p>A kutya kora: {props.obj.kor}!!</p>
      </div>

      <div className="card-footer">
        <button className="btn btn-success" onClick={kattintas} type="button">
          Take me home plösö!
        </button>
      </div>
    </div>
  );
}
