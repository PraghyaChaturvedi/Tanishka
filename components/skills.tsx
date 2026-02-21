export function Skills() {
  const computerSkills = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "CorelDRAW",
    "Canva",
    "Adobe Dimension",
  ]

  const analogSkills = ["Research", "Visualization", "Color Theory", "Communication", "Creativity", "Leadership", "Management"]

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center">Skills & Creative Disciplines</h2>
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Computer Skills Section */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6 text-center">Computer Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {computerSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card p-4 rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <p className="text-sm text-center">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Analog Skills Section */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6 text-center">Analog Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {analogSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card p-4 rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <p className="text-sm text-center">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
