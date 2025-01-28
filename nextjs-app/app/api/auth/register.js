import AuthService from '@/lib/auth/AuthService';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { email, password } = req.body;
      const result = await AuthService.registerUser(email, password);
      res.status(201).json(result);
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
