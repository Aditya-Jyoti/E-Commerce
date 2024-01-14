<script lang="ts">
	import { user } from '$lib/stores';
	import type { User } from '../../../app';

	async function login(event: Event) {
		const formElem = event.target as HTMLFormElement;
		const formdata = new FormData(formElem);

		const response = await fetch(formElem.action, {
			method: 'POST',
			body: formdata
		});

		const responseData = await response.json();
		console.log(responseData);

		if (responseData.status !== 200) {
			console.error(responseData);
		} else {
			user.set(<User>{
				name: responseData.data.name,
				username: responseData.data.username,
				email: responseData.data.email,
				password: responseData.data.password
			});
		}
		formElem.reset();
	}
</script>

<body class="absolute">
	<div class="container mx-auto p-8 flex w-[40rem]">
		<div class="max-w-md w-full mx-auto">
			<div class="bg-light bg-opacity-75 rounded-lg overflow-hidden shadow-2xl">
				<div class="p-8">
					<form method="POST" on:submit|preventDefault={login}>
						<div class="mb-5">
							<label for="email" class="block mb-2 text-dark font-bold">Email</label>

							<input
								type="email"
								name="email"
								placeholder="Enter email:"
								class="block w-full p-3 rounded bg-light bg-opacity-50 border-2 border-dark text-dark placeholder-dark focus:outline-none"
							/>
						</div>

						<div class="mb-5">
							<label for="password" class="block mb-2 text-dark font-bold">Password</label>

							<input
								type="password"
								name="password"
								placeholder="Enter password:"
								class="block w-full p-3 rounded bg-light bg-opacity-50 border-2 border-dark text-dark placeholder-dark focus:outline-none"
							/>
						</div>

						<button class="w-full p-3 mt-4 bg-accent font-bold text-dark rounded shadow"
							>Login</button
						>
					</form>
				</div>

				<div class="flex justify-between p-8 text-sm bg-dark bg-opacity-75">
					<a href="/auth/signup" class="font-semibold text-light">Signup</a>

					<a href="/auth/forgot-password" class="text-light font-semibold">Forgot password?</a>
				</div>
			</div>
		</div>
	</div>
</body>
