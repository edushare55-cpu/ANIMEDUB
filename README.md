# AnimeDub

AnimeDub is a React website for browsing anime by genre. The included Horimiya video is connected to the Episode Player as Episode 1. Other anime show a message until their episode videos are added.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm start`.
5. Open the local URL shown in the terminal.

## Build for deployment

Run `npm run build`. The production website is generated in the `build` folder.

## Deploy to Vercel

1. Upload this folder's source files to a GitHub repository (do not upload `node_modules` or `build`).
2. In Vercel, import the repository.
3. Select Create React App if detected; otherwise set Build Command to `npm run build` and Output Directory to `build`.
4. Deploy.

The video file is stored at `public/videos/horimiya.mp4`. It is about 20 MB and will be included in the deployment. Make sure you have the rights or permission to publish any video you host publicly.
