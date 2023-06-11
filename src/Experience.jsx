import { useState } from "react";
import { OrbitControls, Html, PresentationControls } from "@react-three/drei";

import FemaleC from "./model-components/FemaleC";

export default function Experience() {
	const [displayedNmae, setDisplayedName] = useState("");
	const [appearanceTab, setAppearanceTab] = useState(0);

	return (
		<>
			{/* <OrbitControls makeDefault /> */}
			<directionalLight position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />

			{/* Background */}
			<Html transform distanceFactor={4} zIndexRange={[-10000, -10000]}>
				<img src="/background.jpg" alt="Background picture" />
			</Html>

			{/* Appearance */}
			<Html>
				<div className="appearance-container">
					<button>Body Type</button>
					<div className="body-type-container">
						<div className="body-type-one">Body Type 1</div>
						<div className="body-type-two">Body Type 2</div>
						<div className="body-type-three">Body Type 3</div>
						<div className="body-type-four">Body Type 4</div>
					</div>
					<button>Skin Tone</button>
					<button>Hair Style</button>
				</div>
			</Html>

			{/* Sex */}
			<Html>
				<div className="sex-container">
					<button>Male</button>
					<button>Female</button>
				</div>
			</Html>

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

			{/* Input */}
			<Html>
				<div className="name-input-container">
					Name
					<input
						type="text"
						onChange={(event) => setDisplayedName(event.target.value)}
					/>
				</div>
			</Html>

			{/* Displayed Name */}
			<Html>
				<div className="displayed-name">{displayedNmae}</div>
			</Html>
		</>
	);
}
