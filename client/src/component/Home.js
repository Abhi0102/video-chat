import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home(props) {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleJoinInput = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(id);
  };

  const handleCreateRoom = (e) => {
    e.preventDefault();
    axios
      .get("/api/create-room")
      .then((response) => navigate(response.data.id))
      .catch((err) => console.log(err));
  };
  return (
    <div className="input-box">
      <div className="inner-div-box">
        <h2 className="txt-white txt-heading">Hello There!!!</h2>
        <div>
          <input
            className="inp-join"
            onChange={(e) => handleJoinInput(e)}
            value={id}
            placeholder="Paste your id here..."
          />
          <button
            className="btn-success txt-white btn-join"
            type="submit"
            disabled={!id}
            onClick={(e) => handleSubmit(e)}
          >
            Join
          </button>
        </div>
        <h3 className="txt-white txt-heading">Or</h3>
        <button
          className="btn-success txt-white btn-join"
          onClick={handleCreateRoom}
        >
          Create Room
        </button>
      </div>
    </div>
  );
}

export default Home;
