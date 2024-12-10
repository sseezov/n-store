'use client'
import Link from 'next/link';
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Header() {
  const session = useSession();
  return (
    <header>
      <Link href='/'>
        <h1>Виссон</h1>
        <h2>Швейно-вышивальная мастерская</h2>
      </Link>
      <nav>
        <Link href='catalog'>Каталог</Link>
        <Link href='catalog'>О нас</Link>
        <Link href='catalog'>Условия доставки</Link>
        <Link href='catalog'>Способы оплаты</Link>
        <Link href='catalog'>Как снять мерки</Link>
        <Link href='catalog'>Таблица размера</Link>
        <Link href='catalog'>Вопросы</Link>
        <Link href='catalog'>Корзина</Link>
      </nav>
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
          Sign Out
        </Link>
      ) : (
        <Link href="/signin">SignIn</Link>
      )}
    </header>
  )
}