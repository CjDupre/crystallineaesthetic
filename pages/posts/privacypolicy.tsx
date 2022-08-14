import Link from 'next/link';

export default function DataDeletion() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p>
        Hi there! On this site we collect only the minimum information used to
        display social content. User ID from your social provider like Facebook
        (a number that doesn't contain your name or email) is associated with
        your account on this site when you log in User Name that appears next to
        your comments and reactions on this site is copied from the name you use
        on your social account Avatar URL is used to display your avatar next to
        your comments on this site. This is recorded only when you post at least
        one comment
      </p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
