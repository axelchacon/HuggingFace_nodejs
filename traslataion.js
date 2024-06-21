// import { HfInference } from "@huggingface/inference";
// import { config } from "dotenv";

// config(); // Carga las variables de entorno desde el archivo .env

// const imageURL =
// 	"https://somosmuyperros.com/wp-content/uploads/2017/02/Miniatura_comportamiento17-1200x1012.jpg";
// const model = "Salesforce/blip-image-captioning-large";

// // Asegúrate de que el token esté cargado correctamente desde las variables de entorno
// const inferencehf = new HfInference(process.env.HF_TOKEN);

// // Función asincrónica para ejecutar la inferencia
// async function runInference() {
// 	try {
// 		const response = await fetch(imageURL);
// 		const blob = await response.blob();

// 		const result = await inferencehf.imageToText({
// 			data: blob,
// 			model: model,
// 		});

// 		console.log(result);
// 	} catch (error) {
// 		console.error("Error during inference:", error);
// 	}
// }

// // Ejecuta la función
// runInference();

// await hf.translation({
//   model: 'facebook/mbart-large-50-many-to-many-mmt',
//   inputs: textToTranslate,
//   parameters: {
//   "src_lang": "en_XX",
//   "tgt_lang": "fr_XX"
//  }
// })
