import {LoginButton, LoginInput} from "../components/Login"

export default function LoginPage() {
    return <main>
        <label className="flex font-gaegu items-center justify-center p-10 text-[64px] tracking-widest">Login</label>
        <LoginInput label="Username" type = "email" />
        <LoginInput label="Password" type = "password" />
        <LoginButton />
        </main>
}