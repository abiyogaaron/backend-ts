import user from './api/user';

const routes = (app: any) => {
  app.use('/api/users', user);
}

export default routes;
