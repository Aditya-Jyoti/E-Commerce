import { json } from '@sveltejs/kit';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import bcrypt from 'bcrypt';
import prisma from '$lib/server/prisma';

const saltRounds = 5;

export async function POST({ request }: { request: Request }) {
	const formData = await request.formData();

	let name = formData.get('name');
	let username = formData.get('username');
	let password = formData.get('password');
	let email = formData.get('email');

	if (!name || !username || !password || !email) {
		return json({
			status: 400,
			success: false,
			error: 'name, username, password or email is null'
		});
	}

	name = name.toString();
	username = username.toString();
	email = email.toString();

	password = password.toString();
	password = await bcrypt.hash(password, saltRounds);

	try {
		await prisma.user.create({
			data: {
				name,
				username,
				password,
				email
			}
		});
	} catch (err) {
		console.error(err);
		if (err instanceof PrismaClientKnownRequestError) {
			return json({ status: 400, success: false, error: 'username or email already exixts' });
		}
		return json({ status: 500, success: false, error: 'could not create user' });
	}

	return json({
		status: 200,
		success: true,
		data: { name: name, username: username, password: password, email: email }
	});
}
