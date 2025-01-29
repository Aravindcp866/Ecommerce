import AuthService from '@/lib/auth/AuthService';

export async function POST(req , res) {
  const { email, password } = await req.json();
  const tokens = await AuthService.loginUser(email, password);

  return new Response(JSON.stringify(tokens), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}