import { useLoaderData } from "remix";

export const loader = () => {
  return [
    {
      slug: 'first-post',
      title: 'first post title',
    },
    {
      slug: 'second-post',
      title: 'second post title',
    },
    {
      slug: 'third-post',
      title: 'third post title',
    },
  ];
};

type Post = {
  slug: string;
  title: string;
};

const Posts = () => {
  const posts = useLoaderData<Post[]>();
  return (
    <div>
      <h1>this is Posts</h1>
      <ul>
        {
          posts.map(post => (
            <li key={post.slug}>{post.title}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default Posts;
