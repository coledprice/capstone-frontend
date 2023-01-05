export function FishsIndex(props) {
  return (
    //     <div>
    //       <h1>All Fish</h1>
    //       {props.fishs.map((fish) => (
    //         <div key={fish.id}>
    //           <h2>{fish.name}</h2>
    //           <img src={fish.image} />
    //           <p>{fish.features}</p>
    //           <p>{fish.weight}</p>
    //           <p>{fish.length}</p>
    //           <p>{fish.habitat}</p>
    //           <p>{fish.bait}</p>
    //         </div>
    //       ))}
    //     </div>
    //   );
    // }

    <div id="fish-index">
      <h1 className="text-center">Fish Identification</h1>
      <br />
      <div className="posts row text-bg-light mb-3">
        {props.fishs.map((fish) => (
          <div className="col-4" key={fish.id}>
            <br />
            <h2 className="card-title text-center">{fish.name}</h2>
            <br />
            <div>
              <img src={fish.image} className="card-img-top rounded mx-auto d-block" alt="" />
            </div>
            <br />
            <div className="d-grid gap-2 mx-auto">
              <p>
                <b>Features:</b> {fish.features}
              </p>
              <p>
                <b>Weight:</b> {fish.weight}
              </p>
              <p>
                <b>Length:</b> {fish.length}
              </p>
              <p>
                <b>Habitat:</b> {fish.habitat}
              </p>
              <p>
                <b>Bait:</b> {fish.bait}
              </p>
              <br />
              <button className="btn btn-dark" onClick={() => props.onShowFish(fish)}>
                Log Your Catch
              </button>
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
