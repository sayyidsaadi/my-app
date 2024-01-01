const SectionHeading = ({ title }) => {
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="h2 text-capitalize">{title}</h2>
          <div className="section-divider mx-auto"></div>
        </div>
      </div>
    </>
  );
};

export default SectionHeading;
