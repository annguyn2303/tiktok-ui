import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'

//Public routes
const publicRoutes = [
    { path: '/', componet: Home },
    { path: '/following', componet: Following },
    { path: '/profile', componet: Profile },
    { path: '/upload', componet: Upload, layout: null }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }