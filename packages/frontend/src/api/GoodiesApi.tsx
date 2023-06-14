import { Goody } from 'types/goody';
const GOODIES_API_URL = '/api/goodies';

export async function getGoodies(): Promise<Goody[]> {
    const response = await fetch(GOODIES_API_URL);
    return await response.json();
}
