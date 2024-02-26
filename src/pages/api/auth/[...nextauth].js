import NextAuth from "next-auth";
// Import each provider you intend to use
import EmailProvider from "next-auth/providers/email";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import dbConnect from "../../../../db/connection";

export default NextAuth({
  providers: [
    EmailProvider({
      server: {
        // Assuming you want to use SMTP settings for the email server
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Add other providers as needed
  ],
  adapter: MongoDBAdapter(dbConnect),
  // No need to specify 'database' when using an adapter
});
