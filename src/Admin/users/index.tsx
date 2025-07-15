import  { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { toast } from 'sonner';
import { Trash, Pencil } from 'lucide-react';

interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  kyc?: boolean;
  created_at: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filterKyc, setFilterKyc] = useState<'all' | 'kyc' | 'nonkyc'>('all');

  const fetchUsers = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setUsers(data);
      setFilteredUsers(data);
    } else {
      toast.error("Failed to fetch users");
      console.error(error);
    }
    setLoading(false);
  };

  const handleKycToggle = async (userId: string, currentStatus: boolean | null | undefined) => {
    const { error } = await supabase
      .from('users')
      .update({ kyc: !currentStatus })
      .eq('id', userId);

    if (!error) {
      toast.success('KYC status updated');
      fetchUsers();
    } else {
      toast.error('Failed to update KYC');
    }
  };

  const handleDelete = async (userId: string) => {
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', userId);

    if (!error) {
      toast.success('User deleted');
      fetchUsers();
    } else {
      toast.error('Failed to delete user');
    }
  };

  const handleEdit = (userId: string) => {
    console.log(userId)
    toast.info('Edit user feature coming soon.');
  };

  const handleFilterChange = (value: 'all' | 'kyc' | 'nonkyc') => {
    setFilterKyc(value);
    let filtered = [...users];

    if (value === 'kyc') {
      filtered = users.filter(u => u.kyc);
    } else if (value === 'nonkyc') {
      filtered = users.filter(u => !u.kyc);
    }

    if (search) {
      filtered = filtered.filter(u =>
        u.email.toLowerCase().includes(search.toLowerCase()) ||
        (u.first_name?.toLowerCase().includes(search.toLowerCase()))
      );
    }

    setFilteredUsers(filtered);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    handleFilterChange(filterKyc);
  }, [users, search, filterKyc]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">All Users ({filteredUsers.length})</h2>

      <div className="flex gap-4 mb-4 items-center">
        <Input
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />

        <Button variant={filterKyc === 'all' ? "default" : "outline"} onClick={() => handleFilterChange('all')}>All</Button>
        <Button variant={filterKyc === 'kyc' ? "default" : "outline"} onClick={() => handleFilterChange('kyc')}>KYC Approved</Button>
        <Button variant={filterKyc === 'nonkyc' ? "default" : "outline"} onClick={() => handleFilterChange('nonkyc')}>KYC Pending</Button>
      </div>

      <Table aria-label="Users Table" className="border rounded-2xl overflow-hidden">
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Phone</TableColumn>
          <TableColumn>KYC</TableColumn>
          <TableColumn>Created At</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>

        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.first_name || '-'} {user.last_name || ''}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone || '-'}</TableCell>
              <TableCell>
                <Badge variant={user.kyc ? "default" : "secondary"}>
                  {user.kyc ? 'Approved' : 'Pending'}
                </Badge>
              </TableCell>
              <TableCell>{new Date(user.created_at).toLocaleDateString()}</TableCell>
              <TableCell className="flex gap-2 items-center">
                <Switch
                  checked={!!user.kyc}
                  onCheckedChange={() => handleKycToggle(user.id, user.kyc)}
                  className="data-[state=checked]:bg-blue-500"
                />
                <Button size="icon" variant="ghost" className="p-2" onClick={() => handleEdit(user.id)}>
                  <Pencil size={12} />
                </Button>
                <Button size="icon" variant="destructive" className="p-2" onClick={() => handleDelete(user.id)}>
                  <Trash size={12} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Users;
