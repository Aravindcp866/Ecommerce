import AuthService from '@/lib/auth/AuthService';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { email, password } = req.body;
      const tokens = await AuthService.loginUser(email, password);
      res.status(200).json(tokens);
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
