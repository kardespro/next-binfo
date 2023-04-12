import { createClient } from 'redis'; const client = createClient({
    password: "edh2Ne02AuFvqpgEYxp0phJFvfPBYrbD",
    socket: {
        host: "redis-12275.c279.us-central1-1.gce.cloud.redislabs.com",
        port: 12275
    }
});
client.on('error', err => console.log('Redis Client Error', err)); 
/*interface MyData {
  isNext: boolean;
  isAvaliable: boolean;
  buildID: string;
  title: string;
  faviconUrl: string;
  isTW: string;
  timeout: string;
  loved: boolean;
  verified: boolean;
  
}*/
interface MyData {
  url: String
}
export async function useConnection(){
  await client.connect();
}
export async function addWebsite(id: String, jsonData: MyData){
  await client.connect()
  let url = jsonData.url
  const strf = {
    url: url
  }
  const tr2 = JSON.stringify(strf)
  await client.set(`${id}`, tr2);
  await client.disconnect()
  return true
}
export async function Lookup(id: String){
  await client.connect()
  let data = await client.get(`${id}`)
  await client.disconnect()
  return data
}
export async function useDisconnect(){
  await client.disconnect();
  return true
}
