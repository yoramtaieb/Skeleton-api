const app = require("./config/server"),
  config = require("./config/env");

app.listen(config.app_port, () => {
  console.log("Le serveur est démarré");
});
