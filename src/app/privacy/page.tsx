import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* ── Hero Section ── */}
      <section className="bg-color-dark py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 font-serif text-3xl sm:text-4xl font-semibold text-white">
            Privacy Policy
          </h1>
          <p className="text-base text-color-body/80 max-w-xl mx-auto leading-relaxed">
            Last updated: May 2, 2026
          </p>
        </div>
      </section>

      {/* ── Content Section ── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl prose prose-sm sm:prose-base text-color-body leading-relaxed space-y-8">
          {/* Introduction */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              1. Introduction
            </h2>
            <p>
              Neurix Data Solutions (&ldquo;Neurix,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website{" "}
              <span className="text-color-primary">neurixdata.com</span> (the
              &ldquo;Site&rdquo;). Please read this policy carefully. By using
              the Site, you agree to the collection and use of information in
              accordance with this policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              2. Information We Collect
            </h2>
            <h3 className="mb-2 font-serif text-lg font-semibold text-color-dark">
              Personal Information
            </h3>
            <p>
              We may collect personally identifiable information that you
              voluntarily provide to us when you fill out our contact form,
              including your name, email address, subject, and message content.
            </p>
            <h3 className="mb-2 mt-4 font-serif text-lg font-semibold text-color-dark">
              Automatically Collected Information
            </h3>
            <p>
              When you visit our Site, certain information may be automatically
              collected, including your IP address, browser type, operating
              system, referring URLs, pages visited, and the dates and times of
              your visits. This information is collected through standard server
              logs and analytics tools.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>To respond to your inquiries submitted through our contact form.</li>
              <li>To improve, personalize, and expand our Site and services.</li>
              <li>To analyze Site usage and trends to better understand how visitors interact with our content.</li>
              <li>To communicate with you about our services, updates, and promotional offers (only if you have opted in).</li>
              <li>To detect, prevent, and address technical issues or security concerns.</li>
            </ul>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              4. Cookies and Tracking Technologies
            </h2>
            <p>
              Our Site may use cookies and similar tracking technologies to
              enhance your browsing experience. Cookies are small data files
              stored on your device. You can instruct your browser to refuse all
              cookies or to indicate when a cookie is being sent. However, if
              you do not accept cookies, some parts of our Site may not function
              properly.
            </p>
          </div>

          {/* Data Sharing */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              5. Data Sharing and Disclosure
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share information in the following circumstances:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <strong>Service Providers:</strong> We may share information with
                trusted third-party service providers who assist us in operating
                our Site and conducting our business, provided they agree to
                keep your information confidential.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your
                information if required to do so by law or in response to valid
                legal requests by public authorities.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, or sale of assets, your information may be
                transferred as part of that transaction.
              </li>
            </ul>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              6. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information from unauthorized
              access, alteration, disclosure, or destruction. However, no method
              of transmission over the Internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              7. Data Retention
            </h2>
            <p>
              We will retain your personal information only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use your information to the extent necessary to comply
              with our legal obligations, resolve disputes, and enforce our
              policies.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              8. Your Rights
            </h2>
            <p>
              Depending on your jurisdiction, you may have the following rights
              regarding your personal information:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>The right to access the personal data we hold about you.</li>
              <li>The right to request correction of inaccurate data.</li>
              <li>The right to request deletion of your data.</li>
              <li>The right to object to or restrict processing of your data.</li>
              <li>The right to data portability.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us using the
              information in Section 10.
            </p>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              9. Third-Party Links
            </h2>
            <p>
              Our Site may contain links to third-party websites. We are not
              responsible for the privacy practices or the content of those
              websites. We encourage you to review the privacy policies of any
              third-party sites you visit.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className="mt-2 list-none pl-0 space-y-1 text-color-body">
              <li>
                <strong className="text-color-dark">Email:</strong>{" "}
                <a
                  href="mailto:hello@neurixdata.com"
                  className="text-color-primary hover:underline"
                >
                  hello@neurixdata.com
                </a>
              </li>
              <li>
                <strong className="text-color-dark">Phone:</strong>{" "}
                <a
                  href="tel:+15551234567"
                  className="text-color-primary hover:underline"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <strong className="text-color-dark">Address:</strong> 451 Data
                Drive, Suite 200, San Francisco, CA 94105
              </li>
            </ul>
          </div>

          {/* Changes */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              11. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &ldquo;Last updated&rdquo; date. You
              are advised to review this Privacy Policy periodically for any
              changes.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-color-bg py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-2xl sm:text-3xl font-semibold text-color-dark">
            Have Questions?
          </h2>
          <p className="mb-8 text-base text-color-body max-w-xl mx-auto leading-relaxed">
            If you have any questions about our privacy practices, please
            don&apos;t hesitate to reach out.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-color-primary px-8 text-base font-medium text-white transition-colors hover:opacity-90"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-solid border-color-body px-8 text-base font-medium text-color-body transition-colors hover:border-color-primary hover:text-color-primary"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
