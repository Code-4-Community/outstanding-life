import { signIn, signOut, useSession } from 'next-auth/react';

const Home: React.FC = () => {
  const { data: session } = useSession();

  console.log(process.env.COGNITO_CLIENT_ID);

  if (session) {
    return (
      <>
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
