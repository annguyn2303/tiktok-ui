import Header from '~/layouts/components/Header';

function DefaultLayout({ children }) {
    return (
        <div className="">
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
