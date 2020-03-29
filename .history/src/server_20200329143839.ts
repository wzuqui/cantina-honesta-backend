import * as express from 'express';
import * as cors from 'cors';
import log from './log';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json(JSON.stringify({ ok: 1 })).end();
});

app.listen(process.env.PORT || 5000, () => {
  log.info('app running');
});
