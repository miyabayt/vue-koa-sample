import bodyParser from 'koa-bodyparser';

export default bodyParser({
  enableTypes: ['json', 'form', 'text'],
});
