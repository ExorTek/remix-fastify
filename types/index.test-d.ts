import { expectType } from 'tsd';
import { FastifyPluginAsync } from 'fastify';
import remixFastify from '..';

expectType<FastifyPluginAsync>(remixFastify());

expectType<FastifyPluginAsync>(
  remixFastify({
    buildDirectory: 'build',
    clientDirectory: 'client',
    serverDirectory: 'server',
    serverBuildFile: 'server-build',
    mode: 'production',
    fastifyStaticOptions: {
      root: 'public',
    },
    viteOptions: {
      hmr: false,
    },
  })
);
