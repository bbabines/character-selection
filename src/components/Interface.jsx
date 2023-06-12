import { useState } from "react";
import { Html } from "@react-three/drei";

const Interface = () => {
	const [displayedNmae, setDisplayedName] = useState("");
	const [appearanceTab, setAppearanceTab] = useState(0);
	return (
		<>
			{/* Background */}
			<Html transform distanceFactor={4} zIndexRange={[-10000, -10000]}>
				<img src="/background.jpg" alt="Background picture" />
			</Html>

			{/* Appearance */}
			<Html>
				<div className="appearance-container">
					<button onClick={() => setAppearanceTab(1)}>Body Type</button>
					<div
						className={`${
							appearanceTab === 1
								? "body-type-container, active "
								: "body-type-container, inactive "
						} `}
					>
						<div className="body-type-one">Body Type 1</div>
						<div className="body-type-two">Body Type 2</div>
						<div className="body-type-three">Body Type 3</div>
						<div className="body-type-four">Body Type 4</div>
					</div>
					<button onClick={() => setAppearanceTab(2)}>Skin Tone</button>
					<div
						className={`${
							appearanceTab === 2
								? "body-type-container, active "
								: "body-type-container, inactive "
						} `}
					>
						<div className="body-type-one">Skin Tone 1</div>
						<div className="body-type-two">Skin Tone 2</div>
						<div className="body-type-three">Skin Tone 3</div>
						<div className="body-type-four">Skin Tone 4</div>
					</div>
					<button onClick={() => setAppearanceTab(3)}>Hair Style</button>
					<div
						className={`${
							appearanceTab === 3
								? "body-type-container, active "
								: "body-type-container, inactive "
						} `}
					>
						<div className="body-type-one">Hair Style 1</div>
						<div className="body-type-two">Hair Style 2</div>
						<div className="body-type-three">Hair Style 3</div>
						<div className="body-type-four">Hair Style 4</div>
					</div>
				</div>
			</Html>

			{/* Sex */}
			<Html>
				<div className="sex-container">
					<button>Male</button>
					<button>Female</button>
				</div>
			</Html>

			{/* Displayed Name */}
			<Html>
				<div className="displayed-name">{displayedNmae}</div>
			</Html>

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
		</>
	);
};

export default Interface;
