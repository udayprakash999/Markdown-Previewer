const Editor = ({markdown, setMarkdown}) =>{
    return (
        <textarea id="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write your Markdown here..."
        />
    );
};

export default Editor;