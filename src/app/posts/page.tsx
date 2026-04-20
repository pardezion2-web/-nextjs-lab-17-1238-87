import { Suspense } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 }
  });
  const posts = await res.json();
  return posts.slice(0, 10);
}

function SlowData() {
  // Artificial delay to demonstrate streaming
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        <div className="bg-yellow-100 p-4 rounded-lg border">
          <h3 className="font-semibold text-yellow-800">Slow Data Component</h3>
          <p className="text-yellow-700">This content was streamed in separately!</p>
        </div>
      );
    }, 2000);
  });
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Posts</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <article key={post.id} className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-2">
              <a href={`/posts/${post.id}`} className="text-blue-600 hover:underline">
                {post.title}
              </a>
            </h2>
            <p className="text-gray-700">
              {post.body.length > 100 ? `${post.body.substring(0, 100)}...` : post.body}
            </p>
          </article>
        ))}
      </div>
      <Suspense fallback={<div className="bg-gray-100 p-4 rounded-lg border animate-pulse">Loading slow data...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <SlowData />
      </Suspense>
    </div>
  );
}