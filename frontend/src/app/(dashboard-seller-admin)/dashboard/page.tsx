import { getServerSession } from "@/lib/getServerSession";

export default async function Home() {
  const session = await getServerSession();

  console.log(session);

  return (
    <main>{session ? <div>Logged in</div> : <div>Not logged in</div>}</main>
  );
}
