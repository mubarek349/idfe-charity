"use client";

import { useState, useEffect } from "react";
import {
  Button,
  Input,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Card,
  CardBody,
  CardHeader,
} from "@heroui/react";
import toast from "react-hot-toast";

export default function AboutAdmin() {
  const [aboutData, setAboutData] = useState({
    id: "",
    title: "About IDFE Charity",
    description:
      "IDFE Charity has been at the forefront of community development for over a decade.",
    mission:
      "To empower underserved communities by providing access to quality education, healthcare, and economic opportunities.",
    vision:
      "A world where every individual has the opportunity to reach their full potential.",
    values: [
      {
        title: "Transparency",
        description:
          "We maintain open communication about our programs, finances, and impact.",
      },
      {
        title: "Sustainability",
        description:
          "We focus on long-term solutions that communities can maintain independently.",
      },
      {
        title: "Empowerment",
        description:
          "We believe in building local capacity and leadership within communities.",
      },
      {
        title: "Integrity",
        description:
          "We operate with honesty, accountability, and ethical practices in all we do.",
      },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/admin/about");
        const data = await response.json();
        if (data && !data.error) {
          setAboutData({
            id: data.id || "",
            title: data.title || "About IDFE Charity",
            description:
              data.description ||
              "IDFE Charity has been at the forefront of community development for over a decade.",
            mission:
              data.mission ||
              "To empower underserved communities by providing access to quality education, healthcare, and economic opportunities.",
            vision:
              data.vision ||
              "A world where every individual has the opportunity to reach their full potential.",
            values: Array.isArray(data.values)
              ? data.values
              : [
                  {
                    title: "Transparency",
                    description:
                      "We maintain open communication about our programs, finances, and impact.",
                  },
                  {
                    title: "Sustainability",
                    description:
                      "We focus on long-term solutions that communities can maintain independently.",
                  },
                  {
                    title: "Empowerment",
                    description:
                      "We believe in building local capacity and leadership within communities.",
                  },
                  {
                    title: "Integrity",
                    description:
                      "We operate with honesty, accountability, and ethical practices in all we do.",
                  },
                ],
          });
        }
      } catch (error) {
        console.error("Error fetching about content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const method = aboutData.id ? "PUT" : "POST";
      const response = await fetch("/api/admin/about", {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(aboutData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("About section updated successfully!");
        setIsEditing(false);
        if (!aboutData.id && result.id) {
          setAboutData({ ...aboutData, id: result.id });
        }
      } else {
        toast.error(result.error || "Error saving about content");
      }
    } catch (error) {
      console.error("Error saving about content:", error);
      toast.error("Error saving about content");
    } finally {
      setIsSaving(false);
    }
  };

  const addValue = () => {
    setAboutData({
      ...aboutData,
      values: [...aboutData.values, { title: "", description: "" }],
    });
  };

  const removeValue = async (index: number) => {
    const newAboutData = {
      ...aboutData,
      values: aboutData.values.filter((_: any, i: number) => i !== index),
    };
    setAboutData(newAboutData);
    
    // Auto-save after deletion
    try {
      const method = aboutData.id ? "PUT" : "POST";
      const response = await fetch("/api/admin/about", {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAboutData),
      });
      
      if (response.ok) {
        toast.success("Value removed successfully!");
      } else {
        toast.error("Error removing value");
      }
    } catch (error) {
      console.error("Error removing value:", error);
      toast.error("Error removing value");
    }
  };

  const updateValue = (
    index: number,
    field: "title" | "description",
    value: string
  ) => {
    const updatedValues = aboutData.values.map((val: any, i: number) =>
      i === index ? { ...val, [field]: value } : val
    );
    setAboutData({ ...aboutData, values: updatedValues });
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
          <h1 className="text-3xl font-bold text-gray-900">About Section</h1>
          <p className="mt-2 text-gray-600">
            Manage the about section content and organization values
          </p>
        </div>
        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <Button variant="bordered" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button color="primary" onClick={handleSave} isLoading={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </>
          ) : (
            <Button color="primary" onClick={() => setIsEditing(true)}>
              Edit Content
            </Button>
          )}
        </div>
      </div>

      <div className="space-y-8">
        {/* Main Content */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Main Content</h2>
          </CardHeader>
          <CardBody className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                {isEditing ? (
                  <Input
                    value={aboutData.title}
                    onChange={(e) =>
                      setAboutData({ ...aboutData, title: e.target.value })
                    }
                    size="lg"
                    classNames={{
                      input: "px-4 py-3",
                      inputWrapper: "px-4 py-3",
                    }}
                  />
                ) : (
                  <p className="text-gray-900 px-4 py-3">{aboutData.title}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                {isEditing ? (
                  <Textarea
                    value={aboutData.description}
                    onChange={(e) =>
                      setAboutData({
                        ...aboutData,
                        description: e.target.value,
                      })
                    }
                    minRows={4}
                    size="lg"
                    classNames={{
                      input: "px-4 py-3",
                      inputWrapper: "px-4 py-3",
                    }}
                  />
                ) : (
                  <p className="text-gray-700 px-4 py-3">
                    {aboutData.description}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mission
                </label>
                {isEditing ? (
                  <Textarea
                    value={aboutData.mission}
                    onChange={(e) =>
                      setAboutData({ ...aboutData, mission: e.target.value })
                    }
                    minRows={3}
                    size="lg"
                    classNames={{
                      input: "px-4 py-3",
                      inputWrapper: "px-4 py-3",
                    }}
                  />
                ) : (
                  <p className="text-gray-700 px-4 py-3">{aboutData.mission}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vision
                </label>
                {isEditing ? (
                  <Textarea
                    value={aboutData.vision}
                    onChange={(e) =>
                      setAboutData({ ...aboutData, vision: e.target.value })
                    }
                    minRows={3}
                    size="lg"
                    classNames={{
                      input: "px-4 py-3",
                      inputWrapper: "px-4 py-3",
                    }}
                  />
                ) : (
                  <p className="text-gray-700 px-4 py-3">{aboutData.vision}</p>
                )}
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Values */}
        <Card>
          <CardHeader className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Our Values</h2>
            {isEditing && (
              <Button color="success" size="sm" onClick={addValue}>
                Add Value
              </Button>
            )}
          </CardHeader>
          <CardBody className="space-y-4">
            {aboutData.values.map((value: any, index: number) => (
              <ValueCard
                key={index}
                value={value}
                index={index}
                isEditing={isEditing}
                updateValue={updateValue}
                removeValue={removeValue}
              />
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
function ValueCard({
  value,
  index,
  isEditing,
  updateValue,
  removeValue,
}: {
  value: any;
  index: number;
  isEditing: boolean;
  updateValue: (
    index: number,
    field: "title" | "description",
    value: string
  ) => void;
  removeValue: (index: number) => Promise<void>;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="border">
        <CardBody>
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                {isEditing ? (
                  <Input
                    value={value.title}
                    onChange={(e) =>
                      updateValue(index, "title", e.target.value)
                    }
                    size="lg"
                    classNames={{
                      input: "px-4 py-3",
                      inputWrapper: "px-4 py-3",
                    }}
                  />
                ) : (
                  <h3 className="font-semibold text-gray-900 px-4 py-3">
                    {value.title}
                  </h3>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                {isEditing ? (
                  <Textarea
                    value={value.description}
                    onChange={(e) =>
                      updateValue(index, "description", e.target.value)
                    }
                    minRows={2}
                    size="lg"
                    classNames={{
                      input: "px-4 py-3",
                      inputWrapper: "px-4 py-3",
                    }}
                  />
                ) : (
                  <p className="text-gray-600 px-4 py-3">{value.description}</p>
                )}
              </div>
            </div>
            {isEditing && (
              <Button
                color="danger"
                size="sm"
                onClick={onOpen}
                className="ml-4"
              >
                Remove
              </Button>
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
                <p>
                  Are you sure you want to remove this value? This action cannot
                  be undone.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="danger"
                  onPress={() => {
                    removeValue(index);
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
