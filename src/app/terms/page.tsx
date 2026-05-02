import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service — Neurix Data Solutions",
  description:
    "Neurix Data Solutions terms of service — review the terms and conditions governing your use of our website and data automation services.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* ── Hero Section ── */}
      <section className="bg-color-dark py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Accent Bar */}
          <div className="mx-auto mb-6 h-2 w-[130px] bg-color-accent" />
          <h1 className="mb-4 font-serif text-3xl sm:text-4xl font-semibold text-white">
            Terms of Service
          </h1>
          <p className="text-base text-color-body/80 max-w-xl mx-auto leading-relaxed">
            Last updated: March 15, 2025
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <Breadcrumbs pageName="Terms" />

      {/* ── Content Section ── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl text-color-body leading-relaxed space-y-8">
          {/* Introduction */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              1. Introduction
            </h2>
            <p>
              Welcome to Neurix Data Solutions (&ldquo;Neurix,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;). These Terms of Service
              (&ldquo;Terms&rdquo;) govern your access to and use of our website{" "}
              <span className="text-color-primary">neurixdata.com</span> (the
              &ldquo;Site&rdquo;) and any services provided through the Site. By
              accessing or using the Site, you agree to be bound by these Terms.
              If you do not agree to these Terms, please do not use the Site.
            </p>
          </div>

          {/* Use of the Site */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              2. Use of the Site
            </h2>
            <h3 className="mb-2 font-serif text-lg font-semibold text-color-dark">
              Eligibility
            </h3>
            <p>
              You must be at least 18 years old to use this Site. By using the
              Site, you represent and warrant that you meet this age requirement.
            </p>
            <h3 className="mb-2 mt-4 font-serif text-lg font-semibold text-color-dark">
              Acceptable Use
            </h3>
            <p>
              You agree to use the Site only for lawful purposes and in accordance
              with these Terms. You agree not to:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Violate any applicable federal, state, local, or international law or regulation.</li>
              <li>Transmit any material that is defamatory, obscene, fraudulent, or otherwise objectionable.</li>
              <li>Impersonate or attempt to impersonate Neurix, a Neurix employee, or any other person or entity.</li>
              <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Site.</li>
              <li>Introduce any viruses, trojan horses, worms, or other malicious or harmful material.</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              3. Intellectual Property
            </h2>
            <p>
              The Site and its entire contents, features, and functionality
              (including but not limited to all information, software, text,
              displays, images, video, and audio, and the design, selection, and
              arrangement thereof) are owned by Neurix, its licensors, or other
              providers of such material and are protected by United States and
              international copyright, trademark, patent, trade secret, and other
              intellectual property or proprietary rights laws.
            </p>
            <p className="mt-3">
              You may not reproduce, distribute, modify, create derivative works
              of, publicly display, publicly perform, republish, download, store,
              or transmit any of the material on our Site without our prior
              written consent.
            </p>
          </div>

          {/* User Content */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              4. User Content
            </h2>
            <p>
              When you submit information through our contact form or otherwise
              provide content to us (&ldquo;User Content&rdquo;), you grant Neurix
              a non-exclusive, royalty-free, perpetual, and irrevocable right to
              use, reproduce, modify, and distribute such User Content in
              connection with operating and providing our services.
            </p>
            <p className="mt-3">
              You represent and warrant that your User Content does not violate
              any third party&apos;s intellectual property rights and that you
              have all necessary rights to grant us the license described above.
            </p>
          </div>

          {/* Disclaimer */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              5. Disclaimer of Warranties
            </h2>
            <p>
              THE SITE AND ALL INFORMATION, CONTENT, MATERIALS, AND SERVICES
              INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SITE ARE
              PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
              BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR
              IMPLIED. NEURIX DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
              INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              6. Limitation of Liability
            </h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL NEURIX,
              ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
              INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, USE, GOODWILL,
              OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Your access to or use of, or inability to access or use, the Site.</li>
              <li>Any conduct or content of any third party on the Site.</li>
              <li>Any content obtained from the Site.</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
            </ul>
          </div>

          {/* Indemnification */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              7. Indemnification
            </h2>
            <p>
              You agree to defend, indemnify, and hold harmless Neurix, its
              affiliates, licensors, and service providers, and its and their
              respective officers, directors, employees, contractors, agents,
              licensors, suppliers, successors, and assigns from and against any
              claims, liabilities, damages, judgments, awards, losses, costs,
              expenses, or fees (including reasonable attorneys&apos; fees)
              arising out of or relating to your violation of these Terms or
              your use of the Site.
            </p>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              8. Third-Party Links
            </h2>
            <p>
              Our Site may contain links to third-party websites or services
              that are not owned or controlled by Neurix. We have no control
              over, and assume no responsibility for, the content, privacy
              policies, or practices of any third-party websites or services.
              You acknowledge and agree that Neurix shall not be responsible or
              liable for any damage or loss caused by or in connection with the
              use of any such third-party content, goods, or services.
            </p>
          </div>

          {/* Termination */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              9. Termination
            </h2>
            <p>
              We may terminate or suspend your access to the Site immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach these Terms. Upon
              termination, your right to use the Site will cease immediately.
              All provisions of these Terms which by their nature should survive
              termination shall survive, including without limitation ownership
              provisions, warranty disclaimers, indemnity, and limitations of
              liability.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              10. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of California, without regard to its
              conflict of law provisions. Any legal action or proceeding arising
              out of or relating to these Terms shall be brought exclusively in
              the federal or state courts located in San Francisco County,
              California.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              11. Changes to These Terms
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will make
              reasonable efforts to provide notice on our Site. By continuing to
              access or use our Site after those revisions become effective, you
              agree to be bound by the revised Terms. If you do not agree to the
              new Terms, please stop using the Site.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-3 font-serif text-2xl font-semibold text-color-dark">
              12. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us:
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
                <span className="ml-1.5 inline-block rounded border border-amber-300 bg-amber-50 px-1.5 py-px text-[10px] font-medium uppercase text-amber-700">
                  Placeholder
                </span>
              </li>
              <li>
                <strong className="text-color-dark">Address:</strong> 451 Data
                Drive, Suite 200, San Francisco, CA 94105
                <span className="ml-1.5 inline-block rounded border border-amber-300 bg-amber-50 px-1.5 py-px text-[10px] font-medium uppercase text-amber-700">
                  Placeholder
                </span>
              </li>
            </ul>
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
            If you have any questions about our Terms of Service, please
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
