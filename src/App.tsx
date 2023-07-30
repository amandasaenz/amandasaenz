import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Project from './Project';
import UX from './UX';
import Resume from './Resume';
import data from './data/ProjectData';

document.body.style.padding = '0 16px 16px 16px';
document.body.style.margin = '0';

const App: React.FC = () => {
  // console.log(data.art);
  return (
    <div style={{ fontFamily: 'Montserrat', color: '#FF6561' }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/UX' element={<UX />} />
        {data.art.map((x) => (
          <Route
            key={x.id}
            path={`/3D/${x.id}`}
            element={
              <Project
                id={x.id}
                title={x.title}
                thumb={x.thumb}
                images={x.images}
                software={x.software}
                description={x.description}
                demo={x.demo}
              />
            }
          />
        ))}
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;
