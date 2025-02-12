import { Router } from 'express';
import { BlogRoutes } from '../../modules/blog/blog.route';
import { ProjectRoutes } from '../../modules/project/project.route';
import { MessageRoutes } from '../../modules/message/message.route';

const router = Router()

const moduleRoutes = [
  {
    path: '/blog',
    route: BlogRoutes,
  },
  {
    path: '/project',
    route: ProjectRoutes,
  },
  {
    path: '/message',
    route: MessageRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
