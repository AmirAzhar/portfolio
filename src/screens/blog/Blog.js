import "./blog.css";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import Post from "../../components/post";
import getDevArticles from "../../services/getDevArticles";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [noPosts, setNoPosts] = useState(false);

  function visitPage(link) {
    window.open(link);
  }

  useEffect(() => {
    getDevArticles()
      .then((data) => {
        setPosts(data);
        posts.length > 0 ? setNoPosts(false) : setNoPosts(true);
      })
      .catch(() => {
        setPosts([]);
        setNoPosts("true");
      });
  }, [posts.length]);

  return (
    <div className="content content_blog">
      <div>
        {!noPosts ? (
          <div className="posts_wrapper">
            {posts.map((post) => (
              <Post
                image={post.cover_image}
                title={post.title}
                desc={post.description}
                date={post.readable_publish_date}
                time={post.reading_time_minutes}
                link={post.canonical_url}
              />
            ))}
          </div>
        ) : (
          <div className="no_post_msg">
            <div className="msg_header">OOPS!</div>
            <div className="msg_itself">There are no recent posts!</div>
          </div>
        )}
      </div>
      <div className="community">
        Check out my other community contributions!
        <div className="socials_container">
          <Icon
            icon="logos:stackoverflow-icon"
            color="white"
            className="iconify"
            onClick={() =>
              visitPage("https://stackoverflow.com/users/17525800/amehpls")
            }
          />
          <Icon
            icon="cib:leetcode"
            color="white"
            className="iconify"
            onClick={() => visitPage("https://leetcode.com/AmehPls/")}
          />
          <Icon
            icon="logos:linkedin-icon"
            color="white"
            className="iconify"
            onClick={() => visitPage("https://www.linkedin.com/in/amir-azhar/")}
          />
          <Icon
            icon="fa:github-alt"
            color="black"
            className="iconify"
            onClick={() => visitPage("https://github.com/AmirAzhar")}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
