const express = require('express');
const router = express.Router()
const fs = require('fs');
const path = require('path');

const getContent = async(folder) => {
    const file_path = path.resolve(`./data/${folder}/index.get.json`);
    return await fs.promises.readFile(file_path, 'utf-8');
}

router.get('/products', async(req, res) => {
    try {
        const category_id = req.query.category_id;
        let content = await getContent("products");
        content = JSON.parse(content);
        if(category_id) {
            content = content.filter(x => x.category == category_id);
        }
        res.json(content);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/banners', async(req, res) => {
    try {
        const content = await getContent("banners");
        res.json(JSON.parse(content));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/categories', async(req, res) => {
    try {
        let content = await getContent("categories");
        content = JSON.parse(content);
        content = content.filter(x => x.order > 0);
        res.json(content);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;