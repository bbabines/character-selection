import { useState } from "react";
import { OrbitControls, PresentationControls } from "@react-three/drei";

import Interface from "./components/Interface";

import FemaleA from "./model-components/FemaleA";
import FemaleB from "./model-components/FemaleB";
import FemaleC from "./model-components/FemaleC";

import MaleA from "./model-components/MaleA";
import MaleB from "./model-components/MaleB";
import MaleC from "./model-components/MaleC";

import FemaleHairOne from "./model-components/female-hair-models/FemaleHairOne";
import FemaleHairTwo from "./model-components/female-hair-models/FemaleHairTwo";
import FemaleHairThree from "./model-components/female-hair-models/FemaleHairThree";
import FemaleHairFour from "./model-components/female-hair-models/FemaleHairFour";

import MaleHairOne from "./model-components/male-hair-models/MaleHairOne";
import MaleHairTwo from "./model-components/male-hair-models/MaleHairTwo";
import MaleHairThree from "./model-components/male-hair-models/MaleHairThree";
import MaleHairFour from "./model-components/male-hair-models/MaleHairFour";
import LoadingScreen from "./components/LoadingScreen";

export default function Experience() {
	const [bodyTypeSelection, setBodyTypeSection] = useState(1);
	const [hairTypeSelection, setHairTypeSection] = useState(1);
	const [loadingStarted, setLoadingStarted] = useState(false);

	return (
		<>
			{/* <OrbitControls makeDefault /> */}
			<directionalLight position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />

			<LoadingScreen
				loadingStarted={loadingStarted}
				setLoadingStarted={setLoadingStarted}
			/>

			{loadingStarted && (
				<Interface
					bodyTypeSelection={bodyTypeSelection}
					setBodyTypeSection={setBodyTypeSection}
					hairTypeSelection={hairTypeSelection}
					setHairTypeSection={setHairTypeSection}
				/>
			)}

			{loadingStarted && (
				<PresentationControls
					polar={[0, 0]} // Vertical limits
					azimuth={[-Infinity, Infinity]} // Horizontal limits
					rotation={[0, 0.1, 0]}
					speed={3}
				>
					{/* FEMALE HAIR APPEARANCE */}
					<group>
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
					</group>

					{/* MALE HAIR APPEARANCE */}
					<group>
						{hairTypeSelection === 5 ? (
							<MaleHairOne bodyTypeSelection={bodyTypeSelection} />
						) : null}

						{hairTypeSelection === 6 ? (
							<MaleHairTwo bodyTypeSelection={bodyTypeSelection} />
						) : null}

						{hairTypeSelection === 7 ? (
							<MaleHairThree bodyTypeSelection={bodyTypeSelection} />
						) : null}

						{hairTypeSelection === 8 ? (
							<MaleHairFour bodyTypeSelection={bodyTypeSelection} />
						) : null}
					</group>

					{/* FEMALE BODY APPEARANCE */}
					<group>
						{bodyTypeSelection === 1 && (
							<FemaleA scale={2} hairTypeSelection={hairTypeSelection} />
						)}
						{bodyTypeSelection === 2 && (
							<FemaleB scale={2} hairTypeSelection={hairTypeSelection} />
						)}
						{bodyTypeSelection === 3 && (
							<FemaleC scale={2} hairTypeSelection={hairTypeSelection} />
						)}
					</group>

					{/* MALE BODY APPEARANCE */}
					<group>
						{bodyTypeSelection === 4 && (
							<MaleA scale={2} hairTypeSelection={hairTypeSelection} />
						)}
						{bodyTypeSelection === 5 && (
							<MaleB scale={2} hairTypeSelection={hairTypeSelection} />
						)}
						{bodyTypeSelection === 6 && (
							<MaleC scale={2} hairTypeSelection={hairTypeSelection} />
						)}
					</group>
				</PresentationControls>
			)}
		</>
	);
}
