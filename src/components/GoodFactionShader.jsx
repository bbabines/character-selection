// Shader code for the good faction

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
    vec3 color = vec3(1.0, 1.0, 1.0); // Start with white color
    if (fract(vUv.x * 10.0) < 0.1 && fract(vUv.y * 10.0) < 0.1) {
      // Add green sparkles by setting specific pixels to green
      color.g = 0.0;
    }

    // Set the alpha value to create transparency
    float alpha = 0.5;
    
    // Output the final color with transparency
    gl_FragColor = vec4(color, alpha);
  }
`;

export { vertexShader, fragmentShader };
