import "./singlePost.css";
import axios from "axios";

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostContainer">
                <img src="https://thumbs.dreamstime.com/b/internet-information-technology-businessman-hand-showing-concept-75784736.jpg" alt="postImg" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:  <b>Mohit</b></span>
                    <span>2 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellendus doloremque sed illo enim expedita accusantium at itaque possimus eligendi adipisci aperiam sapiente tempora a dolorem nihil libero animi. Neque itaque id sunt doloremque, amet earum? Nihil saepe voluptatibus impedit rerum minima, nisi magnam quos, animi quo amet beatae! Similique aut voluptatibus minus voluptatum impedit nihil dolore quo facere rerum provident, hic porro temporibus voluptate quam sunt! Accusamus error numquam tempora dolorem nisi eveniet suscipit unde? Provident beatae fugiat expedita, maxime quos sequi sit ab doloremque recusandae, officia eum repellendus aperiam numquam repudiandae quasi accusamus amet accusantium voluptatibus iusto quis. Culpa delectus debitis nisi deleniti officiis earum optio quod tenetur dolores facilis, nesciunt doloribus neque tempora, hic eligendi harum? Quae, a soluta quaerat saepe recusandae hic repudiandae magnam numquam eveniet ipsum impedit reprehenderit reiciendis. Dignissimos sequi alias ipsum odio non sint quidem aut, repellendus debitis! Ipsum sed non cumque sint ipsa fugiat natus quaerat amet officiis alias laboriosam, sapiente, inventore atque eum perferendis quam. Quidem accusantium, vel aut at incidunt ut eligendi eveniet eos, saepe quibusdam repellat, corporis doloribus rerum ullam labore nesciunt laudantium iste sed officiis facere? Doloremque exercitationem iure quibusdam. Quia ab eligendi at doloribus sunt quibusdam perferendis.
                </p>
            </div>
        </div>
    )
}

export default SinglePost