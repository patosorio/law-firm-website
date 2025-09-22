// Use require instead of import so ts-node doesn't complain
// run: npx ts-node scripts/seedContent.ts

const { readFileSync } = require("fs");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("./serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

async function seed() {
  try {
    const raw = readFileSync("./scripts/seedContent.json", "utf8");
    const content = JSON.parse(raw);

    await db.collection("siteContent").doc("homepage_en").set(content);

    console.log("✅ Seeded site content successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ Failed seeding:", err);
    process.exit(1);
  }
}

seed();