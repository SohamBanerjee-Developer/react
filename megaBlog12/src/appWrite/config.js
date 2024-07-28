import conf from "../conf/conf";

import { Client, Databases, ID, Query, Storage } from "appwrite";

export class Service {
client = new Client()
databases;
bucket;
constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    this.databases = new Databases(this.client)
    this.bucket = new Storage (this.client)    
}
    async createPost({title, slug, content, status, featuredImage, userID}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatbaseId,
                conf.appwriteCollectionId,
                slug,
                {   title,
                    userID,
                    featuredImage,
                    content,
                    status,
                }
            )
        } catch (error) {
            console.log(error)
        }

    }
    async updateDocument(slug, {title, content, status, featuredImage}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatbaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log(error);            
        }
    }
    async deleteDocument(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatbaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log(error);
            return false
        }
}
    async getDocument(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatbaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(error);
            return false
        }

    }
    async getDocuments(queries = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatbaseId,
                conf.appwriteCollectionId,
                queries
                // [Query.equal('status', 'active')]
            )
        } catch (error) {
            console.log(error);
            return false
        }


    }
    async createFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            ) 
            return true                
        } catch (error) {
            console.log(error);
            return false                    
        }
    }
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )        
    }
}
const service = new Service();
export default service;