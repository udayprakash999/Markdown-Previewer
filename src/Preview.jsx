import {marked} from "marked";

const Preview = ({markdown}) =>{
    return (
        <div
        id="preview"
        dangerouslySetInnerHTML={{__html: marked(markdown)}}
        ></div>
    );
};

export default Preview;