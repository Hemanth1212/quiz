import data from "../data/data.json";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import LinearProgressWithLabel from "../components/progress";
import { getScore, getWord } from "./utils";
import "./quiz-page.css";
import Result from "../components/result-page";
import StartContent from "../components/start-content";
import TextField from "@mui/material/TextField";
import img from "../data/quiz.svg";

function Quizpage() {
  //intial state
  const [DATA, setData] = React.useState({
    value: "",
    word: getWord(data.wordList),
    progress: 0,
    questionData: "",
    score: "",
    userName: "",
    startQuiz: false,
  });
  const handleChange = (event) => {
    setData({ ...DATA, [event.target.name]: event.target.value });
  };
  const nextClick = () => {
    let quesData = { word: DATA.word, option: DATA.value };
    setData({
      ...DATA,
      questionData: [...DATA.questionData, quesData],
      word: getWord(data.wordList),
      value: "",
      progress: DATA.progress >= 100 ? 10 : DATA.progress + 10,
    });
    if (DATA.progress === 90) {
      let finalResponse = [...DATA.questionData, quesData];
      let score = getScore(data.wordList, finalResponse);
      setData({ ...DATA, score, progress: DATA.progress + 10 });
    }
  };
  return (
    <Card sx={{ minWidth: 275 }} className="card">
      {/*  <StartContent /> */}
      {!DATA.startQuiz ? (
        <>
          <div className="knwldge">Let's Play, Be the first !</div>
          <div className="start-content">
            <div className="start-inputs">
              <TextField
                className="start-inp"
                id="name"
                label="Enter your name"
                variant="standard"
                name="userName"
                value={DATA.userName}
                onChange={handleChange}
              />
              <Chip
                className="start-btn"
                label="Start"
                name="startQuiz"
                color="primary"
                onClick={() => setData({ ...DATA, startQuiz: true })}
              />
            </div>
            <img style={{ width: "50%" }} src={img} alt="quiz app" />
          </div>
        </>
      ) : (
        <>
          <LinearProgressWithLabel value={DATA.progress} />
          {DATA.progress < 100 ? (
            <div className="word-options">
              <div
                style={{
                  fontSize: "x-large",
                  fontWeight: "bolder",
                  marginBottom: "0.5rem",
                }}
              >
                {DATA.word}
              </div>

              <FormControl>
                <RadioGroup
                  aria-labelledby="options-group"
                  name="value"
                  value={DATA.value}
                  onChange={handleChange}
                >
                  {data.options.map((option) => (
                    <FormControlLabel
                      key={option.id}
                      value={option.id}
                      control={
                        <Radio style={{ height: "0.5rem" }} size="small" />
                      }
                      label={option.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
              <Chip
                className="next-btn"
                label={DATA.progress === 90 ? "Submit" : "Next"}
                variant="outlined"
                color="primary"
                onClick={nextClick}
                disabled={DATA.value ? false : true}
              />
            </div>
          ) : (
            <Result score={DATA.score} user={DATA.userName} />
          )}
        </>
      )}
    </Card>
  );
}

export default Quizpage;
