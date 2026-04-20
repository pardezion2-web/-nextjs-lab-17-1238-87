import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export async function generateStaticParams() {
  // Pre-generate the first 10 post pages
  return Array.from({ length: 10 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
}

export default async function PostPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <div className="space-y-6">
      <Link href="/posts" className="text-blue-600 hover:underline">
        ← Back to Posts
      </Link>
      <article className="bg-white p-6 rounded-lg shadow-md border">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-sm text-gray-600 mb-4">
          Post ID: {post.id} | User ID: {post.userId}
        </div>
        <p className="text-gray-700 leading-relaxed">{post.body}</p>
      </article>
    </div>
  );
}