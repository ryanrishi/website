import Head from '../components/head';
import Layout from '../components/layout';

export default function Contact() {
  return (
    <Layout>
      <Head
        title="Contact"
      />
      <form
        className="w-3/4 mx-auto"
        action="https://formspree.io/f/mleppawq"
        method="POST"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-full-name"
            >
              Your Name
            </label>
            <input
              type="text"
              id="grid-full-name"
              placeholder="Jane Doe"
              name="name"
              className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className=" no-resize appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              required
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              type="submit"
              className="shadow bg-teal-400 hover:bg-teal-500 transition focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-4 rounded"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3" />
        </div>
      </form>
    </Layout>
  );
}
