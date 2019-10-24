import React from 'react';
import ProgressBar from "./ProgressBar/ProgressBar";
import useInput from "./useInput";

export default function App() {
    const [points, inputPoints] = useInput('[]');
    const [completed, inputCompleted] = useInput('[]');
    const tryParse = (str) => {
        try {
            return JSON.parse(str);
        } catch(e) {
            return [];
        }
    };

    return (
      <div>
        <div style={{margin: '0 auto', width: '90%', paddingTop: '40vh'}}>
          <div style={{marginBottom: '5vh', textAlign: 'center'}}>
            <label>Points: </label><input {...inputPoints} style={{width: '33%'}}/>
            <input {...inputCompleted} style={{width: '33%'}} /><label>: Progress</label>
          </div>
          <ProgressBar points={tryParse(points)}
                       completed={tryParse(completed)} height={10} />
        </div>
      </div>
    );
}
