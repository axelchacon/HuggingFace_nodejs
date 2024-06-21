import { HfInference } from "@huggingface/inference";
import fs from "fs";

const HF_TOKEN = "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";
const hf = new HfInference(HF_TOKEN);

async function reconocerImagen(rutaImagen) {
	try {
		const imagenBuffer = fs.readFileSync(rutaImagen);
		const resultado = await hf.imageToText({
			data: imagenBuffer,
			model: "Salesforce/blip-image-captioning-large",
		});
		console.log("Descripción de la imagen:", resultado);
	} catch (error) {
		console.error("Error:", error);
	}
}

reconocerImagen("perro_cat.jpeg");
