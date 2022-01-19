import { deleteObject, ref } from "firebase/storage";
import { storage } from "./config";


const deleteFile = (filePath) => {
const imagRef = ref(storage, filePath)
    return deleteObject(imagRef);     
};


export default deleteFile;