import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const WooClient = new WooCommerceRestApi({
  url: `${process.env.BACKEND_URL}`,
  consumerKey: `${process.env.CONSUMER_KEY}`,
  consumerSecret: `${process.env.SECRET_KEY}`,
  version: "wc/v3"
});


export default WooClient;