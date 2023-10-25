import Bar from "./bar";
import PieChart from "./pie";

const GridContainer2 = ({userMarks}) => {
    return (
      <div className="grid-container2">
        <div className="grid-item2" style={{marginTop:"76px"}}>
          <div >
            <h4>Syllabus with analysis</h4>
            <div>
              <p>HTML tools, forms, History</p>
              <Bar progress={80} color={'#438AF6'} />
            </div>
            <div>
              <p>Tags and References in HTML</p>
              <Bar progress={60} color={'orange'} />
            </div>
            <div>
              <p>Tables and CSS basics</p>
              <Bar progress={24} color={'#FB5E5E'} />
            </div>
            <div>
              <p>Tables and CSS basics</p>
              <Bar progress={96} color={'#2EC971'} />
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div style={{display:"flex", justifyContent:"space-between", padding:"2px"}}>
            <h4>Question analysis</h4>
          <strong style={{color:"#438AF6"}}>{userMarks}/15</strong></div>
          <p>You scored {userMarks} question correct out of 15. {userMarks>13?'well done!':'However it still needs some improvements'}</p>
          <div style={{display:"flex", justifyContent:"center"}}>
          <PieChart userMarks={userMarks} />
            </div></div>
      </div>
    );
  };

  export default GridContainer2;