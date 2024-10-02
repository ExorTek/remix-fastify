import type { FastifyStaticOptions } from '@fastify/static';
import type { ServerOptions } from 'vite';
import type { FastifyPluginAsync } from 'fastify';

interface RemixFastifyOptions {
  buildDirectory?: string;
  clientDirectory?: string;
  serverDirectory?: string;
  serverBuildFile?: string;
  mode?: 'development' | 'production';
  fastifyStaticOptions?: FastifyStaticOptions;
  viteOptions?: ServerOptions;
}

declare const remixFastify: (options?: RemixFastifyOptions) => FastifyPluginAsync;

export default remixFastify;
export { remixFastify };
