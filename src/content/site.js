export const siteMeta = {
  brand: "Kausar Ahmed",
  title: "Kausar Ahmed — Researcher",
  description:
    "Personal academic page of Kausar Ahmed — Research Assistant at ULAB, focused on NLP, RAG, and information retrieval.",
  socialDescription:
    "Kausar Ahmed's academic homepage featuring publications, projects, awards, and research experience.",
  // Leave empty for automatic GitHub Pages URLs; set once for a custom domain.
  url: "kausarahmed.me",
  image: "images/Kausar.png",
  repositoryUrl: "https://github.com/kausar2nd/kausar2nd.github.io"
};

export const sections = [
  { id: "about", title: "About", nav: "About" },
  { id: "news", title: "News", nav: "News" },
  {
    id: "publications",
    title: "Publications",
    nav: "Publications",
    note: "† denotes equal contribution."
  },
  { id: "projects", title: "Projects", nav: "Projects" },
  { id: "experience", title: "Experience", nav: "Experience" },
  { id: "education", title: "Education", nav: "Education" },
  { id: "teaching", title: "Teaching", nav: "Teaching", enabled: false },
  { id: "talks", title: "Talks & Presentations", nav: "Talks" },
  { id: "awards", title: "Awards & Honors", nav: "Awards" },
  { id: "service", title: "Academic Service", nav: "Service" }
];

export const publicationGroups = [
  "Journal Articles",
  "Conference Proceedings",
  "Under Review",
  "In Preparation"
];
