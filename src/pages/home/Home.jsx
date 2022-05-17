import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.css";


const Home = () => {
 
  return (
    <>
        <Header/>
        <div className="homeContainer">
          <Posts/>
          <Sidebar/>
        </div>
    </>
  )
}

export default Home