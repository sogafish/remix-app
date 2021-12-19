import { Link, useLoaderData } from 'remix';
import { getPosts, Post } from '~/post';

export const loader = () => getPosts();

const Admin = () => {
  const posts = useLoaderData<Post[]>();

  return (
    <div className='admin'>
      <nav>
        <h1>Admin</h1>
        <ul>
          {
            posts.map(post => (
              <li key={post.slug}>
                <Link to={`/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
      <main></main>
    </div>
  );
};

export default Admin;
