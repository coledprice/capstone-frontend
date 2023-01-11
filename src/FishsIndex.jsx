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
      <br />
      <br />
      <h1 className="text-center">
        <b>FRESHWATER</b>{" "}
        <h2 class="display-4">
          <b>Fishes</b>
        </h2>{" "}
        <b>OF NORTH CAROLINA</b>
      </h1>
      <div class="container text-center">
        <div class="row"></div>
      </div>

      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="container">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://cdn.pixabay.com/photo/2017/03/14/16/56/banner-2143727__480.jpg"
                class="d-block w-100"
                alt="..."
              />{" "}
              <div class="centered">Size & Habitat</div>
            </div>

            <div class="carousel-item">
              <img
                src="https://t3.ftcdn.net/jpg/01/81/02/32/240_F_181023297_KHjWNQEieBOfRhubJDpXgGrwHMHS6YcH.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="centered">Distinguishing Features</div>
            </div>

            <div class="carousel-item">
              <img
                src="https://media.istockphoto.com/id/1349424743/photo/little-boy-standing-and-fishing-on-a-wooden-dock-at-the-sunset.jpg?s=612x612&w=0&k=20&c=GdrKUNsEs3tTvlG2VMC9bjk3AYh7YaOAXf9GA35sSGo="
                class="d-block w-100"
                alt="..."
              />
              <div class="centered">Easy Identification</div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <br />

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
