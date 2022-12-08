import React, { Component } from "react";

class HeaderComponent extends Component {
  render() {
    return (
      <nav className="top-app-bar navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid px-4">
          <button
            className="btn btn-lg btn-icon order-1 order-lg-0"
            id="drawerToggle"
          >
            <i className="material-icons">menu</i>
          </button>

          <a className="navbar-brand me-auto" href="#">
            <div className="text-uppercase font-monospace">
              Dashboard des formations Pro
            </div>
          </a>

          <div className="d-flex align-items-center mx-3 me-lg-0">
            <div className="d-flex">
              <div className="dropdown dropdown-notifications d-none d-sm-block">
                <button
                  className="btn btn-lg btn-icon dropdown-toggle me-3"
                  id="dropdownMenuMessages"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="material-icons">mail_outline</i>
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-end me-3 mt-3 py-0 overflow-hidden"
                  aria-labelledby="dropdownMenuMessages"
                >
                  <li>
                    <h6 class="dropdown-header bg-primary text-white fw-500 py-3">
                      Messages
                    </h6>
                  </li>
                  <li>
                    <hr class="dropdown-divider my-0" />
                  </li>
                  <li>
                    <a class="dropdown-item unread" href="#!">
                      <div class="dropdown-item-content">
                        <div class="dropdown-item-content-text">
                          <div
                            class="text-truncate d-inline-block"
                            style={{ maxWidth: "18rem" }}
                          >
                            Salut, j'avais une question à propos de quelque
                            chose, est-ce de toute façon vous pouvez m'aider?
                          </div>
                        </div>
                        <div class="dropdown-item-content-subtext">
                          Mar 12, 2022 · Juan Babin
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider my-0" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      <div class="dropdown-item-content">
                        <div class="dropdown-item-content-text">
                          <div
                            class="text-truncate d-inline-block"
                            style={{ maxWidth: "18rem" }}
                          >
                            Merci pour l'aide de l'autre jour, je voulais suivre
                            avec vous juste pour vous assurer que tout est
                            colonisé.
                          </div>
                        </div>
                        <div class="dropdown-item-content-subtext">
                          Mar 10, 2022 · Christine Hendersen
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider my-0" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      <div class="dropdown-item-content">
                        <div class="dropdown-item-content-text">
                          <div
                            class="text-truncate d-inline-block"
                            style={{ maxWidth: "18rem" }}
                          >
                            Bienvenue dans notre groupe! ça fait plaisir de voir
                            de nouveaux membres et je sais que tu iras très bien
                            !
                          </div>
                        </div>
                        <div className="dropdown-item-content-subtext">
                          Mar 8, 2022 · Celia J. Knight
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider my-0" />
                  </li>
                  <li>
                    <a className="dropdown-item py-3" href="#!">
                      <div className="d-flex align-items-center w-100 justify-content-end text-primary">
                        <div className="fst-button small">View all</div>
                        <i className="material-icons icon-sm ms-1">
                          chevron_right
                        </i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="dropdown dropdown-notifications d-none d-sm-block">
                <button
                  className="btn btn-lg btn-icon dropdown-toggle me-3"
                  id="dropdownMenuNotifications"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="material-icons">notifications</i>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end me-3 mt-3 py-0 overflow-hidden"
                  aria-labelledby="dropdownMenuNotifications"
                >
                  <li>
                    <h6 className="dropdown-header bg-primary text-white fw-500 py-3">
                      Alerts
                    </h6>
                  </li>
                  <li>
                    <hr className="dropdown-divider my-0" />
                  </li>
                  <li>
                    <a className="dropdown-item unread" href="#!">
                      <i className="material-icons leading-icon">assessment</i>
                      <div className="dropdown-item-content me-2">
                        <div className="dropdown-item-content-text">
                          Votre rapport sur les performances de mars est prêt à
                          être consulté.
                        </div>
                        <div className="dropdown-item-content-subtext">
                          Mar 12, 2022 · Performance
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider my-0" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      <i className="material-icons leading-icon">
                        check_circle
                      </i>
                      <div className="dropdown-item-content me-2">
                        <div className="dropdown-item-content-text">
                          Codes de suivi mis à jour avec succès.
                        </div>
                        <div className="dropdown-item-content-subtext">
                          Mar 12, 2022 · Coverage
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider my-0" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      <i className="material-icons leading-icon">warning</i>
                      <div className="dropdown-item-content me-2">
                        <div className="dropdown-item-content-text">
                          Les codes de suivi ont changé et nécessitent une
                          action manuelle.
                        </div>
                        <div className="dropdown-item-content-subtext">
                          Mar 8, 2022 · Coverage
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider my-0" />
                  </li>
                  <li>
                    <a className="dropdown-item py-3" href="#!">
                      <div className="d-flex align-items-center w-100 justify-content-end text-primary">
                        <div className="fst-button small">View all</div>
                        <i className="material-icons icon-sm ms-1">
                          chevron_right
                        </i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="dropdown">
                <button
                  className="btn btn-lg btn-icon dropdown-toggle"
                  id="dropdownMenuProfile"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="material-icons">person</i>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end mt-3"
                  aria-labelledby="dropdownMenuProfile"
                >
                  <li>
                    <a className="dropdown-item" href="#!">
                      <i className="material-icons leading-icon">person</i>
                      <div className="me-3">Profile</div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      <i className="material-icons leading-icon">settings</i>
                      <div className="me-3">Settings</div>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      <i className="material-icons leading-icon">help</i>
                      <div className="me-3">Help</div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      <i className="material-icons leading-icon">logout</i>
                      <div className="me-3">Logout</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderComponent;
