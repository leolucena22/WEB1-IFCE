import { Post } from "./Post.jsx";

function Blog() {
  const posts = ["Post 1", "Post 2", "Post 3", "Post 4"];

  return (
    <>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '1rem' }}>Lista de postagens do blog</h3>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {posts.map((post, index) => (
          <Post key={index} titulo={post} />
        ))}
      </div>
    </>
  );
}

export default Blog;
