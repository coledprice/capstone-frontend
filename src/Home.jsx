import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { useState, useEffect } from "react";
import { FishsIndex } from "./FishsIndex";
import axios from "axios";
import { Modal } from "./Modal";
import { FishsShow } from "./FishsShow";
import { Catch } from "./Catch";
import Weather from "./weather";
// import { FishUsersNew } from "./FishUsersNew";

export function Home() {
  const [fishs, setFishs] = useState([]);
  const [fishUsers, setFishUsers] = useState([]);
  const [isFishsShowVisible, setIsFishsShowVisible] = useState(false);
  const [currentFish, setCurrentFish] = useState({});

  const handleIndexFishs = () => {
    console.log("handleIndexFishs");
    axios.get("http://localhost:3000/fishs.json").then((response) => {
      console.log(response.data);
      setFishs(response.data);
    });
  };

  const handleShowFish = (fish) => {
    console.log("handleShowFish", fish);
    setIsFishsShowVisible(true);
    setCurrentFish(fish);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsFishsShowVisible(false);
  };

  const handleCreateFishUser = (params) => {
    console.log("handleCreateFishUser", params);
    axios.post("http://localhost:3000/fish_users.json", params).then((response) => {
      setFishUsers([...fishUsers, response.data]);
      // successCallback();
    });
  };

  useEffect(handleIndexFishs, []);

  return (
    <div>
      <FishsIndex fishs={fishs} onShowFish={handleShowFish} />

      <Modal show={isFishsShowVisible} onClose={handleClose}>
        <FishsShow onCreateFishUser={handleCreateFishUser} fish={currentFish} />
      </Modal>
    </div>
  );
}
