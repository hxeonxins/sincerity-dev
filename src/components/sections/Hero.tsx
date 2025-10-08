import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
          {/* Left Content */}
          <div>
            
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 tracking-tight text-[48px]">
              안녕하세요,
              <br />
              <span className="text-primary">심현진</span>입니다
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              열정적인 고등학생 웹 개발자
            </p>

            <p className="text-muted-foreground mb-8 max-w-xl leading-relaxed text-[19px]">
              React와 TypeScript를 활용하여 사용자 중심의 웹 애플리케이션을 만듭니다. 
              끊임없이 배우고 성장하며, 실용적인 솔루션을 제공합니다.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="group"
              >
                프로젝트 보기
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                size="lg"
              >
                연락하기
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
