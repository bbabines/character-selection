import { useState } from "react";
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

	return (
		<>
			{/* Background */}
			<Html transform distanceFactor={4} zIndexRange={[-10000, -10000]}>
				<img src="/background.jpg" alt="Background picture" />
			</Html>

			{/* Appearance */}
			<Html>
				<div className="appearance-container">
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
						<img
							className={`${
								bodyTypeSelection === 1 ? "body-type-selected" : "body-type "
							} `}
							src="/FemaleA.png"
							alt="Female A"
							onClick={() => {
								setBodyTypeSection(1);
							}}
						/>

						<img
							className={`${
								bodyTypeSelection === 2 ? "body-type-selected" : "body-type "
							} `}
							src="/FemaleB.png"
							alt="Female B"
							onClick={() => {
								setBodyTypeSection(2);
							}}
						/>

						<img
							className={`${
								bodyTypeSelection === 3 ? "body-type-selected" : "body-type "
							} `}
							src="/FemaleC.png"
							alt="Female C"
							onClick={() => {
								setBodyTypeSection(3);
							}}
						/>
					</div>

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
						<div
							className={`${
								hairTypeSelection === 1 ? "hair-style-selected" : "hair-style "
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
								hairTypeSelection === 2 ? "hair-style-selected" : "hair-style "
							} `}
						>
							<img
								className="female-hair"
								src="/female-hair-two.png"
								alt="First choice of female hair"
								onClick={() => {
									setHairTypeSection(2);
								}}
							/>
						</div>
						<div
							className={`${
								hairTypeSelection === 3 ? "hair-style-selected" : "hair-style "
							} `}
						>
							<img
								className="female-hair"
								src="/female-hair-three.png"
								alt="First choice of female hair"
								onClick={() => {
									setHairTypeSection(3);
								}}
							/>
						</div>
						<div
							className={`${
								hairTypeSelection === 4 ? "hair-style-selected" : "hair-style "
							} `}
						>
							<img
								className="female-hair"
								src="/female-hair-four.png"
								alt="First choice of female hair"
								onClick={() => {
									setHairTypeSection(4);
								}}
							/>
						</div>
					</div>
				</div>
			</Html>

			{/* Sex */}
			<Html>
				<div className="sex-container">
					<div onClick={() => setSexSelection(1)}>
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
					<div onClick={() => setSexSelection(2)}>
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
							className="faction-one-description"
						/>
						<p>
							The Order of the Silver Dawn is a renowned faction of noble
							warriors and valiant defenders. Committed to upholding justice and
							protecting the innocent, they stand as beacons of hope in a world
							plagued by darkness. Clad in gleaming armor, their ranks are
							filled with knights, paladins, and righteous champions who wield
							weapons imbued with holy power. of Aetheria.
						</p>
						<p>Skill & Abilities:</p>
						<p>
							You main abilities stem from your two-handed weapons which deal
							devastating damage to your enemies.
						</p>
						<p>Gear & Playstyle:</p>
						<p>
							In your face sword and board fighting. As an Order of the Silver
							Dawn, you will not be afraid to rush into a crowd of enemies with
							your plate armor and hack n' slash your way to victory
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
							className="faction-two-description"
						/>
					</div>

					<p
						className={`${
							factionSelection === 2
								? "selected-faction-description"
								: "inactive"
						} `}
					>
						Steeped in secrecy and whispers, the Shadow Syndicate is a
						clandestine faction that operates in the shadows, manipulating
						events and weaving a web of intrigue. Masters of espionage,
						assassination, and subterfuge, they thrive in the darkness,
						exploiting the weaknesses of their enemies. Whether you are a
						cunning rogue, a skilled spy, or a deadly assassin, the Shadow
						Syndicate offers you the chance to delve into a world of secrecy and
						power. With their vast network of informants, expertise in covert
						operations, and the ability to strike from the shadows, the Shadow
						Syndicate plays a dangerous game, seeking to control the fate of
						Aetheria without revealing their true intentions. Embrace the
						shadows and unlock the true potential of deception and manipulation
						as you navigate a world where nothing is as it seems.
					</p>
				</div>
			</Html>

			{/* Displayed Name */}
			<Html>
				<div className="displayed-name">{displayedName}</div>
			</Html>

			{/* Input */}
			<Html>
				<div className="name-input-container">
					Name
					<input
						type="text"
						onChange={(event) => setDisplayedName(event.target.value)}
					/>
					{/* <button>Create Character</button> */}
				</div>
			</Html>
		</>
	);
};

export default Interface;
