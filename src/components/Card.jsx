export default function Card({ name, image, onClick }) {
    return (
      <div 
        className="w-64 h-56 mt-8 p-2 rounded-md shadow-sm bg-red-400 text-center flex flex-col items-center cursor-pointer hover:scale-105"
        onClick={onClick} // Trigger the passed onClick handler
      >
        <h1 className="text-2xl mb-2">{name}</h1>
        <img src={image} alt={`${name} image`} className="rounded-lg w-full h-32 object-cover" />
      </div>
    );
  }
  