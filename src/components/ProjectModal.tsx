const ProjectModal = ({ project, onClose }: any) => {
  return (
    <div className="modal show fade d-block">
      <div className="modal-dialog modal-lg">
        <div className="modal-content bg-dark text-light">

          <div className="modal-header">
            <h5>{project.title}</h5>
            <button className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <img src={project.full} className="img-fluid mb-3 rounded" />
            <p>{project.description}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;