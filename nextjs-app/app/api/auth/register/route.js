import { NextRequest } from 'next/server'; // Import NextRequest
import AuthService from '@/lib/auth/AuthService';

/**
 * Handles POST requests to /api/auth/register
 *
 * @function
 * @param {NextRequest} req - The request object
 * @property {string} req.body.email - The email of the user to register
 * @property {string} req.body.password - The password chosen by the user
 * @returns {Object} - The response object
 */
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
