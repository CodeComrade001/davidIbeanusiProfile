
export default function MyExperience() {
  return (
    <div className="h-auto bg-gray-100 text-gray-900 rounded-[15px] flex justify-start items-start py-12 px-8">
      <div className="max-w-3xl space-y-6 text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-600">
            Full‑Stack Web Developer
          </span>
          <br />
          Ibeanusi Uchechukwu David
        </h1>
        <ol className="list-decimal list-inside space-y-4 text-lg sm:text-xl">
          <li>
            <strong>First Steps:</strong> Started with HTML5 & CSS3 to craft static pages, mastering semantic tags and responsive layouts.
          </li>
          <li>
            <strong>Interactive Era:</strong> Embraced JavaScript for dynamic behavior—event handling, DOM manipulation, and ES6 features.
          </li>
          <li>
            <strong>TypeScript Shift:</strong> Adopted TypeScript to improve code safety and maintainability with strong typing.
          </li>
          <li>
            <strong>React & Next.js:</strong> Built my first to‑do list app in Next.js—learning SSR, API routes, and database integration.
          </li>
          <li>
            <strong>Backend Foundations:</strong> Explored Node.js and Express.js to design RESTful APIs and manage data with PostgreSQL.
          </li>
          <li>
            <strong>Styling Speed:</strong> Leveraged Tailwind CSS for utility-first styling, creating consistent designs and custom themes.
          </li>
          <li>
            <strong>Deployment Skills:</strong> Deployed projects on Vercel and Render, refining CI/CD pipelines and environment setups.
          </li>
        </ol>
        <p className="text-lg sm:text-xl leading-relaxed">
          Each milestone has sharpened my skills, deepened my understanding of modern web practices, and fueled my passion for crafting exceptional user experiences.
        </p>
        <div className="pt-4">
          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-sky-400 to-emerald-600 text-white py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition-opacity"
          >
            Explore My Projects & Collaborate
          </a>
        </div>
      </div>
    </div>
  )
}
