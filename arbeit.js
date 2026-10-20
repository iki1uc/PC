// statt reFINAL langsam:
const modules = [...15_ARBEIT, ...20_NOAH];
await Promise.all(modules.map(m => import(m))); // speedy
