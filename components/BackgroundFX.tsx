"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

export default function BackgroundFX() {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  /* Create refs to hold THREE instances so we can update them without re-creating scene */
  const sceneRef = useRef<THREE.Scene | null>(null);
  const particlesMaterialRef = useRef<THREE.PointsMaterial | null>(null);
  const linesMaterialRef = useRef<THREE.LineBasicMaterial | null>(null);

  useEffect(() => {
    // Update colors when theme changes 
    
    // Explicit color mapping
    const particleColor = theme === "light" ? 0x171717 : 0xffffff;
    const lineOpacity = theme === "light" ? 0.15 : 0.08;

    if (particlesMaterialRef.current) {
        particlesMaterialRef.current.color.setHex(particleColor);
    }
    if (linesMaterialRef.current) {
        linesMaterialRef.current.color.setHex(particleColor);
        linesMaterialRef.current.opacity = lineOpacity;
        linesMaterialRef.current.needsUpdate = true;
    }
  }, [theme]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    // scene.background = null; // Transparent by default if not set

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // ==============================
    // PARTICLES
    // ==============================

    const particleCount = 120; 

    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Initial creation - color will be updated by the other effect immediately
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.03,
      transparent: true,
      opacity: 0.5,
    });
    particlesMaterialRef.current = particlesMaterial;

    const particles = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );

    scene.add(particles);

    // ==============================
    // LINES (Connections)
    // ==============================

    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.08,
    });
    linesMaterialRef.current = linesMaterial;

    const linesGeometry = new THREE.BufferGeometry();
    const linePositions: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];

        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < 2.5) {
          linePositions.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2]
          );
          linePositions.push(
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2]
          );
        }
      }
    }

    linesGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );

    const lines = new THREE.LineSegments(
      linesGeometry,
      linesMaterial
    );

    scene.add(lines);

    // ==============================
    // ANIMATION
    // ==============================

    let mouseX = 0;
    let mouseY = 0;
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      particles.rotation.y += 0.0008;
      lines.rotation.y += 0.0008;

      camera.position.x += (mouseX - camera.position.x) * 0.02;
      camera.position.y += (-mouseY - camera.position.y) * 0.02;

      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // ==============================
    // EVENTS
    // ==============================

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      if (mount && renderer.domElement && mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10 bg-background transition-colors duration-500"
    />
  );
}
