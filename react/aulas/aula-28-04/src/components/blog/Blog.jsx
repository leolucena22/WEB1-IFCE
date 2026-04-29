import { Post } from "./Post.jsx";

function Blog() {
  const posts = ["Post 1", "Post 2", "Post 3", "Post 4"];

  return (
    <>
      <h3>Lista de postagens do blog</h3>
      {posts.map((post, index) => (
        <Post key={index} titulo={post} />
      ))}
    </>
  );
}

export default Blog;
