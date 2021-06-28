import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
const Layout = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={description} />
            </Head>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

Layout.defaultProps = {
    title: 'TradeView',
    description: 'Trust in Tradeview',
}

export default Layout
