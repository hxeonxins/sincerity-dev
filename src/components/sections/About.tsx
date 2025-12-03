export function About() {
  return (
    <section id="about" className="py-16 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block text-sm text-primary mb-3 px-3 py-1 rounded-full bg-primary/10">
              About Me
            </div>
            <h2 className="text-4xl mb-6">
              벡엔드 개발에 대한
              <br />
              진심을 담습니다
            </h2>
          </div>

          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              2년 넘게 개발을 해오며 웹 개발에 대한 기초를
              다졌습니다. 단순히 작동하는 코드가 아닌, 사용자
              경험을 생각하는 개발자가 되고자 합니다.
            </p>
            <p>
              벡엔드 개발과 풀스택에 관심이 많으며, 실무
              프로젝트에서 배우고 성장할 기회를 찾고 있습니다.
            </p>
            {/* <p className="text-primary">
              → 미국에서 소프트웨어 엔지니어로 커리어를 쌓는 것이 목표입니다.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}