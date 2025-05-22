<script lang="ts">
	import Facebook from '$lib/icons/social/Facebook.svelte';
	import Github from '$lib/icons/social/Github.svelte';
	import Twitter from '$lib/icons/social/Twitter.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';

	import type { SubscriptionSchema } from '$lib/schemas/subscription';
	import { superForm, type SuperValidated } from 'sveltekit-superforms';

	type Props = {
		form: SuperValidated<SubscriptionSchema>;
	};

	let { form }: Props = $props();
	const { form: formData, message, errors, enhance } = superForm(form);
</script>

<footer class="footer">
	<div class="footer__container">
		<ul class="footer__nav">
			<li class="footer__nav-link">
				<a href="/episodes">Episodes</a>
			</li>
			<li class="footer__nav-link">
				<a href="/blog">Blog</a>
			</li>
			<li class="footer__nav-link">
				<a href="/contact">Contact</a>
			</li>
			<li class="footer__nav-link">
				<a href="/donate">Donate</a>
			</li>
		</ul>
		<form class="footer__newsletter" action="subscribe" method="post" use:enhance>
			<p class="footer__newsletter-title">Newsletter</p>
			<p class="footer__newsletter-description">Sign up now; get closer to our action.</p>
			<div class="footer__input">
				<input
					id="email"
					name="email"
					class="footer__input-field"
					placeholder="Email  address..."
					bind:value={$formData.email}
				/>
				<button class="footer__input-button" type="submit">
					<ArrowRight />
				</button>
			</div>
			{#if $errors}
				<p class="footer__newsletter-message error">
					{$errors.email}
				</p>
			{/if}
			{#if $message}
				<p
					class="footer__newsletter-message"
					class:success={$message.status == 'success'}
					class:error={$message.status == 'error'}
				>
					{$message.text}
				</p>
			{/if}
		</form>
	</div>
	<ul class="footer__social">
		<li><a href="/" rel="noopener noreferrer"><Facebook /></a></li>
		<li><a href="/" rel="noopener noreferrer"><Github /></a></li>
		<li><a href="/" rel="noopener noreferrer"><Twitter /></a></li>
	</ul>
</footer>

<style>
	.footer {
		max-width: 670px;
		margin: auto;
		padding: 64px 0 39px 0;
	}

	.footer__container {
		display: flex;
		align-items: start;
		justify-content: space-between;
		padding: 64px 0 89px;
		border-top: 1px solid var(--color-light-grey-1);
	}

	.footer__nav {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 9px;
	}

	.footer__nav-link a {
		color: var(--color-black);
		text-decoration: none;
	}

	.footer__newsletter {
		min-width: 375px;
		position: relative;
	}

	.footer__newsletter-title {
		font-size: var(--fs-h4);
		font-weight: var(--fw-regular);
		letter-spacing: 16%;
		text-transform: uppercase;
		margin-bottom: 8px;
	}

	.footer__newsletter-description {
		font-size: var(--fs-h6);
		font-weight: var(--fw-regular);
		margin-bottom: 14px;
	}

	.footer__newsletter-message {
		font-size: var(--fs-h6);
		font-weight: var(--fw-regular);
		position: absolute;
		left: 0;
		bottom: -24px;
	}

	.footer__social {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
		color: var(--color-black);
	}

	.footer__input {
		display: flex;
		align-items: center;
		width: 100%;
		border-radius: 4px;
		border: none;
		background-color: var(--color-light-grey-2);
		padding-right: 3px;
	}

	.footer__input:focus {
		border: 1px solid var(--color-purple);
		outline: none;
	}

	.footer__input:disabled {
		background-color: var(--color-grey);
		cursor: not-allowed;
	}

	.footer__input-field {
		font-size: var(--fs-h6);
		font-weight: var(--fw-regular);
		padding: 14px 0 14px 14px;
		background-color: transparent;
		border: none;
		width: 100%;
	}

	.footer__input-field:focus {
		outline: none;
	}

	.footer__input-button {
		border: none;
		background-color: var(--color-purple);
		color: var(--color-white);
		border-radius: 4px;
		min-width: 36px;
		height: 36px;
		cursor: pointer;
	}

	.success {
		color: var(--color-green);
	}

	.error {
		color: var(--color-red);
	}
</style>
