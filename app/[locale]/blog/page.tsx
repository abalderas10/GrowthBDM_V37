import { getPosts } from '@/lib/mdx';
import BlogWrapper from '@/components/blog/BlogWrapper';

export default async function BlogPage() {
  const posts = await getPosts();
  return <BlogWrapper posts={posts} />;
}