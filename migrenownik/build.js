// Build script: JSX (dzienniczek_migren.jsx) -> plain JS, doklejony za
// icons-and-chart.js, zakończony wywołaniem montującym App. Produkuje
// zminifikowany app.min.js, który faktycznie ładuje index.html.
//
// Użycie:
//   npm install
//   node build.js
//
// Wymaga Node.js (node -v, npm -v żeby sprawdzić czy jest zainstalowany).
const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");
const { minify } = require("terser");

const dir = __dirname;

const shim = fs.readFileSync(path.join(dir, "icons-and-chart.js"), "utf8");
const source = fs.readFileSync(path.join(dir, "dzienniczek_migren.jsx"), "utf8");

const { code: appJs } = babel.transformSync(source, {
  presets: [["@babel/preset-react", { runtime: "classic" }]],
  filename: "dzienniczek_migren.jsx",
  babelrc: false,
  configFile: false,
});

const mount = `\nReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));\n`;

const combined = shim + "\n" + appJs + mount;

minify(combined, { toplevel: false, compress: true, mangle: true })
  .then((result) => {
    if (result.error) throw result.error;
    fs.writeFileSync(path.join(dir, "app.min.js"), result.code, "utf8");
    console.log("Zapisano app.min.js (" + result.code.length + " bajtów)");
  })
  .catch((err) => {
    console.error("Błąd minifikacji:", err);
    process.exit(1);
  });
