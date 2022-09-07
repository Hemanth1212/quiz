import TextField from "@mui/material/TextField";
import img from "../data/quiz.svg";
import Chip from "@mui/material/Chip";

function StartContent() {
  return (
    <div className="start">
      <div className="knwldge">Let's Play, Be the first !</div>
      <div className="start-content">
        <div className="start-inputs">
          <TextField
            className="start-inp"
            id="name"
            label="Enter your name"
            variant="standard"
          />
          <Chip className="start-btn" label="Start" color="primary" />
        </div>
        <img style={{ width: "50%" }} src={img} alt="quiz app" />
      </div>
    </div>
  );
}

export default StartContent;
