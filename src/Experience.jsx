import { useState } from "react";
import { OrbitControls, PresentationControls } from "@react-three/drei";

import Interface from "./components/Interface";
import FemaleA from "./model-components/FemaleA";
import FemaleB from "./model-components/FemaleB";
import FemaleC from "./model-components/FemaleC";

import FemaleHairOne from "./model-components/female-hair-models/FemaleHairOne";
import FemaleHairTwo from "./model-components/female-hair-models/FemaleHairTwo";
import FemaleHairThree from "./model-components/female-hair-models/FemaleHairThree";
import FemaleHairFour from "./model-components/female-hair-models/FemaleHairFour";

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
				{/* HAIR APPEARANCE */}

				{hairTypeSelection === 1 ? (
					<FemaleHairOne bodyTypeSelection={bodyTypeSelection} />
				) : null}

				{hairTypeSelection === 2 ? (
					<FemaleHairTwo bodyTypeSelection={bodyTypeSelection} />
				) : null}

				{hairTypeSelection === 3 ? (
					<FemaleHairThree bodyTypeSelection={bodyTypeSelection} />
				) : null}

				{hairTypeSelection === 4 ? (
					<FemaleHairFour bodyTypeSelection={bodyTypeSelection} />
				) : null}

				{/* BODY APPEARANCE */}
				{bodyTypeSelection === 1 && (
					<FemaleA scale={2} hairTypeSelection={hairTypeSelection} />
				)}
				{bodyTypeSelection === 2 && (
					<FemaleB scale={2} hairTypeSelection={hairTypeSelection} />
				)}
				{bodyTypeSelection === 3 && (
					<FemaleC scale={2} hairTypeSelection={hairTypeSelection} />
				)}
			</PresentationControls>
		</>
	);
}
