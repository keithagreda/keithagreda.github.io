import '@styles/globals.css';
import Nav from '@components/Nav';
import About from '@app/about/page';
import Projects from './projects/page';

export const metadata ={
    title: "Keith's Portfolio",
    description: "Get to know Keith"
}

const RootLayout = ( {children}) => {
    return (
        <html lang='en'>
            <body>
                <main className='main'>
                </main>

                <main className='app'>
                    <Nav/>
                    {children}
                    <About/>
                    <Projects />
                </main>
            </body>
        </html>
    )
}

export default RootLayout