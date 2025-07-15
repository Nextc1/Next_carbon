import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React from 'react'

interface Admin {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const AdminRegister: React.FC<Admin> = ({ open, onOpenChange}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Register as admin 
                </DialogTitle>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default AdminRegister
