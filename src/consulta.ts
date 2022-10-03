import axios from 'axios';
import express from 'express'

const app = express();
app.use(express.json());

app.get('/consulta-cnpj/', async (request, response) => {
    const {cnpj} = request.query;
        const config = {
            method: 'get',
            url: `https://api.cnpja.com/office/${cnpj}`,
            headers: { 
            'Authorization': '94d06c99-d18f-4bbc-8acf-d450b65ff762-44adf70e-b80d-465f-be24-7540e29352ff'
            },
        };
  
 await axios(config)
    .then((response1) => {
        return response.json(response1.data)
    })
    .catch(() => {
        console.log("Ops! CNPJ não encontrado!");
    })

})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000!')
})

