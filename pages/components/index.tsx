import type { NextPage } from 'next';

const NavComponent: NextPage = () => {
    return (
        <nav className="bg-purple-700 shadow-lg">
            <div className="container mx-auto">
                <div className="sm:flex justify-around">
                    <a href="#" className="text-white text-3xl font-bold p-3">screencache</a>
                    <ul className="text-gray-400 sm:self-center text-xl border-t sm:border-none ">

                        <li className="sm:inline-block">
                            <Link href="/">
                                <a className="p-3 hover:text-white">Home</a>
                            </Link>
                        </li>
                        <li className="sm:inline-block">
                            {' '}
                            <Link href="/posts/datadeletion">
                                <a className="p-3 hover:text-white">Data Deletion</a>
                            </Link>
                        </li>
                        <li className="sm:inline-block">
                            {' '}
                            <Link href="/posts/privacypolicy">
                                <a className="p-3 hover:text-white">Privacy Policy</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavComponent;
