import Editor from "./Editor";
import Preview from "./Preview";

function App() {
  return (
    <div className="App terminal container">
      <header className="App-header">
        <h1>Markdown Editor</h1>
      </header>

      <Editor></Editor>
      <Preview></Preview>
    </div>
  );
}

export default App;
