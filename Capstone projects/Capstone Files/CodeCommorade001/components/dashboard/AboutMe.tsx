// /* eslint-disable @next/next/no-img-element */

export default function AboutME() {
  return (
    <div className="h-auto bg-gray-100  text-white rounded-[15px] flex justify-center items-center py-12 px-4">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-600">
            Full‑Stack Web Developer
          </span>
          <br />
          Ibeanusi Uchechukwu David
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          I’m a dedicated full‑stack web developer with a strong specialty in JavaScript and TypeScript. I choose TypeScript for its reliable type safety and faster development cycles. My journey started with a simple to‑do list app built in Next.js—an experience that taught me monolithic architecture and database integration while empowering users to manage daily tasks.
        </p>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Today, I’m developing a fast, secure, and scalable custom e‑commerce API. I thrive on learning new technologies and collaborating on meaningful web development projects that make an impact.
        </p>
        <div className="pt-4">
          <a href="#projects" className="inline-block bg-gradient-to-r from-sky-400 to-emerald-600 text-white py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
            See My Work & Collaborate
          </a>
        </div>
      </div>
    </div>
);
}