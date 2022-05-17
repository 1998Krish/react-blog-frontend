import "./setting.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Setting = () => {
  return (
    <div className="setting">
      <div className="settingContainer">
        <div className="settingTitle">
          <div className="updateTitle">Update Your Account</div>
          <div className="deleteTitle">Delete Your Account</div>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingProfilePic">
            <img src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="profilePicture" />
            <label htmlFor="fileInput">
              <i className="settingProfilePicIcon fas fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              className="settingProfileInput"
              style={{ display: "none" }}
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Rhena" name="name" />
          <label>Email</label>
          <input type="email" placeholder="rhenaCodes@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="password" name="password" />
          <button className="settingProfilePicBtn" type="submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
