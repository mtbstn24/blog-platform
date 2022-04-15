import "./header.css";

export default function Header(){
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">React & Node</span>
                <span className="headerTitleLg"> Blog</span>
            </div>
            <img className="headerImg" src="https://www.befunky.com/images/wp/wp-2017-10-Blog-Title-Images-13.jpg?auto=webp&format=jpg&width=1136&crop=16:9" alt="" />
            
        </div>
    )
}