export const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "Healthray Products",
      path: "/services",
      dropdown: [
        { name: "Hospital Information Management System (HIMS)", path: "/services/hospital-information-management-system" },
        { name: "Service 2", path: "/services/service2" },
        { name: "Service 3", path: "/services/service3" },
      ],
    },
    {
      name: "Speciality",
      path: "/services",
      dropdown: [
        { name: "Gastroenterologists", path: "/services/service1" },
        { name: "Service 2", path: "/services/service2" },
        { name: "Service 3", path: "/services/service3" },
      ],
    },
    {
      name: "ABDM",
      path: "/services",
      dropdown: [
        { name: "ABHA", path: "/services/service1" },
        { name: "Service 2", path: "/services/service2" },
        { name: "Service 3", path: "/services/service3" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];