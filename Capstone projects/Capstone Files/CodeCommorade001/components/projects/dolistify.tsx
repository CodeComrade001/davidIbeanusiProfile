/* eslint-disable @next/next/no-img-element */
import Link from "next/link";


export default function DolistifyOverview() {
  return (
    <Link href="dolistify project" passHref>
      <section  className="bg-white rounded-xl shadow-md p-6  w-[100%]  space-y-8">
        {/* Header */}
        <header className="space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Dolistify
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Dolistify is a minimal, user-friendly task manager that helps users organize,
            prioritize, and track daily activities in real time.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://dolistify.vercel.com"
              className="inline-block bg-gradient-to-r from-sky-400 to-emerald-600 text-white py-2 px-4 rounded-lg shadow hover:opacity-90 transition-opacity"
              target="_blank" rel="noopener noreferrer"
            >Live Site</a>
            <a
              href="https://github.com/CodeComrade001/dolistify-nextjs-boilerplate.git"
              className="inline-block bg-gradient-to-r from-sky-400 to-emerald-600 text-white py-2 px-4 rounded-lg shadow hover:opacity-90 transition-opacity"
              target="_blank" rel="noopener noreferrer"
            >GitHub Repo</a>
          </div>
        </header>

        {/* Gallery (show up to 4) */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 overflow-hidden rounded-15 rounded-md">
            {['/dolistify_images/d1.jpg', '/dolistify_images/d2.jpg', '/dolistify_images/d3.jpg', '/dolistify_images/d4.jpg', '/dolistify_images/d5.jpg'].slice(0, 4).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Dolistify screenshot ${idx + 1}`}
                className="object-cover h-32 w-full rounded-15"
              />
            ))}
          </div>
          {/* Optional indicator for more images */}
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
            +{5 - 4} more
          </div>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Tools & Technologies */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">Tools & Technologies</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Next.js</li>
              <li>React & TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Supabase</li>
              <li>PostgreSQL</li>
              <li>Vercel (deployment)</li>
              <li>Visual Studio Code</li>
              <li>npm, yarn</li>
            </ul>
          </div>
          {/* Feature Highlights */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">Key Features</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Create, edit, and delete tasks in real time</li>
              <li>Restore deleted task from recycle bin in 30days interval </li>
              <li>Repeated and time bound task implementation </li>
              <li>Responsive design for mobile & desktop</li>
              <li>Persistent data with PostgreSQL</li>
              <li>Dark/light mode toggle</li>
            </ul>
          </div>
        </div>

        {/* Issues section */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-red-600">Known Issues</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Bulk update occasionally lags under heavy load</li>
            <li>Drag handle overlaps input on very small screens</li>
            <li>optimizing layout to fit on small screen </li>
            <li>Offline sync not yet implemented</li>
          </ul>
        </div>

        {/* Call to action */}
        <footer className="text-center">
          <a
            href="https://dolistify.vercel.com"
            className="inline-block bg-gradient-to-r from-sky-400 to-emerald-600 text-white py-3 px-6 rounded-lg shadow hover:opacity-90 transition-opacity"
            target="_blank" rel="noopener noreferrer"
          >Try Dolistify Now</a>
        </footer>

      </section>
    </Link>
  )
}
