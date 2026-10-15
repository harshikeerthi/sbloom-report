# sBLOOM Agreement & SOW Document Generator

A configurable document generator for **sBLOOM by OTTOBON**. It generates complete, legally sound Master Service Level Agreements (MSAs) along with modular service annexures (Social Media Management, Google Business Profile, Paid Ads, Website Design, and SEO) modeled directly on `MOU .pdf`.

---

## Quick Start (How to Run)

### 1. Open Terminal / PowerShell
Open your terminal and navigate to the project directory:
```powershell
cd "c:\Sbloom Report Generator"
```

### 2. Install Dependencies (First time only)
```powershell
npm install
```

### 3. Start the Development Server
```powershell
npm run dev
```

The terminal will show:
```
  VITE ready in ~300 ms

  ➜  Local:   http://localhost:5173/
```

### 4. Open in Your Browser
Click or open: **`http://localhost:5173/`**

---

## Features & Capabilities

1. **Master Agreement Backbone:** Automatically renders Pages 1–8 of the approved Master Service Level Agreement with updated parties, legal jurisdiction, and a dynamic **Annexures Attached** listing.
2. **Social Media Services Annexure:** Exactly matches the sBLOOM deliverable matrix:
   - 8 Reels / month (10–30 sec)
   - 8 Static Posts / Carousels
   - 1 Monthly Content Plan
   - 1 Content Shoot (up to 4 hrs, presenter 60–90 min)
   - 1 Monthly Performance Report
3. **Complimentary Google Business Profile (GBP) Rule:** Automatically deducts the ₹2,000 fee when Social Media is selected, rendering GBP as **COMPLIMENTARY (₹0)**.
4. **Conditional Scope Inputs:** Only shows input forms for the offerings selected for that client.
5. **Print & PDF Export:** Click **Print / Export PDF** in the top bar to generate high-resolution, print-ready PDF files with exact page breaks.
6. **Save Drafts:** Save and reload client setups as `.json` files or restore them from browser storage.

---

## Production Build

To create an optimized production build:
```powershell
npm run build
```
The compiled assets will be placed in the `dist/` directory.
