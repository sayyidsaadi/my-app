import PageTitle from "../../components/PageTitle/PageTitle";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SingleBanner from "../../components/SingleBanner/SingleBanner";
import TechItem from "../../components/TechItem/TechItem";
import { useSelector } from "react-redux";
import { gettechnologyInfo } from "../../fetures/tech/techSlice";
const Technologies = () => {
  const { technologies } = useSelector(gettechnologyInfo);
  console.log(`technologies === ${technologies}`);

  return (
    <>
      <PageTitle title="Surgicare Technologies" />
      <div className="container-fluid mt-5 mb-3 px-0  mx-0">
        <SingleBanner
          SingleBannerTitle="all technologies"
          SingleBannerSubtitile="this is our all technologies list"
        />
      </div>
      <section className="py-5 mb-3">
        <div className="container">
          <SectionHeading title="our technologies" />
          <div className="row">
            {[...technologies]?.reverse().map((tectData, index) => {
              return <TechItem key={index} tectData={tectData} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
