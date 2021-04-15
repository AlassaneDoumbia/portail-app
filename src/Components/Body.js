import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView } from "mdbreact";

const Body = () => {

  return (
    <MDBCard
        className="my-5 px-5 mx-auto"
        style={{ fontWeight: 300, maxWidth: "90%" }}
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Radio
          </h2>
          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          </p>
          <MDBRow>
            <MDBCol lg="6" md="12">
              
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/54.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      18/08/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Soluta nobis est eligendi optio cumque nihil impedit
                          quo minus
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      17/08/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Voluptatem accusantium doloremque
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>

            <MDBCol lg="6" md="12">
              
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      23/08/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Itaque earum rerum hic tenetur a sapiente delectus
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      22/08/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Soluta nobis est eligendi optio cumque nihil impedit
                          quo minus
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(56).jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      21/08/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Maiores alias consequatur aut perferendis
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default Body;