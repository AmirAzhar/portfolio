// Styles
import "./blog.css";

// Icons
import { Icon } from "@iconify/react";

// Components
import Post from "../../components/post";

// Hooks
import useGetDevArticles from "../../hooks/useGetDevArticles";

function Blog() {
  const [posts] = useGetDevArticles();

  return (
    <div className="content content_blog">
      <div>
        {posts.length ? (
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
              window.open("https://stackoverflow.com/users/17525800/amehpls")
            }
          />
          <Icon
            icon="cib:leetcode"
            color="white"
            className="iconify"
            onClick={() => window.open("https://leetcode.com/AmehPls/")}
          />
          <Icon
            icon="logos:linkedin-icon"
            color="white"
            className="iconify"
            onClick={() =>
              window.open("https://www.linkedin.com/in/amir-azhar/")
            }
          />
          <Icon
            icon="fa:github-alt"
            color="black"
            className="iconify"
            onClick={() => window.open("https://github.com/AmirAzhar")}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
