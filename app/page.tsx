import Hero from "./components/Hero";
import About from "./components/About";
import DotNav from "./components/DotNav";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ScrollSnap from "./components/ScrollSnap";

export default function Home() {
  return (
    <main>
      <ScrollSnap />
      <DotNav />
      <Hero />
      <About />
      <Projects />
      <Experience
        id="cxc"
        number="03"
        period="Jul 2023 — Dec 2024"
        company="CXC Global"
        role="Software Engineer III"
        location="Remote · Pakistan"
        dark={false}
        bullets={[
          "Developed eCrash, eCitation, and towing forms on the Ethos platform, supporting law enforcement workflows across multiple U.S. states.",
          "Implemented validation logic using the Ethos platform's validation engine to ensure accuracy and compliance in crash and citation workflows.",
          "Designed and generated crash and citation print reports using ActiveReportsJS, enabling standardized reporting across agencies.",
        ]}
      />
      <Experience
        id="dubizzle"
        number="04"
        period="Apr 2021 — Jul 2023"
        company="Dubizzle Labs"
        role="Software Engineer"
        location="Karachi, Pakistan"
        dark={true}
        bullets={[
          "Replaced a legacy image processing service with an Akamai CDN pipeline for on-the-fly transformations, migrating millions of images to Amazon S3 and improving upload experience for thousands of daily ad placements.",
          "Launched the Premium Ads product, enabling prioritized ad placement in search results and increasing platform revenue through boosted user engagement.",
          "Designed and implemented core APIs and data models for Dubizzle's referral program within a service-oriented architecture (SOA), profiling high-traffic endpoints with Django Silk to improve response times.",
          "Improved search relevance by mapping user queries to category taxonomy via lexical similarity, re-ranking results through Algolia.",
          "Participated in on-call rotations, monitoring system health via PagerDuty and resolving production alerts using Elastic APM and New Relic.",
          "Revamped web and mobile pages with responsive design using Django templates and React components, integrating Google Analytics A/B testing and Mapbox for user location visualization.",
          "Ensured reliability through automated testing with Pytest, Moto, and Jest, and participated in peer code reviews to maintain code quality.",
          "Developed cronjobs, test suites, and UI components in TypeScript and React for Propforce, supporting real estate staff across the Middle East and Asia.",
        ]}
      />
      <Experience
        id="lfd"
        number="05"
        period="Sep 2020 — Mar 2021"
        company="Love for Data"
        role="Junior Software Engineer"
        location="Karachi, Pakistan"
        dark={false}
        bullets={[
          "Built web crawlers using Scrapy, BeautifulSoup, Tabula, and PyPDF to extract wanted individuals data from law enforcement agency websites, PDFs, and APIs.",
          "Processed and standardized scraped data across multiple sources using Python, ensuring consistency and accuracy for a unified law enforcement database.",
          "Built REST APIs with Django to expose structured data for client-side consumption, with Python test cases to validate functionality.",
        ]}
      />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
