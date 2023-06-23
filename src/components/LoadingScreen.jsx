import { useEffect } from "react";
import { useProgress, Html } from "@react-three/drei";

const LoadingScreen = ({ loadingStarted, setLoadingStarted }) => {
	const { progress, total, loaded, item } = useProgress();

	useEffect(() => {
		if (progress === 100) {
			setTimeout(() => {
				setLoadingStarted(true);
			}, 500);
		}
	}, [progress, total, loaded, item]);

	return (
		<>
			<Html
				className={`${
					loadingStarted ? "loading-screen-finished" : "loading-screen-started"
				}`}
			>
				<img
					className="loading-screen-image"
					src="/test-loading-screen.jpg"
					alt="loading screen"
				/>
				<p className="progress-tracker">Loading {progress.toFixed(0) + "%"} </p>
			</Html>
		</>
	);
};

export default LoadingScreen;
