import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios'

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
        <button onClick={() => axios.put('http://localhost:3000/api/user/cl1ia2xp90006emtgiyihy8oq/privilegeLevel', {
    "privilegeLevel": "ADMIN"
})} >Update privilege Level</button>
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
