import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getTeamMemberBySlug } from '$lib/services/team';

export const load: PageServerLoad = async ({ params }) => {
	const teamMember = await getTeamMemberBySlug(params.slug);

	if (!teamMember) {
		throw error(404, 'Team member not found');
	}

	return { teamMember };
};
