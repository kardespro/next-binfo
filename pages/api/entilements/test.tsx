import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';

interface ScrapeData {
  isAvailable: boolean;
  error: boolean;
  errorMessage: string;
  buildID: string;
  sortedPages: string[];
}

interface ScrapeQuery {
  url: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ScrapeData>
) {
  let response = await axios.get(req.query.url).catch(err => res.json({
    isNext: false,
    isAvaliable: false,
    errorMessage: err.code
  }))
  const $ = cheerio.load(response.data);
  const title = $('head > title').text();
  let faviconUrl = '';
    $('head > link[rel="icon"], head > link[rel="shortcut icon"]').each(function(i, elem) {
      const href = $(this).attr('href');
      if (href && !href.startsWith('data:')) {
        faviconUrl = href;
        return false; 
      }
    });
    
  
    $('script').each(function(i, elem) {
      if ($(this).attr('id') === '__NEXT_DATA__') {
        const jsonData = $(this).html();
        let j1 = JSON.parse(jsonData)
        console.log(JSON.parse(jsonData));
        let maked = '';
        if(!faviconUrl.includes("https")){
           maked = `${req.query.url}/${faviconUrl}`
        }else{
          maked = `${faviconUrl}`
        }
        res.json({
          isNext:true,
          isAvaliable: true,
          buildID: j1.buildId,
          title: title,
          faviconUrl:`${maked}`
        })
      }
    });

    // __NEXT_DATA__ verisi yoksa hata fırlat
    if (!$('#__NEXT_DATA__').length) {
      res.json({
        isNext: false,
        isAvaliable: true
      })
    }
}