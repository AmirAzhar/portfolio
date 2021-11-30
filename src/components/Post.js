import "./post.css";
import { BiTimeFive } from "react-icons/bi";

function Post({ title, desc, date, time, link, image }) {
  function visitPost() {
    window.open(link);
  }
  return (
    <div className="post" onClick={visitPost}>
      <img src={image} className="post_image" />
      <div className="post_title">{title}</div>
      <div className="post_desc">{desc}</div>
      <div className="post_info">
        <div className="post_date">Published {date}</div>
        <div className="post_time">
          <BiTimeFive className="read_icon" />
          {time} min read
        </div>
      </div>
    </div>
  );
}

export default Post;
