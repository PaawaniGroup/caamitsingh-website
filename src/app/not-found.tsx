import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container max-w-xl text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3 text-4xl">Page not found</h1>
        <span className="gold-rule mx-auto mt-5" aria-hidden="true" />
        <p className="mt-5">The page you are looking for does not exist or may have moved.</p>
        <Link href="/" className="btn btn-navy mt-8">Back to home</Link>
      </div>
    </section>
  );
}
