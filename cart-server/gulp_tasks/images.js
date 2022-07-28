const fs = require("fs");
const glob = require("glob");
const path = require("path");
const sharp = require("sharp");

const transforms = [
    {
        src: "./static/images/products/*/*",
        dist: "./static/images/compress/products/",
        options: {
            // width: 500,
        },
    },
    // {
    //     src: "./src/assets/img/blogposts/*",
    //     dist: "./dist/img/blogposts/_600x600/",
    //     options: {
    //         width: 600,
    //         height: 600,
    //         fit: "cover",
    //     },
    // },
    // {
    //     src: "./src/assets/img/projects/*",
    //     dist: "./dist/img/projects/_800x600/",
    //     options: {
    //         width: 800,
    //         height: 600,
    //         fit: "cover",
    //     },
    // },
];

function resizeImages(done) {
    // loop through configuration array of objects
    transforms.forEach(function (transform) {
        // if dist folder does not exist, create it with all parent folders
        if (!fs.existsSync(transform.dist)) {
            fs.mkdirSync(transform.dist, { recursive: true }, (err) => {
                if (err) throw err;
            });
        }

        // glob all files
        let files = glob.sync(transform.src);

        // for each file, apply transforms and save to file
        files.forEach(function (file) {
            let filename = path.basename(file);
            const filename_w_e = path.parse(file).name  
            const file_folder = path.parse(file).dir.split("/").slice(-1)[0];
            filename = filename_w_e + ".webp";
            console.log(`${transform.dist}${file_folder}/${filename}`);
            if (!fs.existsSync(`${transform.dist}${file_folder}`)) {
                fs.mkdirSync(`${transform.dist}${file_folder}`, { recursive: true }, (err) => {
                    if (err) throw err;
                });
            }
            sharp(file)
                // .resize(transform.options)
                .webp()
                .toFile(`${transform.dist}${file_folder}/${filename}`)
                .catch((err) => {
                    console.log(err);
                });
        });
    });
    done();
}

// exports (Common JS)
module.exports = {
    resize: resizeImages,
};