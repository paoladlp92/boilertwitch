const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//objeto poner tipo de daro si es requerido o no evitar q info se suba si no tiene mimimum requerido
const exampleSchema = new Schema({
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;

//env info privada, abre carpeta en visual code.
