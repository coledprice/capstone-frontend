import axios from "axios";

export function FishUsersNew(props) {
  // const handleCreateFishUser = (params) => {
  //   console.log("handleCreateFishUser", params);
  //   axios.post("http://localhost:3000/fish_users.json", params).then((response) => {
  //     console.log(response, "Creating Catches");
  //     window.location.href = "/";
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new FormData(event.target);

    // console.log("handleSubmit", params);
    // handleCreateFishUser(params);
    // event.target.reset();

    props.onCreateFishUser(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>Catch of the Day</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Date: <input date="date" type="text" />
        </div>
        <div>
          Quantity: <input quantity="quantity" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
