import type { Props as ProjectProp } from "../components/projects/props";

export const PROJECTS: ProjectProp[] = [
  {
    title: "Trove",
    summary:
      "Modern, AI-powered conversational web application providing an interactive AI assistant platform with multi-modal support and advanced agent workflows.",
    bullets: [
      "Powered by leading AI models from Google Gemini and OpenAI with agent workflows built using LangChain and LangGraph.",
      "Includes secure NextAuth authentication, persistent chat threads, multi-modal file attachments, and integrated web search.",
      "Features a responsive dashboard and landing page designed for a seamless desktop and mobile experience."
    ],
    technologies: ["LangChain", "Next.js", "PostgreSQL", "TypeScript", "React 19", "Tailwind CSS", "Prisma"],
    image: "/projects/trove-landingpage.png",
    images: ["/projects/trove-landingpage.png", "/projects/trove-chat.png"],
    projectUrl: "https://trove-umber.vercel.app",
    githubUrl: "https://github.com/aliraza5490/trove",
    isFeatured: true,
    stats: [
      { icon: "🤖", text: "Multi-Modal AI Assistant" },
      { icon: "⚡", text: "Gemini & OpenAI Powered" },
      { icon: "💬", text: "Persistent Chat & Search" }
    ],
    badges: ["Featured", "AI", "Agentic Workflows"]
  },
  {
    title: "Gull",
    summary:
      "Webhook orchestration and forwarding platform built for developers to inspect, transform, route, and replay webhooks with confidence.",
    bullets: [
      "Provides real-time visibility into incoming events with full payload inspection and debugging tools.",
      "Ensures reliable event delivery and customizable routing to multiple downstream services.",
      "Built for high reliability in modern event-driven microservice architectures."
    ],
    technologies: ["FastAPI", "Python", "Next.js", "PostgreSQL"],
    image: "/projects/gull-landingpage.png",
    images: ["/projects/gull-landingpage.png", "/projects/gull-dashboard.png"],
    projectUrl: "https://gull-steel.vercel.app",
    githubUrl: "https://github.com/aliraza5490/gull",
    isFeatured: false,
    stats: [
      { icon: "⚡", text: "Real-Time Event Forwarding" },
      { icon: "🔄", text: "Webhook Replay & Debugging" },
      { icon: "🛡️", text: "Reliable Event Delivery" }
    ],
    badges: ["Developer Tool", "Event-Driven"]
  },
  {
    title: "House Prices EDA",
    summary:
      "Exploratory Data Analysis and predictive regression modeling pipeline for estimating residential home prices using feature engineering and XGBoost.",
    bullets: [
      "Performed comprehensive Exploratory Data Analysis (EDA) to uncover key feature correlations, distribution skewness, and missing data patterns.",
      "Applied target transformations and domain-specific feature engineering to optimize model convergence and predictive stability.",
      "Trained XGBoost and comparative machine learning regression models to accurately forecast property valuation metrics."
    ],
    technologies: ["Python", "XGBoost", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"],
    image: "/projects/hpeda-corr.png",
    images: ["/projects/hpeda-corr.png", "/projects/hpeda-xgboost.png"],
    githubUrl: "https://github.com/aliraza5490/HousePricesEDA",
    isFeatured: false,
    stats: [
      { icon: "📊", text: "Correlation & EDA" },
      { icon: "📈", text: "XGBoost Predictive Modeling" },
      { icon: "🧹", text: "Feature Engineering" }
    ],
    badges: ["Data Science", "Machine Learning", "EDA"]
  }
];


