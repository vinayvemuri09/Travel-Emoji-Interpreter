import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🗼": "Eiffel Tower",
  "🗾": "Map Of Japan",
  "⛰️": "Mountain",
  "🌋": "Volcano",
  "🗻": "Mount Fuji",
  "🏕️": "Camping",
  "🗽": "Statue of Liberty",
  "✈️": "DAirplane",
  "🛕": "Hindu Temple",
  "⛪": "Church",
  "🕌": "Mosque",
  "🚇": "Subway Train"
};

const emojiList = Object.keys(emojiDictionary);
export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    const emoji = event.target.value;
    setEmoji(emoji);
    var meaning = emojiDictionary[emoji];
    if (meaning === undefined) {
      meaning = "Sorry, We don't have this emoji in our database.";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    setEmoji(emoji);

    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Travel Emoji Interpreter</h1>
      <input
        className="App-input"
        placeholder="Enter an emoji here...."
        value={emoji}
        onChange={emojiInputHandler}
      />
      <p className="quote">
        <q>Travel to be more open!</q>
      </p>
      <p>Click the travel emojis below and find out what they mean!</p>
      <div className="App-div">
        {emojiList.map((emoji, index) => {
          return (
            <span
              key={emoji}
              className="App-span"
              onClick={() => {
                emojiClickHandler(emoji);
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <p style={{ marginBlockEnd: "0.7em" }}>Understand the meaning here</p>
      <div className="ans">{meaning} </div>
    </div>
  );
}
