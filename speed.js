// SPEEDY GONZALES — schnell, parallel
await Promise.all(modules.map(m => load(m))); // alle 35 auf einmal
MAINBOARD.fast = true; // Justice.js bypass
Bridge.js.parallel = true; // alle 3 Brücken gleichzeitig
Loop.js.interval = 0; // kein wachsam schauer Loop
