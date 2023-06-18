// Evil Faction
import { shaderMaterial } from "@react-three/drei";

// Define the vertex shader
const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Define the fragment shader
const fragmentShader = `
  varying vec2 vUv;

  void main() {
    // Calculate the color based on the UV coordinates
    vec3 color = vec3(0.0, 0.0, 0.0); // Start with black color
    if (vUv.y > 0.2 && vUv.y < 0.8) {
      // Create a gradient from black to red in the middle of the screen
      color.r = mix(0.0, 1.0, smoothstep(0.2, 0.8, vUv.y));
    }

    // Set the alpha value to create transparency
    float alpha = 0.4;

    // Output the final color with transparency
    gl_FragColor = vec4(color, alpha);
  }
`;

export { vertexShader, fragmentShader };
