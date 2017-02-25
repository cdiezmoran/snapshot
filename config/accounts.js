// config.js
// need to register for tokens
module.exports = {
  twitter: {
    consumerKey: process.env.TWITTER_KEY || 'VRE4lt1y0W3yWTpChzJHcAaVf',
    consumerSecret: process.env.TWITTER_SECRET  ||  'TOA4rNzv9Cn8IwrOi6MOmyV894hyaJks6393V6cyLdtmFfkWqe',
    callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
  },
  google: {
    clientID: process.env.GOOGLE_ID || '516679941362-g95u38vp6kacsmrmh1ncm8k454ca3gej.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || 'Ux-FGm070bXbEugze115Vfts',
    callbackURL: 'http://localhost:3300/auth/google/callback'
  },
  github: {
    clientID: process.env.GITHUB_ID || '81b233b3394179bfe2bc',
    clientSecret: process.env.GITHUB_SECRET || 'de0322c0aa32eafaa84440ca6877ac5be9db9ca6',
    callbackURL: 'http://127.0.0.1:3000/auth/github/callback'
  }
};
