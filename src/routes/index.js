import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Public routes
const publicRoutes = [
    { path: config.routes.home, componet: Home },
    { path: config.routes.following, componet: Following },
    { path: config.routes.profile, componet: Profile },
    { path: config.routes.upload, componet: Upload, layout: HeaderOnly },
    { path: config.routes.search, componet: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
