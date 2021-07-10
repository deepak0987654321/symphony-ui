import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
interface PromoteProps {}

export const Promote: React.FC<PromoteProps> = ({}) => {
  return (
    <div className="">
      <div className="card-body">
        <div className="card-content">
          <div className="top-wrapper">
            <div className="card-head flex justify-between">
              <div className="w-4 text-primary lg:text-white">
                <ArrowBackIosIcon />
              </div>
              <h4 className="text-center text-dark lg:text-white text-2xl al">
                Promote Cavaliero
              </h4>
              <div className=" w-4 text-primary lg:text-white ">
                <CloseIcon />
              </div>
            </div>

            <div className="">
              <div className="middle-wrapper px-4 lg:px-10 ">
                <div className="relative">
                  <a className="float-right text-primary">Learn more</a>
                  <h4 className="mt-10 mb-5 text-2xl">Your connections </h4>
                  <p>
                    To help Symphony build the most effective audiences for your
                    marketing, please connect your streaming services and social
                    media profiles.
                  </p>
                </div>
                <div className="h-10"></div>

                <form action="">
                  <hr className="h-px	bg-gray-200" />
                  <div className="add-new">
                    {/* Audience */}
                    <div>
                      <div className="sy-card">
                        <div className="flex flex-none text-center">
                          <div className="number-blk added">01</div>
                          <div className="px-3 items-center flex">
                            <h5 className="text-dark">Audience</h5>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="flex items-center ">
                              <img
                                className="w-9"
                                src={
                                  require("../../assets/images/tick-light.png")
                                    .default
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* loading block */}
                    <div className="sy-card">
                      <div className="flex">
                        <div className=" flex-none loading-blk">
                          <div className="svg-loader">
                            <svg
                              className="svg-container"
                              height="36"
                              width="36"
                              viewBox="0 0 100 100"
                            >
                              <circle
                                className="loader-svg bg"
                                cx="50"
                                cy="50"
                                r="45"
                              ></circle>
                              <circle
                                className="loader-svg animate"
                                cx="50"
                                cy="50"
                                r="45"
                              ></circle>
                            </svg>
                          </div>
                        </div>
                        <div className="px-3 items-center flex">
                          <h5 className="text-dark text-left">
                            Symphony is building your audience
                          </h5>
                        </div>
                      </div>
                    </div>

                    {/* Check out the audience */}
                    <div className="text-center p-4 lg:p-10 text-primary font-bold border-b border-backgound-100">
                      Check out the audience
                    </div>

                    {/* images */}
                    <div>
                      <div className="sy-card">
                        <div className="flex flex-none text-center">
                          <div className="number-blk">02</div>
                          <div className="px-3 items-center flex">
                            <h5 className="text-dark">Images</h5>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="flex items-center hidden ">
                              <img
                                className="w-9"
                                src={
                                  require("../../assets/images/tick-light.png")
                                    .default
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Texts */}
                    <div>
                      <div className="sy-card">
                        <div className="flex flex-none text-center">
                          <div className="number-blk">03</div>
                          <div className="px-3 items-center flex">
                            <h5 className="text-dark">Texts</h5>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="flex items-center hidden ">
                              <img
                                className="w-9"
                                src={
                                  require("../../assets/images/tick-light.png")
                                    .default
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* Well done! */}
              <div className="card-success text-center relative h-screen lg:h-auto hidden">
                <div className="mx-auto p-10 lg:p-20">
                  <img
                    className="mx-auto m-10"
                    src={require("../../assets/images/tick-light.png").default}
                  />
                  <h5 className="font-bold ">Well done!</h5>
                  <p className="font-light text-fontColor-100 ">
                    Your campaign is ready to roll
                  </p>
                </div>
                <div className="cta-wrapper">
                  <div className="text-center pb-4 px-4 lg:px-10">
                    <button className="btn-primary">Show me my campaign</button>
                  </div>
                  <a className="text-primary font-bold">Edit my campaign</a>
                  <div className="h-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10"></div>
      </div>
    </div>
  );
};
