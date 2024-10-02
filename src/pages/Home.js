import React from 'react';

const Home = () => (
  <div>
    <section className="hero">
      <h1>Welcome to the Education Platform</h1>
      <p>Learn at your own pace with our curated courses.</p>
      <button>Enroll Now</button>
    </section>
    
    <section className="highlights">
      <h2>Popular Courses</h2>
      <div className="course-list">
        <div className="course-item">
          <h3>Introduction to Programming</h3>
          <p>Learn the basics of programming with Python.</p>
        </div>
        <div className="course-item">
          <h3>Web Development</h3>
          <p>Build modern web applications using HTML, CSS, and JavaScript.</p>
        </div>
        <div className="course-item">
          <h3>Data Science</h3>
          <p>Analyze data and build machine learning models.</p>
        </div>
      </div>
    </section>
    
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-item">
        <p>"This platform has transformed my career!" - Jane Doe</p>
      </div>
      <div className="testimonial-item">
        <p>"The courses are well-structured and easy to follow." - John Smith</p>
      </div>
    </section>
  </div>
);

export default Home;