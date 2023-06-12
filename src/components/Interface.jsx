import { useState } from "react";
import { Html } from "@react-three/drei";

const Interface = () => {
	const [displayedNmae, setDisplayedName] = useState("");
	const [appearanceTab, setAppearanceTab] = useState(1);

	const [bodyAppearance, setBodyAppearance] = useState(1);

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
						<div
							className={`${
								bodyAppearance === 1 ? "body-type, active" : "body-type "
							} `}
							onClick={() => {
								setBodyAppearance(1);
							}}
						>
							Body Type 1
						</div>
						<div
							className={`${
								bodyAppearance === 2 ? "body-type, active" : "body-type  "
							} `}
							onClick={() => {
								setBodyAppearance(2);
							}}
						>
							Body Type 2
						</div>
						<div className="body-type ">Body Type 3</div>
						<div className="body-type">Body Type 4</div>
					</div>
					<button onClick={() => setAppearanceTab(2)}>Skin Tone</button>
					<div
						className={`${
							appearanceTab === 2
								? "body-type-container, active "
								: "body-type-container, inactive "
						} `}
					>
						<div className="skin-tone one"></div>
						<div className="skin-tone two"></div>
						<div className="skin-tone three"></div>
						<div className="skin-tone four"></div>
					</div>
					<button onClick={() => setAppearanceTab(3)}>Hair Style</button>
					<div
						className={`${
							appearanceTab === 3
								? "body-type-container, active "
								: "body-type-container, inactive "
						} `}
					>
						<div className="hair-style">
							<img
								className="female-hair"
								src="/female-hair-one.png"
								alt="First choice of female hair"
							/>
						</div>
						<div className="hair-style">
							<img
								className="female-hair"
								src="/female-hair-two.png"
								alt="First choice of female hair"
							/>
						</div>
						<div className="hair-style">
							<img
								className="female-hair"
								src="/female-hair-three.png"
								alt="First choice of female hair"
							/>
						</div>
						<div className="hair-style">
							<img
								className="female-hair"
								src="/female-hair-four.png"
								alt="First choice of female hair"
							/>
						</div>
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
