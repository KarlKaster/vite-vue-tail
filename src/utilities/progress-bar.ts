import nprogress from 'nprogress';

export default (router: any) => {
    router.beforeEach((_to: any, _from: any, next: any) => {
        nprogress.start();
        next();
    });

    router.afterEach((_to: any, _from: any, next: any) => {
        nprogress.done();
        next();
    });
};
