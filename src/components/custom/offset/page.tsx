"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { jsPDF } from "jspdf"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

// Define the project type
interface Project {
    id: string
    name: string
    availableCredits: number
}

// Sample projects data
const projects: Project[] = [
    { id: "1", name: "Web Development", availableCredits: 100 },
    { id: "2", name: "Mobile App", availableCredits: 50 },
    { id: "3", name: "UI/UX Design", availableCredits: 75 },
    { id: "4", name: "Data Analysis", availableCredits: 120 },
]

// Define the purchase type
interface Purchase {
    projectId: string
    projectName: string
    credits: number
    description: string
    date: Date
}

// Form schema
const formSchema = z.object({
    projectId: z.string({
        required_error: "Please select a project.",
    }),
    credits: z.coerce
        .number({
            required_error: "Please enter the number of credits.",
            invalid_type_error: "Credits must be a number.",
        })
        .positive("Credits must be positive."),
    description: z.string().min(5, "Description must be at least 5 characters."),
})

export default function CreditPurchasePage() {
    const [purchases, setPurchases] = useState<Purchase[]>([])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            description: "",
        },
    })

    const selectedProjectId = form.watch("projectId")
    const selectedProject = projects.find((p) => p.id === selectedProjectId)

    const validateCredits = (value: number) => {
        if (!selectedProject) return true
        return (
            value <= selectedProject.availableCredits || `Credits must be less than or equal to ${selectedProject.availableCredits}`
        )
    }

    // Generate PDF function
    const generatePDF = (purchase: Purchase) => {
        const doc = new jsPDF()

        doc.setFontSize(16)
        doc.text("Credit Purchase Receipt", 20, 20)

        doc.setFontSize(12)
        doc.text(`Project: ${purchase.projectName}`, 20, 40)
        doc.text(`Credits: ${purchase.credits}`, 20, 50)
        doc.text(`Description: ${purchase.description}`, 20, 60)
        doc.text(`Date: ${purchase.date.toLocaleString()}`, 20, 70)
        doc.text("Thank you for your purchase!", 20, 90)

        doc.save("credit-purchase-receipt.pdf")
    }

    // Form submission handler
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        if (!selectedProject) {
            toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                },
            })
            return
        }

        if (values.credits > selectedProject.availableCredits) {
            toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                },
            })
            return
        }

        // Create purchase record
        const purchase: Purchase = {
            projectId: values.projectId,
            projectName: selectedProject.name,
            credits: values.credits,
            description: values.description,
            date: new Date(),
        }

        // Add to purchases list
        setPurchases([purchase, ...purchases])

        // Generate and download PDF
        generatePDF(purchase)

        // Reset form
        form.reset()

        // Show success message
        toast("Purchase Successful", {
            description: "Your credit purchase was successful. Receipt downloaded.",
        })
    }

    return (
        <div className="container mx-auto py-10 max-w-[90%]">
            <Card className="mb-8 w-full">
                <CardHeader>
                    <CardTitle>Purchase Credits</CardTitle>
                    <CardDescription>Select a project and specify the number of credits you want to purchase.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="projectId"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Project</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a project" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {projects.map((project) => (
                                                        <SelectItem key={project.id} value={project.id}>
                                                            {project.name} ({project.availableCredits} credits available)
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormDescription className="text-xs">
                                                Select the project you want to purchase credits for.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="credits"
                                    rules={{
                                        validate: validateCredits,
                                    }}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Number of Credits</FormLabel>
                                            <FormControl>
                                                <Input type="number" {...field} />
                                            </FormControl>
                                            <FormDescription className="text-xs">
                                                {selectedProject
                                                    ? `Enter a number less than or equal to ${selectedProject.availableCredits}.`
                                                    : "Select a project first."}
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea {...field} rows={3} />
                                        </FormControl>
                                        <FormDescription className="text-xs">
                                            Provide a brief description for this purchase.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full">
                                Purchase Credits
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            {purchases.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Purchases</CardTitle>
                        <CardDescription>Your recent credit purchases are listed below.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {purchases.map((purchase, index) => (
                                <div key={index} className="border rounded-lg p-4">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="font-medium">Project:</div>
                                        <div>{purchase.projectName}</div>

                                        <div className="font-medium">Credits:</div>
                                        <div>{purchase.credits}</div>

                                        <div className="font-medium">Description:</div>
                                        <div>{purchase.description}</div>

                                        <div className="font-medium">Date:</div>
                                        <div>{purchase.date.toLocaleString()}</div>
                                    </div>
                                    <Button variant="outline" size="sm" className="mt-2" onClick={() => generatePDF(purchase)}>
                                        Download Receipt
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}

