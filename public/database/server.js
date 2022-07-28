const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/database/schedules.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

router.render = (req, res) => {
  console.log(Array.isArray(res.locals.data), res.locals.data);
  if (req.method === 'GET' && Array.isArray(res.locals.data)) {
    console.log(req.originalUrl);
    const data = res.locals.data;
    const integratedByWeekday = data.reduce(
      (accum, cur) => {
        accum[cur.weekday].push(cur);
        return accum;
      },
      {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: [],
      },
    );

    res.jsonp({
      schedules: integratedByWeekday,
    });
  } else {
    res.jsonp({
      schedules: res.locals.data,
    });
  }
};

server.use(router);
server.listen(8000, () => {
  console.log('JSON Server is running');
});
