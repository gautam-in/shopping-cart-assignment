const Banners = require("../model/banners");
const { getPreSignedUrl } = require("../utils/aws")

module.exports = {
    banners: async (args, req) => {
        const banners = await Banners.find({});
        const bannersWithTempUrl = banners.map((banner) => {
            const preSignedUrl = getPreSignedUrl(banner.bannerImageUrl);
            return {...banner._doc, temp_url: preSignedUrl}
        })
        return bannersWithTempUrl
    }
}