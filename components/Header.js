import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  
  const handleSignin = (event) => {
    event.preventDefault();
    signIn();
  }
  
  const handleSignout = (event) => {
    event.preventDefault();
    signOut();
  }
  
  const { data: session } = useSession();

  return (
    <div className="header">
      { session && <Link href="/"><a className="logo">Welcome</a></Link> } 
      { !session && <Link href="/"><a className="logo">Next auth</a></Link> } 
      { session && <a href="#" onClick={handleSignout} className="btn-signin">SIGN OUT</a> }
      { !session && <a href="#" onClick={handleSignin} className="btn-signin">SIGN IN</a> }
    </div>
  )
}  

