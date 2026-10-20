// SCHAUER — langsam, seriell
for (let m of modules) {
  await load(m); // wartet jedes Mal
  await check(m); // Justice.js
  await bridge(m); // Bridge.js
}
