import "./header.css";

const Header = () => {
  return (
    <div className="header">
        <div className="headTitle">
            <span className="titleSm">React App</span>
            <span className="titleLg">Blog.com</span>
        </div>
        <img className="headerImg" src="https://wallpaperaccess.com/full/1194086.jpg" alt="banner" />
    </div>
  )
}

export default Header