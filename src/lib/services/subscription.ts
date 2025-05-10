import prisma from '$lib/server/prisma';

export async function subscribeUserByEmail(email: string) {
	const subscription = await prisma.subscription.findUnique({
		where: { email }
	});

	if (subscription) {
		return { status: 'error', message: 'This email is already subscribed.' };
	}

	const newSubscription = await prisma.subscription.create({
		data: { email }
	});

	if (newSubscription) {
		return { status: 'success', message: 'You have been subscribed!' };
	}

	return { status: 'error', message: 'Something went wrong. Please try again later.' };
}
