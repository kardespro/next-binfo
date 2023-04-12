import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';
import loved from '../../../external/loved.json'
import verified from '../../../external/verified.json'
import dev from '../../../external/dev.json'
import { addWebsite, Lookup , useConnection, useDisconnect } from '../../../external/database'
import { makeid } from '../../../external/utils'
interface ScrapeData {
  isAvailable: boolean;
  error: boolean;
  errorMessage: string;
  buildID: string;
  sortedPages: string[];
  isTW: boolean;
  timeout: Number;
  loved: boolean;
  verified: boolean;
  dev: boolean;
  share_id: string;
}

interface ScrapeQuery {
  url: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ScrapeData>
) {
  if(!req.query.url) return res.json({
    isNext: false,
    error: true,
    errorMessage: "Query Not Found"
  })
  //await useConnection()
  let response = await axios.get(req.query.url, {proxy: { protocol: "http", host: "188.74.210.207", port: 6286, auth: { username: "mgsivsqa", password: "db1i98i8t4h3"}}}).catch(err => res.json({
    isNext: false,
    isAvaliable: false,
    errorMessage: err.code
  }))
  const $ = cheerio.load(response.data);
  const styleHref = $('link[as="style"]').attr('href');
  const fullStyleUrl = new URL(styleHref, req.query.url).toString();
  var twRes = ''
  
  
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
        let j1 = JSON.parse(jsonData || '{}')
        
        let maked = '';
        if(!faviconUrl.includes("https")){
           maked = `${req.query.url}/${faviconUrl}`
        }else{
          maked = `${faviconUrl}`
        }
        
        if(styleHref){
        axios.get(fullStyleUrl,{proxy: { protocol: "http", host: "188.74.210.207", port: 6286, auth: { username: "mgsivsqa", password: "db1i98i8t4h3"}}}).then(w4w1 => {
          
  const hasTailwind = /\/\*[\s\S]*tailwindcss[\s\S]*\*\//.test(w4w1.data);
          let mk5 = makeid(12)
          let mkdrty = {
            url: req.query.url
          }
          addWebsite(mk5, mkdrty)
          res.json({
          isNext:true,
          isAvaliable: true,
          buildID: j1.buildId,
          title: title,
          faviconUrl:`${maked || "/external/withbg.png"}`,
          isTW: hasTailwind,
          timeout: Date.now(),
          loved: loved.includes(req.query.url),
          verified: verified.includes(req.query.url),
          dev: dev.includes(req.query.url),
          share_id: mk5
        })
        })
  
        
        }
        if(!styleHref){
          res.json({
          isNext:true,
          isAvaliable: true,
          buildID: j1.buildId,
          title: title,
          faviconUrl:`${maked || "/external/withbg.png"}`,
          isTW: false,
          timeout: Date.now(),
          loved: loved.includes(req.query.url),
          verified: verified.includes(req.query.url),
          dev: dev.includes(req.query.url)
        })
        }
        
      }
    });
    //await useDisconnect()
    // __NEXT_DATA__ verisi yoksa hata fırlat
    if (!$('#__NEXT_DATA__').length) {
      res.json({
        isNext: false,
        isAvaliable: true
      })
    }
}