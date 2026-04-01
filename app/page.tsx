import Hero from "./components/Hero";
import About from "./components/About";
import DotNav from "./components/DotNav";
import Experience from "./components/Experience";
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
      <Experience
        id="cxc"
        number="02"
        period="Jul 2023 — Dec 2024"
        company="CXC Global"
        role="Software Engineer III"
        location="Remote · Pakistan"
        dark={false}
        bullets={[
          "Developed eCrash, eCitation, and towing forms on the Ethos platform for law enforcement agencies across multiple U.S. states.",
          "Implemented robust validation logic using the Ethos platform's validation engine to ensure accuracy and compliance in crash and citation workflows.",
          "Designed and generated crash and citation print reports using GrapeCity ActiveReportsJS.",
          "Led onboarding for reporting workflows by delivering demos and hands-on guidance to new hires adopting the ActiveReports toolchain.",
        ]}
      />
      <Experience
        id="dubizzle"
        number="03"
        period="Apr 2021 — Jul 2023"
        company="Dubizzle Labs"
        role="Software Engineer"
        location="Karachi, Pakistan"
        dark={true}
        bullets={[
          "Replaced legacy image service with a new pipeline using Akamai CDN & Amazon S3, migrating millions of images from the legacy bucket.",
          "Built core APIs for Dubizzle's referral program using Python 3 and Django REST Framework.",
          "Improved search relevance with Levenshtein fuzzy matching to map user queries to taxonomy, re-ranking Algolia results.",
          "Launched Premium Ads product, boosting ad visibility and increasing platform revenue through improved user engagement.",
          "Maintained reliability via Pytest + Moto; on-call rotations with PagerDuty, Elastic APM, and New Relic.",
        ]}
      />
      <Experience
        id="lfd"
        number="04"
        period="Sep 2020 — Mar 2021"
        company="Love for Data"
        role="Junior Software Engineer"
        location="Karachi, Pakistan"
        dark={false}
        bullets={[
          "Built web crawlers using Scrapy, BeautifulSoup, Tabula, and PyPDF to extract data from websites, PDFs, and APIs.",
          "Processed and cleaned scraped data with Python, ensuring consistency and accuracy for downstream analysis.",
          "Built REST APIs with Django to expose structured data for client-side use, with full Python test coverage.",
        ]}
      />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
