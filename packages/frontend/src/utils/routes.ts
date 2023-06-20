import { GOODY_ROUTE } from 'constants/routes';

export function getGoodyRoute(goodyId: string): string {
    return GOODY_ROUTE.replace(':id', goodyId);
}
