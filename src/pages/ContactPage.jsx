import { MdEmail, MdExpandMore, MdLocationOn, MdPhone } from "react-icons/md";

export const ContactPage = () => {
    const HandleSubmit = (event)=>{
        event.preventDefault();
    }
  return (
    <div className="flex flex-col min-h-screen [#6b7280]">
      <main className="flex-grow">
        <section className="py-12 sm:py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                Get in Touch
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-[#6b7280]">
                We’d love to hear from you. Let us know how we can help.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-[#ffffff] p-8 sm:p-10 rounded-xl shadow-soft">
                  <form onSubmit={HandleSubmit} className="space-y-6 bg-[#DDF4E7] px-5 py-10 rounded-2xl" method="POST">
                    <div>
                      <label className="block text-sm font-medium" htmlFor="name">
                        Name
                      </label>
                      <div className="mt-1">
                        <input
                          autoComplete="name"
                          className="form-input block w-full rounded-lg border outline-0 p-2 bg-[##f6f7f8] focus:ring-[#308ce8] focus:border-[#308ce8]"
                          id="name"
                          name="name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium" htmlFor="email">
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          autoComplete="email"
                          className="form-input block w-full rounded-lg border outline-0 p-2 bg-[##f6f7f8] focus:ring-[#308ce8] focus:border-[#308ce8]"
                          id="email"
                          name="email"
                          type="email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium" htmlFor="subject">
                        Subject
                      </label>
                      <div className="mt-1 ">
                        <input
                          className="form-input block w-full rounded-lg border outline-0 p-2 bg-[##f6f7f8] focus:ring-[#308ce8] focus:border-[#308ce8]"
                          id="subject"
                          name="subject"
                          type="text"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium" htmlFor="message">
                        Message
                      </label>
                      <div className="mt-1">
                        <textarea
                          className="form-textarea block w-full rounded-lg border outline-0 p-2 bg-[##f6f7f8] focus:ring-[#308ce8] focus:border-[#308ce8]"
                          id="message"
                          name="message"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full flex justify-center">
                      <button
                        className="w-[9rem] flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-soft text-base font-medium text-white bg-[#308ce8] hover:bg-[#308ce8]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#308ce8] transition-colors"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="space-y-12">
                <div className="bg-[#ffffff] p-8 rounded-xl shadow-soft">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="material-symbols-outlined text-[#308ce8] text-2xl">
                          <MdEmail />
                        </span>
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">Email</p>
                        <a
                          className="text-[#6b7280] hover:text-[#308ce8]"
                          href="mailto:support@journalai.com"
                        >
                          support@journalai.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="material-symbols-outlined text-[#308ce8] text-2xl">
                          <MdPhone/>
                        </span>
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">Phone</p>
                        <a className="text-[#6b7280] hover:text-[#308ce8]" href="tel:+1-555-123-4567">
                          +1-555-123-4567
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="material-symbols-outlined text-[#308ce8] text-2xl">
                          <MdLocationOn/>
                        </span>
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">Location</p>
                        <p className="text-[#6b7280]">San Francisco, CA</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#ffffff] p-8 rounded-xl shadow-soft">
                  <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer list-none">
                        <span className="font-medium">How do I get started?</span>
                        <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                          <MdExpandMore />
                        </span>
                      </summary>
                      <p className="mt-2 text-[#6b7280]">
                        Getting started is easy! Just sign up for an account, and you can begin
                        your AI-powered journaling journey immediately.
                      </p>
                    </details>
                    <hr className="border-[#d9d9d9]" />
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer list-none">
                        <span className="font-medium">What features are available?</span>
                        <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                          <MdExpandMore />
                        </span>
                      </summary>
                      <p className="mt-2 text-[#6b7280]">
                        We offer a range of features including sentiment analysis, goal tracking,
                        personalized prompts, and secure cloud backup.
                      </p>
                    </details>
                    <hr className="border-[#d9d9d9]" />
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer list-none">
                        <span className="font-medium">Is my data secure?</span>
                        <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                          <MdExpandMore />
                        </span>
                      </summary>
                      <p className="mt-2 text-[#6b7280]">
                        Yes, your privacy and security are our top priorities. All your journal
                        entries are encrypted and stored securely.
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[##f6f7f8] py-16 sm:py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Need more help?
            </h2>
            <p className="mt-4 text-lg text-[#6b7280]">
              Our support team is always here to assist you. Start a chat with us for a more immediate response.
            </p>
            <a
              className="mt-8 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#308ce8] hover:bg-[#308ce8]/90 transition-colors"
              href="#"
            >
              Start a chat with us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
