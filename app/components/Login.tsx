"use client";
import Link from "next/link";

export function LoginButton() {
  return (
    <button
      className="
                w-full
                rounded-[10px]
                bg-[#526D82]
                py-1
                text-[32px]
                font-gaegu
                text-white
                hover:opactiy-90
            "
      onClick={() => alert("Login clicked")}
    >
      Sign In
    </button>
  );
}

export function SignUpButton() {
  return (
    <div className="flex items-center justify-center gap-2 font-gaegu text-[22px]">
      <span className="text-gray-600"> Don't have an account?</span>
      <Link
        href="/signup"
        className="text-[#1B3C53] underline hover:text-gray-600 text-[#1B3C53]"
      >
        Sign Up
      </Link>
    </div>
  );
}

export function LoginInput(props: { default: string; type?: string }) {
  return (
    <input
      type={props.type || "text"}
      placeholder={props.default}
      className="
                w-full
                rounded-[10px]
                px-2
                py-1
                text-[32px]
                text-[#1B3C53]
                font-gaegu
                bg-[#E6E6E6]
                placeholder:text-[#848484]
                outline-none
            "
    />
  );
}

export function ForgotPasswordButton() {
  return (
    <button
      className="
                font-gaegu
                text-center
                text-[22px]
                text-[#1B3C53]
                hover:underline
            "
      onClick={() => alert("Forgot Password clicked")}
    >
      Forgot password?
    </button>
  );
}
