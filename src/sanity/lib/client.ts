import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId,SANITYTOKEN } from '../env';
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
  token: SANITYTOKEN, 
});


