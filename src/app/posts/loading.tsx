export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
      <div className="grid gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md border animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    </div>
  );
}