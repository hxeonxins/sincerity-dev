import { ExternalLink, Github } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "물듬(MULDUM)",
      description:
        "Make U Learn, Document Ur Moments. 교내 전공동아리 통합 관리 서비스",
      image:
        "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzU5NzI3NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["JAVA", "SpringBoot", "PostgreSQL"],
      github: "https://github.com/arabssm/muldum-back-v2",
      demo: "https://v2.muldum.com",
    },
    {
      title: "스픽첵(SpeakCheck)",
      description: "AI 발표 연습 서비스",
      image:
        "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU5NjY5MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Java", "SpringBoot", "PostgreSQL"],
      github: "https://github.com/checking-out/SpeakCheck-Back",
      project:
        "https://www.notion.so/SpeakCheck-22ff819a3da880fba1c4cb07c881f6f0",
    },
    {
      title: "[예정] 학급회 서비스",
      description: "학급 회의 서비스",
      image:
        "https://images.unsplash.com/photo-1748609339084-ea43ec1b8fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1OTc1OTE0OHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "TypeScript", "Recharts"],
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-6 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block text-sm text-primary mb-3 px-3 py-1 rounded-full bg-primary/10">
            Projects
          </div>
          <h2 className="text-4xl mb-4">프로젝트</h2>
          <p className="text-muted-foreground text-lg">
            실제로 만들어본 것들을 소개합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-5">
                <h3 className="text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}