import { NextResponse } from "next/server";

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function GET(request: Request) {
  return new Response("Login API GET response");
}

export async function POST(request: Request) {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");

  console.log("Received login attempt with email:", email);
  console.log("Received login attempt with password:", password);
  return NextResponse.json({ email: email, password: password });
}
