const { userAgent } = require("next/server");

/** @type {import("next-sitemap").IConfig} */
module.exports = {
  siteUrl: "https://indihome-by-telkomsel.com",
  generateRobotsTxt: true,
  robotsTxtPotions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
