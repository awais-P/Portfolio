export const environment = {
  production: true, // <--- IMPORTANT: This tells Angular to optimize for speed
  sanity: {
    projectId: '26l1tc3v', // Go to sanity.config.ts to find this
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true // Must be true for live site (it's faster)
  }
};