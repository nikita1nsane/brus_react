
import AboutBlock from "../components/AboutBlock";
import CatalogBlock from "../components/CatalogBlock";
import FirstBlock from "../components/FirstBlock";
import Free from "../components/Free";
import GetStartedBlock from "../components/GetStartedBlock";
import Glad from "../components/Glad";
import HowWork from "../components/HowWork";
import ViewBlock from "../components/ViewBlock";



function Home() {
  return (
    <>
      <FirstBlock/> 
      <ViewBlock/>
      <CatalogBlock/>
      <AboutBlock/>
      <GetStartedBlock/>
      <Glad/>
      <HowWork/>
      <Free/>
    </>
  );
}

export default Home;
