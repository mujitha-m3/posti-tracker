# Posti Route & Gig Income Tracker 📬

A comprehensive web-based system to track your postal routes (Posti) and other gig economy income (Wolt, StaffPoint, etc.) with automatic earnings calculation.

## Features

✅ **Multi-Income Tracking** - Track Posti routes, Wolt, StaffPoint, and other gig income in one place
✅ **Auto-Calculated Posti Earnings** - Automatically calculates based on €11/hour + €0.55/km
✅ **Income Sources Breakdown** - See weekly and monthly earnings by source
✅ **Weekly Dashboard** - View total earnings, hours, and average hourly rate
✅ **Daily Breakdown** - See detailed breakdown for each day of the week
✅ **Detailed Income Log** - Complete table of all logged income entries
✅ **Monthly Statistics** - Track monthly earnings, hours, days worked, and more
✅ **Data Persistence** - All data saved locally (no server needed, offline capable)
✅ **Mobile Responsive** - Works perfectly on desktop, tablet, and mobile devices
✅ **Easy Management** - Add, delete, and navigate through your earnings history

## Income Sources Supported

### 📬 Posti Routes
- **Auto-Calculation**: €11/hour + €0.55/km
- Route code tracking
- Route type (Fixed Tue/Thu, Fixed Wed/Fri, Additional Mon-Sat)
- Automatic earnings calculation as you enter hours and km
- Perfect for tracking your multiple routes

### 🛵 Wolt
- Manual earnings entry
- Track hours and daily earnings
- Separate income source for clear visibility

### 👔 StaffPoint
- Manual earnings entry
- Track temporary work assignments
- Separate tracking from other gig work

### 💼 Other Income
- Custom income source name
- Track any additional gig work
- Freelance, tutoring, or other income sources

## How to Use

### 1. **Open the Application**
   - Open `index.html` in any web browser
   - No installation required, no server needed
   - Works offline

### 2. **Switch Between Income Types**
   - Click the tab buttons at the top (📬 Posti, 🛵 Wolt, 👔 StaffPoint, 💼 Other)
   - Form will change based on selected income source

### 3. **Log Posti Route**
   - Click **📬 Posti Route** tab
   - **Date**: Select the date of the route
   - **Day**: Auto-filled based on selected date
   - **Route Code**: Enter route code (e.g., R001)
   - **Route Type**: Select the type of route
   - **Duration**: Enter hours worked (e.g., 4.5)
   - **Distance**: Enter kilometers (e.g., 50.5)
   - **Earnings**: Auto-calculated as €(hours × 11) + (km × 0.55)
   - Click **"Add Posti Route"**

### 4. **Log Wolt Income**
   - Click **🛵 Wolt** tab
   - **Date**: Select work date
   - **Day**: Auto-filled
   - **Duration**: Enter hours worked
   - **Daily Earnings**: Enter how much you earned
   - Click **"Add Wolt Income"**

### 5. **Log StaffPoint Income**
   - Click **👔 StaffPoint** tab
   - Similar to Wolt, enter date, hours, and earnings
   - Click **"Add StaffPoint Income"**

### 6. **Log Other Income**
   - Click **💼 Other Income** tab
   - **Income Source**: Name of source (e.g., "Freelance Web Dev")
   - **Date** and **Day**: Auto-filled
   - **Duration**: Enter hours
   - **Earnings**: Enter amount earned
   - Click **"Add Income"**

### 7. **View Weekly Dashboard**
   - Shows all weeks with navigation buttons
   - **Total Weekly Earnings**: All income combined
   - **Total Income Sources**: Number of entries
   - **Total Hours**: All work hours
   - **Avg Earnings/Hour**: Average hourly rate across all sources

### 8. **Income Source Breakdown**
   - Cards showing earnings by source (Posti, Wolt, StaffPoint, Other)
   - Number of entries and hours for each source
   - Total earnings per source

### 9. **Daily Breakdown**
   - Shows earnings for each day of the week
   - Number of income entries per day

### 10. **Detailed Log**
   - Complete table with all entries
   - Date, day, source, details, hours, and earnings
   - Delete button for each entry

### 11. **Monthly Statistics**
   - **Current Month Earnings**: Total income for the month
   - **Current Month Hours**: Total hours worked
   - **Average Hourly Rate**: Across all sources
   - **Days Worked**: Number of days with income

### 12. **Source Statistics**
   - Detailed breakdown by income source
   - Shows entries, hours, distance (for Posti), and average hourly rate
   - Total earnings per source

## Pricing Details

- **Posti**: €11.00 per hour + €0.55 per kilometer
- **Wolt**: Enter your daily earnings manually
- **StaffPoint**: Enter your daily earnings manually
- **Other**: Enter your daily earnings manually

## Data Storage

- All data saved in browser's localStorage
- Private and secure - never sent to any server
- Persists between sessions
- Clear your browser cache to delete data

### Backup Your Data
1. Open browser DevTools (F12)
2. Go to Console
3. Type: `copy(JSON.stringify(JSON.parse(localStorage.getItem('postiIncome')), null, 2))`
4. Save to a text file

### Restore Your Data
1. Open DevTools (F12)
2. Go to Console
3. Type: `localStorage.setItem('postiIncome', '[paste data here]')`

## Route Type Reference

| Day | Posti Route Type | Additional Routes |
|-----|------------------|------------------|
| Monday | - | ➕ Additional |
| Tuesday | 📌 Fixed (Tue/Thu) | ➕ Additional |
| Wednesday | 📌 Fixed (Wed/Fri) | ➕ Additional |
| Thursday | 📌 Fixed (Tue/Thu) | ➕ Additional |
| Friday | 📌 Fixed (Wed/Fri) | ➕ Additional |
| Saturday | - | ➕ Additional |
| Sunday | - | - |

## Tips for Best Results

💡 **Accurate Tracking**: Log your work as soon as possible after completing it
💡 **Complete Details**: Fill in all fields for accurate calculations and reporting
💡 **Use Route Types**: Properly categorize Posti routes to track your schedule
💡 **Regular Review**: Check weekly/monthly stats to monitor your earning trends
💡 **Multiple Sources**: Track all your gig work in one place for a complete picture
💡 **Two Routes Days**: You can log multiple entries for the same day

## Browser Support

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ All modern mobile browsers

## Troubleshooting

**Posti earnings not calculating?**
- Make sure you've entered both hours and km
- Earnings update automatically as you type

**Data not saving?**
- Enable localStorage in browser settings
- Disable private/incognito mode
- Try a different browser

**Can't see all tabs?**
- Refresh the page
- Zoom out browser to see all tabs
- Try a wider screen for full view

**Need multiple workers?**
- Each browser/device maintains separate data
- Use different browsers for separate tracking

## Future Enhancements

Possible features coming soon:
- Export to Excel/CSV
- Income trend charts
- Tax calculation assistant
- Weekly/monthly goals
- Performance analytics
- Cloud backup integration

---

**Version**: 2.0 (Multi-Income Edition)
**Last Updated**: March 2026
**License**: Free to use
**Requirements**: Modern web browser, JavaScript enabled
