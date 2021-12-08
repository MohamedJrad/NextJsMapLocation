
const withImages = require('next-images');
module.exports = withImages();
const withVideos = require('next-videos');
module.exports = withVideos();
const withPlugins = require('next-compose-plugins');
module.exports = withPlugins([[withImages]]);
module.exports = {
    reactStrictMode: true,
    env: {
        RESTAURANT_ID: process.env.RESTAURANT_ID
    }
}

module.exports = {
    env: {
        MONGODB_URI: "mongodb+srv://admin:admin%40123456@cluster0.dq3ba.mongodb.net/testDb?retryWrites=true&w=majority",
        JWT_SECRET: "CEA571832FF7BA06978FEA34DD7A6939FDC517F8BA06FD148824BD44504A72F8"
    }
};
