<script lang="ts">
	import Facebook from '$lib/icons/social/Facebook.svelte';
	import Github from '$lib/icons/social/Github.svelte';
	import Twitter from '$lib/icons/social/Twitter.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import Input from '$lib/components/common/Input.svelte';
	import { subscriptionSchema, type SubscriptionSchema } from '$lib/schemas/subscription';
	import NavList from '$lib/components/common/NavList.svelte';

	import { superForm, type SuperValidated } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	type Props = {
		form: SuperValidated<SubscriptionSchema>;
	};

	let { form }: Props = $props();
	const {
		form: formData,
		message,
		errors,
		enhance
	} = superForm(form, {
		validators: zodClient(subscriptionSchema),
		multipleSubmits: 'prevent'
	});
</script>

<footer class="footer">
	<div class="footer__container">
		<NavList isHeader={false} />
		<form class="footer__newsletter" action="subscribe" method="post" use:enhance>
			<p class="footer__newsletter-title">Newsletter</p>
			<p class="footer__newsletter-description">Sign up now; get closer to our action.</p>
			<Input {formData} {errors} {message} id="email" name="email" placeholder="Email address...">
				{#snippet submitButton()}
					<button class="footer__input-button" type="submit">
						<ArrowRight />
					</button>
				{/snippet}</Input
			>
		</form>
	</div>
	<ul class="footer__social">
		<li><a class="footer__social-link" href="/" rel="noopener noreferrer"><Facebook /></a></li>
		<li><a class="footer__social-link" href="/" rel="noopener noreferrer"><Github /></a></li>
		<li><a class="footer__social-link" href="/" rel="noopener noreferrer"><Twitter /></a></li>
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

	.footer__newsletter {
		min-width: 375px;
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

	.footer__social {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
	}

	.footer__social-link {
		color: var(--color-black);
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
</style>
