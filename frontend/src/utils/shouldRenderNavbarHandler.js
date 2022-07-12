import { getPathName } from './getPathName';
export const shouldRenderNavbarHandler = () => {
  const url = getPathName();
  return !url.startsWith('/invitation');
};
