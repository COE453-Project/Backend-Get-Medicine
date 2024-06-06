// This is a google cloud function, do not run locally
const functions = require('@google-cloud/functions-framework');
const cors = require('cors')();
const db = 'https://backend-database-olz2xjbmza-uc.a.run.app'

functions.http('helloHttp', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.set('Access-Control-Allow-Headers', 'access-control-allow-credentials,access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,content-type');
    console.log(`MIEN:\tCORS`)

    res.status(204).send('');
  } else {
    let id = req.query.id;
    console.log(`MIEN:\tQuery ${id}`)
    if (id === undefined){
      id = req.path.split('/').pop();
    }
    console.log(`MIEN:\tParam ${id}`)

    let url = `${db}/${id}`;
    let options = {method:'GET'}
    const response = await fetch(url, options)
    
    const body = await response.json()
    console.log(`MIEN:\tResponse ${response.status} ${body}`)
    res.status(response.status)
    res.send(body)
  }
});
