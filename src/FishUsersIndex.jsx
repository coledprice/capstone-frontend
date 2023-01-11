import { useState, useEffect } from "react";

export function FishUsersIndex(props) {
  const handleClick = () => {
    console.log("yo", props.fishusers);
    console.log("delete", props);
    props.onDestroyFishuser(props.fishusers);
  };

  return (
    <div id="fishUser-index">
      <h1 className="text-center">Your Catches</h1>
      <br />
      <div className="posts row text-bg-light mb-3">
        {props.fishusers.map((fishuser) => (
          <div className="col-4" key={fishuser.id}>
            <br />
            <h2 className="card-title text-center">{fishuser.date}</h2>
            <br />
            <div>
              <img src={fishuser.image} className="card-img-top rounded mx-auto d-block" alt="" />
            </div>
            <br />
            <div className="d-grid gap-2 mx-auto">
              <p>
                <b>Quantity:</b> {fishuser.quantity}
              </p>
              <p>
                <b>Comment:</b> {fishuser.comment}
              </p>

              <br />
              <button className="btn btn-dark" onClick={handleClick}>
                Remove Catch
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
