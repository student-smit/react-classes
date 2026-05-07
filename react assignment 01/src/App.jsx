import "./App.css";

const App = () => {
  return (
    <div className="page">

      {/* Student Card */}
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="profile-img"
        />
        <h1 className="name">Musayyab Shah</h1>
        <h3 className="course">Web Development</h3>
        <h4 className="institute">SMIT - Saylani Mass IT Training</h4>
        <p className="intro">
          I am a passionate web development student learning React and modern
          JavaScript. I love building creative and clean user interfaces. My
          goal is to become a full-stack developer.
        </p>
        <button className="btn">Contact Me</button>
      </div>

      {/* Teacher Card - Bonus */}
      <div className="card teacher-card">
        <img
          src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Teacher"
          className="profile-img"
        />
        <h1 className="name">Sir MajidHusain</h1>
        <h3 className="course">Full Stack Developer</h3>
        <h4 className="institute">5 Years Experience</h4>
        <p className="intro">
          An amazing teacher who explains complex concepts in a very simple and
          easy way. Always supportive and motivating for students.
        </p>
        <button className="btn">Contact Teacher</button>
      </div>

    </div>
  );
};

export default App;