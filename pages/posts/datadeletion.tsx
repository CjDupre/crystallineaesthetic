import Link from 'next/link';

export default function DataDeletion() {
    return (
        <>
            <nav className=" backdrop-blur-lg shadow-lg">
                <div className="container mx-auto">
                    <div className="sm:flex justify-around">
                        <a href="#" className="text-white text-3xl font-bold p-3">screencache</a>
                        <ul className="text-gray-400 sm:self-center text-xl border-t sm:border-none ">

                            <li className="sm:inline-block">
                                <Link href="/">
                                    <a className="p-3 hover:text-black">Home</a>
                                </Link>
                            </li>
                            <li className="sm:inline-block">
                                {' '}
                                <Link href="/posts/datadeletion">
                                    <a className="p-3 hover:text-black">Data Deletion</a>
                                </Link>
                            </li>
                            <li className="sm:inline-block">
                                {' '}
                                <Link href="/posts/privacypolicy">
                                    <a className="p-3 hover:text-black">Privacy Policy</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="title 
            container3 grid">
                <h1>Data DataDeletion</h1>
                <p>You can delete your comments any time by clicking the ellipsis ("...") button that appears when you hover over one of your own comments while logged in and select Delete. On mobile views this button is always displayed.

                    There is not currently a way for you to delete your own reactions (emojis) on comments made by others, or to delete your own social login from the site. Please contact{' '} meowterspace at gmail.com {' '} to get all records containing your information erased.

                    We do not collect the following without your permission:

                    Email - We ask for this specifically when you click Subscribe to receive regular updates about new content on the site
                    Your location or any other personal information. You can edit location and bio in your profile at any time but these fields are never set automatically.</p>
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
            </main>
            <style jsx>{`
        .container2 {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .container3 {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: linear-gradient(to right, #2A3694, #219386)
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid2 {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </>
    );
}   