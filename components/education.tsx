export function Education() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center">Education</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-l-2 border-accent pl-6 space-y-2">
            <p className="text-sm text-muted-foreground">2023 - Present</p>
            <h3 className="text-2xl font-serif font-semibold">Bachelor of Fine Arts</h3>
            <p className="text-muted-foreground">Veer Narmad South Gujarat University (VNSGU)</p>
            <p className="text-muted-foreground">Currently in 3rd Year</p>
          </div>
          <div className="border-l-2 border-accent pl-6 space-y-2">
            <p className="text-sm text-muted-foreground">2024 - Present</p>
            <h3 className="text-2xl font-serif font-semibold">Diploma in Graphic Design</h3>
            <p className="text-muted-foreground">IMAGE Institute, Surat</p>
          </div>
          <div className="border-l-2 border-accent pl-6 space-y-2">
            <p className="text-sm text-muted-foreground">2022 - 2023</p>
            <h3 className="text-2xl font-serif font-semibold">Higher Secondary (12th Grade)</h3>
            <p className="text-muted-foreground">Agarwal Vidya Vihar School, Surat • CBSE Board</p>
            <p className="font-medium text-accent">90.4%</p>
          </div>
          <div className="border-l-2 border-accent pl-6 space-y-2">
            <p className="text-sm text-muted-foreground">2021</p>
            <h3 className="text-2xl font-serif font-semibold">Secondary (10th Grade)</h3>
            <p className="text-muted-foreground">Agarwal Vidya Vihar School, Surat • CBSE Board</p>
            <p className="font-medium text-accent">83%</p>
          </div>
        </div>
      </div>
    </section>
  )
}