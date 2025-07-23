import imagekit from "imagekit";
import dotenv from "dotenv"

dotenv.config()

const Imagekit = new imagekit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

export const uploadFile = (file) => {
    return new Promise((resolve, reject) => {
        Imagekit.upload({
            file: file,
            fileName: "image-file" + Date.now() + ".png",
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