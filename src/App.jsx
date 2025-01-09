import { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import Download from "./Download";
import "./style.css";

const App = () => {
  const [markdown, setMarkdown] = useState("");
  function showInfo(){
    let info = document.querySelector(".info-content")
    info.classList.add("info-show")
  }
  function closeInfo(){
    let info = document.querySelector(".info-content")
    info.classList.remove("info-show")
  }
  return (
    <>
    <nav>
      <h1>Markdown Previewer</h1>
      <button id="info"
      onMouseEnter={showInfo}
      onMouseLeave={closeInfo}
      >i</button>
      <div className="info-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur possimus nostrum vel deleniti natus, distinctio atque ipsam corporis nulla dolor, dicta quod excepturi eos facere cupiditate, ipsa adipisci. Est, cum.
      </div>
    </nav>

      <main>
        <div className="markdown-container">
          <div className="markdown-box">
            <h2>Editor</h2>
            <Editor markdown={markdown} setMarkdown={setMarkdown} />
          </div>
          <div className="markdown-box">
            <h2>Preview</h2>
            <Preview markdown={markdown} />
          </div>
        </div>
        <Download markdown={markdown} />
      </main>
    </>
  );
};

export default App;
