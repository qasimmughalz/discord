const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

let preDate = 'Tue, 11 Apr 2023 12:50:16 +0000'



const Post_ContentWriter_Data = async (data)=>{
  let result = await fetch('https://discord.com/api/webhooks/1096495828698419402/ArRPK2c2K28M5ODDMAulKkOMh2wgE3YipjBryrjrUsT7F-ycA00SjK_U1awnI8p2Grg4',
  {
    method:'POST',
    body: JSON.stringify({
      "avatar_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyUfCfaVHEktWkvUvc_o_K8R0F58AMYDO--fuBt9g_g&s",
      "username": "Upwork Captain",
      "embeds": [{
        "title":data.title,
        "description": data.description,
        "url": data.link,
        "footer": {
          "text": "-Upwork Alert!!!⚠️",
          "icon_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyUfCfaVHEktWkvUvc_o_K8R0F58AMYDO--fuBt9g_g&s"
        },
        // "color": "7330372"
      }]
    }),
    headers:{
      'content-type':'application/json'
    }
  }).then((data)=> console.log("responseee-------------")).catch(e => console.log("errrrrr",e))
}

const Post_Copywriter_Data = async (data)=>{
  let result = await fetch('https://discord.com/api/webhooks/1096496301316780052/woJUNWQz3n-VApU7zgX6nW-vnZckxC5Yh46ip3PhdCM5DyhRC52WceFECNhaMUFMA9cf',
  {
    method:'POST',
    body: JSON.stringify({
      "avatar_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyUfCfaVHEktWkvUvc_o_K8R0F58AMYDO--fuBt9g_g&s",
      "username": "Upwork Captain",
      "embeds": [{
        "title":data.title,
        "description": data.description,
        "url": data.link,
        "footer": {
          "text": "-Upwork Alert!!!⚠️",
          "icon_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyUfCfaVHEktWkvUvc_o_K8R0F58AMYDO--fuBt9g_g&s"
        },
        // "color": "7330372"
      }]
    }),
    headers:{
      'content-type':'application/json'
    }
  }).then((data)=> console.log("responseee-------------")).catch(e => console.log("errrrrr",e))
}

const Post_SocialMediaMarketer_Data = async (data)=>{
  let result = await fetch('https://discord.com/api/webhooks/1096496429553426505/lG0EwCNEcRuYaq67UllRdP3tsuZ1nlIjWvWlS0Lvn-ZacgE_NEIC7k6PEP3XaCuB5XFw',
  {
    method:'POST',
    body: JSON.stringify({
      "avatar_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyUfCfaVHEktWkvUvc_o_K8R0F58AMYDO--fuBt9g_g&s",
      "username": "Upwork Captain",
      "embeds": [{
        "title":data.title,
        "description": data.description,
        "url": data.link,
        "footer": {
          "text": "-Upwork Alert!!!⚠️",
          "icon_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyUfCfaVHEktWkvUvc_o_K8R0F58AMYDO--fuBt9g_g&s"
        },
        // "color": "7330372"
      }]
    }),
    headers:{
      'content-type':'application/json'
    }
  }).then((data)=> console.log("responseee-------------")).catch(e => console.log("errrrrr",e))
}

const Post_VideoEditor_Data = async (data)=>{
  let result = await fetch('https://discord.com/api/webhooks/1096496021774815392/kHbpMZrEu6WwiHNHE45Ig9JHOG59aQYmVNdplWTfP_tACGA0kN48ouc8pJbZKY-vMCV3',
  {
    method:'POST',
    body: JSON.stringify({
      "avatar_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyUfCfaVHEktWkvUvc_o_K8R0F58AMYDO--fuBt9g_g&s",
      "username": "Upwork Captain",
      "embeds": [{
        "title":data.title,
        "description": data.description,
        "url": data.link,
        "footer": {
          "text": "-Upwork Alert!!!⚠️",
          "icon_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyUfCfaVHEktWkvUvc_o_K8R0F58AMYDO--fuBt9g_g&s"
        },
        // "color": "7330372"
      }]
    }),
    headers:{
      'content-type':'application/json'
    }
  }).then((data)=> console.log("responseee-------------")).catch(e => console.log("errrrrr",e))
}

