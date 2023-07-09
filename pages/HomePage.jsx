import React from 'react';
function HomePage() {
  return (
    <div className="container">
      <div className="panel">
        <h2>App list task</h2>
        
        <p className="justified-paragraph">
          Our task listing application is designed to help you efficiently manage your personal tasks. With our intuitive interface, you can easily create, organize, and prioritize your to-do list. Stay on top of your daily, weekly, and monthly responsibilities with ease.
          Effortlessly add tasks, set due dates, and assign categories to keep your tasks organized. Receive reminders and notifications so you never miss an important deadline. Our application allows you to track your progress, mark tasks as complete, and even delegate tasks to others when needed.
          Whether you're a busy professional, a student with multiple assignments, or simply someone looking to stay organized, our task listing application is here to simplify your life. Experience seamless productivity and enjoy a sense of accomplishment as you check off your completed tasks.
          Start using our application today and regain control of your busy schedule. Stay productive, meet deadlines, and achieve your goals with our user-friendly task listing solution. Let us help you streamline your day and make task management a breeze.
        </p>
      </div>
      <div className="panel">
        <img className="icon-image" src="/public/icon/checklist.png" alt="" />
      </div>
    </div>
  );
}
export default HomePage;