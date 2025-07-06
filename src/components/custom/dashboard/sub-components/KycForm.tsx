import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface KycFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const initialFormState = {
    fullName: '',
    phoneNumber: '',
    username: '',
    documentType: '',
    documentNumber: '',
};

const initialErrors = {
    fullName: '',
    phoneNumber: '',
    username: '',
    documentType: '',
    documentNumber: '',
};

const formFields = [
    { label: 'Full Name', name: 'fullName', placeholder: 'Enter your full name', type: 'text' },
    { label: 'Phone Number', name: 'phoneNumber', placeholder: 'Enter your phone number', type: 'text' },
    { label: 'Username', name: 'username', placeholder: 'Choose a username', type: 'text' },
];

const documentOptions = ['Aadhar', 'PAN', 'Driving Licence', 'Voter ID'];

const KycForm: React.FC<KycFormProps> = ({ open, onOpenChange }) => {
    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState(initialErrors);



    const validateForm = () => {
        const newErrors = { ...initialErrors };

        if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
            newErrors.fullName = 'Full name must be at least 3 characters.';
        }

        if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Phone number must be a valid 10-digit number.';
        }

        if (!formData.username.trim() || formData.username.trim().length < 3) {
            newErrors.username = 'Username must be at least 3 characters.';
        }

        if (!formData.documentType) {
            newErrors.documentType = 'Please select a document type.';
        }

        if (!formData.documentNumber.trim() || formData.documentNumber.trim().length < 4) {
            newErrors.documentNumber = `Please enter a valid ${formData.documentType} number.`;
        }

        setErrors(newErrors);

        // Check if any errors exist
        return Object.values(newErrors).every(error => error === '');
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log('Form Data:', formData);
            onOpenChange(false);
            setFormData(initialFormState);
            setErrors(initialErrors);
        }
    };
    const handleInputChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleCancel = () => {
        setFormData(initialFormState);
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>KYC Form</DialogTitle>
                    <DialogDescription>Fill the following form to complete your KYC.</DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    {formFields.map((field) => (
                        <div key={field.name} className="space-y-2">
                            <Label htmlFor={field.name}>{field.label}</Label>
                            <Input
                                id={field.name}
                                type={field.type}
                                placeholder={field.placeholder}
                                value={formData[field.name as keyof typeof formData]}
                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                onKeyPress={(e) => {
                                    if (field.name === 'phoneNumber' && !/[0-9]/.test(e.key)) {
                                        e.preventDefault();
                                    }
                                }}
                                maxLength={10}
                            />

                            {errors[field.name as keyof typeof errors] && (
                                <p className="text-red-500 text-sm">{errors[field.name as keyof typeof errors]}</p>
                            )}
                        </div>
                    ))}

                    <div className="space-y-2">
                        <Label>Document Type</Label>
                        <Select
                            value={formData.documentType}
                            onValueChange={(value) => handleInputChange('documentType', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Document" />
                            </SelectTrigger>
                            <SelectContent>
                                {documentOptions.map((doc) => (
                                    <SelectItem key={doc} value={doc}>
                                        {doc}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.documentType && <p className="text-red-500 text-sm">{errors.documentType}</p>}
                    </div>

                    {formData.documentType && (
                        <div className="space-y-2">
                            <Label htmlFor="documentNumber">{formData.documentType} Number</Label>
                            <Input
                                id="documentNumber"
                                type="text"
                                placeholder={`Enter your ${formData.documentType} number`}
                                value={formData.documentNumber}
                                onChange={(e) => handleInputChange('documentNumber', e.target.value)}
                            />
                            {errors.documentNumber && <p className="text-red-500 text-sm">{errors.documentNumber}</p>}
                        </div>
                    )}
                </div>

                <DialogFooter className="mt-6 flex justify-end gap-3">
                    <Button variant="outline" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default KycForm;
