// /* eslint-disable @next/next/no-img-element */

export default function Work() {
  return (
    <div className="h-auto bg-gray-100  text-white rounded-[15px] flex gap-10 py-12 px-4">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/dolistify_images/d4.jpg" alt="wensite Image" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dolistify</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Dolistify is a minimal, user-friendly task manager that helps users organize, prioritize, and track daily activities. Built to demonstrate clean architecture, real-time UI updates, and strong TypeScript integration.
          </p>
          <a href="#projects" className="inline-block bg-gradient-to-r from-sky-400 to-emerald-600 text-white py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
            More Details
          </a>
        </div>
      </div>
    </div>
  );
}