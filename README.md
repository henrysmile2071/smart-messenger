# SMART MESSENGER
Demo Website Deployed to Vercel: https://smart-messenger.vercel.app/chat/BxKH1lBgfDIo2NhuvO3R
(./public/smart messenger.png)

## Obtain the keys for the environment constants

1. Google web client Secret & ID
   1. Go to https://console.firebase.google.com/u/0/ and create a new project.
   2. Navigate to Build-Authentication and press Get Started.
   3. Choose Google as the sign-in provider.
   4. Enable and save.
   5. After saving, press the google provider again edit configuration.
   6. Check out the Web SDK configuration and keep the Web client ID, Web client secret in a safe place.

2. Openai API key: https://platform.openai.com/account/api-keys
3. Firebase service account key: https://cloud.google.com/iam/docs/keys-create-delete?hl=en
   1. After creating the key, use https://www.textfixer.com/tools/remove-line-breaks.php to remove the linebreaks

## Installation

1. Check if node.js and npm is installed
2. Clone project to local 
3. Navigate to the project folder via the terminal, then install：

   ```bash
   npm install
   ```

4. Set local environmental constants(check .env.local.example):
   ```
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_SECRET=<your_Google_Secret>
   GOOGLE_ID=<your_Google_Id>
   OPENAI_API_KEY=<your_openai_api_key>
   NEXTAUTH_SECRET=MyNextAuthSecret
   FIREBASE_SERVICE_ACCOUNT_KEY={<your_firebase_service_account_key_with_line_breaks_removed>}
   ```

5. Add origins and redirect url in Google Cloud Console for your project, navigate to APIs & Services-Credentials-OAuth 2.0 Client IDs-Web client(auto created by Google Service), you should see the page like below:
(./public/readmepic.png)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Thanks
This app is built following the live stream of https://www.youtube.com/@SonnySangha.
Video Stream: https://www.youtube.com/watch?v=V6Hq_EX2LLM.
