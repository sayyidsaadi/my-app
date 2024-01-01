import { Helmet } from "react-helmet";
import favIcon from "../../assets/img/jjf-surgical-logo.png";
const PageTitle = ({ title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="shortcut icon" href={favIcon} type="image/x-icon" />
      </Helmet>
    </>
  );
};

export default PageTitle;
