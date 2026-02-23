export function Experience() {
  const experiences = [
    {
      title: "Pencil Lead Carving Artist",
      type: "Independent Business",
      period: "2020 - Present",
      description:
        "Built and managed a small creative business specializing in intricate pencil lead carving artwork. Independently acquired and served clients, receiving recognition and appreciation for unique craftsmanship.",
    },
    {
      title: "One Month Internship",
      type: "Provyz Co-working",
      period: "May 2025",
      description:
        "Completed a one-month internship at Provyz Co-working space, gaining professional experience in collaborative work environments.",
    },
    {
      title: "Jewellery Photoshoot Assistant",
      type: "Freelance",
      period: "2023 - Present",
      description:
        "Assisted in jewellery photoshoots with responsibilities including model preparation and coordination, gaining hands-on experience in professional photography production.",
    },
    {
      title: "Digital Work Management",
      type: "IMAGE Institute",
      period: "June 2024 - 1 Month",
      description: "Managed digital work and projects at IMAGE Institute during a focused one-month period.",
    },
    {
      title: "Handmade Packaging Designer",
      type: "Freelance",
      period: "2022 - Present",
      description:
        "Created custom handmade packaging designs for various clients, including notable projects like the Kailash 56 Bhog box, blending traditional aesthetics with modern design principles.",
    },
  ]

  return (
    <section id="experience" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <div>
                  <h3 className="text-base md:text-xl font-semibold">{exp.title}</h3>
                  <p className="text-sm md:text-base text-accent">{exp.type}</p>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
