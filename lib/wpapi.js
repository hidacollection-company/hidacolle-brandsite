import WP from "wpapi";

// https://qiita.com/miya0001/items/a8e04f53a2dd9918902a

export const wpClient = new WP({
    // endpoint: `${process.env.API_URL}/wp-json`,
    endpoint: "https://workspace.hidacolle.com/wp-json",
});

export default wpClient;