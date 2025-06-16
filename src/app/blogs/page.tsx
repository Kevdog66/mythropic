import Header from '../../components/Header';
import Footer from '../../components/Footer';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface BlogPostMeta {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  slug: string;
}

export default async function BlogsPage() {
  const postsDir = path.join(process.cwd(), 'content/blogs');
  const filenames = await fs.readdir(postsDir);

  const posts: BlogPostMeta[] = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContent = await fs.readFile(filePath, 'utf8');
      const { data } = matter(fileContent);
      return {
        ...(data as Omit<BlogPostMeta, 'slug'>),
        slug: filename.replace('.md', ''),
      };
    })
  );

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto p-8 space-y-8">
        <h1 className="text-4xl font-extrabold mb-4">Latest</h1>
        <hr />
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-6 mb-6">
            <p className="text-sm text-gray-500 mb-1">
              {new Date(post.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              <Link href={`/blogs/${post.slug}`} className="hover:underline">{post.title}</Link>
            </h2>
            <div className="text-pink-600 text-xs uppercase font-semibold tracking-wide my-2">
              {post.tags?.join(' • ')}
            </div>
            <p className="text-gray-700">{post.description}</p>
            <Link href={`/blogs/${post.slug}`} className="text-pink-600 font-medium hover:underline">
              Read more →
            </Link>
          </article>
        ))}
      </main>
      <Footer />
    </div>
  );
}
