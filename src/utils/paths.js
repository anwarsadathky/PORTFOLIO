export const getAssetPath = (path) => {
  const baseUrl = import.meta.env.BASE_URL;
  return `${baseUrl}${path}`;
}; 