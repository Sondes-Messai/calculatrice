import React, { Component } from "react";

class FooterComponent extends Component {
  render() {
    return (
      <footer className="py-4 mt-auto border-top" style={{ minHeight: "74px" }}>
        <div className="container-xl px-5">
          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-sm-between small">
            <div className="me-sm-2">Copyright © M2i 2022</div>
            <div className="d-flex ms-sm-2">
              <a className="text-decoration-none" href="#!">
                Groupe4
              </a>
              <div className="mx-1"> M2i</div>
              <a className="text-decoration-none" href="#!"></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
