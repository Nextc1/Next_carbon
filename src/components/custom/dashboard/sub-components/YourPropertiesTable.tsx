import React, { useState, useMemo, useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Selection,
  SortDescriptor,
} from "@nextui-org/react";
import { SearchIcon } from "../icons/SearchIcon";
import { ChevronDownIcon } from "../icons/ChevronDownIcon";

interface Property {
  id: number;
  propertyName: string;
  location: string;
  propertyType: string;
  ticketPrice: string;
  currentPrice: string;
  totalShares: string;
  yourShares?: number;
}

interface YourPropertiesTableProps {
  dummyData: Property[];
}

const propertyTypes = [
  { uid: "residential", name: "Residential" },
  { uid: "commercial", name: "Commercial" },
  { uid: "industrial", name: "Industrial" },
  { uid: "emptyPlot", name: "Empty Plot" },
];

const columns = [
  { uid: "propertyName", name: "Project Name" },
  { uid: "location", name: "Location" },
  { uid: "propertyType", name: "Project Type" },
  { uid: "ticketPrice", name: "Ticket Price" },
  { uid: "currentPrice", name: "Current Price" },
  { uid: "totalShares", name: "Total Shares" },
  { uid: "actions", name: "Actions" },
];

export default function YourPropertiesTable({ dummyData }: YourPropertiesTableProps) {
  const [portfolioProps] = useState<Property[]>(dummyData);
  const [filterValue, setFilterValue] = useState("");
  const [propertyTypeFilter, setPropertyTypeFilter] = useState<Selection>(
    new Set(["all"])
  );
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "propertyName",
    direction: "ascending",
  });

  // Filter and search logic
  const filteredItems = useMemo(() => {
    let filtered = portfolioProps;

    if (filterValue) {
      filtered = filtered.filter((item) =>
        item.propertyName.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    const propertyTypeSet = new Set(propertyTypeFilter);
    if (!propertyTypeSet.has("all")) {
      filtered = filtered.filter((item) =>
        propertyTypeSet.has(item.propertyType.toLowerCase())
      );
    }

    return filtered;
  }, [filterValue, propertyTypeFilter, portfolioProps]);

  // Sorting logic
  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      let cmp = 0;
      switch (sortDescriptor.column) {
        case "propertyName":
          cmp = a.propertyName.localeCompare(b.propertyName);
          break;
        case "location":
          cmp = a.location.localeCompare(b.location);
          break;
        case "propertyType":
          cmp = a.propertyType.localeCompare(b.propertyType);
          break;
        case "ticketPrice":
          cmp = parseFloat(a.ticketPrice.replace("$", "")) - parseFloat(b.ticketPrice.replace("$", ""));
          break;
        case "currentPrice":
          cmp = a.currentPrice.localeCompare(b.currentPrice);
          break;
        case "totalShares":
          cmp = parseInt(a.totalShares.split(" / ")[0]) - parseInt(b.totalShares.split(" / ")[0]);
          break;
        default:
          cmp = 0;
      }

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, filteredItems]);

  // Cell rendering logic
  const renderCell = useCallback((item: Property, columnKey: React.Key) => {
    switch (columnKey) {
      case "propertyName":
        return item.propertyName;
      case "location":
        return item.location;
      case "propertyType":
        return item.propertyType;
      case "ticketPrice":
        return item.ticketPrice;
      case "currentPrice":
        return item.currentPrice;
      case "totalShares":
        return item.totalShares;
      case "actions":
        return (
          <button className="px-4 py-2 font-bold text-white bg-black border-2 border-black rounded-full hover:bg-white hover:text-black">
            View
          </button>
        );
      default:
        return null;
    }
  }, []);

  return (
    <div className="w-full max-w-full px-4 mx-auto">
      <div className="flex items-center justify-between gap-4 mt-2 mb-4">
        <Dropdown>
          <DropdownTrigger>
            <Button endContent={<ChevronDownIcon />} variant="flat" className="h-12 text-md">
              Project Type
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            selectedKeys={propertyTypeFilter}
            selectionMode="multiple"
            onSelectionChange={setPropertyTypeFilter}
            closeOnSelect={false}
          >
            <DropdownItem key="all">All Types</DropdownItem>
            <>
              {propertyTypes.map((type) => (
                <DropdownItem key={type.uid}>{type.name}</DropdownItem>
              ))}
            </>
          </DropdownMenu>
        </Dropdown>

        <Input
          className="w-full max-w-lg text-xl"
          placeholder="Search for a project by name..."
          startContent={<SearchIcon className=" mr-2"/>}
          value={filterValue}
          onValueChange={setFilterValue}
          size="lg"
        />
      </div>

      <Table
        aria-label="User-owned property table"
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              allowsSorting
              align={column.uid === "actions" ? "center" : "start"}
              className="text-black text-md"
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={sortedItems}>
          {(item) => (
            <TableRow key={item.id} className="pb-2 my-6">
              {(columnKey) => <TableCell className="text-md">{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
