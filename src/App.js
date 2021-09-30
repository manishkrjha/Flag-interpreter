import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🏁": "Chequered Flag",
  "🚩": "Triangular Flag",
  "🎌": "Crossed Flag",
  "🏴‍☠️": "Pirate Flag",
  "🏴": "Black Flag",
  "🏳️": "White Flag",
  "🏳️‍🌈": "Rainbow Flag"
};

export default function App() {
  const [bottomText, setBottomText] = useState("");

  function clickHandler(item) {
    // console.log("Emoji is clicked!", item);
    var meaning = emojiDictionary[item];
    setBottomText(meaning);
  }

  // var keyVal = 0;
  var emojisAvailable = Object.keys(emojiDictionary).map(function (item) {
    // keyVal++;
    // console.log(item);
    return (
      <span
        key={item}
        style={{ cursor: "pointer", padding: "0.3rem" }}
        onClick={() => clickHandler(item)}
      >
        {item}
      </span>
    );
  });

  function inputChangeHandler(event) {
    // console.log("Triggered");
    var inputEmoji = event.target.value;

    // console.log(inputEmoji);

    if (inputEmoji === "") {
      setBottomText(" ");
    }

    if (inputEmoji in emojiDictionary) {
      var meaning = emojiDictionary[inputEmoji];
      setBottomText(meaning);
      // console.log(meaning);
    } else {
      setBottomText("This emoji isn't availabe yet!");
    }
  }

  return (
    <div className="App">
      <h1>inside outttttt</h1>
      <input onChange={inputChangeHandler}></input>
      <div style={{ margin: "0.5rem" }}>{bottomText}</div>
      <div
        style={{
          fontWeight: "bold",
          marginTop: "1rem",
          marginBottom: "0.5rem"
        }}
      >
        Following are the emojis we know:
      </div>
      <div>{emojisAvailable}</div>
    </div>
  );
}
