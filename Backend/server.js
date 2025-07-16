import app from "./src/app.js";
import connectDataBase from "./src/db/db.js"

connectDataBase()

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});