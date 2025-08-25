"use client";

import { useState, useEffect } from 'react';
import { Button, Input, Textarea, Select, SelectItem, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Card, CardBody, CardHeader, Chip } from '@heroui/react';
import toast from 'react-hot-toast';

interface Program {
  id?: string;
  title: string;
  description: string;
  imageUrl?: string;
  category: string;
  status: string;
  targetGroup?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
}

export default function ProgramsAdmin() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState<Program>({
    title: '',
    description: '',
    imageUrl: '',
    category: '',
    status: 'active',
    targetGroup: '',
    location: '',
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await fetch('/api/admin/programs');
      const data = await response.json();
      if (response.ok) {
        setPrograms(data);
      } else {
        toast.error(data.error || 'Error loading programs');
      }
    } catch (error) {
      console.error('Error fetching programs:', error);
      toast.error('Error loading programs');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const method = editingProgram ? 'PUT' : 'POST';
      const body = editingProgram ? { id: editingProgram.id, ...formData } : formData;
      
      const response = await fetch('/api/admin/programs', {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      
      const result = await response.json();
      if (response.ok) {
        toast.success(editingProgram ? 'Program updated successfully!' : 'Program created successfully!');
        setShowForm(false);
        setEditingProgram(null);
        resetForm();
        fetchPrograms();
      } else {
        toast.error(result.error || 'Error saving program');
      }
    } catch (error) {
      console.error('Error saving program:', error);
      toast.error('Error saving program');
    } finally {
      setIsSaving(false);
    }
  };

  const handleEdit = (program: Program) => {
    setEditingProgram(program);
    setFormData({
      ...program,
      startDate: program.startDate ? program.startDate.split('T')[0] : '',
      endDate: program.endDate ? program.endDate.split('T')[0] : ''
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/programs?id=${id}`, {
        method: 'DELETE',
      });
      
      const result = await response.json();
      if (response.ok) {
        toast.success('Program deleted successfully!');
        fetchPrograms();
      } else {
        toast.error(result.error || 'Error deleting program');
      }
    } catch (error) {
      console.error('Error deleting program:', error);
      toast.error('Error deleting program');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      category: '',
      status: 'active',
      targetGroup: '',
      location: '',
      startDate: '',
      endDate: ''
    });
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Programs</h1>
          <p className="mt-2 text-gray-600">
            Manage your charity programs and initiatives
          </p>
        </div>
        <Button
          color="primary"
          onClick={() => {
            setShowForm(true);
            setEditingProgram(null);
            resetForm();
          }}
        >
          Add New Program
        </Button>
      </div>

      {/* Program Form */}
      {showForm && (
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-lg font-medium">
              {editingProgram ? 'Edit Program' : 'Add New Program'}
            </h2>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Input
                  label="Program Title"
                  value={formData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  isRequired
                  size="lg"
                  classNames={{
                    input: "px-4 py-3",
                    inputWrapper: "px-4 py-3"
                  }}
                />
                <Input
                  label="Category"
                  value={formData.category}
                  onChange={(e) => handleChange('category', e.target.value)}
                  placeholder="e.g., Education, Healthcare"
                  isRequired
                  size="lg"
                  classNames={{
                    input: "px-4 py-3",
                    inputWrapper: "px-4 py-3"
                  }}
                />
              </div>

              <Textarea
                label="Description"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                minRows={4}
                isRequired
                size="lg"
                classNames={{
                  input: "px-4 py-3",
                  inputWrapper: "px-4 py-3"
                }}
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <Select
                  label="Status"
                  selectedKeys={[formData.status]}
                  onSelectionChange={(keys) => handleChange('status', Array.from(keys)[0] as string)}
                  size="lg"
                  classNames={{
                    trigger: "px-4 py-3"
                  }}
                >
                  <SelectItem key="active">Active</SelectItem>
                  <SelectItem key="inactive">Inactive</SelectItem>
                  <SelectItem key="completed">Completed</SelectItem>
                </Select>

                <Input
                  label="Target Group"
                  value={formData.targetGroup || ''}
                  onChange={(e) => handleChange('targetGroup', e.target.value)}
                  placeholder="e.g., Children, Elderly"
                  size="lg"
                  classNames={{
                    input: "px-4 py-3",
                    inputWrapper: "px-4 py-3"
                  }}
                />

                <Input
                  label="Location"
                  value={formData.location || ''}
                  onChange={(e) => handleChange('location', e.target.value)}
                  placeholder="e.g., Global, Africa"
                  size="lg"
                  classNames={{
                    input: "px-4 py-3",
                    inputWrapper: "px-4 py-3"
                  }}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Input
                  label="Start Date"
                  type="date"
                  value={formData.startDate || ''}
                  onChange={(e) => handleChange('startDate', e.target.value)}
                  size="lg"
                  classNames={{
                    input: "px-4 py-3",
                    inputWrapper: "px-4 py-3"
                  }}
                />

                <Input
                  label="End Date"
                  type="date"
                  value={formData.endDate || ''}
                  onChange={(e) => handleChange('endDate', e.target.value)}
                  size="lg"
                  classNames={{
                    input: "px-4 py-3",
                    inputWrapper: "px-4 py-3"
                  }}
                />
              </div>

              <Input
                label="Image URL (Optional)"
                type="url"
                value={formData.imageUrl || ''}
                onChange={(e) => handleChange('imageUrl', e.target.value)}
                placeholder="https://example.com/image.jpg"
                size="lg"
                classNames={{
                  input: "px-4 py-3",
                  inputWrapper: "px-4 py-3"
                }}
              />

              <div className="flex justify-end space-x-3">
                <Button
                  variant="bordered"
                  onClick={() => {
                    setShowForm(false);
                    setEditingProgram(null);
                    resetForm();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  isLoading={isSaving}
                >
                  {editingProgram ? 'Update Program' : 'Create Program'}
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      )}

      {/* Programs List */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium">Current Programs</h2>
        </CardHeader>
        <CardBody className="divide-y divide-gray-200">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </CardBody>
      </Card>
    </div>
  );
}

function ProgramCard({ program, onEdit, onDelete }: {
  program: Program;
  onEdit: (program: Program) => void;
  onDelete: (id: string) => void;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'success';
      case 'completed': return 'primary';
      default: return 'default';
    }
  };

  return (
    <>
      <div className="py-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3">
              <h3 className="text-lg font-medium text-gray-900">{program.title}</h3>
              <Chip color={getStatusColor(program.status)} size="sm">
                {program.status}
              </Chip>
            </div>
            <p className="mt-1 text-sm text-gray-600">{program.description}</p>
            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
              <span>Category: {program.category}</span>
              {program.location && <span>Location: {program.location}</span>}
              {program.targetGroup && <span>Target: {program.targetGroup}</span>}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              variant="light"
              color="primary"
              onClick={() => onEdit(program)}
            >
              Edit
            </Button>
            <Button
              size="sm"
              variant="light"
              color="danger"
              onClick={onOpen}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Confirm Deletion
              </ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete the program "{program.title}"? This action cannot be undone.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="danger"
                  onPress={() => {
                    onDelete(program.id!);
                    onClose();
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}