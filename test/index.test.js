const { remixFastify } = require('../index');
const fastify = require('fastify');

const buildOptions = {
  buildDirectory: '/test/test-app/build',
  serverDirectory: 'server',
  serverBuildFile: 'index.js',
  clientDirectory: 'client',
};

jest.mock('fastify', () => {
  return jest.fn(() => ({
    all: jest.fn(),
    register: jest.fn().mockResolvedValue(true),
    use: jest.fn(),
  }));
});

jest.mock('@fastify/static', () => jest.fn());
jest.mock('@fastify/middie', () => jest.fn());

describe('remix-fastify', () => {
  let app, viteServer;

  beforeEach(() => {
    app = fastify();
    jest.clearAllMocks();
  });
  afterEach(async () => {
    if (viteServer) {
      console.log('closing vite server');
      console.log(viteServer);
    }
  });

  it('should create a development server', async () => {
    const plugin = remixFastify({
      mode: 'development',
      ...buildOptions,
      viteOptions: {
        optimizeDeps: { include: ['@remix-run/node'] },
      },
    });
    await plugin(app);
    expect(app.all).toHaveBeenCalledWith('*', expect.any(Function));
  });
  it('should create a production server', async () => {
    const plugin = remixFastify({ mode: 'production', ...buildOptions });
    await plugin(app);

    expect(app.register).not.toHaveBeenCalledWith(require('@fastify/middie'));
    expect(app.register).toHaveBeenCalledWith(require('@fastify/static'), expect.any(Object));
    expect(app.all).toHaveBeenCalledWith('*', expect.any(Function));
    expect(app.use).not.toHaveBeenCalled();
  });

  it('should use default options when not provided', async () => {
    const plugin = remixFastify();
    await plugin(app);

    expect(app.register).not.toHaveBeenCalledWith(require('@fastify/middie'));
    expect(app.register).toHaveBeenCalledWith(require('@fastify/static'), expect.any(Object));
    expect(app.all).toHaveBeenCalledWith('*', expect.any(Function));
    expect(app.use).not.toHaveBeenCalled();
  });
});
