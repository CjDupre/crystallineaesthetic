import Link from 'next/link';

export default function DataDeletion() {
    return (
        <>
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

            <h1>Data DataDeletion</h1>
            <p>You can delete your comments any time by clicking the ellipsis ("...") button that appears when you hover over one of your own comments while logged in and select Delete. On mobile views this button is always displayed.

                There is not currently a way for you to delete your own reactions (emojis) on comments made by others, or to delete your own social login from the site. Please contact{' '} 01binaryproductions at gmail.com {' '} to get all records containing your information erased.

                We do not collect the following without your permission:

                Email - We ask for this specifically when you click Subscribe to receive regular updates about new content on the site
                Your location or any other personal information. You can edit location and bio in your profile at any time but these fields are never set automatically.</p>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    );
}   