const Koa = require('koa');
const Router = require('koa-router');
const slow = require('koa-slow');
const path = require('path');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();

app.use(slow({
  delay: 2000
}));

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'GET');
  await next();
});

router.get('/', async (ctx) => {
  ctx.body = 'API server is running';
});

router.get('/api/news', async (ctx) => {
  ctx.body = [
    {
      title: 'Премьера блокбастера',
      text: 'Ожидаемая премьера нового фильма состоится в следующем месяце.'
    },
    {
      title: 'Кинофестиваль в Каннах',
      text: 'На кинофестивале представили новые работы известных режиссёров.'
    },
    {
      title: 'Рекордные кассовые сборы',
      text: 'Новый фильм установил рекорд по кассовым сборам за первые выходные.'
    }
  ];
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(serve(path.join(__dirname, '../public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});