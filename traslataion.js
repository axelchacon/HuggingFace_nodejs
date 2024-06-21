import { HfInference } from "@huggingface/inference";
import { config } from "dotenv";

config(); // Carga las variables de entorno desde el archivo .env

const model = "facebook/nllb-200-distilled-600M";

// Asegúrate de que el token esté cargado correctamente desde las variables de entorno
const inferencehf = new HfInference(process.env.HF_TOKEN);

// Función asincrónica para ejecutar la inferencia
async function runInference() {
	try {
		const result = await inferencehf.translation({
			model: model,
			inputs: "Hello world",
			parameters: {
				src_lang: "en",
				tgt_lang: "es",
			},
		});

		console.log(result);
	} catch (error) {
		console.error("Error during inference:", error);
	}
}

// Ejecuta la función
runInference();
