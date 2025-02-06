
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell
} from "@nextui-org/react";
import { ChevronDownIcon } from "../icons/ChevronDownIcon";
import { SearchIcon } from "../icons/SearchIcon";
import usdcCoin from "../../../../assets/svg/usd-coin.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

const AllProducts = () => {


  const columns = [
    { uid: "cover", name: "" },
    { uid: "Name", name: "Project Name" },
    { uid: "propertyType", name: "Project Type" },
    { uid: "status", name: "Status" },
    { uid: "currentPrice", name: "Current Price" },
    { uid: "growth", name: "Growth" },

    { uid: "availableShares", name: "Available Shares" },
    { uid: "actions", name: "Actions" },
  ];

  const projects = [
    {
      name: "Solar Energy Hub",
      location: "Los Angeles, USA",
      type: "Commercial",
      status: "Trading",
      price: 150.75,
      growth: "12.3%",
      available_shares: 8200,
      image: "https://i.ytimg.com/vi/2Hn3djsWvnY/maxresdefault.jpg"
    },
    {
      name: "Wind Power Initiative",
      location: "Berlin, Germany",
      type: "Industrial",
      status: "Launchpad",
      price: 95.00,
      growth: "5.8%",
      available_shares: 10500,
      image: "https://i.ytimg.com/vi/2Hn3djsWvnY/maxresdefault.jpg"
    },
    {
      name: "Green Building Project",
      location: "Tokyo, Japan",
      type: "Commercial",
      status: "Trading",
      price: 120.30,
      growth: "8.2%",
      available_shares: 7500,
      image: "https://i.ytimg.com/vi/2Hn3djsWvnY/maxresdefault.jpg"
    },
    {
      name: "Carbon Capture Fields",
      location: "Pune, Maharashtra, India",
      type: "Reduction",
      status: "Launchpad",
      price: 100.00,
      growth: "0.0%",
      available_shares: 5956,
      image: "https://i.ytimg.com/vi/2Hn3djsWvnY/maxresdefault.jpg"
    },
    {
      name: "EcoLogistics Hub",
      location: "Rotterdam, Netherlands",
      type: "Industrial",
      status: "Launchpad",
      price: 100.00,
      growth: "0.0%",
      available_shares: 8699,
      image: "https://i.ytimg.com/vi/2Hn3djsWvnY/maxresdefault.jpg"
    },
    {
      name: "Hydroelectric Dam",
      location: "Vancouver, Canada",
      type: "Industrial",
      status: "Trading",
      price: 180.90,
      growth: "15.4%",
      available_shares: 6500,
      image: "https://i.ytimg.com/vi/2Hn3djsWvnY/maxresdefault.jpg"
    },
    {
      name: "Biofuel Research Center",
      location: "São Paulo, Brazil",
      type: "Research",
      status: "Launchpad",
      price: 85.50,
      growth: "-2.1%",
      available_shares: 9400,
      image: "https://i.ytimg.com/vi/2Hn3djsWvnY/maxresdefault.jpg"
    },
    {
      name: "EcoAfforestation Drive",
      location: "Portland, Oregon, USA",
      type: "Commercial",
      status: "Trading",
      price: 127.58,
      growth: "27.6%",
      available_shares: 9250,
      image: "https://i.ytimg.com/vi/2Hn3djsWvnY/maxresdefault.jpg"
    },
    {
      name: "Recycling Innovations",
      location: "London, UK",
      type: "Research",
      status: "Trading",
      price: 110.20,
      growth: "9.7%",
      available_shares: 8900,
      image: "https://i.ytimg.com/vi/2Hn3djsWvnY/maxresdefault.jpg"
    },
    {
      name: "GreenBuilding Program",
      location: "Singapore",
      type: "Commercial",
      status: "Trading",
      price: 96.89,
      growth: "-3.1%",
      available_shares: 11000,
      image: "https://i.ytimg.com/vi/2Hn3djsWvnY/maxresdefault.jpg"
    }
  ];


  return (
    <div className="min-w-full px-4 mx-auto pb-10">
      <div className="sm:flex items-center justify-between mb-6">
        <div className="flex flex-col text-center sm:items-start">
          <h2 className="text-2xl font-normal">Explore Projects</h2>
          <h1 className="text-5xl font-bold">Your Next Investment</h1>
        </div>
        <div className="text-center sm:text-right">
          <p className="text-2xl">Total Asset Value</p>
          <p className="text-5xl font-bold">$14,081,000</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 mt-8 mb-6 md:flex-row">
        <div className=" flex flex-wrap gap-4">
          {/* Property Type Filter */}
          <Dropdown>
            <DropdownTrigger>
              <Button endContent={<ChevronDownIcon />} variant="flat" className="h-12 text-base">
                Project Type
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="all types">All Types</DropdownItem>
              <DropdownItem key="residential">Residential</DropdownItem>
              <DropdownItem key="commercial">Commercial</DropdownItem>
              <DropdownItem key="industrial">Industrial</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          {/* Price Filter */}
          <Dropdown>
            <DropdownTrigger>
              <Button endContent={<ChevronDownIcon />} variant="flat" className="h-12 text-base bg-gray-100 rounded-xl">
                Price
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="all prices">All Prices</DropdownItem>
              <DropdownItem key="low to high">Low to High</DropdownItem>
              <DropdownItem key="high to low">High to Low</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        {/* Search Input */}
        <Input
          className="w-full max-w-lg text-base bg-gray-100 rounded-xl"
          placeholder="Search for a property by name"
          startContent={<SearchIcon className="mr-1" />}
          size="lg"
        />
      </div>

      <Table isStriped aria-label="Example static collection table" className="w-[94vw] md:w-full overflow-x-scroll border rounded-2xl">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              allowsSorting
              align={column.uid === "actions" ? "center" : "start"}
              className="text-black text-base"
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={index} className={`${index % 2 !== 0 ? "bg-gray-100" : ""}`}>
              <TableCell>
                <img
                  src={project.image}
                  alt={project.name}
                  className="min-w-12 md:w-12 h-12 rounded-xl object-cover"
                />
              </TableCell>
              <TableCell>
                <div className="text-base font-semibold">{project.name}</div>
                <div className="text-gray-500 text-sm">{project.location}</div>
              </TableCell>
              <TableCell className="text-base">{project.type}</TableCell>
              <TableCell className="text-base">{project.status}</TableCell>
              <TableCell className="text-base font-semibold">
                <div className="flex flex-row items-center gap-x-">
                  <div className="flex flex-row items-center gap-x-2">
                    <img src={usdcCoin} alt="SOL" className="w-6 h-6" />
                    {/* <img src={usdtCoin} alt="SOL" className="w-6 h-6" /> */}
                  </div>
                  <p className="ml-3 font-bold ">
                    <span className="font-normal mr-1">$</span>{project.price.toFixed(2)}
                  </p>
                </div>
              </TableCell>
              <TableCell
              >
                <p className="flex flex-row items-center gap-2 text-base">
                  <FontAwesomeIcon
                    icon={parseInt(project.growth) > 0 ? faArrowTrendUp : faArrowTrendDown}
                    color={parseInt(project.growth) > 0 ? "green" : "red"}
                  />
                  &nbsp;{project.growth}
                </p>
                {/* {project.growth} */}
              </TableCell>
              <TableCell className="text-base">{project.available_shares}</TableCell>
              <TableCell>
                <button className="px-2 py-1 md:px-4 md:py-2 min-w-20 font-bold text-white bg-black border-2 border-black rounded-full hover:bg-white hover:text-black">
                  View & Buy
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
  );
};

export default AllProducts;
