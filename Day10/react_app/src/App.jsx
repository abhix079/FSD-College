import './App.css'
const App = ({name,email,roll}) => {
  return (
    <div id="disp">
      <h1>Student details</h1>
      <h2>Name:{name}</h2>
      <h2>Email-id:{email}</h2>
      <h2>Roll No: {roll}</h2>
    </div>
  );
};
export default App;