const Post_GraphicsDesign_Data = async (data)=>{
  let result = await fetch('https://discord.com/api/webhooks/1096496164351774840/2IsBMnsFuOSA8oaNdSaWN2QL8BFImIzTamFMS9pcStLtnr18sUgAqJA1LazkKO92ORYa',
  {
    method:'POST',
    body: JSON.stringify({
      "avatar_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyUfCfaVHEktWkvUvc_o_K8R0F58AMYDO--fuBt9g_g&s",
      "username": "Upwork Captain",
      "embeds": [{
        "title":data.title,
        "description": data.description,
        "url": data.link,
        "footer": {
          "text": "-Upwork Alert!!!⚠️",
          "icon_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyUfCfaVHEktWkvUvc_o_K8R0F58AMYDO--fuBt9g_g&s"
        },
        // "color": "7330372"
      }]
    }),
    headers:{
      'content-type':'application/json'
    }
  }).then((data)=> console.log("responseee-------------")).catch(e => console.log("errrrrr",e))
}

 contentWriterTime = 'Mon, 17 Apr 2023 01:40:36 +0000';
 socialMediaMarketerTime = 'Mon, 17 Apr 2023 01:40:36 +0000'

// ============== Get Content Writer Data ================== 

const get_ContentWriter_Data = async ()=>{
  let Parser = require('rss-parser');
  let parser = new Parser();
  
    let feed = await parser.parseURL('https://www.upwork.com/ab/feed/topics/rss?securityToken=7f27c76904bbb81625d0b2268f0a613b0cbaaf8bfed6284c8e27fde4aac369525873fef5c02c2ab47c43a7d3d00375f2873f93c20ee18954cc4759c1a5377f1f&userUid=1397783429601931264&orgUid=1397783429601931265&topic=6525481')
    .then((data)=>{
        let obj = {
          title: data.items[0].title,
          description: data.items[0].content.replace(/<[^>]+>/g, '')
          .replace('Hourly Range', '\n\n' + 'Hourly Rate')
          .replace('Posted On', 'Posted On')
          .replace('Category', '\n\nCategory')
          .replace('Country', '\nCountry')
          .replaceAll('Skills', '\nSkills')
          .replace('Budget', '\n\nBudget')
          .replace('click to apply', ''),
          link: data.items[0].link
        }
        // console.log('data check -------------',data)
        if(contentWriterTime.trim() != data.items[0].pubDate.trim()){
          console.log('Previous Content Writer===', contentWriterTime)
          console.log('New Content Writer===', data.items[0].pubDate)
          let update = data.items[0].pubDate
          contentWriterTime = update
          console.log('update Content Writer===', contentWriterTime)
          Post_ContentWriter_Data(obj)
        }else{
          console.log('Previous Content Writer===', contentWriterTime)
          console.log('New Content Writer===', data.items[0].pubDate)
        }
    })
}

const get_Copywriter_Data = async ()=>{
  let Parser = require('rss-parser');
  let parser = new Parser();
  
    let feed = await parser.parseURL('https://www.upwork.com/ab/feed/topics/rss?securityToken=7f27c76904bbb81625d0b2268f0a613b0cbaaf8bfed6284c8e27fde4aac369525873fef5c02c2ab47c43a7d3d00375f2873f93c20ee18954cc4759c1a5377f1f&userUid=1397783429601931264&orgUid=1397783429601931265&topic=6525495')
    .then((data)=>{
        let obj = {
          title: data.items[0].title,
          description: data.items[0].content.replace(/<[^>]+>/g, '')
          .replace('Hourly Range', '\n\n' + 'Hourly Rate')
          .replace('Posted On', 'Posted On')
          .replace('Category', '\n\nCategory')
          .replace('Country', '\nCountry')
          .replaceAll('Skills', '\nSkills')
          .replace('Budget', '\n\nBudget')
          .replace('click to apply', ''),
          link: data.items[0].link
        }
        Post_Copywriter_Data(obj)
    })
}

