'use client';

import { useState } from 'react';
import Categories from './Categories';
import NewsletterSubscribe from './NewsletterSubscribe';
import RecentPosts from './RecentPosts';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: string;
}

interface BlogWrapperProps {
  posts: Post[];
}

const BlogWrapper = ({ posts }: BlogWrapperProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog de Growth Business Development</h1>
        
        <Categories 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="relative w-full h-64 mb-4">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="mb-2">
                        <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                        <span className="text-sm text-gray-500 mx-2">•</span>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                      <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="space-y-8">
              <NewsletterSubscribe />
              <RecentPosts posts={posts.slice(0, 5)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogWrapper;