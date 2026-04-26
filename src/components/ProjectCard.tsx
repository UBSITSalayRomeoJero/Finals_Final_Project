interface Props {
  title: string;
  image: string;
  description: string;
  onClick: () => void;
}

const ProjectCard = ({ title, image, description, onClick }: Props) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm" onClick={onClick} style={{ cursor: "pointer" }}>
        <img src={image} className="card-img-top" />

        <div className="card-body">
          <h5 className="fw-bold">{title}</h5>
          <p className="text-muted">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;