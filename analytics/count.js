import {
  collection,
  getCountFromServer
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { db } from "../js/firebase-backend.js"; 

async function countDocs() {
  const coll = collection(db, "plays");
  const snapshot = await getCountFromServer(coll);
  console.log(
  "%c🐀 CURSE ACTIVATED 🧀\n\nBy opening this console,\nyou have invoked the ancient dairy spell.\n\nYou are now:\n→ a lactose-intolerant rat\n→ haunted by brie\n→ unable to enjoy pizza without consequences\n\nThere is no undo.\nRespectfully.",
  "color: #7A1F1F; font-size: 14px; font-weight: bold; font-family: monospace;"
);

  console.log("But if you're curious (+ make you feel better), this is how many people have taken the cheese quiz: ", snapshot.data().count);
}

countDocs();
