<script lang="ts">
	import Facebook from '$lib/icons/Facebook.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import ArrowRight from '$lib/icons/ArrowRightShort.svelte';
	import Input from '$lib/components/common/Input.svelte';
	import { type SubscriptionSchema } from '$lib/schemas/subscription';
	import NavList from '$lib/components/common/NavList.svelte';
	import { superForm, type SuperValidated } from 'sveltekit-superforms';
	import type { EpisodeType } from '$lib/types';

	type Props = {
		form: SuperValidated<SubscriptionSchema>;
		episodes: EpisodeType[];
	};

	let { form, episodes }: Props = $props();
	const {
		form: formData,
		message,
		errors,
		enhance
	} = superForm(form, {
		multipleSubmits: 'prevent'
	});
</script>

<footer class="footer">
	<div class="footer__container">
		<NavList {episodes} />
		<form class="footer__newsletter" action="/subscribe" method="post" use:enhance>
			<p class="footer__newsletter-title">Newsletter</p>
			<p class="footer__newsletter-description">Sign up now; get closer to our action.</p>
			<Input
				id="email"
				name="email"
				bind:value={$formData.email}
				placeholder="Email address..."
				errors={$errors.email}
			>
				{#snippet button()}
					<button class="footer__input-button" type="submit">
						<ArrowRight />
					</button>
				{/snippet}</Input
			>
			{#if $message}
				<p
					class="footer__message"
					class:success={$message.status == 'success'}
					class:error={$message.status == 'error'}
				>
					{$message.text}
				</p>
			{/if}
		</form>
	</div>
	<ul class="footer__social">
		<li>
			<a
				class="footer__social-link"
				href="/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="go to facebook"><Facebook /></a
			>
		</li>
		<li>
			<a
				class="footer__social-link"
				href="/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="go to github"><Github /></a
			>
		</li>
		<li>
			<a
				class="footer__social-link"
				href="/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="go to twitter"><Twitter /></a
			>
		</li>
	</ul>
</footer>

<style>
	.footer {
		margin: auto;
		padding: 24px 16px;
		width: 100%;
	}

	.footer__container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: start;
		border-top: 1px solid var(--color-light-grey-1);
		padding: 24px 0 64px;
	}

	.footer__newsletter {
		position: relative;
		margin: auto;
		padding-top: 32px;
		width: 100%;
		max-width: 500px;
	}

	.footer__newsletter-title {
		margin-bottom: 8px;
		font-weight: var(--fw-regular);
		font-size: var(--fs-h4);
		letter-spacing: 16%;
		text-transform: uppercase;
	}

	.footer__newsletter-description {
		margin-bottom: 14px;
		font-weight: var(--fw-regular);
		font-size: var(--fs-h6);
	}

	.footer__social {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 24px;
	}

	.footer__social-link {
		color: var(--color-black);
	}

	.footer__input-button {
		cursor: pointer;
		border: none;
		border-radius: 4px;
		background-color: var(--color-purple);
		min-width: 36px;
		height: 36px;
		color: var(--color-white);
	}

	.footer :global(.nav__list) {
		flex-direction: column;
		align-items: start;
		gap: 9px;
		text-transform: none;
	}

	.footer :global(.dropdown__value) {
		text-transform: none;
	}

	.footer :global(.nav__donate-link svg) {
		display: none;
	}

	.footer__message {
		position: absolute;
		bottom: -24px;
		left: 0;
		font-weight: var(--fw-regular);
		font-size: var(--fs-h6);
	}

	@media (min-width: 1024px) {
		.footer {
			padding: 0 0 39px 0;
			max-width: 670px;
		}

		.footer__container {
			flex-direction: row;
			padding: 64px 0 89px;
		}

		.footer__newsletter {
			margin: unset;
			padding-top: 0;
			width: 375px;
		}
	}
</style>
