

const loadRoute = cb => module => cb(null, module.default);

    


export default [
    {
        path: "/",
        getComponent(location, cb) {
            System.import('containers/Main').then(loadRoute(cb))
        }
    }

]




