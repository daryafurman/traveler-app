import { useSession, signIn, signOut } from "next-auth/react";

export default function Admin() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Welcome, {session.user.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <p>You are not signed in</p>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