const get_SocialMediaMarketer_Data = async ()=>{
  let Parser = require('rss-parser');
  let parser = new Parser();
  
    let feed = await parser.parseURL('https://www.upwork.com/ab/feed/topics/rss?securityToken=7f27c76904bbb81625d0b2268f0a613b0cbaaf8bfed6284c8e27fde4aac369525873fef5c02c2ab47c43a7d3d00375f2873f93c20ee18954cc4759c1a5377f1f&userUid=1397783429601931264&orgUid=1397783429601931265&topic=6525505')
    .then((data)=>{
        let obj = {
          title: data.items[0].title,
          description: data.items[0].content.replace(/<[^>]+>/g, '')
          .replace('Hourly Range', '\n\n' + 'Hourly Rate')
          .replace('Posted On', 'Posted On')
          .replace('Category', '\n\nCategory')
          .replace('Country', '\nCountry')
          .replaceAll('Skills', '\nSkills')
          .replace('Budget', '\n\nBudget')
          .replace('click to apply', ''),
          link: data.items[0].link
        }
        if(socialMediaMarketerTime.trim() != data.items[0].pubDate.trim()){
          console.log('Previous Social Media Marketer ===', socialMediaMarketerTime)
          console.log('New Social Media Marketer ===', data.items[0].pubDate)
          let update = data.items[0].pubDate
          socialMediaMarketerTime = update
          console.log('update Social Media Marketer ===', socialMediaMarketerTime)
          Post_SocialMediaMarketer_Data(obj)
        }else{
          console.log('Previous Social Media Marketer ===', socialMediaMarketerTime)
          console.log('New Social Media Marketer ===', data.items[0].pubDate)
        }
      
    })
}

const get_VideoEditor_Data = async ()=>{
  let Parser = require('rss-parser');
  let parser = new Parser();
  
    let feed = await parser.parseURL('https://www.upwork.com/ab/feed/topics/rss?securityToken=7f27c76904bbb81625d0b2268f0a613b0cbaaf8bfed6284c8e27fde4aac369525873fef5c02c2ab47c43a7d3d00375f2873f93c20ee18954cc4759c1a5377f1f&userUid=1397783429601931264&orgUid=1397783429601931265&topic=6525511')
    .then((data)=>{
        let obj = {
          title: data.items[0].title,
          description: data.items[0].content.replace(/<[^>]+>/g, '')
          .replace('Hourly Range', '\n\n' + 'Hourly Rate')
          .replace('Posted On', 'Posted On')
          .replace('Category', '\n\nCategory')
          .replace('Country', '\nCountry')
          .replaceAll('Skills', '\nSkills')
          .replace('Budget', '\n\nBudget')
          .replace('click to apply', ''),
          link: data.items[0].link
        }
        Post_VideoEditor_Data(obj)
    })
}

const get_GraphicsDesign_Data = async ()=>{
  let Parser = require('rss-parser');
  let parser = new Parser();
  
    let feed = await parser.parseURL('https://www.upwork.com/ab/feed/topics/rss?securityToken=7f27c76904bbb81625d0b2268f0a613b0cbaaf8bfed6284c8e27fde4aac369525873fef5c02c2ab47c43a7d3d00375f2873f93c20ee18954cc4759c1a5377f1f&userUid=1397783429601931264&orgUid=1397783429601931265&topic=6525518')
    .then((data)=>{
        let obj = {
          title: data.items[0].title,
          description: data.items[0].content.replace(/<[^>]+>/g, '')
          .replace('Hourly Range', '\n\n' + 'Hourly Rate')
          .replace('Posted On', 'Posted On')
          .replace('Category', '\n\nCategory')
          .replace('Country', '\nCountry')
          .replaceAll('Skills', '\nSkills')
          .replace('Budget', '\n\nBudget')
          .replace('click to apply', ''),
          link: data.items[0].link
        }
        Post_GraphicsDesign_Data(obj)
    })
}


// get_ContentWriter_Data() 
// console.log('end pr kia bacha ===', contentWriterTime)


// get_Copywriter_Data() 
// get_SocialMediaMarketer_Data() 
// get_VideoEditor_Data() 
// get_GraphicsDesign_Data()


setInterval( async () => {
  await get_ContentWriter_Data() 
  // await get_Copywriter_Data() 
  await get_SocialMediaMarketer_Data() 
  // await get_VideoEditor_Data() 
  // await get_GraphicsDesign_Data()

}, 5000);    //10 minutes

// 600000
// Content writing
// Copywriting
// Social Media Marketing
// Video editing
// Logo Design
// Graphic Design


app.listen(port, () => {
    console.log(`App is listening on PORT ${port}`);
});
  
