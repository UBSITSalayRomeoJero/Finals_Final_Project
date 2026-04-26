const Sidebar = () => {
  return (
    <div className="sidebar p-4 vh-100 text-light" style={{ width: "250px" }}>
      
      <div className="text-center">
        <img
          src="/Romeo.jpg"
          className="rounded-circle mb-3"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <h5 className="fw-bold">Romeo Jero Salay</h5>
      </div>

      <hr />

      <p className="small">IT Student</p>
      <p className="small">University of Baguio</p>

    </div>
  );
};

export default Sidebar;