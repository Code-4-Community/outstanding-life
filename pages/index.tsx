import { NextRouter, useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: React.FC = () => {
  const router: NextRouter = useRouter();

  useEffect(() => {
    router.push('/about-us');
  }, []);

  return <></>;
};

export default Home;
