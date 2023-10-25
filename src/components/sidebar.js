const Sidebar = () => {
    return (
      <div className="sidebar">
        {/* Sidebar content */}
        <ul>
        <li>
            <i className="far fa-chart-bar"></i> Dashboard
          </li>
          <li style={{color:"blue"}}>
            <i className="fas fa-award"></i> Skill Test
          </li>
          <li>
            <i className="far fa-file"></i> Internships
          </li>
        </ul>
      </div>
    );
  };
  export default Sidebar;