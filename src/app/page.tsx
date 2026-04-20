import Hello from "./components/Hello";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="space-y-8">
      <Hello />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserCard name="Zion Pardeño" role="Software Engineer" avatar="https://th.bing.com/th/id/OIP.Gxhlz2RWvkZgyuh7dmc34QHaEK?w=299&h=180&c=7&r=0&o=7&pid=1.7&rm=3"/>
        <UserCard
          name="Zion Porcadilla"
          role="Product Manager"
          avatar="https://th.bing.com/th/id/OIP.mZ8itY4qVVoLonXEgizqcwHaHa?w=184&h=184&c=7&r=0&o=7&pid=1.7&rm=3"
        />
      </div>
      <Counter />
    </div>
  );
}
