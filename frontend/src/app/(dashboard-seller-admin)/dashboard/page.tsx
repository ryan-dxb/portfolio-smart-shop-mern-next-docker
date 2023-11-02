import { getServerSession } from "@/lib/getServerSession";

export default async function Home() {
  const { isLoggedIn, user } = await getServerSession();

  if (!isLoggedIn) {
    return <div>Access Denied</div>;
  }

  console.log("user from dashboard", user);

  return (
    <main>
      <button className="w-32 h-10 bg-blue-400">Refresh Token</button>
    </main>
  );
}
