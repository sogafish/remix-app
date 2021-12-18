import path from 'path';
import fs from 'fs/promises';
import parseFrontMatter from 'front-matter';
import invariant from "tiny-invariant";

export type Post = {
  slug: string;
  title: string;
};

type PostMarkdownAttributes = {
  title: string;
};

const postsPath = path.join(__dirname, '..', 'posts');

const isValidPostAttributes = (attributes: any): attributes is PostMarkdownAttributes => attributes?.title;

export const getPosts = async () => {
  const readDir = await fs.readdir(postsPath);

  return Promise.all(
    readDir.map(async fileName => {
      const filePath = path.join(postsPath, fileName);
      const file = await fs.readFile(filePath);
      const stringifiedFile = file.toString();
      const { attributes } = parseFrontMatter<PostMarkdownAttributes>(stringifiedFile);
      invariant(
        isValidPostAttributes(attributes),
        `${fileName} has bad meta data`
      );

      return {
        slug: fileName.replace(/\.md$/, ''),
        title: attributes.title,
      };
    }),
  );
};

export const getPost = async (slug: string) => {
  const filepath = path.join(postsPath, slug + ".md");
  const file = await fs.readFile(filepath);
  const { attributes } = parseFrontMatter(file.toString());
  invariant(
    isValidPostAttributes(attributes),
    `Post ${filepath} is missing attributes`
  );
  return { slug, title: attributes.title };
};

