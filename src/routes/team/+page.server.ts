import { getAllTeamMembers } from '$lib/services';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const teamMembers = await getAllTeamMembers();

	return { teamMembers };
};
