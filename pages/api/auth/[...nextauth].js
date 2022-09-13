import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const {
  GITHUB_ID: github_id,
  GITHUB_SECRET: github_secret,
  NEXTAUTH_URL: next_secret
} = process.env;

const options = {
  providers: [
    GithubProvider({
      clientId: github_id,
      clientSecret: github_secret,
      authorization: { params: { scope: 'notifications' } }
    })
  ],
  secret: next_secret
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => NextAuth(req, res, options);