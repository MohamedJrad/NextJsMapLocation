import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI



export const connectDB = async () => {

    if (mongoose.connections[0].readyState) {

        // Use current db connection
        // return handler(req, res);
    }
    // Use new db connection
    try {

        await mongoose.connect(uri);
        console.log('db success connect')
        // return handler(req, res);

    }
    catch (err) {
        console.log('error connecting to database')
        console.log(err)
        process.exit(1)
    }

};




