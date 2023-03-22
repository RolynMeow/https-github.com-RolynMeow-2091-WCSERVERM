const express = require('express');
const app = express();
const port = 3000

app.use(express.static('public'));

const dishes = [
  {
  type: 'Sisig',
  province: 'Pampanga',
  price:220
},
{
  type: 'Salpicao',
  province: 'Quezon',
  price:180
},
{
  type: 'Bagnet',
  province: 'Ilocos',
  price:370
},
];

app.get('/api/dishes', (req, res) => {
res.send(dishes);
});

app.get('/api/dishes/:type', (req, res) => {

  const dish = dishes.find((h) => h.type === String(req.params.type));
  if (!dish)
    return res.start(404).send('Record not found');
    res.send(dish);
});

app.listen(port, () => {
  console.log('Server started on port 3000');
});Z