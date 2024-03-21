import AppHeader from "@/components/header";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import IAccount from "@/interfaces/IAccount";

const Profile = () => {
  const [user, setUser] = useState<IAccount>();
  const router = useRouter();
  useEffect(()=>{
    const userString = localStorage.getItem("user");
    if ( userString  !== null){
      setUser(JSON.parse(userString))
      return
    }
    router.push('/create-profile');
  }, [])

  return (
    <div className="flex flex-col h-screen items-center text-center">
      <AppHeader/>
      {user && <>
      <h3 className="text-3xl mb-8">Your Profile</h3>
      <div>
        <div className="ml-4">
          <h2 className="text-4xl font-bold mb-10">{user.name}</h2>
          <p className="text-gray-500">{user.desiredPosition}</p>
        </div>
      </div>
      <div className="mt-4 w-1/2">
        <p className="text-gray-500 ">{user.about}</p>
      </div>
      </>
      }
    </div>
    )
  ;
}
export default Profile;
