import { Calendar } from "./components/Calendar";

const App = () => {
  return (
    <div className="bg-gray-50 justify-center flex h-screen w-screen p-8">
      <div className="flex-col grow text-center flex space-y-12">
        <h1 className="text-4xl text-blue-800">Okko Challenge</h1>
        <Calendar />
      </div>
    </div>
  );
};

export default App;
