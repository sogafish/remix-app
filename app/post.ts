export type Post = {
  slug: string;
  title: string;
}

export const getPosts = () => {
  const posts: Post[] = [
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

  return posts;
};
