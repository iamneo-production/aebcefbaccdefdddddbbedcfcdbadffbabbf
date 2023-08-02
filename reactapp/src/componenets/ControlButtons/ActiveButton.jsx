import React from 'react';

export default function ActiveButton({handlePauseResume, handleReset, isPaused}){
    return (
        <div className="btn-grp">
            {isPaused ? 
                <button 
                    className="btn btn-one"
                    onClick={handlePauseResume}
                    data-testid='resume'>  
                    Resume
                </button>
                :
                <button 
                    className="btn btn-one"
                    onClick={handlePauseResume}
                    data-testid='pause'>
                    Pause
                </button>
            }

            <button 
                className="btn btn-two"
                onClick={handleReset}>
                Reset
            </button>
	</div>
    )
}