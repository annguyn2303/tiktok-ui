//Layout
import { HeaderOnly } from '~/components/Layout'

//Pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'


//Public routes
const publicRoutes = [
    { path: '/', componet: Home },
    { path: '/following', componet: Following },
    { path: '/profile', componet: Profile },
    { path: '/upload', componet: Upload, layout: HeaderOnly },
    { path: '/search', componet: Search, layout: null }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }