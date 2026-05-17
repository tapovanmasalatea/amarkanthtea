# 📊 Google Sheets & Email Order Notification Setup Guide

This guide will show you how to set up a completely free, private, and automated order storage and email alert system for your **Amarkanth Group & Tapovan Tea** store using Google Sheets and Google Apps Script.

When a customer places an order, the system will instantly:
1. Append the full order and delivery details to a Google Sheet row.
2. Send a beautiful HTML order summary email to `tapovanmasalatea@gmail.com`.

---

## ⚡ Step-by-Step Setup (Takes 2 Minutes)

### Step 1: Create Your Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a **Blank Spreadsheet**.
2. Give your spreadsheet a name (e.g. `Amarkanth & Tapovan Store Orders`).
3. *(Optional)* Add the following headers to the first row (the script can also create them automatically):
   `Order ID`, `Date`, `Customer Name`, `Phone Number`, `Address`, `City`, `State`, `Pincode`, `Product Name`, `Variant`, `Price (₹)`, `Quantity`, `Grand Total (₹)`, `Payment Method`

---

### Step 2: Paste the Apps Script Code
1. In your Google Sheet, click **Extensions** in the top menu and select **Apps Script**.
2. Delete any default code in the editor (`code.gs`).
3. Copy and paste the complete code block below into the editor:

