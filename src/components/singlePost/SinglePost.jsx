import "./singlePost.css";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" 
                alt="" className="singlePostimg" 
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum, dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Thushari</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ut adipisci a veniam, quam alias quod est, iusto porro natus, 
                    inventore molestias temporibus minima soluta pariatur 
                    aliquid nemo molestiae nostrum obcaecati!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ut adipisci a veniam, quam alias quod est, iusto porro natus, 
                    inventore molestias temporibus minima soluta pariatur 
                    aliquid nemo molestiae nostrum obcaecati!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ut adipisci a veniam, quam alias quod est, iusto porro natus, 
                    inventore molestias temporibus minima soluta pariatur 
                    aliquid nemo molestiae nostrum obcaecati!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ut adipisci a veniam, quam alias quod est, iusto porro natus, 
                    inventore molestias temporibus minima soluta pariatur 
                    aliquid nemo molestiae nostrum obcaecati!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ut adipisci a veniam, quam alias quod est, iusto porro natus, 
                    inventore molestias temporibus minima soluta pariatur 
                    aliquid nemo molestiae nostrum obcaecati!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ut adipisci a veniam, quam alias quod est, iusto porro natus, 
                    inventore molestias temporibus minima soluta pariatur 
                    aliquid nemo molestiae nostrum obcaecati!
                </p>
            </div>
        </div>
    )
}