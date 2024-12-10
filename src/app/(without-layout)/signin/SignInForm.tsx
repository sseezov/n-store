"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState, type FormEventHandler } from "react";

const SignInForm = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/admin");
      setError('');
    } else {
      setError('wrong password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input type="password" name="password" required />
      <button type="submit">Sign In</button>
      {error && <h3>Неверный пароль!</h3>}
    </form>
  );
};

export { SignInForm };