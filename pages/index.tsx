import { signIn, signOut, useSession } from 'next-auth/react';

const Home: React.FC = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <pre>
          <code>{JSON.stringify(session, null, 2)}</code>
        </pre>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Home;
