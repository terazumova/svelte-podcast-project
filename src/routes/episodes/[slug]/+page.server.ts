import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getEpisodeBySlug } from '$lib/services/episode';

export const load: PageServerLoad = async ({ params }) => {
	const episode = await getEpisodeBySlug(params.slug);

	if (!episode) {
		throw error(404, 'Episode not found');
	}

	return { episode };
};
