interface UserCardProps {
  name: string;
  role: string;
  avatar?: string;
}

export default function UserCard({ name, role, avatar }: UserCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <div className="flex items-center space-x-4">
        <img
          src={avatar ?? "https://via.placeholder.com/64"}
          alt={`${name}'s avatar`}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
}
