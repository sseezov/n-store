'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Home() {
  const session = useSession();

  console.log(session);
  return (
    <>
      ГЛАВНАЯ СТРАНИЦА
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
          Sign Out
        </Link>
      ) : (
        <Link href="/signin">SignIn</Link>
      )}
    </>
  );
}