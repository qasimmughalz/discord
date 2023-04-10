const express = require("express");

const app = express();
const port = process.env.PORT || 5000;



const getUpworkData = async ()=>{
  let Parser = require('rss-parser');
  let parser = new Parser();
  
    let feed = await parser.parseURL('https://www.upwork.com/ab/feed/topics/rss?securityToken=7f27c76904bbb81625d0b2268f0a613b0cbaaf8bfed6284c8e27fde4aac369525873fef5c02c2ab47c43a7d3d00375f2873f93c20ee18954cc4759c1a5377f1f&userUid=1397783429601931264&orgUid=1397783429601931265');
    console.log('++++++',feed);
  
    // feed.items.forEach(item => {
    //   console.log('check---------' + item.title + ':' + item.link)
    // });

}


const PostToDiscord = async ()=>{
  let result = await fetch('https://discord.com/api/webhooks/1094251101680836688/0hw3r4-mJ_A9NFzAQ5Q3ik7mOWM-UJiEcepj8cwvaF1bjDI-uD7_yrTtzYDuVg66q0_U',
  {
    method:'POST',
    body:JSON.stringify({content: 'Yo its a content', username:'Shopify Bot'}),
    headers:{
      'content-type':'application/json'
    }
  })
}

// getUpworkData()

PostToDiscord()





app.listen(port, () => {
    console.log(`App is listening on PORT ${port}`);
  });
  

