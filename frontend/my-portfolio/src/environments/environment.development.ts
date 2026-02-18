export const environment = {
  production: false, // <--- IMPORTANT: Keeps debugging tools active
  sanity: {
    projectId: '26l1tc3v', // Same ID as above
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false // False ensures you see updates instantly while editing
  }
};