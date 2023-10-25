import React, { useState } from "react";
import Modal from "react-modal";
import "./App.css";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import GridContainer from "./components/grids";
import GridContainer2 from "./components/secondGrid";
import ValueForm from "./components/form";

Modal.setAppElement("#root");

const App = () => {
  const [userValues, setUserValues] = useState({
    correctAnswers: "7",
    rank: "10,798",
    percentage: "37",
  });
  const [visible, setVisible] = useState(false);

  const handleValueSubmit = (correctAnswers, rank, percentage) => {
    setUserValues({ correctAnswers, rank, percentage });
    setVisible(false);
  };

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div style={{padding:"10px 15px", width:"55%"}}>
          <h5>Skill test</h5>
        <GridContainer
          correctAnswers={userValues.correctAnswers}
          rank={userValues.rank}
          percentage={userValues.percentage}
          valuesubmit={openModal}
        />

        </div>
        <GridContainer2
         userMarks = {userValues.correctAnswers} />
      </div>

      <Modal
         isOpen={visible}
         onRequestClose={closeModal}
         contentLabel="ValueForm Modal"
         style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
          content: {
            width: '700px', 
            height: '410px',
            margin: 'auto', 
            borderRadius: '8px', 
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <ValueForm onSubmit={handleValueSubmit} />
        <button style={{ transform: 'translate(10%, -50px)'}} onClick={closeModal}>cancel</button>
      </Modal>
    </div>
  );
};

export default App;
