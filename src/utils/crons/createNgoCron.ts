import { ngoQueries } from "../../db/queries";

export const createNgoCron = async () => {
  const sampleNgos = [
    {
      name: "Akshaya Patra Foundation",
      email: "contact@akshayapatra.org",
      contact_number: "08012345678",
      address: "Hare Krishna Hill, West of Chord Road, Rajajinagar",
      city: "Bangalore",
      state: "Karnataka",
    },
    {
      name: "Goonj",
      email: "info@goonj.org",
      contact_number: "01126972351",
      address: "J-93, Sarita Vihar",
      city: "New Delhi",
      state: "Delhi",
    },
    {
      name: "Pratham Education Foundation",
      email: "admin@pratham.org",
      contact_number: "02227802236",
      address: "Mumbai Education Trust Campus, Bandra East",
      city: "Mumbai",
      state: "Maharashtra",
    },
    {
      name: "Smile Foundation",
      email: "contactus@smilefoundationindia.org",
      contact_number: "01143123700",
      address: "Gulmohar Park, Institutional Area",
      city: "New Delhi",
      state: "Delhi",
    },
    {
      name: "HelpAge India",
      email: "headoffice@helpageindia.org",
      contact_number: "01141688955",
      address: "C-14, Qutab Institutional Area",
      city: "New Delhi",
      state: "Delhi",
    },
  ];

  try {
    const results = await Promise.all(
      sampleNgos.map(async (ngo) => {
        const existingNgo = await ngoQueries.getDuplicateNgo(ngo.email);
        if (!existingNgo) {
          await ngoQueries.createNgo(ngo);
        }
      })
    );
    if (results && results.length > 0) {
      console.log("Sample NGOs Cron created successfully");
    }
  } catch (error) {
    console.error("Error in createNgoCron:", error);
  }
};
