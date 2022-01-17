import { compose, lazy, mount } from 'navi';

export default compose(
  mount({
    '*': lazy(() => import('./public')),
  })
);
