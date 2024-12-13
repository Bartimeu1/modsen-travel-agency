import { Banner } from './components/Banner';
import { Facilities } from './components/Facilities';
import { Reviews } from './components/Reviews';
import { Rooms } from './components/Rooms';

const HomePage = () => {
  return (
    <>
      <Banner />
      <Facilities />
      <Rooms />
      <Reviews />
    </>
  );
};

export default HomePage;
