import React, { useEffect, useRef } from "react";

import { useGLTF, useAnimations } from "@react-three/drei";

export default function FemaleA(props) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF("/FemaleA.glb");
	const { actions, names } = useAnimations(animations, group);

	useEffect(() => {
		actions[names[4]].play();
	}, []);

	// material-color={props.skinTone}

	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Female_A" position={[0, -0.9, 0]}>
				<group name="Female_A_1">
					<group
						name="Character"
						position={[0, 0.92, 0]}
						rotation={[-Math.PI / 2, 0, -1.57]}
					>
						<group name="Character_Pelvis" rotation={[-Math.PI / 2, 0, -1.57]}>
							<group
								name="Character_L_Thigh"
								position={[0, 0, 0.08]}
								rotation={[-3.14, -0.03, 3.06]}
							>
								<group name="Character_L_Calf" position={[0.44, 0, 0]}>
									<group
										name="Character_L_Foot"
										position={[0.4, 0, 0]}
										rotation={[-0.21, -0.05, 0.08]}
									>
										<group
											name="Character_L_Toe0"
											position={[0.07, 0.11, 0]}
											rotation={[0, 0, Math.PI / 2]}
										>
											<primitive
												object={
													nodes.Set_Character_Character_L_Toe0_Female_Legs_2
												}
											/>
										</group>
										<primitive
											object={
												nodes.Set_Character_Character_L_Foot_Female_Legs_2
											}
										/>
									</group>
									<primitive
										object={nodes.Set_Character_Character_L_Calf_Female_Legs_2}
									/>
								</group>
								<primitive
									object={nodes.Set_Character_Character_L_Thigh_Female_Legs_2}
								/>
							</group>
							<group
								name="Character_R_Thigh"
								position={[0, 0, -0.08]}
								rotation={[3.14, 0.03, 3.06]}
							>
								<group name="Character_R_Calf" position={[0.44, 0, 0]}>
									<group
										name="Character_R_Foot"
										position={[0.4, 0, 0]}
										rotation={[0.21, 0.05, 0.08]}
									>
										<group
											name="Character_R_Toe0"
											position={[0.07, 0.11, 0]}
											rotation={[0, 0, Math.PI / 2]}
										>
											<primitive
												object={
													nodes.Set_Character_Character_R_Toe0_Female_Legs_2
												}
											/>
										</group>
										<primitive
											object={
												nodes.Set_Character_Character_R_Foot_Female_Legs_2
											}
										/>
									</group>
									<primitive
										object={nodes.Set_Character_Character_R_Calf_Female_Legs_2}
									/>
								</group>
								<primitive
									object={nodes.Set_Character_Character_R_Thigh_Female_Legs_2}
								/>
							</group>
							<group
								name="Character_Spine"
								position={[0.05, 0.02, 0]}
								rotation={[0, 0, 0.08]}
							>
								<group
									name="Character_Spine1"
									position={[0.13, 0, 0]}
									rotation={[0, 0, -0.27]}
								>
									<group
										name="Character_Spine2"
										position={[0.13, 0, 0]}
										rotation={[0, 0, -0.19]}
									>
										<group
											name="Character_L_Clavicle"
											position={[0.11, -0.01, 0.03]}
											rotation={[0.25, 1.38, 3.14]}
										>
											<group
												name="Character_L_UpperArm"
												position={[0.1, 0, 0]}
												rotation={[0.43, 0.69, 0.03]}
											>
												<group
													name="Character_L_Forearm"
													position={[0.25, 0, 0]}
													rotation={[0, 0, -0.46]}
												>
													<group
														name="Character_L_Hand"
														position={[0.18, 0, 0]}
														rotation={[-1.21, 0, 0]}
													>
														<group
															name="Character_L_Finger0"
															position={[0.02, 0, -0.02]}
															rotation={[1.44, 0.46, -0.66]}
														>
															<group
																name="Character_L_Finger01"
																position={[0.04, 0, 0]}
																rotation={[0, 0, 0.28]}
															>
																<group
																	name="Character_L_Finger02"
																	position={[0.02, 0, 0]}
																	rotation={[0, 0, -0.13]}
																>
																	<primitive
																		object={
																			nodes.Set_Character_Character_L_Finger02_Female_Torso_3
																		}
																	/>
																	<group name="Set_Character_Character_L_Finger02_Female_Base_Torso" />
																</group>
																<primitive
																	object={
																		nodes.Set_Character_Character_L_Finger01_Female_Torso_3
																	}
																/>
																<group name="Set_Character_Character_L_Finger01_Female_Base_Torso" />
															</group>
															<primitive
																object={
																	nodes.Set_Character_Character_L_Finger0_Female_Torso_3
																}
															/>
															<group name="Set_Character_Character_L_Finger0_Female_Base_Torso" />
														</group>
														<group
															name="Character_L_Finger1"
															position={[0.09, 0, -0.03]}
															rotation={[0, 0.06, 0.14]}
														>
															<group
																name="Character_L_Finger11"
																position={[0.02, 0, 0]}
																rotation={[0, 0, 0.16]}
															>
																<group
																	name="Character_L_Finger12"
																	position={[0.02, 0, 0]}
																	rotation={[0, 0, 0.16]}
																>
																	<primitive
																		object={
																			nodes.Set_Character_Character_L_Finger12_Female_Torso_3
																		}
																	/>
																	<group name="Set_Character_Character_L_Finger12_Female_Base_Torso" />
																</group>
																<primitive
																	object={
																		nodes.Set_Character_Character_L_Finger11_Female_Torso_3
																	}
																/>
																<group name="Set_Character_Character_L_Finger11_Female_Base_Torso" />
															</group>
															<primitive
																object={
																	nodes.Set_Character_Character_L_Finger1_Female_Torso_3
																}
															/>
															<group name="Set_Character_Character_L_Finger1_Female_Base_Torso" />
														</group>
														<group
															name="Character_L_Finger2"
															position={[0.1, 0, 0]}
															rotation={[0, -0.05, 0.28]}
														>
															<group
																name="Character_L_Finger21"
																position={[0.02, 0, 0]}
																rotation={[0, 0, 0.17]}
															>
																<group
																	name="Character_L_Finger22"
																	position={[0.02, 0, 0]}
																	rotation={[0, 0, 0.06]}
																>
																	<primitive
																		object={
																			nodes.Set_Character_Character_L_Finger22_Female_Torso_3
																		}
																	/>
																	<group name="Set_Character_Character_L_Finger22_Female_Base_Torso" />
																</group>
																<primitive
																	object={
																		nodes.Set_Character_Character_L_Finger21_Female_Torso_3
																	}
																/>
																<group name="Set_Character_Character_L_Finger21_Female_Base_Torso" />
															</group>
															<primitive
																object={
																	nodes.Set_Character_Character_L_Finger2_Female_Torso_3
																}
															/>
															<group name="Set_Character_Character_L_Finger2_Female_Base_Torso" />
														</group>
														<group
															name="Character_L_Finger3"
															position={[0.09, 0, 0.02]}
															rotation={[0, -0.12, 0.23]}
														>
															<group
																name="Character_L_Finger31"
																position={[0.02, 0, 0]}
																rotation={[0, 0, 0.23]}
															>
																<group
																	name="Character_L_Finger32"
																	position={[0.02, 0, 0]}
																	rotation={[0, 0, 0.23]}
																>
																	<primitive
																		object={
																			nodes.Set_Character_Character_L_Finger32_Female_Torso_3
																		}
																	/>
																	<group name="Set_Character_Character_L_Finger32_Female_Base_Torso" />
																</group>
																<primitive
																	object={
																		nodes.Set_Character_Character_L_Finger31_Female_Torso_3
																	}
																/>
																<group name="Set_Character_Character_L_Finger31_Female_Base_Torso" />
															</group>
															<primitive
																object={
																	nodes.Set_Character_Character_L_Finger3_Female_Torso_3
																}
															/>
															<group name="Set_Character_Character_L_Finger3_Female_Base_Torso" />
														</group>
														<group
															name="Character_L_Finger4"
															position={[0.08, 0, 0.04]}
															rotation={[0, -0.34, 0.27]}
														>
															<group
																name="Character_L_Finger41"
																position={[0.02, 0, 0]}
																rotation={[0, 0, 0.23]}
															>
																<group
																	name="Character_L_Finger42"
																	position={[0.02, 0, 0]}
																	rotation={[0, 0, 0.23]}
																>
																	<primitive
																		object={
																			nodes.Set_Character_Character_L_Finger42_Female_Torso_3
																		}
																	/>
																	<group name="Set_Character_Character_L_Finger42_Female_Base_Torso" />
																</group>
																<primitive
																	object={
																		nodes.Set_Character_Character_L_Finger41_Female_Torso_3
																	}
																/>
																<group name="Set_Character_Character_L_Finger41_Female_Base_Torso" />
															</group>
															<primitive
																object={
																	nodes.Set_Character_Character_L_Finger4_Female_Torso_3
																}
															/>
															<group name="Set_Character_Character_L_Finger4_Female_Base_Torso" />
														</group>
														<primitive
															object={
																nodes.Set_Character_Character_L_Hand_Female_Torso_3
															}
														/>
														<group name="Set_Character_Character_L_Hand_Female_Base_Torso" />
													</group>
													<primitive
														object={
															nodes.Set_Character_Character_L_Forearm_Female_Torso_3
														}
													/>
													<group name="Set_Character_Character_L_Forearm_Female_Base_Torso" />
												</group>
												<primitive
													object={
														nodes.Set_Character_Character_L_UpperArm_Female_Torso_3
													}
												/>
												<group name="Set_Character_Character_L_UpperArm_Female_Base_Torso" />
											</group>
											<primitive
												object={
													nodes.Set_Character_Character_L_Clavicle_Female_Torso_3
												}
											/>
											<group name="Set_Character_Character_L_Clavicle_Female_Base_Torso" />
										</group>
										<group
											name="Character_Neck"
											position={[0.13, 0, 0]}
											rotation={[0, 0, 0.53]}
										>
											<group
												name="Character_Head"
												position={[0.09, 0, 0]}
												rotation={[0, 0, -0.14]}
											>
												<primitive
													object={
														nodes.Set_Character_Character_Head_Female_Torso_3
													}
												/>
												<group name="Set_Character_Character_Head_Female_Base_Torso" />
												<primitive
													object={
														nodes.Set_Character_Character_Head_Female_Head_3
													}
												/>
												<primitive
													object={
														nodes.Set_Character_Character_Head_Female_Hair_4
													}
												/>
												<primitive
													object={
														nodes.Set_Character_Character_Head_Female_Hair_3
													}
												/>
												<primitive
													object={
														nodes.Set_Character_Character_Head_Female_Hair_2
													}
												/>
												<primitive
													object={
														nodes.Set_Character_Character_Head_Female_Hair_1
													}
												/>
											</group>
											<primitive
												object={
													nodes.Set_Character_Character_Neck_Female_Torso_3
												}
											/>
											<group name="Set_Character_Character_Neck_Female_Base_Torso" />
										</group>
										<group
											name="Character_R_Clavicle"
											position={[0.11, -0.01, -0.03]}
											rotation={[-0.25, -1.38, 3.14]}
										>
											<group
												name="Character_R_UpperArm"
												position={[0.1, 0, 0]}
												rotation={[-0.43, -0.69, 0.03]}
											>
												<group
													name="Character_R_Forearm"
													position={[0.25, 0, 0]}
													rotation={[0, 0, -0.46]}
												>
													<group
														name="Character_R_Hand"
														position={[0.18, 0, 0]}
														rotation={[1.21, 0, 0]}
													>
														<group
															name="Character_R_Finger0"
															position={[0.02, 0, 0.02]}
															rotation={[-1.44, -0.46, -0.66]}
														>
															<group
																name="Character_R_Finger01"
																position={[0.04, 0, 0]}
																rotation={[0, 0, 0.28]}
															>
																<group
																	name="Character_R_Finger02"
																	position={[0.02, 0, 0]}
																	rotation={[0, 0, -0.13]}
																>
																	<primitive
																		object={
																			nodes.Set_Character_Character_R_Finger02_Female_Torso_3
																		}
																	/>
																	<group name="Set_Character_Character_R_Finger02_Female_Base_Torso" />
																</group>
																<primitive
																	object={
																		nodes.Set_Character_Character_R_Finger01_Female_Torso_3
																	}
																/>
																<group name="Set_Character_Character_R_Finger01_Female_Base_Torso" />
															</group>
															<primitive
																object={
																	nodes.Set_Character_Character_R_Finger0_Female_Torso_3
																}
															/>
															<group name="Set_Character_Character_R_Finger0_Female_Base_Torso" />
														</group>
														<group
															name="Character_R_Finger1"
															position={[0.09, 0, 0.03]}
															rotation={[0, -0.06, 0.14]}
														>
															<group
																name="Character_R_Finger11"
																position={[0.02, 0, 0]}
																rotation={[0, 0, 0.16]}
															>
																<group
																	name="Character_R_Finger12"
																	position={[0.02, 0, 0]}
																	rotation={[0, 0, 0.16]}
																>
																	<primitive
																		object={
																			nodes.Set_Character_Character_R_Finger12_Female_Torso_3
																		}
																	/>
																	<group name="Set_Character_Character_R_Finger12_Female_Base_Torso" />
																</group>
																<primitive
																	object={
																		nodes.Set_Character_Character_R_Finger11_Female_Torso_3
																	}
																/>
																<group name="Set_Character_Character_R_Finger11_Female_Base_Torso" />
															</group>
															<primitive
																object={
																	nodes.Set_Character_Character_R_Finger1_Female_Torso_3
																}
															/>
															<group name="Set_Character_Character_R_Finger1_Female_Base_Torso" />
														</group>
														<group
															name="Character_R_Finger2"
															position={[0.1, 0, 0]}
															rotation={[0, 0.05, 0.28]}
														>
															<group
																name="Character_R_Finger21"
																position={[0.02, 0, 0]}
																rotation={[0, 0, 0.17]}
															>
																<group
																	name="Character_R_Finger22"
																	position={[0.02, 0, 0]}
																	rotation={[0, 0, 0.06]}
																>
																	<primitive
																		object={
																			nodes.Set_Character_Character_R_Finger22_Female_Torso_3
																		}
																	/>
																	<group name="Set_Character_Character_R_Finger22_Female_Base_Torso" />
																</group>
																<primitive
																	object={
																		nodes.Set_Character_Character_R_Finger21_Female_Torso_3
																	}
																/>
																<group name="Set_Character_Character_R_Finger21_Female_Base_Torso" />
															</group>
															<primitive
																object={
																	nodes.Set_Character_Character_R_Finger2_Female_Torso_3
																}
															/>
															<group name="Set_Character_Character_R_Finger2_Female_Base_Torso" />
														</group>
														<group
															name="Character_R_Finger3"
															position={[0.09, 0, -0.02]}
															rotation={[0, 0.12, 0.23]}
														>
															<group
																name="Character_R_Finger31"
																position={[0.02, 0, 0]}
																rotation={[0, 0, 0.23]}
															>
																<group
																	name="Character_R_Finger32"
																	position={[0.02, 0, 0]}
																	rotation={[0, 0, 0.23]}
																>
																	<primitive
																		object={
																			nodes.Set_Character_Character_R_Finger32_Female_Torso_3
																		}
																	/>
																	<group name="Set_Character_Character_R_Finger32_Female_Base_Torso" />
																</group>
																<primitive
																	object={
																		nodes.Set_Character_Character_R_Finger31_Female_Torso_3
																	}
																/>
																<group name="Set_Character_Character_R_Finger31_Female_Base_Torso" />
															</group>
															<primitive
																object={
																	nodes.Set_Character_Character_R_Finger3_Female_Torso_3
																}
															/>
															<group name="Set_Character_Character_R_Finger3_Female_Base_Torso" />
														</group>
														<group
															name="Character_R_Finger4"
															position={[0.08, 0, -0.04]}
															rotation={[0, 0.34, 0.27]}
														>
															<group
																name="Character_R_Finger41"
																position={[0.02, 0, 0]}
																rotation={[0, 0, 0.23]}
															>
																<group
																	name="Character_R_Finger42"
																	position={[0.02, 0, 0]}
																	rotation={[0, 0, 0.23]}
																>
																	<primitive
																		object={
																			nodes.Set_Character_Character_R_Finger42_Female_Torso_3
																		}
																	/>
																	<group name="Set_Character_Character_R_Finger42_Female_Base_Torso" />
																</group>
																<primitive
																	object={
																		nodes.Set_Character_Character_R_Finger41_Female_Torso_3
																	}
																/>
																<group name="Set_Character_Character_R_Finger41_Female_Base_Torso" />
															</group>
															<primitive
																object={
																	nodes.Set_Character_Character_R_Finger4_Female_Torso_3
																}
															/>
															<group name="Set_Character_Character_R_Finger4_Female_Base_Torso" />
														</group>
														<primitive
															object={
																nodes.Set_Character_Character_R_Hand_Female_Torso_3
															}
														/>
														<group name="Set_Character_Character_R_Hand_Female_Base_Torso" />
													</group>
													<primitive
														object={
															nodes.Set_Character_Character_R_Forearm_Female_Torso_3
														}
													/>
													<group name="Set_Character_Character_R_Forearm_Female_Base_Torso" />
												</group>
												<primitive
													object={
														nodes.Set_Character_Character_R_UpperArm_Female_Torso_3
													}
												/>
												<group name="Set_Character_Character_R_UpperArm_Female_Base_Torso" />
											</group>
											<primitive
												object={
													nodes.Set_Character_Character_R_Clavicle_Female_Torso_3
												}
											/>
											<group name="Set_Character_Character_R_Clavicle_Female_Base_Torso" />
										</group>
										<primitive
											object={
												nodes.Set_Character_Character_Spine2_Female_Torso_3
											}
										/>
										<group name="Set_Character_Character_Spine2_Female_Base_Torso" />
									</group>
									<primitive
										object={nodes.Set_Character_Character_Spine1_Female_Torso_3}
									/>
									<group name="Set_Character_Character_Spine1_Female_Base_Torso" />
								</group>
								<primitive
									object={nodes.Set_Character_Character_Spine_Female_Torso_3}
								/>
								<primitive
									object={nodes.Set_Character_Character_Spine_Female_Legs_2}
								/>
								<group name="Set_Character_Character_Spine_Female_Base_Torso" />
							</group>
							<primitive
								object={nodes.Set_Character_Character_Pelvis_Female_Torso_3}
							/>
							<primitive
								object={nodes.Set_Character_Character_Pelvis_Female_Legs_2}
							/>
							<group name="Set_Character_Character_Pelvis_Female_Base_Torso" />
						</group>
						<group name="Set_Character_Character_Female_Torso_3" />
						<group name="Set_Character_Character_Female_Legs_2" />
						<group name="Set_Character_Character_Female_Base_Torso" />
					</group>
					<group name="Set_Character_Female_Torso_3">
						<group
							name="Set_Character_Female_Torso_3_1"
							rotation={[-Math.PI / 2, 0, 0]}
						>
							{/* SHIRT & Gloves*/}
							<skinnedMesh
								name="Set_Character_Female_Torso_3_2"
								geometry={nodes.Set_Character_Female_Torso_3_2.geometry}
								material={materials.Female_Torso_3_Red}
								skeleton={nodes.Set_Character_Female_Torso_3_2.skeleton}
								morphTargetDictionary={
									nodes.Set_Character_Female_Torso_3_2.morphTargetDictionary
								}
								morphTargetInfluences={
									nodes.Set_Character_Female_Torso_3_2.morphTargetInfluences
								}
							/>
							{/* CHEST & ARMS*/}
							<skinnedMesh
								name="Set_Character_Female_Torso_3_3"
								geometry={nodes.Set_Character_Female_Torso_3_3.geometry}
								material={materials.Female_Torso_3_Skin_Dark}
								skeleton={nodes.Set_Character_Female_Torso_3_3.skeleton}
								morphTargetDictionary={
									nodes.Set_Character_Female_Torso_3_3.morphTargetDictionary
								}
								morphTargetInfluences={
									nodes.Set_Character_Female_Torso_3_3.morphTargetInfluences
								}
								// Not working...
								// material-color={props.skinTone}
							/>
						</group>
					</group>

					{/* PANTS */}
					<group name="Set_Character_Female_Legs_2">
						<skinnedMesh
							name="Set_Character_Female_Legs_2_1"
							geometry={nodes.Set_Character_Female_Legs_2_1.geometry}
							material={materials.Female_Legs_2_Black}
							skeleton={nodes.Set_Character_Female_Legs_2_1.skeleton}
							morphTargetDictionary={
								nodes.Set_Character_Female_Legs_2_1.morphTargetDictionary
							}
							morphTargetInfluences={
								nodes.Set_Character_Female_Legs_2_1.morphTargetInfluences
							}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
					</group>

					{/* FACE */}
					<group name="Set_Character_Female_Head_3">
						<skinnedMesh
							name="Set_Character_Female_Head_3_1"
							geometry={nodes.Set_Character_Female_Head_3_1.geometry}
							material={materials.Female_Head_3}
							skeleton={nodes.Set_Character_Female_Head_3_1.skeleton}
							morphTargetDictionary={
								nodes.Set_Character_Female_Head_3_1.morphTargetDictionary
							}
							morphTargetInfluences={
								nodes.Set_Character_Female_Head_3_1.morphTargetInfluences
							}
							position={[0, 1.42, -0.04]}
							rotation={[Math.PI / 2, Math.PI / 2, 0]}
							// Not working..
							// material-color={props.skinTone}
						/>
					</group>

					{/* Hair 4 */}
					<group name="Set_Character_Female_Hair_4">
						<skinnedMesh
							name="Set_Character_Female_Hair_4_1"
							geometry={nodes.Set_Character_Female_Hair_4_1.geometry}
							material={materials.Female_Hair_4}
							skeleton={nodes.Set_Character_Female_Hair_4_1.skeleton}
							morphTargetDictionary={
								nodes.Set_Character_Female_Hair_4_1.morphTargetDictionary
							}
							morphTargetInfluences={
								nodes.Set_Character_Female_Hair_4_1.morphTargetInfluences
							}
							position={[0, 1.42, -0.04]}
							rotation={[Math.PI / 2, Math.PI / 2, 0]}
						/>
					</group>

					{/* Hair 3 */}
					<group name="Set_Character_Female_Hair_3">
						<skinnedMesh
							name="Set_Character_Female_Hair_3_1"
							geometry={nodes.Set_Character_Female_Hair_3_1.geometry}
							material={materials.Female_Hair_3}
							skeleton={nodes.Set_Character_Female_Hair_3_1.skeleton}
							morphTargetDictionary={
								nodes.Set_Character_Female_Hair_3_1.morphTargetDictionary
							}
							morphTargetInfluences={
								nodes.Set_Character_Female_Hair_3_1.morphTargetInfluences
							}
							position={[0, 1.42, -0.04]}
							rotation={[1.57, Math.PI / 2, 0]}
						/>
					</group>

					{/* Hair 2 */}
					<group name="Set_Character_Female_Hair_2">
						<skinnedMesh
							name="Set_Character_Female_Hair_2_1"
							geometry={nodes.Set_Character_Female_Hair_2_1.geometry}
							material={materials.Female_Hair_2}
							skeleton={nodes.Set_Character_Female_Hair_2_1.skeleton}
							morphTargetDictionary={
								nodes.Set_Character_Female_Hair_2_1.morphTargetDictionary
							}
							morphTargetInfluences={
								nodes.Set_Character_Female_Hair_2_1.morphTargetInfluences
							}
							position={[0, 1.42, -0.04]}
							rotation={[Math.PI / 2, 1.57, 0]}
						/>
					</group>

					{/* Hair 1 */}
					<group name="Set_Character_Female_Hair_1">
						<skinnedMesh
							name="Set_Character_Female_Hair_1_1"
							geometry={nodes.Set_Character_Female_Hair_1_1.geometry}
							material={materials.Female_Hair_1}
							skeleton={nodes.Set_Character_Female_Hair_1_1.skeleton}
							morphTargetDictionary={
								nodes.Set_Character_Female_Hair_1_1.morphTargetDictionary
							}
							morphTargetInfluences={
								nodes.Set_Character_Female_Hair_1_1.morphTargetInfluences
							}
							position={[0, 1.42, -0.04]}
							rotation={[Math.PI / 2, Math.PI / 2, 0]}
						/>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/FemaleA.glb");
