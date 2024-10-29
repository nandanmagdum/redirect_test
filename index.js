import express from "express";

const app = express();

app.get("/", (req, res) => {
    var userAgent = req.headers['user-agent'] || navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        return res.redirect("https://play.google.com/store/apps/details?id=com.superapp.mittarv");

    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
        return res.redirect("https://apps.apple.com/app/id6475668450");
    }
    else {
        return res.redirect("https://mittarv.com");
    }
});

app.listen(1234, () => {
    console.log("Server is running at port 1234")
});