import Dashboard from "./components/Dashboard";


function App() {
  return (
    <div className="flex items-center justify-between flex-col mx-auto min-h-[99vh] w-full">
      <Dashboard />
      <p className="mb-10">Hello there , this is my <a href="https://github.com/0xsahil" className="bg-stone-700 p-2 rounded-lg text-white hover:bg-stone-500">Github</a>  and <a href="https://0xsahil.netlify.app/" className="bg-stone-700 p-2 rounded-lg text-white hover:bg-stone-500">Portfolio</a> </p>
    </div>
  );
}

export default App;
