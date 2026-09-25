import 'bootstrap/dist/css/bootstrap.min.css';
const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
          <div
            className="spinner-border"
            role="status"
            style={{
              margin: "46px",
              height: "56px",
              width: "56px",
              color: "maroon",
            }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
  )
}

export default Loader;