import Carousel from "@/components/animata/Carousel";
import PriceChart from "@/components/custom/charts/PriceChart";
import Mapbox from "@/components/custom/Mapbox";
import ValueParameter from "@/components/custom/ValueParameter";
import ViewHighlight from "@/components/custom/ViewHighlight";
import ViewPageUpdates from "@/components/custom/ViewPageUpdates";
import {
  faCalendarDay,
  faChevronLeft,
  faChevronRight,
  faCircleInfo,
  faCopy,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const PropertyView = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-w-full justify-center relative">
      <div className="container flex flex-col lg:flex-row h-[120vh] overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none items-center lg:items-start">
        {/* left container */}
        <div className="p-6 text-left mb-16">
          <div className="flex flex-row items-center justify-between w-full">
            <div
              className="flex flex-row items-center px-6 py-2 mb-2 border-2 rounded-full border-alpha bg-alpha w-fit gap-x-3 hover:cursor-pointer bg-black text-white "
              onClick={() => navigate("/dashboard")}
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                color="#000000"
                className="text-beta text-white"
                size="sm"
              />
              <p className="text-sm text-beta">Back to Dashboard</p>
            </div>
            <div
              className="flex flex-row items-center px-6 py-2 mb-2 border-2 rounded-full border-alpha bg-alpha w-fit gap-x-3 hover:cursor-pointer bg-black text-white "
              onClick={() => navigate("/dashboard/portfolio")}
            >
              <p className="text-sm text-beta">To Portfolio</p>
              <FontAwesomeIcon
                icon={faChevronRight}
                color="#000000"
                className="text-beta text-white"
                size="sm"
              />
            </div>
          </div>
          {/* name */}
          <h1 className="mb-1 text-6xl font-bold">
            {/* {currentProperty?.Name} */}
            Carbon Capture Fields
          </h1>
          {/* property type */}
          {/* <div className="flex flex-row items-center my-3 mt-6 mb-2 gap-x-2">
                {currentProperty.JSONData.attributes.propertyType ===
                "residential" ? (
                  <div className="px-4 py-2 mr-2 text-sm font-bold text-white bg-blue-500 rounded-full">
                    Residential
                  </div>
                ) : currentProperty.JSONData.attributes.propertyType ===
                  "farmingLand" ? (
                  <div className="px-4 py-2 mr-2 text-sm font-bold text-white bg-green-500 rounded-full">
                    Farming
                  </div>
                ) : currentProperty.JSONData.attributes.propertyType ===
                  "commercial" ? (
                  <div className="px-4 py-2 mr-2 text-sm font-bold text-white bg-yellow-500 rounded-full">
                    Commercial
                  </div>
                ) : currentProperty.JSONData.attributes.propertyType ===
                  "emptyPlot" ? (
                  <div className="px-4 py-2 mr-2 text-sm font-bold text-white bg-black rounded-full">
                    Empty Plot
                  </div>
                ) : currentProperty.JSONData.attributes.propertyType ===
                  "industrial" ? (
                  <div className="px-4 py-2 mr-2 text-sm font-bold text-white bg-orange-500 rounded-full">
                    Industrial
                  </div>
                ) : null}
                <p className="flex flex-row items-center text-lg text-black">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-lg">{currentProperty.Location}</p>
                </p>
              </div> */}
          {/* description container */}
          <div className="flex flex-col items-">
            {/* left container */}
            <p className="mt-2 mb-4 text-lg leading-tight text-black">
              {/* {currentProperty.description} */}
              Carbon Capture Fields is a visionary land project designed for
              environmental sustainability. Situated on the outskirts of Pune,
              Maharashtra, this site is earmarked for innovative carbon capture
              and reforestation initiatives. With its strategic location near
              major highways and scenic surroundings, it offers a unique
              opportunity to contribute to the fight against climate change while
              tapping into the region's growing eco-development potential.
            </p>
            {/* divider */}
            <div className="px-0 mx-0 divider divider-horizontal"></div>
            {/* right container */}
            <div className="flex justify-start py-2 mb-6 gap-y-4 gap-x-4 w-fit">
              {/* area */}
              <div className="flex flex-row items-center w-40 p-2 pl-4 bg-white border border-black rounded-xl gap-x-4">
                <div>
                  <FontAwesomeIcon icon={faRulerCombined} size="xl" />
                </div>
                {/* <div className="divider divider-vertical"></div> */}
                <div className="flex flex-col leading-tight">
                  <p className="text-black text-md">Carbon Credits</p>
                  <p className="font-bold text-black text-md">
                    {/* {currentProperty.Area}  */}
                    40000
                  </p>
                </div>
              </div>

              {/* integration date */}
              <div className="flex flex-row items-center w-40 p-2 pl-4 bg-white border border-black rounded-xl gap-x-4">
                <div>
                  <FontAwesomeIcon icon={faCalendarDay} size="xl" />
                </div>
                {/* <div className="divider divider-vertical"></div> */}
                <div className="flex flex-col leading-tight">
                  <p className="text-black text-md">Date</p>
                  <p className="font-bold text-black text-md">
                    {/* convert currentProperty.created_at to human readable format*/}
                    {/* {new Date(
                          currentProperty.created_at
                        ).toLocaleDateString()} */}
                    9/18/24
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* map container */}
          <PriceChart
            initialPrice={
              //   currentProperty.JSONData.attributes.initialSharePrice
              100
            }
            // currentPrice={currentProperty.priceData[0].Price}
            currentPrice={124}
          />
          {/* value parameters */}
          <div className="flex flex-row items-center gap-x-2">
            <h2 className="mb-0 text-xl font-bold">Value Parameters</h2>
            <div
              className="tooltip tooltip-right"
              data-tip="Specific measurable factors related to property value, growth, or financial performance."
            >
              <FontAwesomeIcon icon={faCircleInfo} />
            </div>
          </div>
          <div className="pt-3 pb-4 my-0 divider before:bg-black/10 after:bg-black/10"></div>
          <ValueParameter />
          {/* highlights */}
          <div className="flex flex-row items-center mt-8 gap-x-2">
            <h2 className="mb-0 text-xl font-bold">Highlights</h2>
            <div
              className="tooltip tooltip-right"
              data-tip="Core, static features or amenities that define the property's attractiveness."
            >
              <FontAwesomeIcon icon={faCircleInfo} />
            </div>
          </div>
          <div className="pt-3 pb-4 my-0 divider before:bg-black/10 after:bg-black/10"></div>
          <ViewHighlight />
          {/* updates */}
          <div className="flex flex-row items-center mt-8 gap-x-2">
            <h2 className="mb-0 text-xl font-bold">Updates</h2>
            <div
              className="tooltip tooltip-right"
              data-tip="Recent changes or events that impact the property's appeal or value."
            >
              <FontAwesomeIcon icon={faCircleInfo} />
            </div>
          </div>
          <div className="pt-3 pb-4 my-0 divider before:bg-black/10 after:bg-black/10"></div>
          <ViewPageUpdates />
          <h2 className="mt-8 mb-0 text-xl font-bold">Image Gallery</h2>
          <div className="pt-3 pb-4 my-0 divider before:bg-black/10 after:bg-black/10"></div>
          <div className="mb-6 bg-gray-200 rounded-lg">
            <Carousel className="w-min-72 storybook-fix" />
            {/* <Expandable className="w-full min-w-72 storybook-fix" /> */}
          </div>
          {/* location */},
          <h2 className="mt-8 mb-0 text-xl font-bold">Location</h2>
          <div className="pt-3 pb-4 my-0 divider before:bg-black/10 after:bg-black/10"></div>
          <div className="mb-6 bg-gray-100 rounded-xl h-[30rem]">
            <Mapbox
              location={[18.5204, 73.8567]} // Latitude and Longitude for Pune, Maharashtra
              name="Pune, Maharashtra" // You can change this to any other name you want to display
            />
          </div>
          {/* documents */}
          <h2 className="mt-8 mb-0 text-xl font-bold">Documents</h2>
          <div className="pt-3 pb-4 my-0 divider before:bg-black/10 after:bg-black/10"></div>
          <div className="">
            <div className="grid grid-cols-2 gap-4 text-left">
              {[
                "Property Deed",
                "Sale Agreement",
                "Ownership Transfer Certificate",
                "Inspection Report",
              ].map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start p-2 px-6 text-lg text-center bg-gray-200 rounded-lg"
                >
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-left">{doc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right container  */}
        <div className="w-full p-6 md:w-[40rem] md:sticky md:top-0 md:h-screen flex flex-col gap-y-4 ">
          {/* token metadata container */}
          <div className="flex flex-col items-start p-8 bg-white rounded-3xl justify-center invest-shadow shadow-2xl  shadow-black">
            {/* header */}
            <div className="">
              <p className="text-2xl font-bold">Token Metadata</p>
            </div>
            {/* data container */}
            <div className="flex flex-col w-full mt-2 gap-y-0">
              {/* token address container */}
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-black text-md">Token Address</p>
                <div className="flex flex-row items-center text-sm gap-x-3">
                  <div className="flex flex-row items-center gap-x-1">
                    <FontAwesomeIcon
                      icon={faCopy}
                      onClick={() => {
                        navigator.clipboard.writeText(
                          // currentProperty.TokenAddress
                          "Token Address"
                        );
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* owner address container */}
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-black text-md">Owner Address</p>
                <div className="flex flex-row items-center text-sm gap-x-3">
                  <div className="flex flex-row items-center gap-x-1">
                    <FontAwesomeIcon
                      icon={faCopy}
                      onClick={() => {
                        navigator.clipboard.writeText(
                          // currentProperty.collectionMetadata.metadata
                          "Owner address"
                          // .updateAuthority
                        );
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* current status */}
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-black text-md">Current Status</p>
                <div className="flex flex-row items-center text-md gap-x-3">
                  <div className="flex flex-row items-center gap-x-1">
                    <p className="text-black ">
                      {/* {currentProperty.Status.charAt(0).toUpperCase() +
                currentProperty.Status.slice(1)} */}
                      Launchpad
                    </p>
                  </div>
                </div>
              </div>

              {/* symbol */}
              <div className="flex flex-row items-center justify-between w-full">
                <p className="text-black text-md">NFT Symbol</p>
                <div className="flex flex-row items-center text-md gap-x-3">
                  <div className="flex flex-row items-center gap-x-1">
                    <p className="text-black ">
                      {/* {currentProperty.collectionMetadata.metadata.symbol} */}
                      Sunfar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* divider */}
            <div className="py-3 my-0 divider before:bg-black/5 after:bg-black/5"></div>

            {/* number stats container */}
            <div className="grid w-full grid-cols-4 mt-0 gap-y-3">
              <div className="flex flex-col items-center justify-center">
                <p className="text-black text-md">Owners</p>
                {/* <p className="text-2xl font-bold">
          {
            extractUniqueAddresses(currentProperty.transactions)
              .length
          }
        </p> */}
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-black text-md">IRR</p>
                <p className="text-2xl font-bold">
                  {/* {currentProperty.IRR}% */}
                  11.1%
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-black text-md">ARR</p>
                <p className="text-2xl font-bold">
                  {/* {currentProperty.ARR}% */}
                  9%
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-black text-md">Share Per NFT</p>
                <p className="text-2xl font-bold">
                  {/* {currentProperty.JSONData.attributes.sharePerNFT.toFixed(
            4
          )} */}
                  0.0159%
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-black text-md">Total Shares</p>
                <p className="text-2xl font-bold">
                  {/* {currentProperty.JSONData.attributes
            .initialPropertyValue /
            currentProperty.JSONData.attributes.initialSharePrice} */}
                  6300
                </p>
              </div>
              <div className="flex flex-col center items-center justify-center">
                <p className="text-black text-md">Initial Price</p>
                <p className="text-2xl font-bold">
                  {/* ${currentProperty.JSONData.attributes.initialSharePrice} */}
                  $100
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white rounded-3xl invest-shadow shadow-2xl shadow-black">
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-lg text-left text-black">Current Value</p>
                <p className="text-4xl font-bold">
                  $
                  {/* {currentProperty.priceData[0].Price
            ? Math.round(
                currentProperty.priceData[0].Price * totalShares
              ).toLocaleString("en-US")
            : "$0"}{" "} */}
                  630,000
                  <span className="text-sm font-normal text-black">USD</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg text-black">Original Value</p>
                <p className="text-4xl font-bold">
                  $
                  {/* {Math.round(
            currentProperty.JSONData.attributes
              .initialPropertyValue
          ).toLocaleString("en-US")}{" "} */}
                  630,000
                  <span className="text-sm font-normal text-black">USD</span>
                </p>
              </div>
            </div>

            <div className="items-center justify-center px-6 py-4 pb-6 my-5 mb-4 gap-y-4 rounded-2xl bg-black/10">
              <div className="flex flex-row items-center justify-between text-lg">
                <p className="">Invested</p>
                <p className="">
                  $&nbsp;
                  {/* {currentProperty.launchpadData[0].Raised} */}
                  {/* {(currentProperty.launchpadData.Raised &&
          currentProperty.launchpadData.Raised.toLocaleString(
            "en-US"
          )) ||
          0} */}
                  <span>&nbsp;USDC</span>
                </p>
              </div>
              <div className="h-2 mt-2 mb-2 bg-gray-200 rounded-full">
                {/* <div
          className="h-2 bg-black rounded-full"
          style={{ width: "75%" }}
        ></div> */}

                {/* <Progress
          aria-label="Loading..."
          value={
            (currentProperty.launchpadData[0].Raised /
              currentProperty.JSONData.attributes
                .initialPropertyValue) *
            100
          }
          className="max-w-md"
          classNames={{
            base: "",
            track: "h-[10px] bg-white",
            indicator: "bg-black",
          }}
        /> */}
              </div>
            </div>

            <div className="flex justify-between mb-4">
              <div>
                <p className="text-lg text-left text-black">Share Price</p>
                <p className="text-3xl font-semibold text-left">
                  $
                  {/* {currentProperty.priceData[0].Price
            ? currentProperty.priceData[0].Price.toFixed(1)
            : "0.00"}{" "} */}
                  100
                  <span className="text-sm font-normal text-black">USDC</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg text-black">Available Shares</p>
                <p className="text-3xl font-semibold">
                  {/* {availableShares} */}
                  6256
                  {/* <span className="text-sm font-normal text-black">
          USDC
        </span> */}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <p className="mb-1 text-lg text-black">
                {/* Your Balance: {solBalance.toLocaleString()} USDC */}
                Your Balance: 0 USDC
              </p>
              <input
                type="text"
                placeholder="Enter amount of shares to buy"
                className="w-full px-4 py-2 my-1 text-lg border rounded-lg outline-none bg-black/10"
              // value={investObject.amount}
              // onChange={(e) => {
              //   setInvestObject({
              //     ...investObject,
              //     amount: e.target.value,
              //   });
              // }}
              />
            </div>

            <button
              className="w-full py-2 mb-4 text-lg font-normal text-white bg-black border-2 border-black rounded-xl hover:bg-white hover:text-black"
              onClick={() => {
                // handleBuy();
              }}
            >
              Invest Now with USDC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyView;
