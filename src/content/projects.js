export const projects = [
  {
    title: "LawB: An Interpretable RAG-Based Legal Assistant for Bangladesh",
    status: "Active",
    summary:
      "A RAG-based legal assistant for the Bangladeshi legal corpus with two-stage retrieval (BGE-M3 + cross-encoder reranking) and local LLMs via Ollama.",
    tags: ["RAG", "NLP", "Legal Tech", "Python"],
    links: []
  },
  {
    title: "Bilingual Multimodal RAG Learning Assistant for NCTB Curriculum",
    status: "Active",
    summary:
      "A Bengali/English conversational RAG pipeline with LLM-based query rewriting, hybrid retrieval (BM25 + dense, rank fusion), and ColPali page-image retrieval over textbook scans.",
    tags: ["RAG", "Multimodal", "Education", "Bengali NLP"],
    links: []
  },
  {
    title: "EXIREN — AIoT Fire Detection System",
    status: "Completed",
    summary:
      "An AIoT fire detection system integrating YOLOv11 with IoT sensor validation to reduce false alarm rates.",
    tags: ["Computer Vision", "IoT", "YOLOv11", "Flask"],
    links: [
      { label: "Code", href: "https://github.com/kausar2nd/EXIREN" }
    ]
  },
  {
    title: "ShunnoWaste: A Recycling Ecosystem",
    status: "Completed",
    summary:
      "A full-stack recycling platform with role-based dashboards and inventory management built with Flask and MySQL.",
    tags: ["Full Stack", "Flask", "MySQL", "Sustainability"],
    links: [
      { label: "Code", href: "https://github.com/kausar2nd/ShunnoWaste" }
    ]
  },
  {
    title: "ScheduLumos — CPU Scheduling Algorithms",
    status: "Completed",
    summary:
      "A web-based CPU scheduling algorithm visualizer with Gantt charts and performance metrics.",
    tags: ["Visualization", "Operating Systems", "Flask"],
    links: [
      { label: "Code", href: "https://github.com/kausar2nd/ScheduLumos" },
      { label: "Live", href: "https://schedulumos.vercel.app/" }
    ]
  }
];
