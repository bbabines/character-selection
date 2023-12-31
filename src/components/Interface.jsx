import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const Interface = ({
	bodyTypeSelection,
	setBodyTypeSection,
	hairTypeSelection,
	setHairTypeSection,
}) => {
	const [displayedName, setDisplayedName] = useState("");
	const [appearanceTab, setAppearanceTab] = useState(1);
	const [factionSelection, setFactionSelection] = useState(null);
	const [sexSelection, setSexSelection] = useState(2);

	const htmlRef = useRef();
	const scaleValue = 0.00075;

	// Minimize UI on screen re-size
	// useFrame(() => {
	// 	const width = window.innerWidth;

	// 	if (htmlRef.current) {
	// 		htmlRef.current.style.scale = width * scaleValue;
	// 	}
	// });

	return (
		<>
			{/* Background */}
			<Html transform distanceFactor={4} zIndexRange={[-10000, -10000]}>
				<img
					src="/background.jpg"
					alt="Background picture"
					className="background"
				/>
			</Html>

			{/* Appearance */}
			<Html
				// ref={htmlRef}

				className="appearance-container"
			>
				<button
					onClick={() => {
						setAppearanceTab(1);
					}}
				>
					Body Type
				</button>
				<div
					className={`${
						appearanceTab === 1
							? "body-type-container, active "
							: "body-type-container, inactive "
					} `}
				>
					{/* FEMALE BODY SELECTION */}
					{sexSelection === 2 ? (
						<>
							<img
								className={`${
									bodyTypeSelection === 1 ? "body-type-selected" : "body-type"
								} `}
								src="/FemaleA.png"
								alt="Female A"
								onClick={() => {
									setBodyTypeSection(1);
								}}
							/>
							<img
								className={`${
									bodyTypeSelection === 2 ? "body-type-selected" : "body-type"
								} `}
								src="/FemaleB.png"
								alt="Female B"
								onClick={() => {
									setBodyTypeSection(2);
								}}
							/>
							<img
								className={`${
									bodyTypeSelection === 3 ? "body-type-selected" : "body-type"
								} `}
								src="/FemaleC.png"
								alt="Female C"
								onClick={() => {
									setBodyTypeSection(3);
								}}
							/>
						</>
					) : (
						<>
							<img
								className={`${
									bodyTypeSelection === 4 ? "body-type-selected" : "body-type"
								} `}
								src="/MaleA.svg"
								alt="Male A"
								onClick={() => {
									setBodyTypeSection(4);
								}}
							/>
							<img
								className={`${
									bodyTypeSelection === 5 ? "body-type-selected" : "body-type"
								} `}
								src="/MaleB.svg"
								alt="Male B"
								onClick={() => {
									setBodyTypeSection(5);
								}}
							/>
							<img
								className={`${
									bodyTypeSelection === 6 ? "body-type-selected" : "body-type"
								} `}
								src="/MaleC.svg"
								alt="Male C"
								onClick={() => {
									setBodyTypeSection(6);
								}}
							/>
						</>
					)}
				</div>

				{/* </group> */}

				{/* <button onClick={() => setAppearanceTab(2)}>Skin Tone</button>
					<div
						className={`${
							appearanceTab === 2
								? "body-type-container, active "
								: "body-type-container, inactive "
						} `}
					>
						<div
							className="skin-tone one"
							onClick={setSkinToneColor("#f8a378")}
						></div>
						<div
							className="skin-tone two"
							onClick={setSkinToneColor("#c87448")}
						></div>
						<div
							className="skin-tone three"
							onClick={setSkinToneColor("#c87448")}
						></div>
						<div
							className="skin-tone four"
							onClick={setSkinToneColor("#57321f")}
						></div>
					</div> */}

				<button onClick={() => setAppearanceTab(3)}>Hair Style</button>
				<div
					className={`${
						appearanceTab === 3
							? "body-type-container, active "
							: "body-type-container, inactive "
					} `}
				>
					{/* FEMALE HAIR SELECTION */}
					{sexSelection === 2 ? (
						<>
							<div
								className={`${
									hairTypeSelection === 1
										? "hair-style-selected"
										: "hair-style "
								} `}
							>
								<img
									className="female-hair"
									src="/female-hair-one.png"
									alt="First choice of female hair"
									onClick={() => {
										setHairTypeSection(1);
									}}
								/>
							</div>
							<div
								className={`${
									hairTypeSelection === 2
										? "hair-style-selected"
										: "hair-style "
								} `}
							>
								<img
									className="female-hair"
									src="/female-hair-two.png"
									alt="Second choice of female hair"
									onClick={() => {
										setHairTypeSection(2);
									}}
								/>
							</div>
							<div
								className={`${
									hairTypeSelection === 3
										? "hair-style-selected"
										: "hair-style "
								} `}
							>
								<img
									className="female-hair"
									src="/female-hair-three.png"
									alt="Third choice of female hair"
									onClick={() => {
										setHairTypeSection(3);
									}}
								/>
							</div>
							<div
								className={`${
									hairTypeSelection === 4
										? "hair-style-selected"
										: "hair-style "
								} `}
							>
								<img
									className="female-hair"
									src="/female-hair-four.png"
									alt="Fourth choice of female hair"
									onClick={() => {
										setHairTypeSection(4);
									}}
								/>
							</div>
						</>
					) : (
						<>
							<div
								className={`${
									hairTypeSelection === 5
										? "hair-style-selected"
										: "hair-style "
								} `}
							>
								<img
									className="female-hair"
									src="/MaleHairOne.svg"
									alt="First choice of male hair"
									onClick={() => {
										setHairTypeSection(5);
									}}
								/>
							</div>
							<div
								className={`${
									hairTypeSelection === 6
										? "hair-style-selected"
										: "hair-style "
								} `}
							>
								<img
									className="female-hair"
									src="/MaleHairTwo.svg"
									alt="Second choice of male hair"
									onClick={() => {
										setHairTypeSection(6);
									}}
								/>
							</div>
							<div
								className={`${
									hairTypeSelection === 7
										? "hair-style-selected"
										: "hair-style "
								} `}
							>
								<img
									className="female-hair"
									src="/MaleHairThree.svg"
									alt="Third choice of male hair"
									onClick={() => {
										setHairTypeSection(7);
									}}
								/>
							</div>
							<div
								className={`${
									hairTypeSelection === 8
										? "hair-style-selected"
										: "hair-style "
								} `}
							>
								<img
									className="female-hair"
									src="/MaleHairFour.svg"
									alt="Fourth choice of male hair"
									onClick={() => {
										setHairTypeSection(8);
									}}
								/>
							</div>
						</>
					)}
				</div>
			</Html>

			{/* Sex */}
			<Html>
				<div className="sex-container">
					<div
						onClick={() => {
							setSexSelection(1);
							setBodyTypeSection(4);
							setHairTypeSection(5);
						}}
					>
						<button
							className={`${
								sexSelection === 1 ? "selected-male-button" : "male-button"
							}`}
						>
							Male
							<img
								src="/male-symbol.png"
								alt="Male sex symbol"
								className="male-symbol"
							/>
						</button>
					</div>
					<div
						onClick={() => {
							setSexSelection(2);
							setBodyTypeSection(1);
							setHairTypeSection(1);
						}}
					>
						<button
							className={`${
								sexSelection === 2 ? "selected-female-button" : "female-button"
							}`}
						>
							Female
							<img
								src="/female-symbol.png"
								alt="Female sex symbol"
								className="female-symbol"
							/>
						</button>
					</div>
				</div>
			</Html>

			{/* Faction */}
			<Html>
				<button
					className={`${
						factionSelection === 1
							? "selected-faction-button-one"
							: "faction-button-one"
					} `}
				>
					Faction One
					<img
						src="/faction-one.svg"
						alt="Faction one"
						className="faction-symbol-one"
						onClick={() => setFactionSelection(1)}
					/>
				</button>
				<button
					className={`${
						factionSelection === 2
							? "selected-faction-button-two"
							: "faction-button-two"
					} `}
				>
					Faction Two
					<img
						src="/faction-two.svg"
						alt="Faction two"
						className="faction-symbol-two"
						onClick={() => setFactionSelection(2)}
					/>
				</button>
			</Html>

			{/* Description */}
			<Html>
				{/* <div className="right-side-container"> */}
				<div className="description-container">
					<p className="description">
						Welcome to the character selection screen of Legends of Aetheria!
					</p>
					{/* <p>
						In this epic world, you will embark on a thrilling adventure filled
						with danger, magic, and unimaginable challenges.
					</p> */}
					<p>
						As you prepare to shape your destiny, choose your character wisely,
						for their unique abilities and skills will be determined by your
						faction choice.
					</p>
					<div
						className={`${
							factionSelection === null ? "faction-description" : "inactive"
						} `}
					>
						<p className="faction-title">Please Choose Your Faction:</p>
						<img
							src="/faction-one.svg"
							alt="Faction one"
							className="faction-one-description"
						/>
						<p className="faction-description">
							The Order of the Silver Dawn - Noble warriors committed to
							justice, protecting the innocent, and restoring peace to the
							realm.
						</p>
						<img
							src="/faction-two.svg"
							alt="Faction two"
							className="faction-two-description"
						/>
						<p>
							The Shadow Syndicate - Masters of secrecy and manipulation,
							skilled in espionage, assassination, and subterfuge, operating in
							the shadows to shape the fate of Aetheria.
						</p>
					</div>
					<div
						className={`${
							factionSelection === 1
								? "selected-faction-description"
								: "inactive"
						} `}
					>
						<img
							src="/faction-one.svg"
							alt="Faction one"
							className="faction-one-description-large"
						/>
						<p>
							The Order of the Silver Dawn is a renowned faction of noble
							warriors and valiant defenders. Committed to upholding justice and
							protecting the innocent, they stand as beacons of hope in a world
							plagued by darkness. Clad in gleaming armor, their ranks are
							filled with knights, paladins, and righteous champions who wield
							weapons imbued with holy power of Aetheria.
						</p>
						<p>Skill & Abilities:</p>
						<p>
							You main abilities stem from your two-handed weapons which deal
							devastating damage to your enemies.
						</p>
						<p>Gear & Playstyle:</p>
						<p>
							In your face sword and board fighting or high damage 2-handed
							attacks. As an Order of the Silver Dawn, you will not be afraid to
							rush into a crowd of enemies with your plate armor and hack n'
							slash your way to victory
						</p>
					</div>
					<div
						className={`${
							factionSelection === 2 ? "faction-description" : "inactive"
						} `}
					>
						<img
							src="/faction-two.svg"
							alt="Faction two"
							className="faction-two-description-large"
						/>
					</div>

					<div
						className={`${
							factionSelection === 2
								? "selected-faction-description"
								: "inactive"
						} `}
					>
						Steeped in secrecy and whispers, the Shadow Syndicate is a
						clandestine faction that operates in the shadows, manipulating
						events and weaving a web of intrigue. They use tricks, poisons, and
						stealth to bring their opponents to their knees.
						<p>Skill & Abilities:</p>
						<p>
							You main abilities utilize dual weapons and speed to overwhelm
							your enemies.
						</p>
						<p>Gear & Playstyle:</p>
						<p>
							Being part of the Shadow Syndicate means you will be wearing cloth
							and leather armor while sneaking around trying to get the most
							advantageous strikes before your opponent realizes what is
							happening.
						</p>
					</div>
				</div>
			</Html>

			{/* Displayed Name */}
			<Html>
				<div className="displayed-name">{displayedName}</div>

				{/* Input */}
				<div className="name-input-container">
					Name
					<input
						type="text"
						onChange={(event) => setDisplayedName(event.target.value)}
					/>
					<button disabled className="create-character-button">
						Create Character
					</button>
				</div>
			</Html>
		</>
	);
};

export default Interface;
