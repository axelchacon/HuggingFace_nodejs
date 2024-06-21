import { HfInference } from "@huggingface/inference";
//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

const HF_TOKEN = "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";
//const imageURL ="https://somosmuyperros.com/wp-content/uploads/2017/02/Miniatura_comportamiento17-1200x1012.jpg";
const model = "Salesforce/blip-image-captioning-large";

const inferencehf = new HfInference(HF_TOKEN);

// inferencehf.imageToText({
// 	data: readFileSync("test/cats.png"),
// 	model: "nlpconnect/vit-gpt2-image-captioning",
// });

const result = await inferencehf.imageToText({
	data: readFileSync("perro_cat.jpeg"),
	model: model,
});

console.log(result);
