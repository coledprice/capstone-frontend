import axios from "axios";
import { useState, useEffect } from "react";
import { FishUsersIndex } from "./FishUsersIndex";
import { Home } from "./Home";

export function Catch() {
  const [fishusers, setFishusers] = useState([]);
  const [currentFishuser, setCurrentFishuser] = useState({});
  const [id, setId] = useState([]);
  // const id = props.fishusers["id"];

  const handleIndexFishUsers = () => {
    console.log("handleIndexFishUsers");
    axios.get("http://localhost:3000/fish_users.json").then((response) => {
      console.log(response.data);
      setFishusers(response.data);
    });
  };

  const handleDestroyFishuser = (fishuser, id) => {
    console.log("handleDestroyFishUser", fishuser.id);
    axios.delete(`http://localhost:3000/fish_users/${fishuser.id}.json`).then((response) => {
      setCurrentFishuser(fishuser.filter((f) => f.id !== fishuser.id));
      setId([response.data]);
    });
  };

  useEffect(handleIndexFishUsers, []);

  return (
    <div>
      <FishUsersIndex
        fishusers={fishusers}
        onDestroyFishuser={handleDestroyFishuser}
        fishuser={currentFishuser}
        id={id}
      />
    </div>
  );
}
