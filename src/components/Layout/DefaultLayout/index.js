import Header from "./Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
    return (
        <div className="m-7">
            <Header />
            <div className="container m-7">
                <Sidebar />
                <div className="content m-7">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;