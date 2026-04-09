import { ROUTES } from '@/constants/Routes';
import { router } from 'expo-router';

type FixedRouteKeys = {
  [K in keyof typeof ROUTES]: (typeof ROUTES)[K] extends string ? K : never;
}[keyof typeof ROUTES];

export type RoutePath = (typeof ROUTES)[FixedRouteKeys];

export function useNavigationHelper() {
  return {
    goTo: (path: RoutePath) => router.replace({ pathname: path as any }),
    pushTo: (path: RoutePath) => router.push({ pathname: path as any }),
    back: () => router.back(),
  };
}
