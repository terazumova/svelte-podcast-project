import prisma from '$lib/server/prisma';

export const findEmailInSubscriptions = async (email: string) => {
	try {
		return await prisma.subscription.findUnique({
			where: { email }
		});
	} catch (error) {
		console.error('Error finding email in subscriptions:', error);
	}
};

export const subscribeUserByEmail = async (email: string) => {
	try {
		return await prisma.subscription.create({
			data: { email }
		});
	} catch (error) {
		console.error('Error subscribing user by email:', error);
	}
};
