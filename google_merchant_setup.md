# 🏷️ Google Merchant Center API & Product Feed Setup Guide

This guide describes how to configure a free, serverless API to manage your products and host an automated product feed for **Google Merchant Center** and **Google Shopping** using your existing Google Sheets setup.

With this setup:
1. You can call a **POST API** to add/update products programmatically.
2. Google Merchant Center can call your **GET API** (XML Feed) to fetch product details and sync them automatically.

---

## ⚡ Step-by-Step Setup

### Step 1: Open Your Existing Google Sheet
1. Open the Google Sheet you created for store orders (e.g. `Amarkanth & Tapovan Store Orders`).
2. Add a new tab/sheet and rename it to exactly **`Products`** (case-sensitive).
3. In the first row of the `Products` sheet, add the following column headers (or they will be generated automatically when you add your first product):
   `ID`, `Title`, `Description`, `Link`, `Image Link`, `Price`, `Availability`, `Condition`, `Brand`, `Google Product Category`

---

### Step 2: Paste the Apps Script Code
1. In your Google Sheet, click **Extensions** in the top menu and select **Apps Script**.
2. If you want to use the same Apps Script environment as the orders notifications, you can add this code to your existing script file (or create a new `.gs` file by clicking the `+` next to Files and choosing `Script`).
3. Paste the following code into the editor:

```javascript
/**
 * POST Endpoint: Adds or updates a product in the "Products" sheet.
 * Body parameter matches Google Merchant Center specifications.
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName("Products");
    
    // Create sheet if it does not exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet("Products");
    }
    
    var headers = [
      "ID", "Title", "Description", "Link", "Image Link", 
      "Price", "Availability", "Condition", "Brand", "Google Product Category"
    ];
    
    // Set headers if new sheet
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
    }
    
    var id = data.id;
    var title = data.title || "";
    var description = data.description || "";
    var link = data.link || "";
    var image_link = data.image_link || "";
    var price = data.price || ""; // Format: e.g. "450.00 INR"
    var availability = data.availability || "in_stock"; // "in_stock" or "out_of_stock"
    var condition = data.condition || "new";
    var brand = data.brand || "Amarkanth";
    var google_product_category = data.google_product_category || "Food, Beverages & Tobacco > Beverages > Tea";
    
    if (!id) {
      return ContentService.createTextOutput(JSON.stringify({
        result: "error",
        error: "Missing required 'id' parameter"
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Check if ID already exists to update
    var dataRange = sheet.getDataRange();
    var values = dataRange.getValues();
    var foundIndex = -1;
    for (var i = 1; i < values.length; i++) {
      if (values[i][0] == id) {
        foundIndex = i + 1; // 1-indexed row number
        break;
      }
    }
    
    var newRow = [id, title, description, link, image_link, price, availability, condition, brand, google_product_category];
    
    if (foundIndex !== -1) {
      // Update existing row
      sheet.getRange(foundIndex, 1, 1, newRow.length).setValues([newRow]);
      return ContentService.createTextOutput(JSON.stringify({
        result: "success",
        action: "updated",
        id: id
      })).setMimeType(ContentService.MimeType.JSON);
    } else {
      // Append new row
      sheet.appendRow(newRow);
      return ContentService.createTextOutput(JSON.stringify({
        result: "success",
        action: "added",
        id: id
      })).setMimeType(ContentService.MimeType.JSON);
    }
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * GET Endpoint: Dynamically reads products and returns
 * a Google Merchant Center RSS 2.0 XML Feed.
 */
function doGet(e) {
  try {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName("Products");
    
    if (!sheet || sheet.getLastRow() <= 1) {
      return ContentService.createTextOutput(getEmptyFeedXml())
        .setMimeType(ContentService.MimeType.XML);
    }
    
    var values = sheet.getDataRange().getValues();
    var xml = '<?xml version="1.0"?>\n';
    xml += '<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">\n';
    xml += '  <channel>\n';
    xml += '    <title>Amarkanth Tea Group</title>\n';
    xml += '    <link>https://amarkanthtea.com</link>\n';
    xml += '    <description>Premium quality CTC and wellness masala teas sourced directly from pristine gardens.</description>\n';
    
    for (var i = 1; i < values.length; i++) {
      var row = values[i];
      var id = escapeXml(row[0]);
      var title = escapeXml(row[1]);
      var description = escapeXml(row[2]);
      var link = escapeXml(row[3]);
      var image_link = escapeXml(row[4]);
      var price = escapeXml(row[5]);
      var availability = escapeXml(row[6]);
      var condition = escapeXml(row[7]);
      var brand = escapeXml(row[8]);
      var google_product_category = escapeXml(row[9]);
      
      xml += '    <item>\n';
      xml += '      <g:id>' + id + '</g:id>\n';
      xml += '      <g:title>' + title + '</g:title>\n';
      xml += '      <g:description>' + description + '</g:description>\n';
      xml += '      <g:link>' + link + '</g:link>\n';
      xml += '      <g:image_link>' + image_link + '</g:image_link>\n';
      xml += '      <g:condition>' + condition + '</g:condition>\n';
      xml += '      <g:availability>' + availability + '</g:availability>\n';
      xml += '      <g:price>' + price + '</g:price>\n';
      xml += '      <g:brand>' + brand + '</g:brand>\n';
      xml += '      <g:google_product_category>' + google_product_category + '</g:google_product_category>\n';
      xml += '    </item>\n';
    }
    
    xml += '  </channel>\n';
    xml += '</rss>\n';
    
    return ContentService.createTextOutput(xml)
      .setMimeType(ContentService.MimeType.XML);
  } catch (error) {
    return ContentService.createTextOutput('<error>' + escapeXml(error.toString()) + '</error>')
      .setMimeType(ContentService.MimeType.XML);
  }
}

function getEmptyFeedXml() {
  var xml = '<?xml version="1.0"?>\n';
  xml += '<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">\n';
  xml += '  <channel>\n';
  xml += '    <title>Amarkanth Tea Group</title>\n';
  xml += '    <link>https://amarkanthtea.com</link>\n';
  xml += '    <description>No products found in database yet.</description>\n';
  xml += '  </channel>\n';
  xml += '</rss>\n';
  return xml;
}

function escapeXml(unsafe) {
  if (unsafe === null || unsafe === undefined) return "";
  return unsafe.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
```

