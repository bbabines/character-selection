import { OrbitControls, PresentationControls } from "@react-three/drei";

import Interface from "./components/Interface";
import FemaleC from "./model-components/FemaleC";

export default function Experience() {
	return (
		<>
			{/* <OrbitControls makeDefault /> */}
			<directionalLight position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />

			<Interface />

			{/* Model & Hair */}
			<PresentationControls
				polar={[0, 0]} // Vertical limits
				azimuth={[-Infinity, Infinity]} // Horizontal limits
				rotation={[0, 0.1, 0]}
				snap={false} // Snap-back to center (can also be a spring config)
				speed={3} // Speed factor
			>
				<FemaleC scale={2} />
			</PresentationControls>
		</>
	);
}
