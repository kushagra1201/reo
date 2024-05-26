## Vershel

Vershel is a Vercel-like project which works as a platform to provide deployment services for React projects, which can be accessed by any user through S3 servers.

The architecture consists of 3 services:

- Upload service
  - Upload your Github code to vercel servers.
  - Takes a github url as its input and copies over all contents in your system and pushes them to an object store (S3).

- Deployment service
  - Builds and deploys the uploaded code on S3 servers.
  - Given that the project is on S3, it copies that code to a system and builds it (eg. React code). Then puts it back on S3 as the final pieces of HTML, CSS, etc files that will be served to the users.

- Request handler service
  - Handles deployment requests from other users. Users can hit your service and visit your page. Goes to S3, gets back the files and returns them to the user.
