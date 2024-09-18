import { PropsWithChildren } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
type PageProps = {
    id?: string;
    title?: string;
};

export const Page = ({ id = '', title, children}: PropsWithChildren<PageProps> ) => {
    return (
        <>
            <Header><Navigation active={id}/></Header>
            <main className="flex justify-center content" style={{ backgroundColor: 'rgb(246 234 217)'}}>
                <div className="w-full max-w-screen-lg px-4 lg:px-0 mb-14">
                    <h2 style={{fontFamily: 'fantasy'}} className="font-black text-2xl mt-4 lg:mt-6 mb-4">{title}</h2>
                    {children}
                </div>
            </main>
            <footer className="flex justify-center py-4 text-xs decoration-gray-700">The Maxey Family of Clonmel: 19th Century Fenians</footer>
        </>
    );
}

export default Page;