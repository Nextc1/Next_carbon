
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


const AllProducts = () => {

  return (
    <div className="w-full max-w-full px-4 mx-auto">
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
              <Button endContent={<ChevronDownIcon />} variant="flat" className="h-12 text-md">
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
              <Button endContent={<ChevronDownIcon />} variant="flat" className="h-12 text-md bg-gray-100 rounded-xl">
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
          className="w-full max-w-lg text-md bg-gray-100 rounded-xl"
          placeholder="Search for a property by name"
          startContent={<SearchIcon className="mr-1" />}
          size="lg"
        />
      </div>
     

      {/* Table */}
      <Table isStriped aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>{" "}</TableColumn>
      <TableColumn>Project Name</TableColumn>
      <TableColumn>Project Type</TableColumn>
      <TableColumn>Status</TableColumn>
      <TableColumn>Current Price</TableColumn>
      <TableColumn>Growth</TableColumn>
      <TableColumn>Available Shares</TableColumn>
      <TableColumn>Actions</TableColumn>

      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell> <div className="w-12 h-12 rounded-xl bg-gray-200"></div></TableCell>
          <TableCell>Carbon Capture Fields</TableCell>
          <TableCell>Reduction</TableCell>
          <TableCell>Launchpad</TableCell>
          <TableCell>1$00</TableCell>
          <TableCell>0.0%</TableCell>
          <TableCell>5956</TableCell>
          <TableCell><Button>View & Buy</Button></TableCell>
        </TableRow>
        <TableRow key="2">
        <TableCell> <div className="w-12 h-12 rounded-xl bg-gray-200"></div></TableCell>
        <TableCell>Carbon Capture Fields</TableCell>
          <TableCell>Reduction</TableCell>
          <TableCell>Launchpad</TableCell>
          <TableCell>1$00</TableCell>
          <TableCell>0.0%</TableCell>
          <TableCell>5956</TableCell>
          <TableCell><Button>View & Buy</Button></TableCell>
        </TableRow>
        <TableRow key="3">
        <TableCell> <div className="w-12 h-12 rounded-xl bg-gray-200"></div></TableCell>
        <TableCell>Carbon Capture Fields</TableCell>
          <TableCell>Reduction</TableCell>
          <TableCell>Launchpad</TableCell>
          <TableCell>1$00</TableCell>
          <TableCell>0.0%</TableCell>
          <TableCell>5956</TableCell>
          <TableCell><Button>View & Buy</Button></TableCell>
        </TableRow>
        <TableRow key="4">
        <TableCell> <div className="w-12 h-12 rounded-xl bg-gray-200"></div></TableCell>
        <TableCell>Carbon Capture Fields</TableCell>
          <TableCell>Reduction</TableCell>
          <TableCell>Launchpad</TableCell>
          <TableCell>1$00</TableCell>
          <TableCell>0.0%</TableCell>
          <TableCell>5956</TableCell>
          <TableCell><Button>View & Buy</Button></TableCell>
        </TableRow>
      </TableBody>
    </Table>
    
    </div>
  );
};

export default AllProducts;
