import { z } from 'zod';

export const subscriptionSchema = z.object({
	email: z.string().email({ message: 'Invalid email address' })
});
