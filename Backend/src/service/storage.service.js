import imagekit from "imagekit";
import config from "../config/config.js";
import path from "path";

const Imagekit = new imagekit({
    publicKey: config.IMAGEKIT_PUBLIC_KEY,
    privateKey: config.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: config.IMAGEKIT_URL_ENDPOINT
})

export const uploadFile = (file, originalName) => {
    const ext = path.extname(originalName)
    return new Promise((resolve, reject) => {
        Imagekit.upload({
            file: file,
            fileName: "image-file" + Date.now() + ext,
            folder: "/images"
        }, (error, result) => {
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })
    })
}