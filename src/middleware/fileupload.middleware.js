import multer from "multer";

// Configure the storage for file uploads
const storage = multer.diskStorage({
    // Set the destination directory for uploaded files
    destination: './uploads',

    // Define the filename for uploaded files
    filename: (req, file, cb) => {
        // Generate a unique filename using the current date and time, replacing ':' with '_' to avoid issues
        cb(null, new Date().toISOString().replace(/:/g, '_') + file.originalname);
    }
});

// Create a multer middleware instance with the specified storage configuration
export const upload = multer({ storage: storage });
