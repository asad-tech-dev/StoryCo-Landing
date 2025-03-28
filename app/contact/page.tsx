import Link from "next/link";
export default function Contact() {
  return (
    <section className="px-4 py-12 md:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h1
          className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] 
              bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent sm:text-4xl md:text-5xl lg:text-6xl"
          data-aos="fade-up"
        >
          Contact Us
        </h1>
      </div>
      <div className="mx-auto max-w-lg mt-10 space-y-6 sm:text-lg md:text-md text-indigo-200/65 text-center">
        <p>
          Have questions or need assistance? Get in touch with us! We're here to
          help and would love to hear from you.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <form className="mx-auto justify-start max-w-[700px]">
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="name"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-input w-full"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="email"
                >
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Your work email"
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="message"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  className="form-input w-full"
                  placeholder="Your message"
                  required
                  rows={8}
                ></textarea>
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
