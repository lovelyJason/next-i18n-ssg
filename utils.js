const sharp = require("sharp");

async function generateBlurDataURL(imagePath) {
  const blurImage = await sharp(imagePath)
    .resize({ width: 600, height: 470 }) // 调整到非常小的尺寸以生成模糊效果
    .jpeg({ quality: 10 }) // 低质量，加快处理速度
    .toBuffer();
  const res =  Buffer.from(blurImage).toString("base64");
  console.log(res)
  return res
}

generateBlurDataURL("banner.jpg");
