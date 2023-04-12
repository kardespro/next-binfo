import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios'
import { Lookup, useConnection, useDisconnect } from '../../../external/database'
interface LookupData {
  error: String,
  errorCode: Number
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LookupData>
) {
  if(!req.query.id) return res.json({
    error: "Id Not Found",
    errorCode: 404
  })
  //await useConnection()
   let data = await Lookup(`${req.query.id}`)
   let parsedData: any = null;

    if (data) {
     parsedData = JSON.parse(data);
   }

     if (!parsedData) {
       return res.json({ error: "This ID Not Found In Database", errorCode: 404 });
        }
  let dreq = await axios.get(`https://next-binfo.vercel.app/api/entilements/test?url=${parsedData.url}`)
  //await useDisconnect()
  res.json(dreq.data)
  
}