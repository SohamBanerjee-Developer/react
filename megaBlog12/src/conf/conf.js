// used for production grade application to avoid unwanted errors
const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteDatbaseId: String(import.meta.env.VITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID),
  appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
};
export default conf;
