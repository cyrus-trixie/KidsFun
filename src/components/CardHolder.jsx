import Card from "./Card";
import Lion from '/code/React Projects/KidsFun/MyReact/src/assets/lion.jpg';
import Monkey from '/code/React Projects/KidsFun/MyReact/src/assets/monkey.jpg';
import Snake from '/code/React Projects/KidsFun/MyReact/src/assets/snake.jpg';
import Elephant from '/code/React Projects/KidsFun/MyReact/src/assets/elephant.avif';
import Cow from '/code/React Projects/KidsFun/MyReact/src/assets/cow.jpg';
import LionRoar from '/code/React Projects/KidsFun/MyReact/src/assets/lion-roar-6011.mp3';
import ElephantSound from '/code/React Projects/KidsFun/MyReact/src/assets/elephant-225994.mp3';
import CowMoo from '/code/React Projects/KidsFun/MyReact/src/assets/cow-mooing-loudly-223546.mp3';
import MonkeySound from '/code/React Projects/KidsFun/MyReact/src/assets/monkey-scream-6407.mp3';
import SnakeSound from '/code/React Projects/KidsFun/MyReact/src/assets/snake-rattle-sound-hq-240150.mp3';

export default function CardHolder() {

  // Function to play the lion roar sound
  function playLionSound() {
    const lionSound = new Audio(LionRoar); // Create an audio object
    lionSound.play(); // Play the sound
  }

  function playElephantSound() {
    const elephantSound = new Audio(ElephantSound); // Create an audio object
    elephantSound.play(); // Play the sound
  }

  function playCowSound() {
    const cowSound = new Audio(CowMoo); // Create an audio object
    cowSound.play(); // Play the sound
  }


  
  function playMonkeySound() {
    const monkeySound = new Audio(MonkeySound); // Create an audio object
    monkeySound.play(); // Play the sound
  }

  function playSnakeSound() {
    const snakeSound = new Audio(SnakeSound); // Create an audio object
    snakeSound.play(); // Play the sound
  }
  return (
    <>
    <div className="flex flex-col h-screen">

    
    <div className="flex items-center justify-center">
      <h1 className="text-4xl shadow-lg mt-4  text-green-600">Click the Cards to play the sound of the Animals..</h1>
    </div>
      <div className="mt-10 flex flex-wrap justify-center space-x-10">
        <Card name='Lion' image={Lion} onClick={playLionSound} /> {/* Attach onClick */}
        <Card name='Elephant' image={Elephant} onClick={playElephantSound}/>
        <Card name='Cow' image={Cow}  onClick={playCowSound}/>
        <Card name='Monkey' image={Monkey}  onClick={playMonkeySound}/>
        <Card name='Snake' image={Snake}  onClick={playSnakeSound}/>
      </div>
      </div>
    </>
  );
}
