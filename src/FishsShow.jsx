export function FishsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new FormData(event.target);
    props.onCreateFishUser(params);
    event.target.reset();
  };
  return (
    <div>
      <h2>{props.fish.name}</h2>

      <div className="col-md-6 float-md-end mb-3 ms-md-3">
        <img src={props.fish.image} />
      </div>

      <div id="Fish-Users-New">
        <h1 class="text-white">Catch of the Day</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <b class="text-danger">
              Date:<p class="text-white">mm/dd/yyyy</p>
            </b>{" "}
            <input name="date" type="text" />
          </div>
          <br />
          <div class="text-danger">
            <b>Quantity:</b>
            <br /> <input name="quantity" type="text" />
          </div>
          <br />
          <div class="text-danger">
            <b>Image:</b>
            <br /> <input name="image" type="text" />
            <img
              src="https://t3.ftcdn.net/jpg/00/71/18/20/240_F_71182042_HT4tyS3CogIda2mvhEGOSJYTQ3aEmcpt.jpg"
              class="img-thumbnail"
              alt="..."
            />
          </div>
          <br />
          <div class="text-danger">
            <b>Comment:</b>
            <br /> <input name="comment" type="text" />
          </div>

          <div>
            <input defaultValue={props.fish.id} name="fish_id" />
          </div>
          <br />
          <button className="btn btn-dark" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
  // }
}
