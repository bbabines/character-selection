import { useState } from "react";
import {
	OrbitControls,
	PresentationControls,
	GizmoHelper,
	PivotControls,
} from "@react-three/drei";

import Interface from "./components/Interface";
import FemaleA from "./model-components/FemaleA";
import FemaleB from "./model-components/FemaleB";
import FemaleC from "./model-components/FemaleC";

import TestA from "./model-components/TestA";
import MissingBodyPruned from "./model-components/female-hair-models/MissingBodyPruned";

export default function Experience() {
	const [bodyTypeSelection, setBodyTypeSection] = useState(1);
	const [hairTypeSelection, setHairTypeSection] = useState(1);

	return (
		<>
			{/* <OrbitControls makeDefault /> */}
			<directionalLight position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />

			<Interface
				bodyTypeSelection={bodyTypeSelection}
				setBodyTypeSection={setBodyTypeSection}
				hairTypeSelection={hairTypeSelection}
				setHairTypeSection={setHairTypeSection}
			/>

			<PresentationControls
				polar={[0, 0]} // Vertical limits
				azimuth={[-Infinity, Infinity]} // Horizontal limits
				rotation={[0, 0.1, 0]}
				speed={3}
			>
				{hairTypeSelection === 4 ? <MissingBodyPruned /> : null}

				{bodyTypeSelection === 1 && (
					<TestA scale={2} hairTypeSelection={hairTypeSelection} />
					// <FemaleA scale={2} hairTypeSelection={hairTypeSelection} />
				)}
				{bodyTypeSelection === 2 && <FemaleB scale={2} />}
				{bodyTypeSelection === 3 && <FemaleC scale={2} />}
			</PresentationControls>
		</>
	);
}
