import { useLoaderData, Link } from "remix";
import { getPosts, Post } from "~/post";

export const loader = () => getPosts();

const Posts = () => {
  const posts = useLoaderData<Post[]>();
  return (
    <div>
      <h1>this is Posts</h1>
      <ul>
        {
          posts.map(post => (
            <li key={post.slug}>
              <Link to={post.slug}>{post.title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Posts;
