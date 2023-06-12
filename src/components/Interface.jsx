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
						<img
							className={`${
								bodyAppearance === 1 ? "body-type" : "body-type "
							} `}
							src="/FemaleA.png"
							alt="Female A"
							onClick={() => {
								setBodyAppearance(1);
							}}
						/>

						<img
							className={`${
								bodyAppearance === 1 ? "body-type" : "body-type "
							} `}
							src="/FemaleB.png"
							alt="Female B"
							onClick={() => {
								setBodyAppearance(1);
							}}
						/>

						<img
							className={`${
								bodyAppearance === 1 ? "body-type" : "body-type "
							} `}
							src="/FemaleC.png"
							alt="Female C"
							onClick={() => {
								setBodyAppearance(1);
							}}
						/>
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
					<button className="male-button">
						Male
						<img
							src="/male-symbol.png"
							alt="Male sex symbol"
							className="male-symbol"
						/>
					</button>
					<button className="female-button">
						Female
						<img
							src="/female-symbol.png"
							alt="Female sex symbol"
							className="female-symbol"
						/>
					</button>
				</div>
			</Html>

			{/* Faction */}
			<Html>
				<button className="faction-button-one">
					Faction One
					<img
						src="/faction-one.svg"
						alt="Faction one"
						className="faction-symbol-one"
					/>
				</button>
				<button className="faction-button-two">
					Faction Two
					<img
						src="/faction-two.svg"
						alt="Faction two"
						className="faction-symbol-two"
					/>
				</button>
			</Html>

			{/* Description */}
			<Html>
				<div className="description-container">
					<p className="description">
						Welcome to the character selection screen of "Legends of Aetheria,"
						the ultimate action combat MMORPG! In this epic virtual world, you
						will embark on a thrilling adventure filled with danger, magic, and
						unimaginable challenges. As you prepare to shape your destiny,
						choose your character wisely, for their unique abilities and skills
						will determine your triumphs and victories in this extraordinary
						realm.
					</p>
					<p className="faction-title">Please Choose Your Faction:</p>
					<p className="faction-description">
						<img
							src="/faction-one.svg"
							alt="Faction one"
							className="faction-one-description"
						/>
						The Order of the Silver Dawn - Noble warriors committed to justice,
						protecting the innocent, and restoring peace to the realm.
					</p>
					{/* <p>
						Faction 1: The Order of the Silver Dawn The Order of the Silver Dawn
						is a renowned faction of noble warriors and valiant defenders.
						Committed to upholding justice and protecting the innocent, they
						stand as beacons of hope in a world plagued by darkness. Clad in
						gleaming armor, their ranks are filled with knights, paladins, and
						righteous champions who wield weapons imbued with holy power.
						Through unwavering devotion and a strict code of honor, the Order of
						the Silver Dawn seeks to vanquish evil, cleanse corrupted lands, and
						restore peace and balance to the realm. Join their ranks and become
						a paragon of righteousness, fighting for the greater good and
						vanquishing all who would threaten the sanctity of Aetheria.
					</p> */}
					<p>
						<img
							src="/faction-two.svg"
							alt="Faction two"
							className="faction-two-description"
						/>
						The Shadow Syndicate - Masters of secrecy and manipulation, skilled
						in espionage, assassination, and subterfuge, operating in the
						shadows to shape the fate of Aetheria.
					</p>
					{/* <p>
							Steeped in secrecy and whispers, the Shadow Syndicate is a
							clandestine faction that operates in the shadows, manipulating
							events and weaving a web of intrigue. Masters of espionage,
							assassination, and subterfuge, they thrive in the darkness,
							exploiting the weaknesses of their enemies. Whether you are a
							cunning rogue, a skilled spy, or a deadly assassin, the Shadow
							Syndicate offers you the chance to delve into a world of secrecy
							and power. With their vast network of informants, expertise in
							covert operations, and the ability to strike from the shadows, the
							Shadow Syndicate plays a dangerous game, seeking to control the
							fate of Aetheria without revealing their true intentions. Embrace
							the shadows and unlock the true potential of deception and
							manipulation as you navigate a world where nothing is as it seems.
						</p> */}
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
					{/* <button>Create Character</button> */}
				</div>
			</Html>
		</>
	);
};

export default Interface;
