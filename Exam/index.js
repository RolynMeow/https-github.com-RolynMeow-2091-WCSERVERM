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

app.get('/dishes', (req, res) => {
res.json(dishes);
});

app.get('/dishes/:type', (req, res) => {
  const dishType = req.params.type;
  const dish = dishes.find(d => d.type === dishType);
  if (dish) {
    res.json(dish);
  } else {
    res.status(404).send('Record not found');
  }
});

app.get('*',(req, res) => {
  res.status(404).send("Invalid route");
});

app.listen(port, () => {
  console.log('Server started on port $ {port}');
});