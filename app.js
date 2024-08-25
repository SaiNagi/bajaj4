const express = require('express');
const myapp = express();

myapp.use(express.json());

myapp.route('/bfhl')
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highestAlphabet = '';

    data.forEach(item => {
        if (!isNaN(item)) {
          numbers.push(item);
        } else if (item.length === 1 && isNaN(item)) {
          
          alphabets.push(item);
      
          
          if (item >= 'a' && item <= 'z') {
            if (highestAlphabet === '' || item > highestAlphabet) {
              highestAlphabet = item;
            }
          }
        }
      });
      
      
    res.json({
      is_success: true,
      user_id: 'Sairam51',
      email: 'sairam.21bce9220@vitapstudent.ac.in',
      roll_number: '21BCE9220',
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestAlphabet ? [highestAlphabet] : []
    });
  });

const port =process.env.PORT || 3000;

myapp.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
