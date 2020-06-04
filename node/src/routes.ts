import express from 'express';

const routes = express.Router();

routes.get('/', (request,response) => {
   return response.json({message: 'Hello World'})
});

//pra ser asesivel em outras ts
export default routes; 