<script lang="ts">
	import { user } from '$lib/stores';

	let items = [];
	if ($user !== null && $user.cart !== null) {
		items = $user.cart.items;
	}
</script>

<div class="navbar bg-dark text-light px-4">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl font-black tracking-widest" href="/">Ecommerce</a>
	</div>

	<div class="flex-none">
		{#if $user !== null}
			<div class="dropdown dropdown-end">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
					<div class="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
							/></svg
						>
						<span class="badge badge-sm indicator-item">{items.length}</span>
					</div>
				</div>

				<div
					class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow text-dark"
				>
					<div class="card-body">
						<span class="font-bold text-lg">{items.length} items</span>
						<div class="card-actions">
							<button class="btn btn-primary btn-block bg-accent text-dark border-accent"
								>View cart</button
							>
						</div>
					</div>
				</div>
			</div>
		{/if}
		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
				<div class="w-8 rounded-full">
					<img alt="Tailwind CSS Navbar component" src="/default-user.jpg" />
				</div>
			</div>
			<ul
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-dark"
			>
				{#if $user !== null}
					<li><a href="/user/profile">Profile</a></li>
					<li><a href="/user/settings">Settings</a></li>
					<li>
						<a
							href="/"
							on:click={() => {
								user.set(null);
							}}>Logout</a
						>
					</li>
				{:else}
					<li><a href="/auth/login">Login</a></li>
					<li><a href="/auth/signup">Signup</a></li>
				{/if}
			</ul>
		</div>
	</div>
</div>
