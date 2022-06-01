import Projects from '../features/projects/Projects.js';
import Teams from '../features/teams/Teams.js';

export default function LandingPage () {

  return (
    <div>
      <Teams />
      <div className='project-container'>
        <Projects />
      </div>

    </div>
  );
}