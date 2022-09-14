const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")("sk_test_51LhHmgLaIhpnTH0CjgeKS1GJKjtWoCzu2OPZIrnlxyyxtiB2Z8Tx0ISM1StNvooiTqN7O4nmGbGlKujBgVx8aR5U00OYkojh7Q");

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;