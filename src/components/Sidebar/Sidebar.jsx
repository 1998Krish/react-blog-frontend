import "./sidebar.css";

const Sidebar = () => {
    
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img className="sidebarImg" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="user" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quam, impedit aliquid dignissimos cumque officiis!</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    Life
                </li>
                <li className="sidebarListItem">
                    Movies
                </li>
                <li className="sidebarListItem">
                    Finance
                </li>
                <li className="sidebarListItem">
                    Science
                </li>
                <li className="sidebarListItem">
                    Tech
                </li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow us</span>
            <div className="sidebarSocial">
                <i className="sidebarSocialIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarSocialIcon fa-brands fa-instagram-square"></i>
                <i className="sidebarSocialIcon fa-brands fa-github-square"></i>
                <i className="sidebarSocialIcon fa-brands fa-twitter-square"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
