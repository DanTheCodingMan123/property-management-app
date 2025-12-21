import {LoginButton, LoginInput} from "../components/Login"

export default function LoginPage() {
    return <main>
        <label className="flex font-serif items-center justify-center p-10 text-2xl tracking-widest">Login Page</label>
        <LoginInput label="Username" type = "email" />
        <LoginInput label="Password" type = "password" />
        <LoginButton />
        </main>
}