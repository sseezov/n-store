import { SignInForm } from "./SignInForm";
import './globals.css'

export default async function Signin() {
  return (
    <div className="stack">
      <h1>Введите пароль</h1>
      <SignInForm />
    </div>
  );
}