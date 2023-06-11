import { useState } from "react";
import { OrbitControls, Html, PresentationControls } from "@react-three/drei";

import FemaleC from "./model-components/FemaleC";

export default function Experience() {
	const [displayedNmae, setDisplayedName] = useState();

	return (
		<>
			{/* <OrbitControls makeDefault /> */}

			<directionalLight position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />

			<Html transform distanceFactor={4} zIndexRange={[-10000, -10000]}>
				<img src="/background.jpg" alt="Background picture" />
			</Html>
			<PresentationControls
				polar={[0, 0]} // Vertical limits
				azimuth={[-Infinity, Infinity]} // Horizontal limits
				rotation={[0, 0.1, 0]}
				snap={false} // Snap-back to center (can also be a spring config)
				speed={3} // Speed factor
			>
				<FemaleC />
			</PresentationControls>

			<Html>
				<div className="name-input-container">
					Name
					<input
						type="text"
						onChange={(event) => setDisplayedName(event.target.value)}
					/>
				</div>
			</Html>

			<Html>
				<div className="displayed-name">{displayedNmae}</div>
			</Html>
		</>
	);
}
