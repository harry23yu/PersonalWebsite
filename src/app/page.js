import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Index = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/harry23yu", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/harry23yu/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:harry23yu@gmail.com", label: "Email" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-6">Harry Yu</h1>
          
          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </header>

        {/* Bio */}
        <section>
          <p>
            {"I am a junior at Oregon State University's Honors College studying CS."}
          </p>
          <br></br>
          <p>
            In the past, I am thankful to gained valuable experience by working as a SWE intern at two copanies: a startup called Abby Care and at a research institution at UCSD called Qualcomm Institute. My favorite classes at OSU includes Operating Systems I, Software Engineering II, and Analysis of Algorithms. If you would like to contact me, please email me at <a href="mailto:harry23yu@gmail.com">harry23yu@gmail.com</a>.
          </p>
          <br></br>
          <p>
            In my free time, my hobbies include watching the NBA, playing basketball, exercising, and traveling. When the craving hits, I love to go to In-N-Out Burger, Panera Bread, or Chipotle. I also enjoy playing <i>{"The World's Hardest Game"}</i> series, especially <i>WHG3</i> and <i>WHG4</i>. My current personal bests for <i>WHG3</i> and <i>WHG4</i> are <a href="https://www.youtube.com/watch?v=xddAxg-IM00" target="_blank" rel="noopener noreferrer">332</a> and <a href="https://www.youtube.com/watch?v=LcKlJjXf7gE" target="_blank" rel="noopener noreferrer">78</a> deaths, respectively. 
          </p>
        </section>

        <br></br>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Projects</h2>
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://www.podcasttranscriber.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors inline-flex items-center gap-1 text-lg font-medium"
              >
                Podcast Transcriber
                <ExternalLink className="h-4 w-4" />
              </a>

              <a 
                href="https://github.com/harry23yu/PodcastTranscriber"
                className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 relative top-[1px]" />
                <span>View code</span>
              </a>
            </div>

            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
              Created a podcast transcription tool that uses AI to transcribe Spotify episodes into clean text, with optional ad removal and filler cleanup.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://ndtech.itch.io/draggin-eggs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors inline-flex items-center gap-1 text-lg font-medium"
              >
                {"Draggin' Eggs"}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
              Developed an educational video game for teaching neurodiverse individuals coordination and social skills using Unity and C#.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://play.unity.com/en/games/4f178c8d-fbdf-4b82-ab06-06455809737f/the-journey-of-the-little-brown-fox" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors inline-flex items-center gap-1 text-lg font-medium"
              >
                The Journey of the Little Brown Fox
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
              Built and published a 2D platformer browser game with Unity and C#. Game includes 10 levels, animations, music, moving platforms, enemies, collectables, and a boss battle. Received more than 3,000 players within two months.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
