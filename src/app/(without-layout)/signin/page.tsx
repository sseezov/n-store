import { GoogleButton } from "../../../../components/GoogleButton";
import './globals.css'

export default async function Signin() {
  return (
    <div className="stack">
      <h1>SignIn</h1>
      <GoogleButton />
    </div>
  );
}