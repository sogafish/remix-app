import { useLoaderData, LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { getPost } from "~/post";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug');

  return getPost(params.slug);
};

export const PostSlug = () => {
  const post = useLoaderData();

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}
