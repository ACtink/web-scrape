import express from "express"
import axios from "axios";
import * as cheerio from "cheerio";

const app = express()

const data = [];

app.get("/", (req, res)=>{
    res.send("Welcome to Climate API")
})


app.get("/news", (req, res)=>{
axios.get("https://www.theguardian.com/environment/climate-crisis")
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    $('a[aria-label*="climate"]').each(function (index, element) {
      const anchorAriaLabel = $(element).attr('aria-label');
      const anchorHref = $(element).attr("href");

      data.push({
        anchorAriaLabel,
        anchorHref,
      });
    });

    res.json((data))
 
  });


//   axios
//   .get("https://www.nytimes.com/search?query=climate")
//   .then((res) => {
//     const html = res.data;
//     const $ = cheerio.load(html)

//     $('a h4').each(function (index, element) {

//         const h4Text = $(element).text();

//         data.push({
//             h4Text
//         });
//       });


// })



})

app.listen(3000, ()=>{
    console.log("server is listening on port 3000")
})

