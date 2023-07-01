import Header from "~/components/Layout/components/Header";

function DefaultLayout({ children }) {
    return (
        <div className="m-7">
            <Header />
            <div className="container m-7">
                <div className="content m-7">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;