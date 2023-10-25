import React, { useState } from 'react';

const ValueForm = ({ onSubmit }) => {
  const [correctAnswers, setCorrectAnswers] = useState('');
  const [rank, setRank] = useState('');
  const [percentage, setPercentage] = useState('');

  const handleSubmit = () => {
    onSubmit(correctAnswers, rank, percentage);
  };

  return (
    <div className='form-modal'>
      <div className='form-group'>
      <h2>Update Scores</h2>
      <img src='html-5.png' alt="html pic" style={{width: "26px", height: "35px"}} />
      </div>
      <div className="form-group">
        <label htmlFor="correctAnswers">Update your <strong>current score(out of 15)</strong>: </label>
        <input
          type="text"
          id="correctAnswers"
          placeholder="Enter correct answers"
          value={correctAnswers}
          onChange={(e) => setCorrectAnswers(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="rank">Update your <strong>rank</strong>:</label>
        <input
          type="text"
          id="rank"
          placeholder="Enter rank"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="percentage">Update your <strong>percentile</strong> :</label>
        <input
          type="text"
          id="percentage"
          placeholder="Enter percentage"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
        />
      </div>
      <div style={{display:"flex", justifyContent:"end", margin:"20px"}}>
      <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};

export default ValueForm;
