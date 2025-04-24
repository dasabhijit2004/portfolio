import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const roles = ["Web Developer", "UI/UX Designer", "AI/ML Enthusiast", "Problem Solver"];
    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let typingSpeed = isDeleting ? 70 : 100;

        const type = setTimeout(() => {
            if (!isDeleting) {
                setText(currentRole.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
                if (charIndex === currentRole.length) {
                    setIsDeleting(true);
                }
            } else {
                setText(currentRole.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
                if (charIndex === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(type);
    }, [charIndex, isDeleting, roleIndex, roles]);

    // Custom particle effect with plain CSS and JS
    useEffect(() => {
        // Create canvas for particles
        const canvas = document.createElement('canvas');
        canvas.id = 'particles-canvas';
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '0';
        canvas.style.pointerEvents = 'none';

        // Add canvas to the container
        const container = document.querySelector('.about-container');
        if (container) {
            container.appendChild(canvas);

            // Set canvas size
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;

            // Initialize particles
            const ctx = canvas.getContext('2d');
            const particles = [];
            const particleCount = 60;

            // Create particles
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.3
                });
            }

            // Animation function
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Draw particles
                for (let i = 0; i < particleCount; i++) {
                    const p = particles[i];

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                    ctx.fill();

                    // Update position
                    p.x += p.speedX;
                    p.y += p.speedY;

                    // Boundary check
                    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
                }

                // Draw connections
                for (let i = 0; i < particleCount; i++) {
                    for (let j = i + 1; j < particleCount; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < 150) {
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 * (1 - distance / 150)})`;
                            ctx.lineWidth = 1;
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }

                requestAnimationFrame(animate);
            }

            // Start animation
            animate();

            // Handle resize
            const handleResize = () => {
                canvas.width = container.offsetWidth;
                canvas.height = container.offsetHeight;
            };

            window.addEventListener('resize', handleResize);

            // Cleanup
            return () => {
                window.removeEventListener('resize', handleResize);
                if (container.contains(canvas)) {
                    container.removeChild(canvas);
                }
            };
        }
    }, []);

    return (
        <div className="about-container relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050414]">
            {/* About Content */}
            <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 sm:px-8 md:px-16 lg:px-20 py-12 text-white w-full">
                {/* Text Section */}
                <motion.div
                    className="w-full md:w-2/3 flex flex-col gap-4 text-center md:text-left"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="text-blue-500 text-lg sm:text-xl">Hello!</div>
                    <div className="text-3xl sm:text-4xl font-semibold">I'm Abhijit Das</div>

                    <div className="text-xl sm:text-2xl flex justify-center md:justify-start items-center gap-2">
                        I am a
                        <span className="text-blue-500 ml-2">
                            {text}
                            <span className="animate-pulse">|</span>
                        </span>
                    </div>

                    <p className="text-md sm:text-base text-gray-300">
                        I am a passionate Computer Science student and web developer with a strong foundation in Java, MERN stack, and problem-solving. I enjoy creating clean, responsive websites and exploring AI/ML technologies. Dedicated to continuous learning, I strive to build impactful digital experiences that blend creativity with functionality.
                    </p>

                    {/* Buttons */}
                    <div className="mt-4 flex justify-center md:justify-start gap-4 flex-wrap">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300"
                        >
                            Resume
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-2 border-2 border-blue-500 text-blue-500 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition duration-300"
                        >
                            Hire Me
                        </a>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="w-48 h-60 sm:w-56 sm:h-72 md:w-60 md:h-80"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="./photo.png"
                        alt="Abhijit Das"
                        className="w-60 object-contain rounded-full shadow-md shadow-blue-400 transform scale-x-[-1] my-5"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default About;