import React from "react";

//2. create a fn flip the answer card back around when button is clicked
//

function Cards({ nextClickHandler, question, answer, flipCard, flippedCard }) {
  // const [flip, setFlip] = useState(false);
  return (
    <section className="cards">
      <div className="question-card">
        <p>{question}</p>
      </div>
      <div className="answer-card" onClick={flipCard}>
        {flippedCard ? <p>{answer}</p> : <p>Click here for answer</p>}
      </div>
      <button onClick={nextClickHandler}>Next Question</button>
    </section>
  );
}

export default Cards;