```javascript
/**
 * Google Sheets Webhook and Email Dispatcher for Amarkanth Group Store Orders
 * Receives JSON order payload from the checkout page, stores it in the sheet, and emails the order details.
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Check if sheet has headers, if not, create them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Order ID", "Date", "Customer Name", "Phone Number", 
        "Address", "City", "State", "Pincode", 
        "Product Name", "Variant", "Price (₹)", "Quantity", 
        "Grand Total (₹)", "Payment Method"
      ]);
    }
    
    // Append order data row
    sheet.appendRow([
      data.orderId,
      data.date,
      data.customerName,
      data.phone,
      data.address,
      data.city,
      data.state,
      data.pincode,
      data.productName,
      data.variant,
      data.price,
      data.quantity,
      data.total,
      data.paymentMethod
    ]);
    
    // Send Email notification to tapovanmasalatea@gmail.com
    var recipient = "tapovanmasalatea@gmail.com";
    var subject = "🔥 New Order Received! #" + data.orderId;
    
    var emailBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 25px; border: 1.5px solid #eee; border-radius: 12px; background-color: #fff;">
        <div style="text-align: center; margin-bottom: 25px;">
          <h2 style="color: #d50505; text-transform: uppercase; letter-spacing: 2px; margin: 0; font-size: 24px; font-weight: 800;">Amarkanth Group</h2>
          <p style="color: #2e7d32; font-weight: bold; margin: 5px 0 0; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">🔥 New COD Order Received</p>
        </div>
        
        <table style="width: 100%; margin-bottom: 20px; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f2f2f2; width: 140px; color: #555;">Order ID:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f2f2f2; font-family: monospace; font-size: 15px; font-weight: bold; color: #111;">${data.orderId}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f2f2f2; color: #555;">Date/Time:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f2f2f2; color: #111;">${data.date}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f2f2f2; color: #555;">Payment Mode:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f2f2f2; color: #d50505; font-weight: bold;">${data.paymentMethod}</td>
          </tr>
        </table>
        
        <h3 style="color: #111; border-bottom: 2px solid #f0f0f0; padding-bottom: 8px; font-size: 16px; margin-top: 30px; font-weight: bold;">👤 Customer details</h3>
        <table style="width: 100%; margin-bottom: 20px; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f9f9f9; width: 140px; color: #555;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f9f9f9; font-weight: 600; color: #111;">${data.customerName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f9f9f9; color: #555;">Phone:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f9f9f9; font-weight: bold;"><a href="tel:${data.phone}" style="color: #25d366; text-decoration: none;">📞 ${data.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f9f9f9; color: #555;">Address:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f9f9f9; color: #222;">${data.address}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f9f9f9; color: #555;">City / State:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f9f9f9; color: #222;">${data.city}, ${data.state}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f9f9f9; color: #555;">Pincode:</td>
            <td style="padding: 10px; border-bottom: 1px solid #f9f9f9; font-weight: bold; color: #111;">${data.pincode}</td>
          </tr>
        </table>
        
        <h3 style="color: #111; border-bottom: 2px solid #f0f0f0; padding-bottom: 8px; font-size: 16px; margin-top: 30px; font-weight: bold;">📦 Product details</h3>
        <table style="width: 100%; border-collapse: collapse; border: 1px solid #eee; border-radius: 8px; overflow: hidden; margin-top: 10px;">
          <thead>
            <tr style="background-color: #f7f7f7;">
              <th style="padding: 12px; text-align: left; border-bottom: 1.5px solid #eee; color: #444; font-size: 13px;">Item</th>
              <th style="padding: 12px; text-align: center; border-bottom: 1.5px solid #eee; color: #444; font-size: 13px; width: 60px;">Qty</th>
              <th style="padding: 12px; text-align: right; border-bottom: 1.5px solid #eee; color: #444; font-size: 13px; width: 90px;">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">
                <strong style="color: #111; font-size: 14px;">${data.productName}</strong><br/>
                <span style="font-size: 12px; color: #666;">Pack Size: ${data.variant}</span>
              </td>
              <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: center; font-weight: bold; color: #333;">${data.quantity}</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right; font-weight: 700; color: #111;">₹${data.price * data.quantity}</td>
            </tr>
            <tr style="background-color: #fffaf5; font-weight: bold;">
              <td colspan="2" style="padding: 15px; text-align: right; color: #555; font-size: 14px;">Grand Total (Incl. Shipping):</td>
              <td style="padding: 15px; text-align: right; color: #d50505; font-size: 16px; font-weight: 900;">₹${data.total}</td>
            </tr>
          </tbody>
        </table>
        
        <div style="text-align: center; margin-top: 35px; border-top: 1px solid #eee; padding-top: 15px;">
          <a href="https://wa.me/91${data.phone}?text=Hello%20${encodeURIComponent(data.customerName)},%20we%20have%20received%20your%20order%20%23${data.orderId}%20for%20${encodeURIComponent(data.productName)}%20(${encodeURIComponent(data.variant)}).%20It%20will%20be%20dispatched%20soon." 
             style="background-color: #25d366; color: white; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-weight: bold; display: inline-block; font-size: 14px; box-shadow: 0 4px 10px rgba(37, 211, 102, 0.2);" 
             target="_blank">
            💬 Text Customer on WhatsApp
          </a>
        </div>
        
        <p style="text-align: center; font-size: 11px; color: #bbb; margin-top: 40px; margin-bottom: 0;">
          This email was securely processed and sent by Google Apps Script for Amarkanth Tea.
        </p>
      </div>
    `;
    
    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      htmlBody: emailBody
    });
    
    return ContentService.createTextOutput(JSON.stringify({result: "success"})).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({result: "error", error: error.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

### Step 3: Deploy the Script as a Web App
1. Inside the Google Apps Script editor, click the **Save** icon (disk icon).
2. Click the blue **Deploy** button in the top right corner, and select **New deployment**.
3. Under **Select type**, click the gear icon and select **Web app**.
4. Configure the settings exactly like this:
   *   **Description:** `Order Webhook`
   *   **Execute as:** `Me (your email address)`
   *   **Who has access:** `Anyone` (Crucial! This allows the website to securely send order details).
5. Click **Deploy**.
6. Google will ask you to **Authorize Access**. Click *Authorize access*, log in to your Google Account, click *Advanced*, and select *Go to Untitled project (unsafe)* to grant permission to the sheet and email services.
7. Once successfully deployed, copy the **Web app URL** that is displayed (e.g. `https://script.google.com/macros/s/AKfycbz.../exec`).

---

### Step 4: Add the URL to Your Website Code
1. Open the project file [OrderPage.jsx](file:///c:/Users/ACB/Desktop/Amarkanth%20Group/src/pages/OrderPage.jsx).
2. Scroll to line **72** (inside the `handlePlaceOrder` function):
   ```javascript
   const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbz_dE1w2BpxoU4t8n0Pj08tW5s_z7O8gXfH_fK7p/exec";
   ```
3. Replace the URL in the double quotes with **your newly copied Web app URL**.
4. Save and commit/push your updates to live!

---

## 🎉 That's it!
All order entries are now beautifully saved in your private spreadsheet in real-time, and you will receive gorgeous email summaries directly inside **tapovanmasalatea@gmail.com**! 
