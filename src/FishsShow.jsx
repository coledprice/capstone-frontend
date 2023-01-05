import { useState } from "react";

export function FishsShow(props) {
  // const [fishs, setFishs] = useState([]);
  // function FishUsersNew() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new FormData(event.target);
    props.onCreateFishUser(params);
    event.target.reset();
  };
  return (
    <div>
      <h2>{props.fish.name}</h2>

      <div id="Fish-Users-New">
        <h1>Catch of the Day</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Date: <input name="date" type="text" />
          </div>
          <div>
            Quantity: <input name="quantity" type="text" />
          </div>

          <div>
            <input defaultValue={props.fish.id} name="fish_id" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
  // }
}
