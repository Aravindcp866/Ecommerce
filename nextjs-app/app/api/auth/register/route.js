import AuthService from '@/lib/auth/AuthService';

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const res = await AuthService.registerUser(email, password);

    return Response.json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in POST request:", error);
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
