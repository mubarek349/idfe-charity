"use client";

import { useState, useEffect } from 'react';
import { Button, Input, Textarea, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Card, CardBody, CardHeader } from '@heroui/react';
import toast from 'react-hot-toast';

export default function ImpactAdmin() {
  const [stats, setStats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin/impact');
        const data = await response.json();
        if (data && !data.error) {
          setStats(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error('Error fetching impact stats:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newStat, setNewStat] = useState({
    title: '',
    value: '',
    description: '',
    icon: '📊',
    order: stats.length + 1
  });

  const handleAddStat = async () => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/admin/impact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStat),
      });
      const result = await response.json();
      if (response.ok) {
        setStats([...stats, result]);
        setNewStat({ title: '', value: '', description: '', icon: '📊', order: stats.length + 2 });
        setShowAddForm(false);
        toast.success('Impact stat added successfully!');
      } else {
        toast.error(result.error || 'Error adding impact stat');
      }
    } catch (error) {
      toast.error('Error adding impact stat');
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdateStat = (id: string, field: string, value: string) => {
    setStats(stats.map(stat => 
      stat.id === id ? { ...stat, [field]: value } : stat
    ));
  };

  const handleDeleteStat = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/impact?id=${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setStats(stats.filter(stat => stat.id !== id));
        toast.success('Stat deleted successfully!');
      } else {
        toast.error('Error deleting stat');
      }
    } catch (error) {
      toast.error('Error deleting stat');
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      for (const stat of stats) {
        await fetch('/api/admin/impact', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(stat),
        });
      }
      toast.success('Changes saved successfully!');
      setIsEditing(false);
    } catch (error) {
      toast.error('Error saving changes');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Impact Stats</h1>
          <p className="mt-2 text-gray-600">
            Manage impact statistics and achievements
          </p>
        </div>
        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <Button
                variant="bordered"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
              <Button
                color="primary"
                onClick={handleSave}
                isLoading={isSaving}
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </Button>
            </>
          ) : (
            <Button
              color="primary"
              onClick={() => setIsEditing(true)}
            >
              Edit Content
            </Button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Current Impact Statistics</h2>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <StatCard
                  key={stat.id}
                  stat={stat}
                  isEditing={isEditing}
                  handleUpdateStat={handleUpdateStat}
                  handleDeleteStat={handleDeleteStat}
                />
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Add New Statistic</h2>
            <Button
              color={showAddForm ? "default" : "primary"}
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? 'Cancel' : 'Add Statistic'}
            </Button>
          </CardHeader>
          <CardBody>
            {showAddForm && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Title"
                    value={newStat.title}
                    onChange={(e) => setNewStat({...newStat, title: e.target.value})}
                    placeholder="Lives Impacted"
                    size="lg"
                    classNames={{
                      input: "px-4 py-3",
                      inputWrapper: "px-4 py-3"
                    }}
                  />
                  <Input
                    label="Value"
                    value={newStat.value}
                    onChange={(e) => setNewStat({...newStat, value: e.target.value})}
                    placeholder="10,000+"
                    size="lg"
                    classNames={{
                      input: "px-4 py-3",
                      inputWrapper: "px-4 py-3"
                    }}
                  />
                </div>
                
                <Textarea
                  label="Description"
                  value={newStat.description}
                  onChange={(e) => setNewStat({...newStat, description: e.target.value})}
                  placeholder="People who have benefited from our programs"
                  minRows={2}
                  size="lg"
                  classNames={{
                    input: "px-4 py-3",
                    inputWrapper: "px-4 py-3"
                  }}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Icon (Emoji)"
                    value={newStat.icon}
                    onChange={(e) => setNewStat({...newStat, icon: e.target.value})}
                    placeholder="👥"
                    size="lg"
                    classNames={{
                      input: "px-4 py-3",
                      inputWrapper: "px-4 py-3"
                    }}
                  />
                  <Input
                    label="Order"
                    type="number"
                    value={newStat.order.toString()}
                    onChange={(e) => setNewStat({...newStat, order: parseInt(e.target.value) || 0})}
                    size="lg"
                    classNames={{
                      input: "px-4 py-3",
                      inputWrapper: "px-4 py-3"
                    }}
                  />
                </div>
                
                <Button
                  color="success"
                  onClick={handleAddStat}
                  isDisabled={isSaving || !newStat.title || !newStat.value}
                  isLoading={isSaving}
                  size="lg"
                >
                  {isSaving ? 'Adding...' : 'Add Statistic'}
                </Button>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
      )}
    </div>
  );
}

function StatCard({ stat, isEditing, handleUpdateStat, handleDeleteStat }: {
  stat: any;
  isEditing: boolean;
  handleUpdateStat: (id: string, field: string, value: string) => void;
  handleDeleteStat: (id: string) => void;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="border relative">
        <CardBody>
          {isEditing && (
            <Button
              isIconOnly
              color="danger"
              size="sm"
              onClick={onOpen}
              className="absolute top-2 right-2 z-10"
            >
              ✕
            </Button>
          )}
          <div className="space-y-3">
            {isEditing ? (
              <Input
                value={stat.icon}
                onChange={(e) => handleUpdateStat(stat.id, 'icon', e.target.value)}
                size="sm"
                className="w-16"
                classNames={{
                  input: "text-2xl text-center px-2 py-1",
                  inputWrapper: "px-2 py-1"
                }}
              />
            ) : (
              <span className="text-2xl">{stat.icon}</span>
            )}
            
            {isEditing ? (
              <Input
                value={stat.value}
                onChange={(e) => handleUpdateStat(stat.id, 'value', e.target.value)}
                size="lg"
                classNames={{
                  input: "text-3xl font-bold px-4 py-3",
                  inputWrapper: "px-4 py-3"
                }}
              />
            ) : (
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            )}
            
            {isEditing ? (
              <Input
                value={stat.title}
                onChange={(e) => handleUpdateStat(stat.id, 'title', e.target.value)}
                size="lg"
                classNames={{
                  input: "text-lg font-semibold px-4 py-3",
                  inputWrapper: "px-4 py-3"
                }}
              />
            ) : (
              <p className="text-lg font-semibold text-gray-800">{stat.title}</p>
            )}
            
            {isEditing ? (
              <Textarea
                value={stat.description || ''}
                onChange={(e) => handleUpdateStat(stat.id, 'description', e.target.value)}
                minRows={2}
                size="lg"
                classNames={{
                  input: "text-sm px-4 py-3",
                  inputWrapper: "px-4 py-3"
                }}
              />
            ) : (
              <p className="text-sm text-gray-600">{stat.description}</p>
            )}
          </div>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Confirm Deletion
              </ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete this statistic? This action cannot be undone.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="danger"
                  onPress={() => {
                    handleDeleteStat(stat.id);
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