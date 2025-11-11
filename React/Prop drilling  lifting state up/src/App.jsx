import Counter from "./Count";
function App(){
  const username ="shiv";
  return <Parent username={username} />
  
  function Parent({username}){
    return <Child username={username} />
  }
  function Child({username}){
    return (
      <>
    <p>hello,{username}!</p>
    <Counter />
      </>
    )
  }
}
export default App;
