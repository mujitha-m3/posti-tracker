# 🚀 Quick Start: Mobile Access

## What You Get
✅ Access your income tracker from any device  
✅ Works offline (data saved locally)  
✅ Responsive design for mobile, tablet & desktop  
✅ Install as mobile app (PWA)  
✅ Automatic backups  

---

## 5-Minute Setup

### Step 1: Create GitHub Repository
```bash
# Open PowerShell and run:
cd "c:\Users\mujit\Desktop\posti tracker"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/posti-tracker.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 2: Enable GitHub Pages
1. Go to https://github.com/YOUR_USERNAME/posti-tracker
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Select **main** branch
5. Click **Save**
6. Wait 1-2 minutes for deployment

✅ **Your app is now live at:** `https://YOUR_USERNAME.github.io/posti-tracker`

---

## Access on Mobile

### iPhone
1. Open Safari
2. Go to `https://YOUR_USERNAME.github.io/posti-tracker`
3. Tap **Share** → **Add to Home Screen**
4. Tap the app icon to launch

### Android
1. Open Chrome
2. Go to `https://YOUR_USERNAME.github.io/posti-tracker`
3. Tap **⋮** (three dots) → **Install app**
4. Tap the app to launch

### Just Use Browser
- Bookmark the URL
- Access anytime from mobile browser

---

## Data Sync Between Devices

Your data is stored **locally** on each device. To sync:

### Method 1: Cloud Storage (Recommended)
1. **Desktop**: Click 💾 **Backup**
2. Upload `.json` file to Google Drive/OneDrive
3. **Mobile**: Download from cloud
4. Click 📂 **Restore**

### Method 2: Email
1. **Desktop**: Click 💾 **Backup**
2. Email the `.json` file to yourself
3. **Mobile**: Open email, download file
4. Click 📂 **Restore**

---

## Storage Details

| Device | Storage Type | Capacity | Backup |
|--------|--------------|----------|--------|
| Desktop | IndexedDB | 50MB+ | localStorage |
| Mobile | IndexedDB | 50MB+ | localStorage |

- **IndexedDB**: Primary storage (50MB+ per device)
- **localStorage**: Automatic backup
- **Backup Button**: Manual export to file

---

## Offline Usage

Your app works **100% offline**:
- ✅ Add/edit entries without internet
- ✅ Data saves automatically
- ✅ All features work offline
- ✅ Data syncs when online (if using Firebase)

---

## Troubleshooting

### "App Not Installing"
- Ensure GitHub Pages is enabled (Settings → Pages)
- Wait 5-10 minutes for deployment
- Try accessing with fresh URL

### "Data Not Syncing"
- Each device has its own data
- Use Backup/Restore to sync manually
- Check localStorage isn't full (Clear cache if needed)

### "Slow Loading"
- First load: Initializes IndexedDB (5-10 seconds)
- Subsequent loads: Instant
- Mobile: May be slower on 3G/4G

---

## Next Steps

1. ✅ Deploy to GitHub Pages (see Step 1-2 above)
2. ✅ Access on mobile (see Access section)
3. ✅ Add your income data
4. ✅ Regular backups (💾 button)

---

## Advanced: Custom Domain

Want your own domain (e.g., trackit.com)?

1. Buy domain from GoDaddy, Namecheap, etc.
2. Go to GitHub → Settings → Pages
3. Add custom domain
4. Update domain DNS (instructions in GitHub)

[See full deployment guide](./DEPLOYMENT_GUIDE.md)

---

## Support

Check console for errors (F12 → Console on desktop, chrome://inspect on mobile)
