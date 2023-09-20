const { Router } = require('express');
const cloudinary = require('../configs/cloudinaryConfig');
const upload = require('../configs/multerConfig'); // Import multer configuration
const ImageUploadRouter = Router();

ImageUploadRouter.post('/image', upload.single('file'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.status(200).json({ url: result.secure_url });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = { ImageUploadRouter };
