# Veil — Daily Tarot App

A daily emotional companion disguised as tarot. AI-powered readings, personal journal, ritual UX.

---

## Project Structure

```
veil/
├── api/
│   └── reading.js       ← Serverless function (keeps API key secret)
├── public/
│   └── index.html       ← The full frontend app
├── vercel.json          ← Vercel routing config
└── README.md
```

---

## Deploy in 5 Steps

### 1. Get your Anthropic API key
- Go to [console.anthropic.com](https://console.anthropic.com)
- Sign up / log in → API Keys → Create Key
- Copy the key (starts with `sk-ant-...`)

### 2. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/veil.git
git push -u origin main
```

### 3. Deploy to Vercel
- Go to [vercel.com](https://vercel.com) and sign up (free)
- Click **"Add New Project"** → Import your GitHub repo
- Leave all settings as default → click **Deploy**

### 4. Add your API key as an Environment Variable
- In your Vercel project dashboard → **Settings** → **Environment Variables**
- Add:
  - **Name:** `ANTHROPIC_API_KEY`
  - **Value:** `sk-ant-...` (your key)
  - Environment: Production + Preview + Development
- Click **Save** → go to **Deployments** → **Redeploy**

### 5. Add your domain (optional but recommended)
- In Vercel → **Settings** → **Domains**
- Add your custom domain (e.g. `veil.app`)
- Follow the DNS instructions (point your domain registrar's nameservers to Vercel)
- Then update `api/reading.js` line 12 to include your domain:
  ```js
  'https://veil.app',
  ```
- Redeploy once more

---

## Local Development

```bash
npm i -g vercel
vercel dev
```

Then open `http://localhost:3000`

Set your env variable locally:
```bash
echo "ANTHROPIC_API_KEY=sk-ant-..." > .env.local
```

---

## Cost Estimate

Each reading uses ~300 tokens. At Claude Sonnet pricing:
- 1,000 readings/month ≈ $0.90
- 10,000 readings/month ≈ $9.00

Vercel hosting: **Free** on the Hobby plan (up to 100GB bandwidth/month).

---

## What's Next (after launch)

- [ ] Add user accounts (Clerk.dev is easiest)
- [ ] Email / push reminders for daily readings
- [ ] Streak tracking
- [ ] Shareable reading cards (image export)
- [ ] Paid tier with unlimited readings

---

Built with HTML, CSS, Vanilla JS + Anthropic Claude API + Vercel Edge Functions.
