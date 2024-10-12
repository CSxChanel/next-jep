const { userAgent } = require("next/server");

/** @type {import("next-sitemap").IConfig} */
module.exports = {
    siteUrl: "https://www.indihome-area.com",
    generateRobotsTxt: true,
    robotsTxtPotions: {
        policies: [{ userAgent: "*", allow: "/" }]
    }
};
