// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { projectData } from "../data/projectData";
import SectionHeader from "./SectionHeader";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import "../styles/App.css";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects">
      <SectionHeader
        title="Projects"
        description="Explore my key projects and their details."
      />
      <motion.div
        className="grid-container grid-col-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {projectData.map((project, index) => (
          <motion.div key={project.id} className="card" variants={itemVariants}>
            <div className="card-header">
              <h3
                style={{
                  color: "var(--accent-primary)",
                  fontSize: "1.6em",
                  marginBottom: "0.5em",
                }}
              >
                {project.name}
              </h3>
            </div>
            <div className="card-body">
              <p style={{ color: "var(--text-dark)", fontSize: "0.95em" }}>
                {project.details}
              </p>
            </div>
            {project.link && (
              <div className="card-footer">
                <Button
                  asChild
                  style={{
                    backgroundColor: "var(--accent-primary)",
                    color: "var(--text-white)",
                    padding: "0.75rem 1.5rem",
                    fontSize: "1em",
                    borderRadius: "var(--radius)",
                    transition:
                      "background-color 0.3s ease, transform 0.2s ease",
                  }}
                  onHoverStart={(e) =>
                    (e.currentTarget.style.transform = "translateY(-2px)")
                  }
                  onHoverEnd={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project{" "}
                    <ExternalLink size={18} style={{ marginLeft: "10px" }} />
                  </a>
                </Button>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
