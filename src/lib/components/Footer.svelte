<script lang="ts">
	import Facebook from '$lib/icons/social/Facebook.svelte';
	import Github from '$lib/icons/social/Github.svelte';
	import Twitter from '$lib/icons/social/Twitter.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';

	import { superForm } from 'sveltekit-superforms/client';
	import type { LayoutData } from '../../routes/$types';

	type Props = {
		data: LayoutData;
	};

	let { data }: Props = $props();
	const { form, message, enhance } = superForm(data.form);
</script>

<footer class="footer">
	<div class="container">
		<ul class="navigation">
			<li class="navigation__link">
				<a href="/episodes" rel="noopener noreferrer">Episodes</a>
			</li>
			<li class="navigation__link">
				<a href="/blog" rel="noopener noreferrer">Blog</a>
			</li>
			<li class="navigation__link">
				<a href="/contact" rel="noopener noreferrer">Contact</a>
			</li>
			<li class="navigation__link">
				<a href="/donate" rel="noopener noreferrer">Donate</a>
			</li>
		</ul>
		<form class="newsletter" action="subscribe" method="post" use:enhance>
			<p class="newsletter__title">Newsletter</p>
			<p class="newsletter__description">Sign up now; get closer to our action.</p>
			<div class="custom-input">
				<input
					id="email"
					name="email"
					class="custom-input__field"
					placeholder="Email  address..."
					bind:value={$form.email}
				/>
				<button class="custom-input__button" type="submit">
					<ArrowRight />
				</button>
			</div>
			{#if $message}
				<p
					class="newsletter__message"
					class:success={$message.status == 'success'}
					class:error={$message.status == 'error'}
				>
					{$message.text}
				</p>
			{/if}
		</form>
	</div>
	<ul class="social">
		<Facebook />
		<Github />
		<Twitter />
	</ul>
</footer>

<style>
	.footer {
		max-width: 670px;
		margin: auto;
		padding: 64px 0 39px 0;
	}

	.container {
		display: flex;
		align-items: start;
		justify-content: space-between;
		padding: 64px 0 89px;
		border-top: 1px solid var(--color-light-grey-1);
	}

	.navigation {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 9px;
	}

	.navigation__link a {
		color: var(--color-black);
		text-decoration: none;
	}

	.newsletter {
		min-width: 375px;
	}

	.newsletter__title {
		font-size: 16px;
		font-weight: 600;
		letter-spacing: 16%;
		text-transform: uppercase;
		margin-bottom: 8px;
	}

	.newsletter__description {
		font-size: 12px;
		font-weight: 400;
		margin-bottom: 14px;
	}

	.social {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
	}

	.custom-input {
		display: flex;
		align-items: center;
		width: 100%;
		border-radius: 4px;
		border: none;
		background-color: var(--color-light-grey-2);
		padding-right: 3px;
	}

	.custom-input:focus {
		border: 1px solid var(--color-purple);
		outline: none;
	}

	.custom-input:disabled {
		background-color: var(--color-grey);
		cursor: not-allowed;
	}

	.custom-input__field {
		font-size: 12px;
		font-weight: 400;
		padding: 14px 0 14px 14px;
		background-color: transparent;
		border: none;
		width: 100%;
	}

	.custom-input__field:focus {
		outline: none;
	}

	.custom-input__button {
		border: none;
		background-color: var(--color-purple);
		color: var(--color-white);
		border-radius: 4px;
		min-width: 36px;
		height: 36px;
		cursor: pointer;
	}

	.newsletter__message {
		font-size: 12px;
		font-weight: 400;
		padding-top: 8px;
	}

	.error {
		color: var(--color-red);
	}

	.success {
		color: var(--color-green);
	}
</style>
