import multer from 'multer'

let storage = multer.diskStorage({
  destination:(req,file,cb) => {
    cb(null,"/public")
  },
});
let upload = multer({storage})

export default upload;