import { useState } from "react";
import successAudio from '/code/React Projects/KidsFun/MyReact/src/assets/success-1-6297.mp3';
import failAudio from '/code/React Projects/KidsFun/MyReact/src/assets/error-4-199275.mp3';

export default function Numbers() {
  const [randomQuiz1, setRandomQuiz1] = useState(1);
  const [randomQuiz, setRandomQuiz] = useState(1);

  const [randomAnswer1, setRandomAnswer1] = useState(0);
  const [randomAnswer, setRandomAnswer] = useState(0);
  const [randomAnswer2, setRandomAnswer2] = useState(0);

  function generateRandomNumbers() {
    setRandomAnswer1(Math.floor(Math.random() * 10));
    setRandomAnswer(Math.floor(Math.random() * 10));
    setRandomAnswer2(Math.floor(Math.random() * 10));

    setRandomQuiz(Math.floor(Math.random() * 5));
    setRandomQuiz1(Math.floor(Math.random() * 5));
  }

  let correctAnswer = randomQuiz1 + randomQuiz;
  let answerArray = [correctAnswer, randomAnswer, randomAnswer1];

  // Shuffle the answer array to randomize the order
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  // Call shuffleArray to shuffle answerArray
  let shuffledAnswers = shuffleArray([...answerArray]);

  // Function to handle the click event and check if the answer is correct
  function checkAnswer(selectedAnswer) {
    if (selectedAnswer === correctAnswer) {
   
      // Create an audio object and play the success sound
      const correctAudio = new Audio(successAudio);
      correctAudio.play();
         alert("Correct!");
    } else {
      
      // Create an audio object and play the fail sound
      const failSound = new Audio(failAudio);
      failSound.play();
      alert("Wrong!");
    }
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col space-y-20">
          <span className="flex items-center space-x-8">
            <h1 className="text-4xl">Try Solve this!</h1>
            <button
              className="w-48 p-2 rounded-md bg-red-500 text-white"
              onClick={generateRandomNumbers}
            >
              Next
            </button>
          </span>

          <div className="flex space-x-10">
            <span className="text-7xl">{randomQuiz}</span>
            <span className="text-7xl">+</span>
            <span className="text-7xl">{randomQuiz1}</span>
            <span className="text-7xl">=</span>
            <span className="text-7xl">?</span>
          </div>

          <div id="choices" className="flex flex-wrap space-x-4">
            {shuffledAnswers.map((answer, index) => (
              <span
                key={index}
                className="p-2 w-40 h-40 bg-yellow-500 rounded-md shadow-md flex items-center justify-center text-7xl cursor-pointer"
                onClick={() => checkAnswer(answer)} // Add onClick to check answer
              >
                {answer}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