---

## 🛠️ Testing the APIs

### 1. Adding a Product (POST API)
You can call your API from a shell command using `curl` or any API development tool (like Postman).

Run this command in your terminal to add a test product (replace `YOUR_WEB_APP_URL` with your deployment URL):

```bash
curl -L -X POST "YOUR_WEB_APP_URL" \
  -H "Content-Type: application/json" \
  -d '\''{
    "id": "amarkanth_ctc_250g",
    "title": "Amarkanth Premium CTC Tea - 250g Pouch",
    "description": "Bold CTC blend with natural cardamom for aromatic flavor.",
    "link": "https://amarkanthtea.com/product/amarkanth-premium-ctc",
    "image_link": "https://amarkanthtea.com/amarkanth_bold_tea.webp",
    "price": "115.00 INR",
    "availability": "in_stock",
    "brand": "Amarkanth",
    "google_product_category": "Food, Beverages & Tobacco > Beverages > Tea"
  }'\''
```

*Expected API Response:*
```json
{"result":"success","action":"added","id":"amarkanth_ctc_250g"}
```

If you re-run the same request with a modified price or description, the row will be updated automatically, returning `"action":"updated"`.

---

### 2. Loading the Merchant Feed (GET API)
Simply paste your **Web App URL** directly into a browser tab or fetch it via curl:

```bash
curl -L "YOUR_WEB_APP_URL"
```

It will return a beautifully structured, compliant XML RSS feed that lists all your products.

---

## 🔗 Linking to Google Merchant Center

1. Open [Google Merchant Center](https://merchants.google.com/).
2. Navigate to **Products** > **Feeds** > click the `+` button.
3. Select your target country and language.
4. For setup, select **Scheduled fetch**.
5. Give the feed a name (e.g. `Amarkanth Website Feed`).
6. In **File URL**, paste your **Web App URL**. Set the fetch frequency (e.g. Daily).
7. Save and select **Fetch Now** to sync instantly!
