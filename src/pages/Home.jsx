import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaGitAlt } from "react-icons/fa";
import { SiCss3, SiExpress, SiJavascript, SiMysql, SiNodedotjs, SiReact } from "react-icons/si";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/portfolio/ProjectCard.jsx";
import "../styles/home.css";

const GREETING_TEXT = "Hi, my name is";
const FULL_NAME_TEXT = "Natnael Abebe";
const FIRST_NAME_TEXT = "Natnael ";
const DEVELOPER_SNIPPET = `const developer = {
  name: "Natnael Abebe",
  role: "FullStack Developer",
  skills: ["React", "Node", "Express", "MySql", "CSS"],
  passion: "Building great UIX",
  available: true
};`;

const Home = () => {
  const featuredProjects = projects.slice(0, 5);
  const [typedGreeting, setTypedGreeting] = useState("");
  const [typedName, setTypedName] = useState("");
  const [typedSnippet, setTypedSnippet] = useState("");
  const [activeTypingTarget, setActiveTypingTarget] = useState("greeting");
  const [isFeaturedVisible, setIsFeaturedVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const featuredRef = useRef(null);
  const ctaRef = useRef(null);
  const featuredCarouselRef = useRef(null);
  const featuredHoverSpeedRef = useRef(null);
  const featuredTargetSpeedRef = useRef(0.45);
  const featuredCurrentSpeedRef = useRef(0.45);
  const featuredClickPauseUntilRef = useRef(0);
  const featuredClickTimerRef = useRef(null);
  const featuredRafRef = useRef(null);

  useEffect(() => {
    let isCancelled = false;

    const randomBetween = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const wait = (ms) =>
      new Promise((resolve) => {
        setTimeout(resolve, ms);
      });

    const typeForward = async (text, setter, minDelay, maxDelay) => {
      for (let i = 1; i <= text.length; i += 1) {
        if (isCancelled) return false;
        setter(text.slice(0, i));
        await wait(randomBetween(minDelay, maxDelay));
      }
      return true;
    };

    const typeBackward = async (text, setter, minDelay, maxDelay) => {
      for (let i = text.length - 1; i >= 0; i -= 1) {
        if (isCancelled) return false;
        setter(text.slice(0, i));
        await wait(randomBetween(minDelay, maxDelay));
      }
      return true;
    };

    const runTypingLoop = async () => {
      while (!isCancelled) {
        setActiveTypingTarget("greeting");
        if (!(await typeForward(GREETING_TEXT, setTypedGreeting, 55, 90))) return;
        await wait(360);

        setActiveTypingTarget("name");
        if (!(await typeForward(FULL_NAME_TEXT, setTypedName, 70, 110))) return;
        await wait(420);

        setActiveTypingTarget("snippet");
        if (!(await typeForward(DEVELOPER_SNIPPET, setTypedSnippet, 8, 16))) return;
        await wait(1200);

        if (!(await typeBackward(DEVELOPER_SNIPPET, setTypedSnippet, 5, 10))) return;
        await wait(180);

        setActiveTypingTarget("name");
        if (!(await typeBackward(FULL_NAME_TEXT, setTypedName, 38, 72))) return;
        await wait(120);

        setActiveTypingTarget("greeting");
        if (!(await typeBackward(GREETING_TEXT, setTypedGreeting, 32, 64))) return;
        await wait(300);
      }
    };

    runTypingLoop();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    const target = featuredRef.current;
    if (!target) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFeaturedVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.28 }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const carousel = featuredCarouselRef.current;
    if (!carousel) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const updateFeaturedDepth = () => {
      const slides = carousel.querySelectorAll(".featured-projects-slide");
      const viewportCenter = carousel.scrollLeft + carousel.clientWidth / 2;

      slides.forEach((slide) => {
        const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
        const distance = (slideCenter - viewportCenter) / slide.clientWidth;
        const clamped = Math.max(-1.35, Math.min(1.35, distance));
        const absolute = Math.min(1, Math.abs(clamped));

        slide.style.setProperty("--focus", clamped.toFixed(3));
        slide.style.setProperty("--focus-abs", absolute.toFixed(3));
        slide.classList.toggle("is-featured-active", absolute < 0.28);
      });
    };

    const loopWidth = () => carousel.scrollWidth / 2;

    const recenterIfNeeded = () => {
      const half = loopWidth();
      if (carousel.scrollLeft >= half) {
        carousel.scrollLeft -= half;
      } else if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft += half;
      }
    };

    const initializePosition = () => {
      featuredTargetSpeedRef.current = 0.45;
      featuredCurrentSpeedRef.current = 0.45;
      carousel.scrollLeft = loopWidth() / 2;
      updateFeaturedDepth();
    };

    const tick = () => {
      const now = window.performance.now();
      const hoverSpeed = featuredHoverSpeedRef.current;
      const isClickPaused = now < featuredClickPauseUntilRef.current;
      const rect = carousel.getBoundingClientRect();
      const isInViewport =
        rect.bottom > 0 &&
        rect.top < window.innerHeight &&
        rect.right > 0 &&
        rect.left < window.innerWidth &&
        document.visibilityState === "visible";

      const target = !isInViewport
        ? 0
        : isClickPaused
        ? 0
        : (typeof hoverSpeed === "number" ? hoverSpeed : 0.45);

      featuredTargetSpeedRef.current = target;
      const current = featuredCurrentSpeedRef.current;
      const eased = current + (target - current) * 0.08;
      featuredCurrentSpeedRef.current = eased;

      carousel.scrollLeft += eased;
      recenterIfNeeded();
      updateFeaturedDepth();

      featuredRafRef.current = window.requestAnimationFrame(tick);
    };

    const handleResize = () => {
      recenterIfNeeded();
      updateFeaturedDepth();
    };

    // Start the infinite rail as soon as Home mounts and layout is ready.
    featuredRafRef.current = window.requestAnimationFrame(() => {
      initializePosition();
      featuredRafRef.current = window.requestAnimationFrame(tick);
    });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (featuredClickTimerRef.current) {
        window.clearTimeout(featuredClickTimerRef.current);
      }
      if (featuredRafRef.current) {
        window.cancelAnimationFrame(featuredRafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const target = ctaRef.current;
    if (!target) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCtaVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  const typedFirstName = typedName.slice(0, FIRST_NAME_TEXT.length);
  const typedLastName = typedName.slice(FIRST_NAME_TEXT.length);
  const isGreetingTyping = activeTypingTarget === "greeting";
  const isNameTyping = activeTypingTarget === "name";
  const isSnippetTyping = activeTypingTarget === "snippet";

  const handleFeaturedMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const position = (event.clientX - rect.left) / rect.width;
    const clamped = Math.max(0, Math.min(1, position));
    const centered = clamped - 0.5;

    if (centered <= -0.08) {
      featuredHoverSpeedRef.current = -(0.3 + Math.abs(centered) * 3.2);
      return;
    }

    if (centered >= 0.08) {
      featuredHoverSpeedRef.current = 0.3 + centered * 3.2;
      return;
    }

    featuredHoverSpeedRef.current = 0.45;
  };

  const handleFeaturedMouseLeave = () => {
    featuredHoverSpeedRef.current = null;
  };

  const pauseFeaturedOnClick = (duration = 1100) => {
    featuredClickPauseUntilRef.current = window.performance.now() + duration;
    if (featuredClickTimerRef.current) {
      window.clearTimeout(featuredClickTimerRef.current);
    }
    featuredClickTimerRef.current = window.setTimeout(() => {
      featuredClickPauseUntilRef.current = 0;
    }, duration + 40);
  };

  const handleFeaturedArrow = (direction) => {
    const carousel = featuredCarouselRef.current;
    if (!carousel) return;
    pauseFeaturedOnClick(900);

    const slide = carousel.querySelector(".featured-projects-slide");
    const step = slide ? slide.clientWidth + 24 : 280;

    carousel.scrollBy({
      left: direction * step,
      behavior: "smooth",
    });
  };

  const techStack = [
    { name: "React", Icon: SiReact, key: "react" },
    { name: "JavaScript", Icon: SiJavascript, key: "javascript" },
    { name: "Node.js", Icon: SiNodedotjs, key: "node" },
    { name: "CSS3", Icon: SiCss3, key: "css" },
    { name: "Git", Icon: FaGitAlt, key: "git" },
    { name: "MySQL", Icon: SiMysql, key: "mysql" },
  ];

  const heroMetrics = [
    { value: "10+", label: "Projects Built" },
    { value: "<24h", label: "Response Time" },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="hero" aria-label="Introduction">
        <div className="container">
          <div className="hero-content">
            <div className="animate-fade-up">
              <div className="hero-greeting">
                <span className="typing-line">{typedGreeting}</span>
                <span
                  className={`typing-caret ${isGreetingTyping ? "is-active" : ""}`}
                  aria-hidden="true"
                />
              </div>
              <h1 className="hero-name">
                <span className="typing-name-line">
                  <span>{typedFirstName}</span>
                  <span className="highlight">{typedLastName}</span>
                </span>
                <span
                  className={`typing-caret name-caret ${isNameTyping ? "is-active" : ""}`}
                  aria-hidden="true"
                />
              </h1>
              <p className="hero-title">FullStack Developer</p>
              <div className="hero-metrics" aria-label="Quick proof points">
                {heroMetrics.map((metric) => (
                  <div className="hero-metric-item" key={metric.label}>
                    <span className="hero-metric-value">{metric.value}</span>
                    <span className="hero-metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
              <div className="hero-intro-panel">
                <p className="hero-description">
                  I build exceptional digital experiences that live at the
                  intersection of design and engineering. Specializing in React,
                  Node, and modern web technologies.
                </p>
                <div className="hero-actions">
                  <Link to="/projects" className="btn hero-btn-primary">
                    <span className="hero-btn-label">View Projects</span>
                  </Link>
                  <Link to="/contact" className="btn hero-btn-secondary">
                    <span className="hero-btn-label">Contact Me</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hero-visual animate-fade-up-delay-2">
              <div className="hero-tech-showcase" role="presentation" aria-hidden="true">
                <div className="hero-tech-glow" />
                <div className="hero-tech-trio">
                  <div className="hero-tech-badge badge-react">
                    <SiReact />
                    <span>React</span>
                  </div>
                  <div className="hero-tech-badge badge-express">
                    <SiExpress />
                    <span>Express</span>
                  </div>
                  <div className="hero-tech-badge badge-node">
                    <SiNodedotjs />
                    <span>Node</span>
                  </div>
                </div>
                <p className="hero-tech-caption">Core Build Trio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack section" aria-label="Technology stack">
        <div className="container">
          <div className="section-header tech-stack-header">
            <h2 className="tech-stack-title">
              <span className="title-typing">Tech Stack</span>
            </h2>
            <p className="tech-stack-subtitle">Technologies I work with on a daily basis</p>
          </div>
          <div className="tech-grid">
            {techStack.map((tech) => (
              <div className={`tech-item tech-${tech.key}`} key={tech.name}>
                <span className="tech-icon">
                  <tech.Icon />
                </span>
                <span className="tech-label">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview section" aria-label="About me preview">
        <div className="container">
          <div className="about-preview-content">
            <div className="about-preview-text">
              <h2 className="about-modern-title">
                <span>Crafting Digital Excellence</span>
              </h2>
              <p className="about-modern-copy">
                As an aspiring fullstack developer, I am eager to contribute to
                innovative teams and help bring digital ideas to life. I focus
                on writing clean, maintainable code and building responsive
                interfaces that create engaging user experiences while
                continuously growing my technical skills.
              </p>
              <p className="about-modern-copy about-modern-copy-delay">
                My approach combines technical expertise with a keen eye for
                design, ensuring every project not only functions flawlessly but
                also delights users at every interaction.
              </p>
              <Link
                to="/about"
                className="btn about-modern-btn"
              >
                Learn More About Me →
              </Link>
</div>
            <div className="about-code-card">
              <div className="about-code-header">
                <span className="code-dot code-dot-red" />
                <span className="code-dot code-dot-yellow" />
                <span className="code-dot code-dot-green" />
                <span className="code-file">developer.js</span>
              </div>
              <pre className="about-code-body" aria-label="Developer object code snippet">
                <code>{typedSnippet}</code>
                <span
                  className={`typing-caret code-caret ${isSnippetTyping ? "is-active" : ""}`}
                  aria-hidden="true"
                />
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        ref={featuredRef}
        className={`section featured-section ${isFeaturedVisible ? "is-visible" : ""}`}
        aria-label="Featured projects"
      >
        <div className="container">
          <div className="section-header featured-header">
            <h2 className="featured-title">Featured Projects</h2>
            <p className="featured-subtitle">A selection of my recent work</p>
          </div>
          <div className="featured-projects-carousel" aria-label="Featured projects carousel">
            <div className="featured-carousel-shell">
              <button
                type="button"
                className="featured-nav-btn featured-nav-prev"
                aria-label="Scroll featured projects left"
                onClick={() => handleFeaturedArrow(-1)}
              >
                &larr;
              </button>
              <div
                ref={featuredCarouselRef}
                className="featured-projects-viewport"
                onMouseMove={handleFeaturedMouseMove}
                onMouseLeave={handleFeaturedMouseLeave}
                onPointerDown={() => pauseFeaturedOnClick(1400)}
              >
                <div className="featured-projects-track">
                  {[...featuredProjects, ...featuredProjects].map((project, index) => (
                    <div
                      className="featured-projects-slide"
                      key={`${project.id}-${index}`}
                      aria-hidden={index >= featuredProjects.length}
                    >
                      <ProjectCard {...project} />
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="featured-nav-btn featured-nav-next"
                aria-label="Scroll featured projects right"
                onClick={() => handleFeaturedArrow(1)}
              >
                &rarr;
              </button>
            </div>
          </div>
          <div className="view-all-projects-wrap">
            <Link to="/projects" className="btn view-all-glow-btn">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className={`cta-section section ${isCtaVisible ? "is-visible" : ""}`}
        aria-label="Call to action"
      >
        <div className="container">
          <h2 className="cta-title">
            <span className="cta-title-typing">Available for Your Next Build</span>
          </h2>
          <p className="cta-copy">
            <span className="cta-copy-animated">
              Freelance and full-time ready, from concept to clean production delivery.
            </span>
          </p>
          <Link to="/contact" className="btn btn-primary cta-button">
            Get In Touch →
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
