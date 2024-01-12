const app = require("./src/app");
const PORT = 3055;
const serrver = app.listen(PORT, () => {
    console.log(`ecomic-server start with ${PORT}`);
});
process.on("SIGINT", () => {
    serrver.close(() => console.log("Exit Server Express"));
});
