import { ngoQueries } from "../../db/queries";

export const createReportCron = async () => {
  const sampleReports = [
    {
      ngo_id: "67ff8442c21f94a2debed43b",
      month: "2025-03",
      people_helped: "1200",
      events_conducted: "8",
      funds_utilized: "150000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed441",
      month: "2025-03",
      people_helped: "900",
      events_conducted: "5",
      funds_utilized: "95000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed43d",
      month: "2025-03",
      people_helped: "1350",
      events_conducted: "10",
      funds_utilized: "170000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed43f",
      month: "2025-03",
      people_helped: "700",
      events_conducted: "4",
      funds_utilized: "80000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed443",
      month: "2025-03",
      people_helped: "1600",
      events_conducted: "7",
      funds_utilized: "140000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed43b",
      month: "2025-04",
      people_helped: "1100",
      events_conducted: "6",
      funds_utilized: "125000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed441",
      month: "2025-04",
      people_helped: "950",
      events_conducted: "5",
      funds_utilized: "98000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed43d",
      month: "2025-04",
      people_helped: "1300",
      events_conducted: "9",
      funds_utilized: "160000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed43f",
      month: "2025-04",
      people_helped: "750",
      events_conducted: "4",
      funds_utilized: "85000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed443",
      month: "2025-04",
      people_helped: "1700",
      events_conducted: "8",
      funds_utilized: "150000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed43b",
      month: "2025-02",
      people_helped: "1000",
      events_conducted: "6",
      funds_utilized: "110000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed441",
      month: "2025-02",
      people_helped: "870",
      events_conducted: "3",
      funds_utilized: "78000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed43d",
      month: "2025-02",
      people_helped: "1250",
      events_conducted: "7",
      funds_utilized: "145000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed43f",
      month: "2025-02",
      people_helped: "670",
      events_conducted: "4",
      funds_utilized: "79000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed443",
      month: "2025-02",
      people_helped: "1550",
      events_conducted: "9",
      funds_utilized: "138000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed43d",
      month: "2025-01",
      people_helped: "1200",
      events_conducted: "8",
      funds_utilized: "130000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed43f",
      month: "2025-01",
      people_helped: "690",
      events_conducted: "3",
      funds_utilized: "76000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed443",
      month: "2025-01",
      people_helped: "1620",
      events_conducted: "7",
      funds_utilized: "148000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed43b",
      month: "2025-01",
      people_helped: "1080",
      events_conducted: "5",
      funds_utilized: "100000",
    },
    {
      ngo_id: "67ff8442c21f94a2debed441",
      month: "2025-01",
      people_helped: "910",
      events_conducted: "4",
      funds_utilized: "86000",
    },
  ];

  try {
    const results = await Promise.all(
      sampleReports.map(async (ngo) => {
        const response = await fetch(
          "http://localhost:8080/api/report/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(ngo),
          }
        );
        return response.json();
      })
    );
    if (results && results.length > 0) {
      console.log("Sample Report Cron created successfully", results);
    }
  } catch (error) {
    console.error("Error in createReportCron:", error);
  }
};
