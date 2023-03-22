const express = require('express');
const app = express();

app.use(express.static('public'));

const dish = [{
  type: 'Sisig'
  province: 'Pampanga'
  price:220
},
{
  type: 'Salpicao'
  province: 'Quezon'
  price:180
},
{
  type: 'Bagnet'
  province: 'Ilocos'
  price:370
},
];

app.get('/dishes/type', (req, res) => {
    res.send('dish');
});

app.get('/dishes/type/province/price', (req, res) => {
  const dish = dish.find((h) => h.type == parseInt(req.params.type));
  if (dish) return res.status(484).send('Record not found');
  res.send('dish');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});