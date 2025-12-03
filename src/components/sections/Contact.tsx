import {
  Mail,
  Github,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Button } from "../ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block text-sm text-primary mb-3 px-3 py-1 rounded-full bg-primary/10">
            Contact
          </div>
          <h2 className="text-4xl mb-4">연락하기</h2>
          <p className="text-muted-foreground text-lg">
            새로운 기회와 협업에 열려있습니다
          </p>
        </div>

        <div className="bg-gradient-to-br from-secondary/50 to-transparent border rounded-3xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:hyunjin.dev143@gmail.com"
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-card/50 transition-colors group"
            >
              <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Email
                </p>
                <p className="group-hover:text-primary transition-colors">
                  hyunjin.dev143@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 rounded-xl">
              <div className="p-3 bg-primary/10 rounded-xl">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Location
                </p>
                <p>Seoul, South Korea</p>
              </div>
            </div>

            <a
              href="https://github.com/hxeonxins"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-card/50 transition-colors group"
            >
              <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Github className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  GitHub
                </p>
                <p className="group-hover:text-primary transition-colors">
                  github.com/hxeonxins
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-card/50 transition-colors group"
            >
              <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Phone
                </p>
                <p className="group-hover:text-primary transition-colors">
                  010-5711-5574
                </p>
              </div>
            </a>
          </div>

          {/* <div className="border-t pt-8 text-center">
            <Button asChild size="lg" className="group">
              <a
                href="mailto:hyunjin.dev143@gmail.com"
                className="flex items-center gap-2"
              >
                <Send size={18} />
                이메일 보내기
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}