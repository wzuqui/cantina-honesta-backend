import * as express from 'express';
import * as cors from 'cors';
import log from './log';
import * as sgMail from '@sendgrid/mail';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'willianluiszuqui@gmail.com',
    from: 'willianluiszuqui@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  };
  const response = await sgMail.send(msg);
  res.json({ response });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  log.info('app running ' + port);
});
