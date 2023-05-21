import React, { useState, useEffect } from "react";
import "../styles/RobotWalk_Style.css";
import classNames from "classnames";

function RobotWalk() {
  const [userInput, setUserInput] = useState("");
  const [pos, setPos] = useState(["0,0"]);
  const [table, setTable] = useState([]);

  useEffect(() => {
    if (userInput.length === 0) {
      setPos(["0,0"]);
      setTable([]);
    }
  }, [userInput]);

  const createTable = () => {
    let step = [];
    for (let y = 4; y >= -4; y--) {
      for (let x = -4; x <= 4; x++) {
        step.push(`${x},${y}`);
      }
    }
    setTable(step);
  };

  const WalkDirection = (direction, lastSteps) => {
    let lastStep = lastSteps.split(",");
    switch (direction) {
      case "left":
        lastStep[0] = parseInt(lastStep[0]) - 1;
        break;
      case "up":
        lastStep[1] = parseInt(lastStep[1]) + 1;
        break;
      case "right":
        lastStep[0] = parseInt(lastStep[0]) + 1;
        break;
      case "down":
        lastStep[1] = parseInt(lastStep[1]) - 1;
        break;
    }
    return `${lastStep[0]},${lastStep[1]}`;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let steps = userInput.split("");
    let walkStep = [];
    let direction = "up";
    steps.map((val) => {
      if (val === "W") {
        let newStep = WalkDirection(
          direction,
          walkStep[walkStep.length - 1] ?? pos[0]
        );
        walkStep.push(newStep);
      } else if (val === "L") {
        switch (direction) {
          case "up":
            return (direction = "left");
          case "left":
            return (direction = "down");
          case "down":
            return (direction = "right");
          case "right":
            return (direction = "up");
        }
      } else if (val === "R") {
        switch (direction) {
          case "up":
            return (direction = "right");
          case "right":
            return (direction = "down");
          case "down":
            return (direction = "left");
          case "left":
            return (direction = "up");
        }
      }
    });

    setPos([...pos, ...walkStep]);
    createTable(walkStep);
  };

  console.log(pos);

  return (
    <div className="container">
      <div className="section">
        <h2>Robot Walk </h2>
        <div className="sectionLabel">คำสั่ง Robot Walk</div>
        <form className="sectionForm" onSubmit={handleOnSubmit}>
          <input
            className="inputBox"
            type="text"
            value={userInput}
            pattern="[W,R,L]{1,}"
            onChange={(e) => setUserInput(e.target.value.toLocaleUpperCase())}
          />
          <button type="submit" className="submitButton">
            คำนวณ
          </button>
        </form>
      </div>

      <div className="section">
        {table.length === 0 ? null : (
          <div className="sectionlabel">
            ตำแหน่งปัจจุบัน : ({pos[pos.length - 1]})
          </div>
        )}

        <div className="gridPlot">
          {table?.map((val, key) => {
            return (
              <div title={`ตำแหน่ง : ${val}`}>
                <div
                  key={key}
                  className={classNames("box", {
                    start: pos.indexOf(val) === 0,
                    between:
                      pos.indexOf(val) > 0 &&
                      pos.indexOf(val) !== pos.length - 1,
                    end: pos.indexOf(val) === pos.length - 1,
                  })}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RobotWalk;
