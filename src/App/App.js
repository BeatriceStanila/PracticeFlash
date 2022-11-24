import "./App.css";
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";
import { useState } from "react";

function App() {
  //1. grab a random question and its answer from flashcards ✅
  // use math.random * flaschards to get a random index ✅
  // create a variable for question and a variable for which will re-render every time its state changes ✅
  // display the question and answer in the card component ✅
  // create a clickHandler function for the Next Question button✅

  //2. create a fn flip the answer card back around when button is clicked
  // if flip is false do nothing -> if true flip it

  const [randomQA, setRandomQA] = useState({
    question: "How are you?",
    answer: "ok",
  });

  const [flippedCard, setFlippedCard] = useState(false);

  let flashcards = [
    { id: "abc1", question: "question1", answer: "answer1" },
    { id: "abc1", question: "question2", answer: "answer2" },
    { id: "abc1", question: "question3", answer: "answer3" },
  ];

  function getQuestion() {
    let randomIndex = Math.floor(Math.random() * flashcards.length);
    console.log(randomIndex);
    setRandomQA(flashcards[randomIndex]);
  }

  function nextClickHandler() {
    getQuestion();
  }

  function flipCard() {
    setFlippedCard(!flippedCard);
  }

  console.log(randomQA);
  // function getData() {
  //   //const response = await fetch(`URL/type=${type}`);
  //   const index = Math.floor(Math.random() * flashcards.length);
  //   //const data = await response.json();
  //   setRandomQA(flashcards[index]);
  //   // setQuestion(randomQA.question);
  // }

  // getData();
  // console.log("this is random", randomQA);
  // console.log(question);
  // // question = "beatrice";
  // // answer = getData().answer;

  // question = getData(question);

  // // function handleClick(event) {
  // //   setType(event.target.text);
  // // }

  // function nextClick() {
  //   let data = getData();
  //   console.log("Button clicked");
  //   return data;
  // }

  return (
    <div className="App">
      <NavBar />
      <Cards
        question={randomQA.question}
        answer={randomQA.answer}
        nextClickHandler={nextClickHandler}
        flipCard={flipCard}
        flippedCard={flippedCard}
      ></Cards>
    </div>
  );
}

export default App;
