import React from 'react';

export default function StartButton({handleStart, disabled}){

    return (
        <div>
            <div className="btn-grp">
                <button 
                    className="btn btn-one btn-start"
                    onClick={handleStart}
                    data-testid='start'>
                    Start
                </button>
                <button 
                    className="btn btn-two"
                    data-testid='reset'
                    disabled={disabled}>
                    Reset
                </button>
            </div>
        </div>
    )
}