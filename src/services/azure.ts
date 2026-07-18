// Azure configuration and utilities for Azure App Service, Azure Storage, etc.

export interface AzureConfig {
  storageAccount?: string;
  containerName?: string;
  connectionString?: string;
}

export function getAzureConfig(): AzureConfig {
  return {
    storageAccount: process.env.AZURE_STORAGE_ACCOUNT,
    containerName: process.env.AZURE_STORAGE_CONTAINER,
    connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
  };
}

export function isAzureDeployed(): boolean {
  return !!process.env.AZURE_STORAGE_ACCOUNT || !!process.env.WEBSITE_INSTANCE_ID;
}

export function getDeploymentInfo() {
  return {
    platform: "Azure",
    instanceId: process.env.WEBSITE_INSTANCE_ID || "local",
    region: process.env.WEBSITE_DEPLOYMENT_ID || "local",
    environment: process.env.NODE_ENV || "development",
  };
}

// Placeholder for future Azure Blob Storage integration
export async function uploadToAzureStorage(filename: string, content: Buffer) {
  if (!isAzureDeployed()) {
    console.warn("Azure Storage not configured for local development");
    return null;
  }

  // TODO: Implement Azure Blob Storage upload
  // const { BlobServiceClient } = require("@azure/storage-blob");
  // const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
  // const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
  // const containerClient = blobServiceClient.getContainerClient(process.env.AZURE_STORAGE_CONTAINER);
  // const blockBlobClient = containerClient.getBlockBlobClient(filename);
  // await blockBlobClient.upload(content, content.length);
  // return blockBlobClient.url;

  console.log(`[AZURE] Would upload ${filename} to Azure Storage`);
  return null;
}

export async function downloadFromAzureStorage(filename: string) {
  if (!isAzureDeployed()) {
    console.warn("Azure Storage not configured for local development");
    return null;
  }

  // TODO: Implement Azure Blob Storage download
  console.log(`[AZURE] Would download ${filename} from Azure Storage`);
  return null;
}
