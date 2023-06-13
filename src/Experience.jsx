import { OrbitControls, PresentationControls } from "@react-three/drei";

import Interface from "./components/Interface";
import FemaleA from "./model-components/FemaleA";
import FemaleB from "./model-components/FemaleB";
import FemaleC from "./model-components/FemaleC";
import { useState } from "react";

export default function Experience() {
	const [bodyTypeSelection, setBodyTypeSection] = useState(1);

	// Need global context to so model can use once its changes in the UI
	const [skinTone, setSkinToneColor] = useState("red");

	return (
		<>
			{/* <OrbitControls makeDefault /> */}
			<directionalLight position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />

			<Interface
				// bodyTypeSelection={bodyTypeSelection}
				setBodyTypeSection={setBodyTypeSection}
				// skinTone={skinTone}
				setSkinToneColor={setSkinToneColor}
			/>

			{/* Model & Hair */}
			<PresentationControls
				polar={[0, 0]} // Vertical limits
				azimuth={[-Infinity, Infinity]} // Horizontal limits
				rotation={[0, 0.1, 0]}
				snap={false} // Snap-back to center (can also be a spring config)
				speed={3} // Speed factor
			>
				{bodyTypeSelection === 1 && (
					<FemaleA
						scale={2}
						skinTone={skinTone}
						setSkinToneColor={setSkinToneColor}
					/>
				)}
				{bodyTypeSelection === 2 && <FemaleB scale={2} />}
				{bodyTypeSelection === 3 && <FemaleC scale={2} />}
			</PresentationControls>
		</>
	);
}
