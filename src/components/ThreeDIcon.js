import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const ThreeDIcon = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Set up lighting
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Load font and create text geometry
    const fontLoader = new FontLoader();
    fontLoader.load("/fonts/helvetiker_bold.typeface.json", (font) => {
      const geometry = new TextGeometry("Hello World", {
        font: font,
        size: 1,
        height: 0.2,
        curveSegments: 12,
      });

      const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
      const textMesh = new THREE.Mesh(geometry, material);
      scene.add(textMesh);

      // Center the text
      geometry.computeBoundingBox();
      const xMid =
        -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
      textMesh.position.set(xMid, 0, 0);

      camera.position.z = 5;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the text
        textMesh.rotation.x += 0.01;
        textMesh.rotation.y += 0.01;

        renderer.render(scene, camera);
      };
      animate();
    });

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "500px" }} />;
};

export default ThreeDIcon;
