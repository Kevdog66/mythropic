// src/app/blogs/[slug]/page.tsx
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/blogs', `${slug}.md`);

  try {
    const file = await fs.readFile(filePath, 'utf-8');
    const { content, data } = matter(file);

    return (
      <div className="min-h-screen bg-white text-black flex flex-col">
        <Header />
        <main className="flex-1 max-w-3xl mx-auto p-8">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <p className="text-sm text-gray-600 mb-8">{new Date(data.date).toLocaleDateString()}</p>
          <div className="prose prose-lg">
        <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        </main>
        <Footer />
      </div>
    );
  } catch (err) {
    notFound(); // shows 404 if file doesn't exist
  }
}
