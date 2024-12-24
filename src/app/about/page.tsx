export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">About Our Forum</h1>
        
        <section className="bg-background p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            We are building a vibrant, inclusive community where ideas are shared, knowledge is exchanged, 
            and connections are made. Our platform is designed to bring together passionate individuals 
            from diverse backgrounds to engage in meaningful discussions.
          </p>
        </section>

        <section className="bg-background p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>A platform for open and respectful dialogue</li>
            <li>Diverse categories spanning multiple interests and industries</li>
            <li>Tools to connect with like-minded individuals</li>
            <li>A supportive environment for learning and growth</li>
          </ul>
        </section>

        <section className="bg-background p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Respect</h3>
              <p className="text-sm text-muted-foreground">
                We foster a culture of mutual respect and understanding.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Inclusivity</h3>
              <p className="text-sm text-muted-foreground">
                We welcome diverse perspectives and backgrounds.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Growth</h3>
              <p className="text-sm text-muted-foreground">
                We believe in continuous learning and personal development.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-muted-foreground mb-6">
            Whether you're here to learn, share, or connect, there's a place for you in our forum.
          </p>
          <a 
            href="/signup" 
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Started
          </a>
        </section>
      </div>
    </div>
  );
}
