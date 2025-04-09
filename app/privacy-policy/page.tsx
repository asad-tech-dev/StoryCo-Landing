export default function Privacy() {
  return (
    <section className="px-4 py-12 md:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h1
          className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] 
            bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent sm:text-4xl md:text-5xl lg:text-6xl"
          data-aos="fade-up"
        >
          Privacy Policy
        </h1>
      </div>

      <div className="mx-auto max-w-4xl mt-10 space-y-6 sm:text-lg md:text-md text-indigo-200/65">
        <p>
          Welcome to <strong>StoryCo</strong>Your
          privacy is important to us, and we are committed to protecting any
          personal information you provide while using our website,{" "}
          <strong>story-co.com</strong> (the "Website").
        </p>

        <h2 className="text-xl font-semibold text-white md:text-2xl ">
          1. Information We Collect
        </h2>
        <p>
          When you use <strong>StoryCo</strong>, we may collect the following
          types of information:
        </p>
        <ul className="list-disc pl-6 text-indigo-200/65">
          <li>
            <strong>Personal Information</strong>: If you sign up, subscribe, or
            contact us, we may collect your name, email address, and other
            relevant details.
          </li>
          <li>
            <strong>Usage Data</strong>: Information about how you interact with
            the Website, such as pages visited, time spent, and browsing
            behavior.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies</strong>: We may use
            cookies and analytics tools to enhance your experience and improve
            our services.
          </li>
        </ul>

        <h2 className="text-xl font-semibold md:text-2xl text-white">
          2. How We Use Your Information
        </h2>
        <p>We use the collected data to:</p>
        <ul className="list-disc pl-6 text-indigo-200/65">
          <li>Provide and improve our services.</li>
          <li>
            Personalize your experience on <strong>StoryCo</strong>.
          </li>
          <li>Respond to inquiries and communicate with you.</li>
          <li>Monitor and analyze website performance.</li>
          <li>Protect against unauthorized access and ensure security.</li>
        </ul>

        <h2 className="text-xl font-semibold md:text-2xl text-white">
          3. How We Share Your Information
        </h2>
        <p>
          We do not sell, rent, or trade your personal data. However, we may
          share information:
        </p>
        <ul className="list-disc pl-6 text-indigo-200/65">
          <li>With service providers who help operate our Website.</li>
          <li>When required by law or to protect our rights.</li>
          <li>In case of a business transfer (e.g., merger or acquisition).</li>
        </ul>

        <h2 className="text-xl font-semibold md:text-2xl text-white">
          4. Your Privacy Choices
        </h2>
        <p>You can manage your privacy settings by:</p>
        <ul className="list-disc pl-6 text-indigo-200/65">
          <li>Disabling cookies in your browser.</li>
          <li>Unsubscribing from emails at any time.</li>
          <li>Contacting us to request data deletion or updates.</li>
        </ul>

        <h2 className="text-xl font-semibold md:text-2xl text-white">
          5. Data Security
        </h2>
        <p>
          We take appropriate security measures to protect your personal data
          from unauthorized access, loss, or misuse.
        </p>

        <h2 className="text-xl font-semibold  md:text-2xl text-white">
          6. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated "Last updated" date.
        </p>

        <h2 className="text-xl font-semibold md:text-2xl text-white">
          7. Contact Us
        </h2>
        <p>
          If you have any questions about this Privacy Policy, you can contact
          us at:
        </p>
        <p>
          📧 <strong>Email</strong>: Jarroyopont@gmail.com <br></br>🌍{" "}
          <strong>Website</strong>:{" "}
          <a
            href="https://story-co.com"
            className="text-indigo-500 hover:underline"
          >
            story-co.com
          </a>
        </p>
      </div>
    </section>
  );
}
