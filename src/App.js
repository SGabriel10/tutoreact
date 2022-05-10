
function App() {
  const element ={
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello Props Name'
    }
  };
  
  return (
      {element}
  );
}

export default App;
