import { Link } from "react-router-dom";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
        <img className="postImg" src="https://thumbs.dreamstime.com/b/internet-information-technology-businessman-hand-showing-concept-75784736.jpg" alt="postImg" />
      <div className="postInfo">
        <div className="postCategories">
            <span className="postCategory">Tech</span>
        </div>
        <Link to={"/post/abc"} className="link">
          <span className="postTitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
        </Link>

        <div className="postDate">2 hour ago</div>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugit nostrum odio similique? Distinctio eos suscipit mollitia, eius id recusandae. Iste minus, ratione numquam deleniti hic excepturi accusamus ut soluta voluptate doloribus quod modi molestiae reiciendis amet facere commodi pariatur? Rerum vero delectus aliquid quod sequi ipsa cumque maiores unde exercitationem possimus? Dignissimos praesentium deserunt accusamus officiis facere magnam, quibusdam doloremque quidem non, natus porro obcaecati tempore vel officia temporibus, ut reiciendis minus dolore incidunt ullam ab architecto illum. Autem inventore sint voluptatibus nisi vel eius iusto cum accusamus? Fugiat inventore nulla quae aliquid soluta. Explicabo magni fugiat quisquam consectetur. 
      </p>

    </div>
  )
}

export default Post