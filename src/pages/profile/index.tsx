import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import IAccount from '@/interfaces/IAccount';
import AppHeader from '@/components/appHeader';

const Profile = () => {
  const [user, setUser] = useState<IAccount>();
  const router = useRouter();
  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString !== null) {
      setUser(JSON.parse(userString));
      return;
    }
    router.push('/create-profile');
  }, []);

  return (
    <div className="flex flex-col h-screen items-center text-center">
      <AppHeader />
      {user && <>
        <h3 className="text-3xl mb-8">Your Profile</h3>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-10 text-center w-fit">{user.name}</h2>
          <p className="text-gray-500 text-center w-fit text-3xl">{user.desiredPosition}</p>

          <p className="text-gray-500 text-center max-w-screen-lg text-2xl">{user.about}</p>
        </div>
      </>
      }
    </div>
  )
    ;
};
export default Profile;
