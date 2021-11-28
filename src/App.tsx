import { useGlobalContext } from "./context/AppContext";

function App() {
  const {todoCount,isLoading,setLoading} = useGlobalContext();
  
  console.log(todoCount,"@@")
  const handleClick:() => void=()=>{
    setLoading(!isLoading);
  }

  return (
    <>
      <h1>loading : {isLoading ? "true" : "flase"}</h1>
      <button onClick={handleClick} > click </button>
    </>
  );
}

export default App;
