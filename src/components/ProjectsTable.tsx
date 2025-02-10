import {
    Table, TableHeader, TableColumn, TableBody, TableRow, TableCell
} from "@nextui-org/react";
import usdcCoin from "../assets/svg/usd-coin.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
    Input
} from "@nextui-org/react";
import { ChevronDownIcon } from "./custom/dashboard/icons/ChevronDownIcon";
import { SearchIcon } from "./custom/dashboard/icons/SearchIcon";

interface Project {
    id: string;
    created_at: string;
    name: string;
    status: string;
    price: number;
    available_shares: number;
    location: string;
    type: string;
    image: string;
    attributes?: undefined;
    value_parameters?: undefined;
    updates?: undefined;
    growth: string;
}

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

export const ProjectsTable = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [projectTypes, setProjectTypes] = useState<string[]>([]);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [priceSort, setPriceSort] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            const { data, error } = await supabase.from('property_data').select();
            if (error) {
                alert("error");
                setProjects([]);
            }
            if (data) {
                setProjects(data);
                const types = Array.from(new Set(data.map(project => project.type)));
                setProjectTypes(types);
            }
            setLoading(false);
        }

        fetchProjects();
    }, []);

    const filteredProjects = projects.filter(project =>
        (!selectedType || project.type === selectedType) &&
        (!searchQuery || project.name.toLowerCase().includes(searchQuery.toLowerCase()))
    ).sort((a, b) => {
        if (priceSort === "low to high") return a.price - b.price;
        if (priceSort === "high to low") return b.price - a.price;
        return 0;
    });

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-between gap-4 mt-8 mb-6 md:flex-row">
                <div className=" flex flex-wrap gap-4">
                    {/* Property Type Filter */}
                    <Dropdown>
                        <DropdownTrigger>
                            <Button endContent={<ChevronDownIcon />} variant="flat" className="h-12 text-base">
                                {selectedType || "Project Type"}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem key="" onClick={() => setSelectedType(null)}>All Types</DropdownItem>
                            <>
                                {projectTypes.map(type => (
                                    <DropdownItem key={type}>{type}</DropdownItem>
                                ))}
                            </>
                        </DropdownMenu>
                    </Dropdown>

                    {/* Price Filter */}
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                endContent={<ChevronDownIcon />}
                                variant="flat"
                                className="h-12 text-md"
                            >
                                Price
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu onAction={key => setPriceSort(key as string)}>
                            <DropdownItem key="">All Prices</DropdownItem>
                            <DropdownItem key="low to high">Low to High</DropdownItem>
                            <DropdownItem key="high to low">High to Low</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

                {/* Search Input */}
                <Input
                    className="w-full max-w-lg text-base bg-gamma rounded-xl"
                    placeholder="Search for a property by name"
                    startContent={<SearchIcon className="mr-1" />}
                    size="lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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
                    {filteredProjects.map((project, index) => (
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
                                <div className="flex flex-row items-center gap-x-2">
                                    <img src={usdcCoin} alt="SOL" className="w-6 h-6" />
                                    ${project.price.toFixed(2)}
                                </div>
                            </TableCell>
                            <TableCell>
                                <p className="flex flex-row items-center gap-2 text-base">
                                    <FontAwesomeIcon icon={parseInt(project.growth) > 0 ? faArrowTrendUp : faArrowTrendDown} color={parseInt(project.growth) > 0 ? "green" : "red"} />
                                    &nbsp;{project.growth}
                                </p>
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
    )
}
