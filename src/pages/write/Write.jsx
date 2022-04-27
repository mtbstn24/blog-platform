import "./write.css";

export default function Write(){
    return (
        <div className="write">
            <img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" 
            className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" id="textInput" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Start writing your story..." 
                    type="text" className="writeInput writeText">
                    </textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}