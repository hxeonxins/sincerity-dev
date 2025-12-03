import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "framer-motion";

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
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary">
                👋 안녕하세요
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              안녕하세요,
              <br />
              <span className="text-primary">심현진</span>입니다
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              언제나 진심을 다하는 현진 심, 심현진입니다.
            </p>

            <p className="text-muted-foreground mb-8 max-w-xl leading-relaxed text-[18px]">
              현재 벡엔드 개발을 공부하고 있습니다.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="group shadow-lg shadow-primary/20"
              >
                프로젝트 보기
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                size="lg"
              >
                연락하기
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all hover:scale-110"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all hover:scale-110"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-3 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all hover:scale-110"
              >
                <Mail size={22} />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl"></div>
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl"></div>
                <ImageWithFallback
                  src="profile"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-3xl border-4 border-background shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
