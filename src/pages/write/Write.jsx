import "./write.css";

const Write = () => {
  return (
    <div className="write">
        <img src="https://dustinstout.com/wp-content/uploads/2015/06/how-to-write-a-blog-1920x1080.jpg" alt="img" className="writeImg" />

        <form className="writeForm">
            <div className="writeFormGrp">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" className="writeInput writeInputItalic" placeholder="Title"/>
            </div>

            <div className="writeFormGrp">
                <textarea className="writeInput writeText" placeholder="Write your story..."></textarea>
            </div>
            <button type="submit" className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write