import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";


interface HomeInfoProps {
  currentStage: number;
}

const InfoBox = ({
  text,
  link,
  btnText,
}: {
  text: string;
  link: string;
  btnText: string;
}) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="Arrow Icon" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent: { [key: number]: JSX.Element } = {
  1: (
    <h1 className="sm:text-xl sm: leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Kurt</span> 👋
      <br />A Front End developer with a passion for creating beautiful and
      functional websites.
    </h1>
  ),

  2: (
    <InfoBox
      text="Worked with many projects and developing many skills"
      link="/3D-Portfolio_Island/"
      btnText="Learn more"
    />
  ),

  3: (
    <InfoBox
      text="Led multiple projects to success over the years"
      link="https://kurtbadillo.com"
      btnText="Visit my portfolio"
    />
  ),

  4: (
    <InfoBox
      text="Need a project done? I am available for hire"
      link="/contact"
      btnText="Let us work together"
    />
  ),
};

const HomeInfo: React.FC<HomeInfoProps> = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
