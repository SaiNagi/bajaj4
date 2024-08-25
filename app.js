const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.route('/bfhl')
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    try {
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
    } catch (error) {
      console.error('Error processing POST request:', error);
      res.status(500).json({ is_success: false, message: 'An error occurred processing your request.' });
    }
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
