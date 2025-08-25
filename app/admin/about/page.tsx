"use client";


import { useState, useEffect } from "react";

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

  const removeValue = (index: number) => {
    setAboutData({
      ...aboutData,
      values: aboutData.values.filter((_: any, i: number) => i !== index),
    });
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
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Edit Content
            </button>
          )}
        </div>
      </div>

      <div className="space-y-8">
        {/* Main Content */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Main Content
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={aboutData.title}
                  onChange={(e) =>
                    setAboutData({ ...aboutData, title: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900">{aboutData.title}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              {isEditing ? (
                <textarea
                  value={aboutData.description}
                  onChange={(e) =>
                    setAboutData({ ...aboutData, description: e.target.value })
                  }
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-700">{aboutData.description}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mission
              </label>
              {isEditing ? (
                <textarea
                  value={aboutData.mission}
                  onChange={(e) =>
                    setAboutData({ ...aboutData, mission: e.target.value })
                  }
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-700">{aboutData.mission}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vision
              </label>
              {isEditing ? (
                <textarea
                  value={aboutData.vision}
                  onChange={(e) =>
                    setAboutData({ ...aboutData, vision: e.target.value })
                  }
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-700">{aboutData.vision}</p>
              )}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Our Values</h2>
            {isEditing && (
              <button
                onClick={addValue}
                className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
              >
                Add Value
              </button>
            )}
          </div>
          <div className="space-y-4">
            {aboutData.values.map((value: any, index: number) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={value.title}
                        onChange={(e) =>
                          updateValue(index, "title", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <h3 className="font-semibold text-gray-900">
                        {value.title}
                      </h3>
                    )}
                  </div>
                  {isEditing && (
                    <button
                      onClick={() => {
                        if (confirm('Are you sure you want to remove this value?')) {
                          removeValue(index);
                        }
                      }}
                      className="ml-2 px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  {isEditing ? (
                    <textarea
                      value={value.description}
                      onChange={(e) =>
                        updateValue(index, "description", e.target.value)
                      }
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-600">{value.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
