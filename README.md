# BurnLink

[![GitHub](https://img.shields.io/badge/GitHub-BurnLink-blue?logo=github)](https://github.com/Joy-Majumder/BurnLink)

BurnLink is an open-source, privacy-first file sharing platform with browser-side end-to-end encryption. Share files securely knowing they're encrypted in your browser and deleted after the first download.

## Features

- 🔐 **End-to-End Encryption**: Files encrypted in your browser before upload
- 🔑 **Two Sharing Modes**: 
  - Password-protected sharing (recipient enters password)
  - Link-key sharing (secret embedded in URL fragment)
- 🔥 **One-Time Links**: Files burn after first successful download
- ⏱️ **Brute-Force Protection**: 10-minute lockout after 3 wrong password attempts
- ☁️ **Supabase Integration**: Secure cloud storage with metadata management
- 📱 **Responsive Design**: Beautiful UI inspired by modern VC platforms
- 🚀 **Simple UX**: One-click copy link to share

## Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn
- Supabase account ([Create one free](https://supabase.com))

### Installation

```bash
git clone https://github.com/Joy-Majumder/BurnLink.git
cd BurnLink
npm install
```



## How It Works

1. **Upload**: Select a file and optionally set a password
2. **Encrypt**: File is encrypted in your browser using AES-GCM
3. **Store**: Encrypted payload uploaded to Supabase Storage
4. **Share**: Get a shareable link (with optional password)
5. **Download**: Recipient decrypts in browser, then the link burns

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Express.js, Node.js
- **Storage**: Supabase
- **Encryption**: Web Crypto API (AES-GCM, PBKDF2)
- **Database**: Supabase PostgreSQL

## Security

- All encryption happens in the browser—your server never sees unencrypted files
- Uses industry-standard AES-256-GCM encryption
- PBKDF2 key derivation with 210,000 iterations
- One-time download links prevent replay attacks
- Open source—security through transparency

## License

MIT © [Joy Majumdar](https://github.com/Joy-Majumder)

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## Support

For issues, questions, or suggestions, please [open an issue](https://github.com/Joy-Majumder/BurnLink/issues) on GitHub.
