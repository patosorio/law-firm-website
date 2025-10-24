// Use require instead of import so ts-node doesn't complain
// run: npx ts-node scripts/seedContent.ts

const { readFileSync: readFile } = require("fs");
const { initializeApp: initApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("./serviceAccountKey.json");

initApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

async function seed() {
  try {
    const raw = readFile("./scripts/seedContentBlog.json", "utf8");
    const content = JSON.parse(raw);

    // await db.collection("siteContent").doc("homepage_es").set(content);
    await db.collection("siteBlog").doc("2").set(content);

    console.log("✅ Seeded site content successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ Failed seeding:", err);
    process.exit(1);
  }
}

seed();