import matter from 'gray-matter';
import { promises as fs } from 'fs';
import path from 'path';
import { cache } from 'react';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPosts = cache(async () => {
  try {
    const fileNames = await fs.readdir(postsDirectory);
    const allPostsData = await Promise.all(
      fileNames
        .filter(fileName => fileName.endsWith('.mdx'))
        .map(async (fileName) => {
          const slug = fileName.replace(/\.mdx$/, '');
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = await fs.readFile(fullPath, 'utf8');
          const { data } = matter(fileContents);

          return {
            slug,
            ...(data as { title: string; date: string; category: string; excerpt: string; coverImage: string }),
          };
        })
    );

    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
});

export const getPostBySlug = cache(async (slug: string) => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...(data as { title: string; date: string; category: string; excerpt: string; coverImage: string }),
    };
  } catch (error) {
    console.error('Error reading post:', error);
    return null;
  }
});