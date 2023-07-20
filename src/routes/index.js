import routesConfig from '~/config/routes';

//Layout
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//Public routes
const publicRoutes = [
    { path: routesConfig.home, componet: Home },
    { path: routesConfig.following, componet: Following },
    { path: routesConfig.profile, componet: Profile },
    { path: routesConfig.upload, componet: Upload, layout: HeaderOnly },
    { path: routesConfig.search, componet: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
