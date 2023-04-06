import WP from "wpapi";

export const wpClient = new WP({
    // endpoint: `${process.env.API_URL}/wp-json`,
    endpoint: "https://workspace.hidacolle.com/wp-json",
});

export default wpClient;