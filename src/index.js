export const project = {
  slug: "developer-portfolio",
  title: "Developer Portfolio",
  description: "Portfolio website for projects, experience, and skills.",
  features: [
  "Home page",
  "Projects page",
  "Experience timeline",
  "Skill matrix",
  "Contact section",
  "Responsive layout"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
