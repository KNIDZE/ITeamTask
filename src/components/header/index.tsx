import Link from "next/link";
import { MdLogout} from "react-icons/md";
import {logOut} from "@/modules/profile";
import {useRouter} from "next/router";

const AppHeader = () => {
  const router = useRouter();
  const links = [
    {link: "/", title: "Home" },
    {link: "/jobs", title: "Jobs"},
    {link: "/liked", title: "Liked" },
    {link: "/profile", title: "Profile"}
  ]

  const handleLogOut = () =>{
    logOut();
    router.reload()
  }

  return (
    <header className=" bg-blue-500 top-0 relative  w-screen flex justify-center items-center mb-10">
      {links.map(link =>
        <Link key={link.link} href={link.link} className="p-5 px-10 duration-300 hover:bg-blue-400 font-bold text-white">
          {link.title}
        </Link>)}
      <button onClick={handleLogOut}>
        <MdLogout className="absolute top-1/2 right-5 -translate-y-1/2 text-white hover:cursor-pointer"/>
      </button>
    </header>
  );
}
export default AppHeader;
