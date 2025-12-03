import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
              Push your limits with our signature 45-minute circuit — a perfect mix of strength, cardio and mobility. Led by certified coaches, this session boosts endurance, builds lean muscle, and leaves you feeling energized. Suitable for all levels; scale moves to match your fitness.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Train smarter, faster, together. Our bootcamps are short, results-focused programs designed for measurable progress. Each bootcamp includes coach-led sessions, weekly plans, and a supportive community — choose the track that fits your goals.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Power Strength Bootcamp</h4>
            <p>
              Build functional strength and confidence with compound lifts, progressive overload and coach-led technique work. Ideal if you want to lift heavier, move better and gain muscle.
              Duration: 8 weeks · Sessions: 3/week · Level: Intermediate → Advanced
            </p>
          </div>
          <div>
            <h4>HIIT Burn Bootcamp</h4>
            <p>
              Fast-paced interval sessions that torch calories and improve conditioning. Short, intense workouts that fit any schedule — scalable for beginners too.
              Duration: 4 weeks · Sessions: 4/week · Level: All levels
            </p>
          </div>
          <div>
            <h4>Core and Mobility Bootcamp</h4>
            <p>
              Improve posture, reduce pain, and unlock better movement with targeted mobility drills and core-strength routines. Great as a recovery or complementary program.
              Duration: 6 weeks · Sessions: 2–3/week · Level: All levels
            </p>
          </div>
          <div>
            <h4>Endurance & Fat Loss Bootcamp</h4>
            <p>
              Boost stamina, burn fat, and improve your overall fitness with a mix of steady-state cardio, endurance circuits, and metabolic conditioning workouts. Perfect for anyone aiming to improve heart health and achieve sustainable fat loss.
              Duration: 5 weeks · Sessions: 3–4/week · Level: Beginner → Intermediate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
