/* eslint-disable @typescript-eslint/no-explicit-any */
import nprogress from 'nprogress';

const progress = (router: any) => {
    router.beforeEach(() => {
        nprogress.start();
        return true;
    });

    router.afterEach(() => {
        nprogress.done();
        return true;
    });
};

export default progress;
