export function Learning() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center">Continuous Learning</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-3">Graphic Designing Institute</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Currently attending IMAGE Institute to expand my digital design capabilities and stay current with
              industry standards and emerging technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                Digital Design
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                Video Editing
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                Advanced Visual Communication
              </span>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-3">University Evaluations</h3>
            <p className="text-muted-foreground leading-relaxed">
              Participate in regular jury evaluations every semester at VNSGU, receiving constructive feedback from
              faculty and industry professionals. This continuous assessment process has fostered a strong improvement
              mindset and commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
