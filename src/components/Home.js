import React, { useState } from 'react';

const Home = () => {
  const [showContainer, setShowContainer] = useState('ask');

  const handleYesClick = () => {
    setShowContainer('yess');
  };

  const handleBackClick = () => {
    setShowContainer('ask');
  };

  const handleNoClick = () => {
    setShowContainer('No');
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          {showContainer === 'ask' ? (
            <div className="col-sm-12 col-md-6 text-center">
              <img
                style={{ maxWidth: '100%' }}
                src="gif/me.gif"
                alt="Ask"
              />
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center mb-5 fs-5">
                    You Loves Me...<span>&#x1F641;</span>
                  </h5>
                  <form>
                    <div className="text-center">
                      <button
                        onClick={handleYesClick}
                        className="btn btn-success mx-4 text-uppercase fw-bold"
                        type="button"
                      >
                        Yes
                      </button>
                      <button
                        onClick={handleNoClick}
                        className="mx-3 btn btn-danger text-uppercase fw-bold"
                        type="button"
                      >
                        No
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : showContainer === 'yess' ? (
            <div className="col-sm-12 col-md-6 text-center">
              <img
                style={{ maxWidth: '100%' }}
                src="gif/yessw.gif"
                alt="Yes"
              /> <br/>
              <button
                onClick={handleBackClick}
                className="btn btn-primary text-uppercase fw-bold mt-4"
                type="button"
              >
                Back
              </button>
            </div>
          ) : (
            <div className="col-sm-12 col-md-6 text-center">
              <img
                style={{ maxWidth: '100%' }}
                src="gif/now.gif"
                alt="No"
              /><br/>
              <button
                onClick={handleBackClick}
                className="btn btn-primary text-uppercase fw-bold mt-4"
                type="button"
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
