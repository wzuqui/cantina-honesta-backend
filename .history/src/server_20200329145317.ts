import * as express from 'express';
import * as cors from 'cors';
import log from './log';
import * as sgMail from '@sendgrid/mail';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  const { para, assunto, texto } = req.body;

  sgMail.setApiKey(
    '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'
  );
  log.info({ para, assunto, texto });

  const msg = {
    to: para,
    from: 'cantina.honesta@ravex.com.br',
    subject: assunto,
    text: texto
  };
  const response = await sgMail.send(msg);
  res.json({ response });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  log.info('app running ' + port);
});
