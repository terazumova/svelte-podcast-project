import { getAllTeamMembers } from '$lib/services/team';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const teamMembers = (await getAllTeamMembers()) ?? [];

	return { teamMembers };
};
