export const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "Healthray Products",
      path: "/services",
      dropdown: [
        { name: "Hospital Information Management System (HIMS)", path: "/services/hospital-information-management-system" },
        { name: "EMR Software", path: "/services/emr-software" }, // Updated Service 2
        { name: "EHR Software", path: "/services/ehr-software" }, // New entry for EHR Software
      ],
    },
    {
      name: "Speciality",
      path: "/services",
      dropdown: [
        { name: "Gastroenterologists", path: "/speciality/gastroenterologists" },
        { name: "Pulmonologist", path: "/speciality/pulmonologist" },
        { name: "Gynecologist", path: "/speciality/Gynecologist" },
      ],
    },
    {
      name: "ABDM",
      path: "/services",
      dropdown: [
        { name: "ABHA", path: "/ABHA" },
        { name: "PMJAY", path: "/PMJAY" },
        { name: "Service 3", path: "/services/service3" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];