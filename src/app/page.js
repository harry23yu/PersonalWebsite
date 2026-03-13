/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-8 py-16">

        {/* Header */}
        <header className="flex justify-between items-start mb-10">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">Harry Yu</h1>
            <p className="font-mono text-sm text-gray-500 mb-1">
              CS Student &amp; Aspiring Software Engineer
            </p>
            <p className="font-mono text-sm text-gray-400 flex items-center gap-1 mb-4">
              <MapPin className="h-3 w-3" />
              Corvallis, Oregon
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:harry23yu@gmail.com"
                aria-label="Email"
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
<a
                href="https://www.linkedin.com/in/harry23yu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/harry23yu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <Image
            src="/LinkedIn.png"
            alt="Harry Yu"
            width={96}
            height={96}
            className="rounded-lg object-cover ml-8"
          />
        </header>

        {/* About */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">About</h2>
          <p className="font-mono text-sm text-gray-600 leading-relaxed mb-3">
            I am a junior at Oregon State University's Honors College studying Computer Science.
            Two of my most formative engineering experiences were at Abby Care, a healthcare startup,
            and the Qualcomm Institute. At Abby Care, I built full-stack features across internal
            tooling and user-facing products, and developed a Python system integrating Zoom and
            Google Drive APIs to automatically fetch, upload, and delete recordings, streamlining
            the company's video workflow. At the Qualcomm Institute, I served as lead programmer on
            a team that built Draggin' Eggs, an educational video game designed to help neurodiverse
            individuals develop coordination and social skills.
          </p>
          <p className="font-mono text-sm text-gray-600 leading-relaxed">
            In my free time, my hobbies include watching the NBA (go LeBron!), exercising,
            traveling, and learning new AI tools. I also enjoy playing <em>The World's Hardest Game</em> series
            — my personal bests for WHG3 and WHG4 are{" "}
            <a
              href="https://www.youtube.com/watch?v=xddAxg-IM00"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              332
            </a>{" "}
            and{" "}
            <a
              href="https://www.youtube.com/watch?v=LcKlJjXf7gE"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              78
            </a>{" "}
            deaths, respectively.
          </p>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Education</h2>
          <div>
            <div className="flex justify-between items-baseline">
              <span className="font-bold">Oregon State University</span>
              <span className="font-mono text-sm text-gray-400">Expected Jun 2027</span>
            </div>
            <p className="font-mono text-sm text-gray-500">
              Bachelor of Science in Computer Science (Honors College) &middot; GPA: 3.9
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Work Experience</h2>
          <div className="space-y-5">

            <div>
              <div className="flex justify-between items-baseline">
                <span className="font-bold">License Journey</span>
                <span className="font-mono text-sm text-gray-400">Summer–Fall 2025</span>
              </div>
              <p className="font-mono text-sm text-gray-500">Software Engineering Intern</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <span className="font-bold">Abby Care</span>
                <span className="font-mono text-sm text-gray-400">Fall 2024–Spring 2025</span>
              </div>
              <p className="font-mono text-sm text-gray-500">Software Engineering Intern</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <span className="font-bold">Qualcomm Institute</span>
                <span className="font-mono text-sm text-gray-400">Summer 2024</span>
              </div>
              <p className="font-mono text-sm text-gray-500">Software Engineering Intern</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <span className="font-bold">Turmerik</span>
                <span className="font-mono text-sm text-gray-400">Spring 2024</span>
              </div>
              <p className="font-mono text-sm text-gray-500">Data Engineering Intern</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <span className="font-bold">URSA Engage, Oregon State University</span>
                <span className="font-mono text-sm text-gray-400">Winter–Fall 2024</span>
              </div>
              <p className="font-mono text-sm text-gray-500">Computer Science Researcher</p>
            </div>

          </div>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Projects</h2>
          <div className="space-y-5">

            <div>
              <div className="flex justify-between items-baseline">
                <a
                  href="https://autikit.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:underline"
                >
                  AutiKit
                </a>
                <span className="font-mono text-sm text-gray-400">Winter 2026</span>
              </div>
              <p className="font-mono text-sm text-gray-400 mb-1">
                <a href="https://github.com/harry23yu/autikit" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
              </p>
              <p className="font-mono text-sm text-gray-600">
                Placed 6th out of 125 hackers at Anthropic's Claude Code Portland hackathon by building AutiKit, an interactive coach for autistic individuals to manage sensory, communication, and task-initiation challenges.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <a
                  href="https://github.com/harry23yu/ai_trip_itinerary_generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:underline"
                >
                  AI Trip Itinerary Generator
                </a>
                <span className="font-mono text-sm text-gray-400">Winter 2026</span>
              </div>
              <p className="font-mono text-sm text-gray-400 mb-1">
                <a href="https://github.com/harry23yu/ai_trip_itinerary_generator" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
              </p>
              <p className="font-mono text-sm text-gray-600">
                Designed and built a FastAPI backend that converts user constraints into validated multi-day itineraries using LLM-generated JSON and schema enforcement. Implemented automated PDF export with timestamped filenames and a constraint-first question system to reduce hallucinations.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <a
                  href="https://www.podcasttranscriber.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:underline"
                >
                  Podcast Transcriber
                </a>
                <span className="font-mono text-sm text-gray-400">Summer 2025</span>
              </div>
              <p className="font-mono text-sm text-gray-400 mb-1">
                <a href="https://github.com/harry23yu/PodcastTranscriber" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
              </p>
              <p className="font-mono text-sm text-gray-600">
                Built a podcast transcription tool that uses AssemblyAI and OpenAI's GPT-4o-mini model to transcribe Spotify episodes into clean text with optional ad removal. The tool also lets users download transcriptions as PDFs with speaker labels and optional timestamps.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <a
                  href="https://ndtech.itch.io/draggin-eggs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:underline"
                >
                  Draggin' Eggs
                </a>
                <span className="font-mono text-sm text-gray-400">Summer 2024</span>
              </div>
              <p className="font-mono text-sm text-gray-600">
                Using Unity and C#, developed an educational video game at the Qualcomm Institute designed to help neurodiverse individuals build coordination and social skills.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <a
                  href="https://play.unity.com/en/games/4f178c8d-fbdf-4b82-ab06-06455809737f/the-journey-of-the-little-brown-fox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:underline"
                >
                  The Journey of the Little Brown Fox
                </a>
                <span className="font-mono text-sm text-gray-400">Summer–Fall 2021</span>
              </div>
              <p className="font-mono text-sm text-gray-600">
                Built and published a 2D platformer browser game with Unity and C#. Game includes 10 levels, animations, music, moving platforms, enemies, collectables, and a boss battle. Received more than 3,000 players within two months.
              </p>
            </div>

          </div>
        </section>


      </div>
    </div>
  );
};

export default Index;
