provider "google" {
  project = "multi-tenant-414510"
  region  = "us-central1"
  zone    = "us-central1-c"
}



# cloud'.
# (base) Elliotts-MBP:gke-tutorial si3mshady$ gcloud artifacts repositories create public-sandbox \
# > --repository-format=docker --location=us-central1
# Create request issued for: [public-sandbox]
# Waiting for operation [projects/multi-tenant-414510/locations/us-central1/operations/74d35576-5eea-4e8f-8178-f21a74a24054] to complete...done.                           
# Created repository [public-sandbox].
# (base) Elliotts-MBP:gke-tutorial si3mshady$ cat Dockerfile 
# # Use the official Node.js image as the base image