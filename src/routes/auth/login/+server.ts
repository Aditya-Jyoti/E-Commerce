import { json } from '@sveltejs/kit';

import bcrypt from 'bcrypt';
import prisma from '$lib/server/prisma';

export async function POST({ request }: { request: Request }) {
	const formData = await request.formData();

	let email = formData.get('email');
	let password = formData.get('password');

	if (!email || !password) {
		return json({ status: 400, success: false, error: 'email or password is null' });
	}

	email = email.toString();
	password = password.toString();

	try {
		const user = await prisma.user.findUnique({
			where: {
				email: email
			}
		});

		if (!user) {
			return json({
				status: 500,
				success: false,
				error: 'no user with that email, please signup'
			});
		}

		const passwordMatched = await bcrypt.compare(password, user.password);

		if (!passwordMatched) {
			return json({
				status: 500,
				success: false,
				error: 'wrong password for this user'
			});
		}

		return json({
			status: 200,
			success: true,
			data: { name: user.name, username: user.username, password: user.password, email: user.email }
		});
	} catch (err) {
		console.error(err);
		return json({ status: 500, success: false, error: 'could not access user' });
	}
}
