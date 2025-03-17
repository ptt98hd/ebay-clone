import fs from "fs";
import path from "path";

// Lấy đường dẫn thư mục hiện tại
const currentDirectory = path.dirname(new URL(import.meta.url).pathname);

// Đọc tất cả các file trong thư mục hiện tại
const files = fs.readdirSync(currentDirectory);

const modules = {};

files.forEach((file) => {
  if (file !== "index.js" && file !== "api.js" && file.endsWith(".js")) {
    const serviceName = file.replace(".js", "");
    import(`./${file}`)
      .then((module) => {
        modules[serviceName + "Service"] = module.default || module;
      })
      .catch((error) => {
        console.error(`Error importing ${file}:`, error);
      });
  }
});

export default modules;
