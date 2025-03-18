import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Mapbox from "../sub-components/Mapbox";
import YourPropertiesTable from "../sub-components/YourPropertiesTable";

interface Property {
  id: number;
  propertyName: string;
  location: string;
  country: string;
  propertyType: string;
  ticketPrice: string;
  currentPrice: string;
  totalShares: string;
  yourShares?: number;
  originalTicketPrice: string;
  latitude: number;
  longitude: number;
}

const dummyData: Property[] = [
  {
    id: 1,
    propertyName: "Riverside Apartments",
    location: "Bengaluru, India",
    country: "India",
    propertyType: "Residential",
    ticketPrice: "$25",
    originalTicketPrice: "$20",
    currentPrice: "Not Trading",
    totalShares: "4533 / 6800",
    yourShares: 1000,
    latitude: 12.9716,
    longitude: 77.5946,
  },
  {
    id: 2,
    propertyName: "Central Mall",
    location: "Paris, France",
    country: "France",
    propertyType: "Commercial",
    ticketPrice: "$345",
    originalTicketPrice: "$300",
    currentPrice: "Not Trading",
    totalShares: "90 / 980",
    latitude: 48.8566,
    longitude: 2.3522,
  },

];

function Portfolio() {
  const navigate = useNavigate();
  const [metadata] = useState({
    totalProfit: 0,
    totalCurrentPortfolioValue: 0,
    totalPropertiesHeld: 0,
    totalSharesHeld: 0,
  });

  return (
    <div className="flex flex-col w-full max-w-full px-4 mx-auto">
      <div className="flex flex-row space-x-6">
        <div className="w-1/2">
          <div className="text-left">
            <p className="text-lg">Portfolio Stats</p>
          </div>
          <hr className="h-[2px] bg-black/5 my-2" />
          <div className="grid grid-cols-2 gap-6 p-4 mb-6 text-center">
            <div className="flex flex-col items-center justify-center py-10 bg-black/10 rounded-2xl">
              <p className="text-5xl font-bold text-black">
                ${metadata.totalCurrentPortfolioValue}
              </p>
              <p className="text-2xl">Your Portfolio</p>
            </div>
            <div className="flex flex-col items-center justify-center py-8 bg-black/10 rounded-2xl">
              <p className="text-5xl font-bold text-black">
                ${metadata.totalProfit}
              </p>
              <p className="text-2xl">Total Profit</p>
            </div>
            <div className="flex flex-col items-center justify-center py-10 bg-black/10 rounded-2xl">
              <p className="text-5xl font-bold text-black">
                {metadata.totalPropertiesHeld}
              </p>
              <p className="text-2xl">Total Projects Owned</p>
            </div>
            <div className="flex flex-col items-center justify-center py-8 bg-black/10 rounded-2xl">
              <p className="text-5xl font-bold text-black">
                {metadata.totalSharesHeld}
              </p>
              <p className="text-2xl">Total Shares Held</p>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className="w-full py-3 mx-4 text-lg text-white bg-black border-2 border-black rounded-xl hover:bg-white hover:text-black"
              onClick={() => navigate("/dashboard")}
            >
              Invest More
            </button>
          </div>
        </div>

        {/* Mapbox Component */}
        <div className="w-[50rem] h-[30rem]">
          <p className="text-lg">Locate your shares</p>
          <hr className="h-[2px] bg-black/5 my-2" />
          <Mapbox dummyData={dummyData} />
        </div>
      </div>
      <div className="pt-8 text-left">
        <p className="text-lg">Your Projects</p>
      </div>
      <div className="py-0 my-0 divider before:bg-black/5 after:bg-black/5"></div>
      <YourPropertiesTable dummyData={dummyData} />
    </div>
  );
}

export default Portfolio;
