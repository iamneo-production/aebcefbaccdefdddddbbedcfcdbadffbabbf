import React from "react";
import "./ControlButtons.css";
import ActiveButton from "./ActiveButton";
import StartButton from "./StartButton";

export default function ControlButtons(props) {
	const { handleReset, handleStart, handlePauseResume, isPaused, active, resetDisabled} = props

	return (
		<div className="Control-Buttons">
		<div>{active ? 
			<ActiveButton 
				handleReset={handleReset}
				isPaused={isPaused}
				handlePauseResume={handlePauseResume}
			/> 
			: 
			<StartButton 
				handleStart={handleStart}
				disabled={resetDisabled}
			/>
		}</div>
		</div>
	);
}
