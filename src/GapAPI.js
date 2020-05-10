// A simple static data API
const GapAPI = {
    gaps: [
        {
            name: "Total, full-time wage and salary workers",
            slug: "total-full-time-wage-and-salary-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1007,
                        womenMedianWeeklyEarnings: 821,
                        year: 2019,
                        centsToDollar: 82,
                    },
                    {
                        menMedianWeeklyEarnings: 832,
                        womenMedianWeeklyEarnings: 684,
                        year: 2011,
                        centsToDollar: 82,
                    },
                ],
            },
            parent: null,
            children: {
                occupations: [],
            },
        },
        {
            name: "Management, professional, and related occupations",
            slug: "management-professional-and-related-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1539,
                        womenMedianWeeklyEarnings: 1135,
                        year: 2019,
                        centsToDollar: 74,
                    },
                    {
                        menMedianWeeklyEarnings: 1269,
                        womenMedianWeeklyEarnings: 941,
                        year: 2011,
                        centsToDollar: 74,
                    },
                ],
            },
            parent: null,
            children: {
                occupations: [
                    {
                        name:
                            "Management, business, and financial operations occupations",
                        slug:
                            "management-business-and-financial-operations-occupations",
                        children: {
                            occupations: [
                                {
                                    name: "Management occupations",
                                    slug: "management-occupations",
                                    children: {
                                        occupations: [
                                            {
                                                name: "Chief executives",
                                                slug: "chief-executives",
                                            },
                                            {
                                                name:
                                                    "General and operations managers",
                                                slug:
                                                    "general-and-operations-managers",
                                            },
                                            {
                                                name:
                                                    "Marketing and sales managers",
                                                slug:
                                                    "marketing-and-sales-managers",
                                            },
                                            {
                                                name:
                                                    "Administrative services managers",
                                                slug:
                                                    "administrative-services-managers",
                                            },
                                            {
                                                name:
                                                    "Computer and information systems managers",
                                                slug:
                                                    "computer-and-information-systems-managers",
                                            },
                                            {
                                                name: "Financial managers",
                                                slug: "financial-managers",
                                            },
                                            {
                                                name:
                                                    "Human resources managers",
                                                slug:
                                                    "human-resources-managers",
                                            },
                                            {
                                                name: "Legislators",
                                                slug: "legislators",
                                            },
                                            {
                                                name:
                                                    "Advertising and promotions managers",
                                                slug:
                                                    "advertising-and-promotions-managers",
                                            },
                                            {
                                                name:
                                                    "Compensation and benefits managers",
                                                slug:
                                                    "compensation-and-benefits-managers",
                                            },
                                            {
                                                name:
                                                    "Training and development managers",
                                                slug:
                                                    "training-and-development-managers",
                                            },
                                            {
                                                name:
                                                    "Funeral service managers",
                                                slug:
                                                    "funeral-service-managers",
                                            },
                                            {
                                                name: "Gaming managers",
                                                slug: "gaming-managers",
                                            },
                                            {
                                                name:
                                                    "Natural sciences managers",
                                                slug:
                                                    "natural-sciences-managers",
                                            },
                                            {
                                                name:
                                                    "Postmasters and mail superintendents",
                                                slug:
                                                    "postmasters-and-mail-superintendents",
                                            },
                                            {
                                                name:
                                                    "Emergency management directors",
                                                slug:
                                                    "emergency-management-directors",
                                            },
                                            {
                                                name:
                                                    "Industrial production managers",
                                                slug:
                                                    "industrial-production-managers",
                                            },
                                            {
                                                name: "Purchasing managers",
                                                slug: "purchasing-managers",
                                            },
                                            {
                                                name: "Construction managers",
                                                slug: "construction-managers",
                                            },
                                            {
                                                name:
                                                    "Education administrators",
                                                slug:
                                                    "education-administrators",
                                            },
                                            {
                                                name: "Food service managers",
                                                slug: "food-service-managers",
                                            },
                                            {
                                                name: "Lodging managers",
                                                slug: "lodging-managers",
                                            },
                                            {
                                                name:
                                                    "Medical and health services managers",
                                                slug:
                                                    "medical-and-health-services-managers",
                                            },
                                            {
                                                name:
                                                    "Property, real estate, and community association managers",
                                                slug:
                                                    "property-real-estate-and-community-association-managers",
                                            },
                                            {
                                                name:
                                                    "Social and community service managers",
                                                slug:
                                                    "social-and-community-service-managers",
                                            },
                                            {
                                                name: "Managers, all other",
                                                slug: "managers-all-other",
                                            },
                                            {
                                                name:
                                                    "Public relations and fundraising managers",
                                                slug:
                                                    "public-relations-and-fundraising-managers",
                                            },
                                            {
                                                name:
                                                    "Transportation, storage, and distribution managers",
                                                slug:
                                                    "transportation-storage-and-distribution-managers",
                                            },
                                            {
                                                name:
                                                    "Architectural and engineering managers",
                                                slug:
                                                    "architectural-and-engineering-managers",
                                            },
                                            {
                                                name:
                                                    "Farmers, ranchers, and other agricultural managers",
                                                slug:
                                                    "farmers-ranchers-and-other-agricultural-managers",
                                            },
                                        ],
                                    },
                                },
                                {
                                    name:
                                        "Business and financial operations occupations",
                                    slug:
                                        "business-and-financial-operations-occupations",
                                    children: {
                                        occupations: [
                                            {
                                                name:
                                                    "Business operations specialists, all other",
                                                slug:
                                                    "business-operations-specialists-all-other",
                                            },
                                            {
                                                name:
                                                    "Accountants and auditors",
                                                slug:
                                                    "accountants-and-auditors",
                                            },
                                            {
                                                name: "Financial analysts",
                                                slug: "financial-analysts",
                                            },
                                            {
                                                name:
                                                    "Personal financial advisors",
                                                slug:
                                                    "personal-financial-advisors",
                                            },
                                            {
                                                name: "Insurance underwriters",
                                                slug: "insurance-underwriters",
                                            },
                                            {
                                                name:
                                                    "Credit counselors and loan officers",
                                                slug:
                                                    "credit-counselors-and-loan-officers",
                                            },
                                            {
                                                name:
                                                    "Agents and business managers of artists, performers, and athletes",
                                                slug:
                                                    "agents-and-business-managers-of-artists-performers-and-athletes",
                                            },
                                            {
                                                name:
                                                    "Buyers and purchasing agents, farm products",
                                                slug:
                                                    "buyers-and-purchasing-agents-farm-products",
                                            },
                                            {
                                                name:
                                                    "Compensation, benefits, and job analysis specialists",
                                                slug:
                                                    "compensation-benefits-and-job-analysis-specialists",
                                            },
                                            {
                                                name:
                                                    "Wholesale and retail buyers, except farm products",
                                                slug:
                                                    "wholesale-and-retail-buyers-except-farm-products",
                                            },
                                            {
                                                name:
                                                    "Purchasing agents, except wholesale, retail, and farm products",
                                                slug:
                                                    "purchasing-agents-except-wholesale-retail-and-farm-products",
                                            },
                                            {
                                                name:
                                                    "Claims adjusters, appraisers, examiners, and investigators",
                                                slug:
                                                    "claims-adjusters-appraisers-examiners-and-investigators",
                                            },
                                            {
                                                name: "Compliance officers",
                                                slug: "compliance-officers",
                                            },
                                            {
                                                name: "Human resources workers",
                                                slug: "human-resources-workers",
                                            },
                                            {
                                                name:
                                                    "Training and development specialists",
                                                slug:
                                                    "training-and-development-specialists",
                                            },
                                            {
                                                name: "Management analysts",
                                                slug: "management-analysts",
                                            },
                                            {
                                                name:
                                                    "Market research analysts and marketing specialists",
                                                slug:
                                                    "market-research-analysts-and-marketing-specialists",
                                            },
                                            {
                                                name:
                                                    "Meeting, convention, and event planners",
                                                slug:
                                                    "meeting-convention-and-event-planners",
                                            },
                                            {
                                                name: "Fundraisers",
                                                slug: "fundraisers",
                                            },
                                            {
                                                name: "Cost estimators",
                                                slug: "cost-estimators",
                                            },
                                            {
                                                name: "Logisticians",
                                                slug: "logisticians",
                                            },
                                            {
                                                name:
                                                    "Financial specialists, all other",
                                                slug:
                                                    "financial-specialists-all-other",
                                            },
                                            {
                                                name:
                                                    "Appraisers and assessors of real estate",
                                                slug:
                                                    "appraisers-and-assessors-of-real-estate",
                                            },
                                            {
                                                name: "Budget analysts",
                                                slug: "budget-analysts",
                                            },
                                            {
                                                name: "Credit analysts",
                                                slug: "credit-analysts",
                                            },
                                            {
                                                name: "Financial examiners",
                                                slug: "financial-examiners",
                                            },
                                            {
                                                name:
                                                    "Tax examiners and collectors, and revenue agents",
                                                slug:
                                                    "tax-examiners-and-collectors-and-revenue-agents",
                                            },
                                            {
                                                name: "Tax preparers",
                                                slug: "tax-preparers",
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        name: "Professional and related occupations",
                        slug: "professional-and-related-occupations",
                        children: {
                            occupations: [
                                {
                                    name:
                                        "Computer and mathematical occupations",
                                    slug:
                                        "computer-and-mathematical-occupations",
                                    children: {
                                        occupations: [
                                            {
                                                name:
                                                    "Computer systems analysts",
                                                slug:
                                                    "computer-systems-analysts",
                                            },
                                            {
                                                name: "Computer programmers",
                                                slug: "computer-programmers",
                                            },
                                            {
                                                name:
                                                    "Software developers, applications and systems software",
                                                slug:
                                                    "software-developers-applications-and-systems-software",
                                            },
                                            {
                                                name: "Web developers",
                                                slug: "web-developers",
                                            },
                                            {
                                                name:
                                                    "Computer support specialists",
                                                slug:
                                                    "computer-support-specialists",
                                            },
                                            {
                                                name:
                                                    "Network and computer systems administrators",
                                                slug:
                                                    "network-and-computer-systems-administrators",
                                            },
                                            {
                                                name:
                                                    "Computer occupations, all other",
                                                slug:
                                                    "computer-occupations-all-other",
                                            },
                                            {
                                                name: "Actuaries",
                                                slug: "actuaries",
                                            },
                                            {
                                                name: "Mathematicians",
                                                slug: "mathematicians",
                                            },
                                            {
                                                name:
                                                    "Miscellaneous mathematical science occupations",
                                                slug:
                                                    "miscellaneous-mathematical-science-occupations",
                                            },
                                            {
                                                name:
                                                    "Operations research analysts",
                                                slug:
                                                    "operations-research-analysts",
                                            },
                                            {
                                                name:
                                                    "Information security analysts",
                                                slug:
                                                    "information-security-analysts",
                                            },
                                            {
                                                name: "Database administrators",
                                                slug: "database-administrators",
                                            },
                                            {
                                                name:
                                                    "Computer network architects",
                                                slug:
                                                    "computer-network-architects",
                                            },
                                            {
                                                name: "Statisticians",
                                                slug: "statisticians",
                                            },
                                            {
                                                name:
                                                    "Computer and information research scientists",
                                                slug:
                                                    "computer-and-information-research-scientists",
                                            },
                                        ],
                                    },
                                },
                                {
                                    name:
                                        "Life, physical, and social science occupations",
                                    slug:
                                        "life-physical-and-social-science-occupations",
                                    children: {
                                        occupations: [
                                            {
                                                name: "Medical scientists",
                                                slug: "medical-scientists",
                                            },
                                            {
                                                name:
                                                    "Physical scientists, all other",
                                                slug:
                                                    "physical-scientists-all-other",
                                            },
                                            {
                                                name:
                                                    "Miscellaneous life, physical, and social science technicians",
                                                slug:
                                                    "miscellaneous-life-physical-and-social-science-technicians",
                                            },
                                            {
                                                name:
                                                    "Agricultural and food scientists",
                                                slug:
                                                    "agricultural-and-food-scientists",
                                            },
                                            {
                                                name:
                                                    "Conservation scientists and foresters",
                                                slug:
                                                    "conservation-scientists-and-foresters",
                                            },
                                            {
                                                name: "Psychologists",
                                                slug: "psychologists",
                                            },
                                            {
                                                name: "Biological scientists",
                                                slug: "biological-scientists",
                                            },
                                            {
                                                name:
                                                    "Environmental scientists and geoscientists",
                                                slug:
                                                    "environmental-scientists-and-geoscientists",
                                            },
                                            {
                                                name:
                                                    "Chemists and materials scientists",
                                                slug:
                                                    "chemists-and-materials-scientists",
                                            },
                                            {
                                                name: "Chemical technicians",
                                                slug: "chemical-technicians",
                                            },
                                            {
                                                name: "Economists",
                                                slug: "economists",
                                            },
                                            {
                                                name:
                                                    "Life scientists, all other",
                                                slug:
                                                    "life-scientists-all-other",
                                            },
                                            {
                                                name:
                                                    "Astronomers and physicists",
                                                slug:
                                                    "astronomers-and-physicists",
                                            },
                                            {
                                                name:
                                                    "Atmospheric and space scientists",
                                                slug:
                                                    "atmospheric-and-space-scientists",
                                            },
                                            {
                                                name: "Survey researchers",
                                                slug: "survey-researchers",
                                            },
                                            {
                                                name: "Sociologists",
                                                slug: "sociologists",
                                            },
                                            {
                                                name:
                                                    "Urban and regional planners",
                                                slug:
                                                    "urban-and-regional-planners",
                                            },
                                            {
                                                name:
                                                    "Miscellaneous social scientists and related workers",
                                                slug:
                                                    "miscellaneous-social-scientists-and-related-workers",
                                            },
                                            {
                                                name:
                                                    "Agricultural and food science technicians",
                                                slug:
                                                    "agricultural-and-food-science-technicians",
                                            },
                                            {
                                                name: "Biological technicians",
                                                slug: "biological-technicians",
                                            },
                                            {
                                                name:
                                                    "Geological and petroleum technicians",
                                                slug:
                                                    "geological-and-petroleum-technicians",
                                            },
                                            {
                                                name: "Nuclear technicians",
                                                slug: "nuclear-technicians",
                                            },
                                            {
                                                name:
                                                    "Social science research assistants",
                                                slug:
                                                    "social-science-research-assistants",
                                            },
                                        ],
                                    },
                                },
                                {
                                    name:
                                        "Arts, design, entertainment, sports, and media occupations",
                                    slug:
                                        "arts-design-entertainment-sports-and-media-occupations",
                                    children: {
                                        occupations: [
                                            {
                                                name: "Designers",
                                                slug: "designers",
                                            },
                                            {
                                                name: "Producers and directors",
                                                slug: "producers-and-directors",
                                            },
                                            {
                                                name: "Editors",
                                                slug: "editors",
                                            },
                                            {
                                                name:
                                                    "Public relations specialists",
                                                slug:
                                                    "public-relations-specialists",
                                            },
                                            {
                                                name:
                                                    "Athletes, coaches, umpires, and related workers",
                                                slug:
                                                    "athletes-coaches-umpires-and-related-workers",
                                            },
                                            {
                                                name:
                                                    "Broadcast and sound engineering technicians and radio operators",
                                                slug:
                                                    "broadcast-and-sound-engineering-technicians-and-radio-operators",
                                            },
                                            {
                                                name:
                                                    "Artists and related workers",
                                                slug:
                                                    "artists-and-related-workers",
                                            },
                                            {
                                                name:
                                                    "News analysts, reporters and correspondents",
                                                slug:
                                                    "news-analysts-reporters-and-correspondents",
                                            },
                                            {
                                                name: "Technical writers",
                                                slug: "technical-writers",
                                            },
                                            {
                                                name: "Writers and authors",
                                                slug: "writers-and-authors",
                                            },
                                            {
                                                name:
                                                    "Miscellaneous media and communication workers",
                                                slug:
                                                    "miscellaneous-media-and-communication-workers",
                                            },
                                            {
                                                name: "Actors",
                                                slug: "actors",
                                            },
                                            {
                                                name:
                                                    "Dancers and choreographers",
                                                slug:
                                                    "dancers-and-choreographers",
                                            },
                                            {
                                                name:
                                                    "Musicians, singers, and related workers",
                                                slug:
                                                    "musicians-singers-and-related-workers",
                                            },
                                            {
                                                name:
                                                    "Entertainers and performers, sports and related workers, all other",
                                                slug:
                                                    "entertainers-and-performers-sports-and-related-workers-all-other",
                                            },
                                            {
                                                name: "Announcers",
                                                slug: "announcers",
                                            },
                                            {
                                                name: "Photographers",
                                                slug: "photographers",
                                            },
                                            {
                                                name:
                                                    "Television, video, and motion picture camera operators and editors",
                                                slug:
                                                    "television-video-and-motion-picture-camera-operators-and-editors",
                                            },
                                            {
                                                name:
                                                    "Media and communication equipment workers, all other",
                                                slug:
                                                    "media-and-communication-equipment-workers-all-other",
                                            },
                                        ],
                                    },
                                },
                                {
                                    name:
                                        "Healthcare practitioners and technical occupations",
                                    slug:
                                        "healthcare-practitioners-and-technical-occupations",
                                    children: {
                                        occupations: [
                                            {
                                                name: "Pharmacists",
                                                slug: "pharmacists",
                                            },
                                            {
                                                name: "Physicians and surgeons",
                                                slug: "physicians-and-surgeons",
                                            },
                                            {
                                                name: "Physical therapists",
                                                slug: "physical-therapists",
                                            },
                                            {
                                                name:
                                                    "Health practitioner support technologists and technicians",
                                                slug:
                                                    "health-practitioner-support-technologists-and-technicians",
                                            },
                                            {
                                                name:
                                                    "Licensed practical and licensed vocational nurses",
                                                slug:
                                                    "licensed-practical-and-licensed-vocational-nurses",
                                            },
                                            {
                                                name: "Nurse practitioners",
                                                slug: "nurse-practitioners",
                                            },
                                            {
                                                name: "Nurse midwives",
                                                slug: "nurse-midwives",
                                            },
                                            {
                                                name: "Registered nurses",
                                                slug: "registered-nurses",
                                            },
                                            {
                                                name:
                                                    "Clinical laboratory technologists and technicians",
                                                slug:
                                                    "clinical-laboratory-technologists-and-technicians",
                                            },
                                            {
                                                name:
                                                    "Diagnostic related technologists and technicians",
                                                slug:
                                                    "diagnostic-related-technologists-and-technicians",
                                            },
                                            {
                                                name:
                                                    "Emergency medical technicians and paramedics",
                                                slug:
                                                    "emergency-medical-technicians-and-paramedics",
                                            },
                                            {
                                                name:
                                                    "Dietitians and nutritionists",
                                                slug:
                                                    "dietitians-and-nutritionists",
                                            },
                                            {
                                                name: "Physician assistants",
                                                slug: "physician-assistants",
                                            },
                                            {
                                                name: "Occupational therapists",
                                                slug: "occupational-therapists",
                                            },
                                            {
                                                name: "Respiratory therapists",
                                                slug: "respiratory-therapists",
                                            },
                                            {
                                                name:
                                                    "Speech-language pathologists",
                                                slug:
                                                    "speech-language-pathologists",
                                            },
                                            {
                                                name: "Therapists, all other",
                                                slug: "therapists-all-other",
                                            },
                                            {
                                                name: "Veterinarians",
                                                slug: "veterinarians",
                                            },
                                            {
                                                name: "Dental hygienists",
                                                slug: "dental-hygienists",
                                            },
                                            {
                                                name: "Dentists",
                                                slug: "dentists",
                                            },
                                            {
                                                name:
                                                    "Medical records and health information technicians",
                                                slug:
                                                    "medical-records-and-health-information-technicians",
                                            },
                                            {
                                                name:
                                                    "Miscellaneous health technologists and technicians",
                                                slug:
                                                    "miscellaneous-health-technologists-and-technicians",
                                            },
                                            {
                                                name:
                                                    "Other healthcare practitioners and technical occupations",
                                                slug:
                                                    "other-healthcare-practitioners-and-technical-occupations",
                                            },
                                            {
                                                name: "Exercise physiologists",
                                                slug: "exercise-physiologists",
                                            },
                                            {
                                                name: "Chiropractors",
                                                slug: "chiropractors",
                                            },
                                            {
                                                name: "Optometrists",
                                                slug: "optometrists",
                                            },
                                            {
                                                name: "Podiatrists",
                                                slug: "podiatrists",
                                            },
                                            {
                                                name: "Audiologists",
                                                slug: "audiologists",
                                            },
                                            {
                                                name: "Radiation therapists",
                                                slug: "radiation-therapists",
                                            },
                                            {
                                                name: "Recreational therapists",
                                                slug: "recreational-therapists",
                                            },
                                            {
                                                name: "Nurse anesthetists",
                                                slug: "nurse-anesthetists",
                                            },
                                            {
                                                name:
                                                    "Health diagnosing and treating practitioners, all other",
                                                slug:
                                                    "health-diagnosing-and-treating-practitioners-all-other",
                                            },
                                            {
                                                name: "Opticians, dispensing",
                                                slug: "opticians-dispensing",
                                            },
                                        ],
                                    },
                                },
                                {
                                    name:
                                        "Architecture and engineering occupations",
                                    slug:
                                        "architecture-and-engineering-occupations",
                                    children: {
                                        occupations: [
                                            {
                                                name:
                                                    "Engineering technicians, except drafters",
                                                slug:
                                                    "engineering-technicians-except-drafters",
                                            },
                                            {
                                                name:
                                                    "Surveyors, cartographers, and photogrammetrists",
                                                slug:
                                                    "surveyors-cartographers-and-photogrammetrists",
                                            },
                                            {
                                                name: "Agricultural engineers",
                                                slug: "agricultural-engineers",
                                            },
                                            {
                                                name: "Biomedical engineers",
                                                slug: "biomedical-engineers",
                                            },
                                            {
                                                name: "Environmental engineers",
                                                slug: "environmental-engineers",
                                            },
                                            {
                                                name:
                                                    "Marine engineers and naval architects",
                                                slug:
                                                    "marine-engineers-and-naval-architects",
                                            },
                                            {
                                                name: "Materials engineers",
                                                slug: "materials-engineers",
                                            },
                                            {
                                                name:
                                                    "Mining and geological engineers, including mining safety engineers",
                                                slug:
                                                    "mining-and-geological-engineers-including-mining-safety-engineers",
                                            },
                                            {
                                                name: "Nuclear engineers",
                                                slug: "nuclear-engineers",
                                            },
                                            {
                                                name: "Petroleum engineers",
                                                slug: "petroleum-engineers",
                                            },
                                            {
                                                name: "Aerospace engineers",
                                                slug: "aerospace-engineers",
                                            },
                                            {
                                                name:
                                                    "Industrial engineers, including health and safety",
                                                slug:
                                                    "industrial-engineers-including-health-and-safety",
                                            },
                                            {
                                                name: "Engineers, all other",
                                                slug: "engineers-all-other",
                                            },
                                            {
                                                name:
                                                    "Architects, except naval",
                                                slug: "architects-except-naval",
                                            },
                                            {
                                                name: "Civil engineers",
                                                slug: "civil-engineers",
                                            },
                                            {
                                                name: "Chemical engineers",
                                                slug: "chemical-engineers",
                                            },
                                            {
                                                name:
                                                    "Computer hardware engineers",
                                                slug:
                                                    "computer-hardware-engineers",
                                            },
                                            {
                                                name:
                                                    "Electrical and electronics engineers",
                                                slug:
                                                    "electrical-and-electronics-engineers",
                                            },
                                            {
                                                name: "Mechanical engineers",
                                                slug: "mechanical-engineers",
                                            },
                                            {
                                                name: "Drafters",
                                                slug: "drafters",
                                            },
                                            {
                                                name:
                                                    "Surveying and mapping technicians",
                                                slug:
                                                    "surveying-and-mapping-technicians",
                                            },
                                        ],
                                    },
                                },
                                {
                                    name:
                                        "Community and social service occupations",
                                    slug:
                                        "community-and-social-service-occupations",
                                    children: {
                                        occupations: [
                                            {
                                                name: "Counselors",
                                                slug: "counselors",
                                            },
                                            {
                                                name: "Social workers",
                                                slug: "social-workers",
                                            },
                                            {
                                                name: "Clergy",
                                                slug: "clergy",
                                            },
                                            {
                                                name:
                                                    "Social and human service assistants",
                                                slug:
                                                    "social-and-human-service-assistants",
                                            },
                                            {
                                                name:
                                                    "Probation officers and correctional treatment specialists",
                                                slug:
                                                    "probation-officers-and-correctional-treatment-specialists",
                                            },
                                            {
                                                name:
                                                    "Miscellaneous community and social service specialists, including health educators and community health workers",
                                                slug:
                                                    "miscellaneous-community-and-social-service-specialists-including-health-educators-and-community-health-workers",
                                            },
                                            {
                                                name:
                                                    "Directors, religious activities and education",
                                                slug:
                                                    "directors-religious-activities-and-education",
                                            },
                                            {
                                                name:
                                                    "Religious workers, all other",
                                                slug:
                                                    "religious-workers-all-other",
                                            },
                                        ],
                                    },
                                },
                                {
                                    name: "Legal occupations",
                                    slug: "legal-occupations",
                                    children: {
                                        occupations: [
                                            {
                                                name: "Lawyers",
                                                slug: "lawyers",
                                            },
                                            {
                                                name:
                                                    "Paralegals and legal assistants",
                                                slug:
                                                    "paralegals-and-legal-assistants",
                                            },
                                            {
                                                name:
                                                    "Miscellaneous legal support workers",
                                                slug:
                                                    "miscellaneous-legal-support-workers",
                                            },
                                            {
                                                name:
                                                    "Judges, magistrates, and other judicial workers",
                                                slug:
                                                    "judges-magistrates-and-other-judicial-workers",
                                            },
                                            {
                                                name: "Judicial law clerks",
                                                slug: "judicial-law-clerks",
                                            },
                                        ],
                                    },
                                },
                                {
                                    name:
                                        "Education, training, and library occupations",
                                    slug:
                                        "education-training-and-library-occupations",
                                    children: {
                                        occupations: [
                                            {
                                                name: "Library technicians",
                                                slug: "library-technicians",
                                            },
                                            {
                                                name: "Teacher assistants",
                                                slug: "teacher-assistants",
                                            },
                                            {
                                                name: "Postsecondary teachers",
                                                slug: "postsecondary-teachers",
                                            },
                                            {
                                                name:
                                                    "Elementary and middle school teachers",
                                                slug:
                                                    "elementary-and-middle-school-teachers",
                                            },
                                            {
                                                name:
                                                    "Secondary school teachers",
                                                slug:
                                                    "secondary-school-teachers",
                                            },
                                            {
                                                name:
                                                    "Other teachers and instructors",
                                                slug:
                                                    "other-teachers-and-instructors",
                                            },
                                            {
                                                name:
                                                    "Preschool and kindergarten teachers",
                                                slug:
                                                    "preschool-and-kindergarten-teachers",
                                            },
                                            {
                                                name:
                                                    "Special education teachers",
                                                slug:
                                                    "special-education-teachers",
                                            },
                                            {
                                                name: "Librarians",
                                                slug: "librarians",
                                            },
                                            {
                                                name:
                                                    "Other education, training, and library workers",
                                                slug:
                                                    "other-education-training-and-library-workers",
                                            },
                                            {
                                                name:
                                                    "Archivists, curators, and museum technicians",
                                                slug:
                                                    "archivists-curators-and-museum-technicians",
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            name: "Management, business, and financial operations occupations",
            slug: "management-business-and-financial-operations-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1598,
                        womenMedianWeeklyEarnings: 1221,
                        year: 2019,
                        centsToDollar: 76,
                    },
                    {
                        menMedianWeeklyEarnings: 1370,
                        womenMedianWeeklyEarnings: 977,
                        year: 2011,
                        centsToDollar: 71,
                    },
                ],
            },
            parent: {
                slug: "management-professional-and-related-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Management occupations",
                        slug: "management-occupations",
                        children: {
                            occupations: [
                                {
                                    name: "Chief executives",
                                    slug: "chief-executives",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "General and operations managers",
                                    slug: "general-and-operations-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Marketing and sales managers",
                                    slug: "marketing-and-sales-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Administrative services managers",
                                    slug: "administrative-services-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Computer and information systems managers",
                                    slug:
                                        "computer-and-information-systems-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Financial managers",
                                    slug: "financial-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Human resources managers",
                                    slug: "human-resources-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Legislators",
                                    slug: "legislators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Advertising and promotions managers",
                                    slug: "advertising-and-promotions-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Compensation and benefits managers",
                                    slug: "compensation-and-benefits-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Training and development managers",
                                    slug: "training-and-development-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Funeral service managers",
                                    slug: "funeral-service-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Gaming managers",
                                    slug: "gaming-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Natural sciences managers",
                                    slug: "natural-sciences-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Postmasters and mail superintendents",
                                    slug:
                                        "postmasters-and-mail-superintendents",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Emergency management directors",
                                    slug: "emergency-management-directors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Industrial production managers",
                                    slug: "industrial-production-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Purchasing managers",
                                    slug: "purchasing-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Construction managers",
                                    slug: "construction-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Education administrators",
                                    slug: "education-administrators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Food service managers",
                                    slug: "food-service-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Lodging managers",
                                    slug: "lodging-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Medical and health services managers",
                                    slug:
                                        "medical-and-health-services-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Property, real estate, and community association managers",
                                    slug:
                                        "property-real-estate-and-community-association-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Social and community service managers",
                                    slug:
                                        "social-and-community-service-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Managers, all other",
                                    slug: "managers-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Public relations and fundraising managers",
                                    slug:
                                        "public-relations-and-fundraising-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Transportation, storage, and distribution managers",
                                    slug:
                                        "transportation-storage-and-distribution-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Architectural and engineering managers",
                                    slug:
                                        "architectural-and-engineering-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Farmers, ranchers, and other agricultural managers",
                                    slug:
                                        "farmers-ranchers-and-other-agricultural-managers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        name: "Business and financial operations occupations",
                        slug: "business-and-financial-operations-occupations",
                        children: {
                            occupations: [
                                {
                                    name:
                                        "Business operations specialists, all other",
                                    slug:
                                        "business-operations-specialists-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Accountants and auditors",
                                    slug: "accountants-and-auditors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Financial analysts",
                                    slug: "financial-analysts",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Personal financial advisors",
                                    slug: "personal-financial-advisors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Insurance underwriters",
                                    slug: "insurance-underwriters",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Credit counselors and loan officers",
                                    slug: "credit-counselors-and-loan-officers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Agents and business managers of artists, performers, and athletes",
                                    slug:
                                        "agents-and-business-managers-of-artists-performers-and-athletes",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Buyers and purchasing agents, farm products",
                                    slug:
                                        "buyers-and-purchasing-agents-farm-products",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Compensation, benefits, and job analysis specialists",
                                    slug:
                                        "compensation-benefits-and-job-analysis-specialists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Wholesale and retail buyers, except farm products",
                                    slug:
                                        "wholesale-and-retail-buyers-except-farm-products",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Purchasing agents, except wholesale, retail, and farm products",
                                    slug:
                                        "purchasing-agents-except-wholesale-retail-and-farm-products",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Claims adjusters, appraisers, examiners, and investigators",
                                    slug:
                                        "claims-adjusters-appraisers-examiners-and-investigators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Compliance officers",
                                    slug: "compliance-officers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Human resources workers",
                                    slug: "human-resources-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Training and development specialists",
                                    slug:
                                        "training-and-development-specialists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Management analysts",
                                    slug: "management-analysts",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Market research analysts and marketing specialists",
                                    slug:
                                        "market-research-analysts-and-marketing-specialists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Meeting, convention, and event planners",
                                    slug:
                                        "meeting-convention-and-event-planners",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Fundraisers",
                                    slug: "fundraisers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Cost estimators",
                                    slug: "cost-estimators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Logisticians",
                                    slug: "logisticians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Financial specialists, all other",
                                    slug: "financial-specialists-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Appraisers and assessors of real estate",
                                    slug:
                                        "appraisers-and-assessors-of-real-estate",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Budget analysts",
                                    slug: "budget-analysts",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Credit analysts",
                                    slug: "credit-analysts",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Financial examiners",
                                    slug: "financial-examiners",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Tax examiners and collectors, and revenue agents",
                                    slug:
                                        "tax-examiners-and-collectors-and-revenue-agents",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Tax preparers",
                                    slug: "tax-preparers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            name: "Management occupations",
            slug: "management-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1659,
                        womenMedianWeeklyEarnings: 1266,
                        year: 2019,
                        centsToDollar: 76,
                    },
                    {
                        menMedianWeeklyEarnings: 1427,
                        womenMedianWeeklyEarnings: 1018,
                        year: 2011,
                        centsToDollar: 71,
                    },
                ],
            },
            parent: {
                slug:
                    "management-business-and-financial-operations-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Chief executives",
                        slug: "chief-executives",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "General and operations managers",
                        slug: "general-and-operations-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Marketing and sales managers",
                        slug: "marketing-and-sales-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Administrative services managers",
                        slug: "administrative-services-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Computer and information systems managers",
                        slug: "computer-and-information-systems-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Financial managers",
                        slug: "financial-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Human resources managers",
                        slug: "human-resources-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Legislators",
                        slug: "legislators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Advertising and promotions managers",
                        slug: "advertising-and-promotions-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Compensation and benefits managers",
                        slug: "compensation-and-benefits-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Training and development managers",
                        slug: "training-and-development-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Funeral service managers",
                        slug: "funeral-service-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Gaming managers",
                        slug: "gaming-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Natural sciences managers",
                        slug: "natural-sciences-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Postmasters and mail superintendents",
                        slug: "postmasters-and-mail-superintendents",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Emergency management directors",
                        slug: "emergency-management-directors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Industrial production managers",
                        slug: "industrial-production-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Purchasing managers",
                        slug: "purchasing-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Construction managers",
                        slug: "construction-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Education administrators",
                        slug: "education-administrators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Food service managers",
                        slug: "food-service-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Lodging managers",
                        slug: "lodging-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Medical and health services managers",
                        slug: "medical-and-health-services-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Property, real estate, and community association managers",
                        slug:
                            "property-real-estate-and-community-association-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Social and community service managers",
                        slug: "social-and-community-service-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Managers, all other",
                        slug: "managers-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Public relations and fundraising managers",
                        slug: "public-relations-and-fundraising-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Transportation, storage, and distribution managers",
                        slug:
                            "transportation-storage-and-distribution-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Architectural and engineering managers",
                        slug: "architectural-and-engineering-managers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Farmers, ranchers, and other agricultural managers",
                        slug:
                            "farmers-ranchers-and-other-agricultural-managers",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Chief executives",
            slug: "chief-executives",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 2509,
                        womenMedianWeeklyEarnings: 2019,
                        year: 2019,
                        centsToDollar: 80,
                    },
                    {
                        menMedianWeeklyEarnings: 2122,
                        womenMedianWeeklyEarnings: 1464,
                        year: 2011,
                        centsToDollar: 69,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "General and operations managers",
            slug: "general-and-operations-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1476,
                        womenMedianWeeklyEarnings: 1153,
                        year: 2019,
                        centsToDollar: 78,
                    },
                    {
                        menMedianWeeklyEarnings: 1319,
                        womenMedianWeeklyEarnings: 972,
                        year: 2011,
                        centsToDollar: 74,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Marketing and sales managers",
            slug: "marketing-and-sales-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1895,
                        womenMedianWeeklyEarnings: 1393,
                        year: 2019,
                        centsToDollar: 74,
                    },
                    {
                        menMedianWeeklyEarnings: 1660,
                        womenMedianWeeklyEarnings: 1127,
                        year: 2011,
                        centsToDollar: 68,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Administrative services managers",
            slug: "administrative-services-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1277,
                        womenMedianWeeklyEarnings: 1084,
                        year: 2019,
                        centsToDollar: 85,
                    },
                    {
                        menMedianWeeklyEarnings: 1170,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Computer and information systems managers",
            slug: "computer-and-information-systems-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 2019,
                        womenMedianWeeklyEarnings: 1892,
                        year: 2019,
                        centsToDollar: 94,
                    },
                    {
                        menMedianWeeklyEarnings: 1595,
                        womenMedianWeeklyEarnings: 1543,
                        year: 2011,
                        centsToDollar: 97,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Financial managers",
            slug: "financial-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1897,
                        womenMedianWeeklyEarnings: 1207,
                        year: 2019,
                        centsToDollar: 64,
                    },
                    {
                        menMedianWeeklyEarnings: 1504,
                        womenMedianWeeklyEarnings: 991,
                        year: 2011,
                        centsToDollar: 66,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Human resources managers",
            slug: "human-resources-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1829,
                        womenMedianWeeklyEarnings: 1538,
                        year: 2019,
                        centsToDollar: 84,
                    },
                    {
                        menMedianWeeklyEarnings: 1488,
                        womenMedianWeeklyEarnings: 1273,
                        year: 2011,
                        centsToDollar: 86,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Business operations specialists, all other",
            slug: "business-operations-specialists-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1540,
                        womenMedianWeeklyEarnings: 1193,
                        year: 2019,
                        centsToDollar: 77,
                    },
                    {
                        menMedianWeeklyEarnings: 1185,
                        womenMedianWeeklyEarnings: 908,
                        year: 2011,
                        centsToDollar: 77,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Accountants and auditors",
            slug: "accountants-and-auditors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1419,
                        womenMedianWeeklyEarnings: 1141,
                        year: 2019,
                        centsToDollar: 80,
                    },
                    {
                        menMedianWeeklyEarnings: 1250,
                        womenMedianWeeklyEarnings: 956,
                        year: 2011,
                        centsToDollar: 76,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Financial analysts",
            slug: "financial-analysts",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1763,
                        womenMedianWeeklyEarnings: 1386,
                        year: 2019,
                        centsToDollar: 79,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Personal financial advisors",
            slug: "personal-financial-advisors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1905,
                        womenMedianWeeklyEarnings: 1232,
                        year: 2019,
                        centsToDollar: 65,
                    },
                    {
                        menMedianWeeklyEarnings: 1535,
                        womenMedianWeeklyEarnings: 941,
                        year: 2011,
                        centsToDollar: 61,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Insurance underwriters",
            slug: "insurance-underwriters",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1338,
                        womenMedianWeeklyEarnings: 1142,
                        year: 2019,
                        centsToDollar: 85,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 939,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Credit counselors and loan officers",
            slug: "credit-counselors-and-loan-officers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1542,
                        womenMedianWeeklyEarnings: 1020,
                        year: 2019,
                        centsToDollar: 66,
                    },
                    {
                        menMedianWeeklyEarnings: 1345,
                        womenMedianWeeklyEarnings: 829,
                        year: 2011,
                        centsToDollar: 62,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Professional and related occupations",
            slug: "professional-and-related-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1493,
                        womenMedianWeeklyEarnings: 1085,
                        year: 2019,
                        centsToDollar: 73,
                    },
                    {
                        menMedianWeeklyEarnings: 1211,
                        womenMedianWeeklyEarnings: 919,
                        year: 2011,
                        centsToDollar: 76,
                    },
                ],
            },
            parent: {
                slug: "management-professional-and-related-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Computer and mathematical occupations",
                        slug: "computer-and-mathematical-occupations",
                        children: {
                            occupations: [
                                {
                                    name: "Computer systems analysts",
                                    slug: "computer-systems-analysts",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Computer programmers",
                                    slug: "computer-programmers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Software developers, applications and systems software",
                                    slug:
                                        "software-developers-applications-and-systems-software",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Web developers",
                                    slug: "web-developers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Computer support specialists",
                                    slug: "computer-support-specialists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Network and computer systems administrators",
                                    slug:
                                        "network-and-computer-systems-administrators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Computer occupations, all other",
                                    slug: "computer-occupations-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Actuaries",
                                    slug: "actuaries",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Mathematicians",
                                    slug: "mathematicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Miscellaneous mathematical science occupations",
                                    slug:
                                        "miscellaneous-mathematical-science-occupations",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Operations research analysts",
                                    slug: "operations-research-analysts",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Information security analysts",
                                    slug: "information-security-analysts",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Database administrators",
                                    slug: "database-administrators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Computer network architects",
                                    slug: "computer-network-architects",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Statisticians",
                                    slug: "statisticians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Computer and information research scientists",
                                    slug:
                                        "computer-and-information-research-scientists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        name: "Life, physical, and social science occupations",
                        slug: "life-physical-and-social-science-occupations",
                        children: {
                            occupations: [
                                {
                                    name: "Medical scientists",
                                    slug: "medical-scientists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Physical scientists, all other",
                                    slug: "physical-scientists-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Miscellaneous life, physical, and social science technicians",
                                    slug:
                                        "miscellaneous-life-physical-and-social-science-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Agricultural and food scientists",
                                    slug: "agricultural-and-food-scientists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Conservation scientists and foresters",
                                    slug:
                                        "conservation-scientists-and-foresters",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Psychologists",
                                    slug: "psychologists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Biological scientists",
                                    slug: "biological-scientists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Environmental scientists and geoscientists",
                                    slug:
                                        "environmental-scientists-and-geoscientists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Chemists and materials scientists",
                                    slug: "chemists-and-materials-scientists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Chemical technicians",
                                    slug: "chemical-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Economists",
                                    slug: "economists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Life scientists, all other",
                                    slug: "life-scientists-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Astronomers and physicists",
                                    slug: "astronomers-and-physicists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Atmospheric and space scientists",
                                    slug: "atmospheric-and-space-scientists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Survey researchers",
                                    slug: "survey-researchers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Sociologists",
                                    slug: "sociologists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Urban and regional planners",
                                    slug: "urban-and-regional-planners",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Miscellaneous social scientists and related workers",
                                    slug:
                                        "miscellaneous-social-scientists-and-related-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Agricultural and food science technicians",
                                    slug:
                                        "agricultural-and-food-science-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Biological technicians",
                                    slug: "biological-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Geological and petroleum technicians",
                                    slug:
                                        "geological-and-petroleum-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Nuclear technicians",
                                    slug: "nuclear-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Social science research assistants",
                                    slug: "social-science-research-assistants",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        name:
                            "Arts, design, entertainment, sports, and media occupations",
                        slug:
                            "arts-design-entertainment-sports-and-media-occupations",
                        children: {
                            occupations: [
                                {
                                    name: "Designers",
                                    slug: "designers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Producers and directors",
                                    slug: "producers-and-directors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Editors",
                                    slug: "editors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Public relations specialists",
                                    slug: "public-relations-specialists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Athletes, coaches, umpires, and related workers",
                                    slug:
                                        "athletes-coaches-umpires-and-related-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Broadcast and sound engineering technicians and radio operators",
                                    slug:
                                        "broadcast-and-sound-engineering-technicians-and-radio-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Artists and related workers",
                                    slug: "artists-and-related-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "News analysts, reporters and correspondents",
                                    slug:
                                        "news-analysts-reporters-and-correspondents",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Technical writers",
                                    slug: "technical-writers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Writers and authors",
                                    slug: "writers-and-authors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Miscellaneous media and communication workers",
                                    slug:
                                        "miscellaneous-media-and-communication-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Actors",
                                    slug: "actors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Dancers and choreographers",
                                    slug: "dancers-and-choreographers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Musicians, singers, and related workers",
                                    slug:
                                        "musicians-singers-and-related-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Entertainers and performers, sports and related workers, all other",
                                    slug:
                                        "entertainers-and-performers-sports-and-related-workers-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Announcers",
                                    slug: "announcers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Photographers",
                                    slug: "photographers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Television, video, and motion picture camera operators and editors",
                                    slug:
                                        "television-video-and-motion-picture-camera-operators-and-editors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Media and communication equipment workers, all other",
                                    slug:
                                        "media-and-communication-equipment-workers-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        name:
                            "Healthcare practitioners and technical occupations",
                        slug:
                            "healthcare-practitioners-and-technical-occupations",
                        children: {
                            occupations: [
                                {
                                    name: "Pharmacists",
                                    slug: "pharmacists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Physicians and surgeons",
                                    slug: "physicians-and-surgeons",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Physical therapists",
                                    slug: "physical-therapists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Health practitioner support technologists and technicians",
                                    slug:
                                        "health-practitioner-support-technologists-and-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Licensed practical and licensed vocational nurses",
                                    slug:
                                        "licensed-practical-and-licensed-vocational-nurses",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Nurse practitioners",
                                    slug: "nurse-practitioners",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Nurse midwives",
                                    slug: "nurse-midwives",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Registered nurses",
                                    slug: "registered-nurses",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Clinical laboratory technologists and technicians",
                                    slug:
                                        "clinical-laboratory-technologists-and-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Diagnostic related technologists and technicians",
                                    slug:
                                        "diagnostic-related-technologists-and-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Emergency medical technicians and paramedics",
                                    slug:
                                        "emergency-medical-technicians-and-paramedics",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Dietitians and nutritionists",
                                    slug: "dietitians-and-nutritionists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Physician assistants",
                                    slug: "physician-assistants",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Occupational therapists",
                                    slug: "occupational-therapists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Respiratory therapists",
                                    slug: "respiratory-therapists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Speech-language pathologists",
                                    slug: "speech-language-pathologists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Therapists, all other",
                                    slug: "therapists-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Veterinarians",
                                    slug: "veterinarians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Dental hygienists",
                                    slug: "dental-hygienists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Dentists",
                                    slug: "dentists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Medical records and health information technicians",
                                    slug:
                                        "medical-records-and-health-information-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Miscellaneous health technologists and technicians",
                                    slug:
                                        "miscellaneous-health-technologists-and-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Other healthcare practitioners and technical occupations",
                                    slug:
                                        "other-healthcare-practitioners-and-technical-occupations",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Exercise physiologists",
                                    slug: "exercise-physiologists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Chiropractors",
                                    slug: "chiropractors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Optometrists",
                                    slug: "optometrists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Podiatrists",
                                    slug: "podiatrists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Audiologists",
                                    slug: "audiologists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Radiation therapists",
                                    slug: "radiation-therapists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Recreational therapists",
                                    slug: "recreational-therapists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Nurse anesthetists",
                                    slug: "nurse-anesthetists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Health diagnosing and treating practitioners, all other",
                                    slug:
                                        "health-diagnosing-and-treating-practitioners-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Opticians, dispensing",
                                    slug: "opticians-dispensing",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        name: "Architecture and engineering occupations",
                        slug: "architecture-and-engineering-occupations",
                        children: {
                            occupations: [
                                {
                                    name:
                                        "Engineering technicians, except drafters",
                                    slug:
                                        "engineering-technicians-except-drafters",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Surveyors, cartographers, and photogrammetrists",
                                    slug:
                                        "surveyors-cartographers-and-photogrammetrists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Agricultural engineers",
                                    slug: "agricultural-engineers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Biomedical engineers",
                                    slug: "biomedical-engineers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Environmental engineers",
                                    slug: "environmental-engineers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Marine engineers and naval architects",
                                    slug:
                                        "marine-engineers-and-naval-architects",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Materials engineers",
                                    slug: "materials-engineers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Mining and geological engineers, including mining safety engineers",
                                    slug:
                                        "mining-and-geological-engineers-including-mining-safety-engineers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Nuclear engineers",
                                    slug: "nuclear-engineers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Petroleum engineers",
                                    slug: "petroleum-engineers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Aerospace engineers",
                                    slug: "aerospace-engineers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Industrial engineers, including health and safety",
                                    slug:
                                        "industrial-engineers-including-health-and-safety",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Engineers, all other",
                                    slug: "engineers-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Architects, except naval",
                                    slug: "architects-except-naval",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Civil engineers",
                                    slug: "civil-engineers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Chemical engineers",
                                    slug: "chemical-engineers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Computer hardware engineers",
                                    slug: "computer-hardware-engineers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Electrical and electronics engineers",
                                    slug:
                                        "electrical-and-electronics-engineers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Mechanical engineers",
                                    slug: "mechanical-engineers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Drafters",
                                    slug: "drafters",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Surveying and mapping technicians",
                                    slug: "surveying-and-mapping-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        name: "Community and social service occupations",
                        slug: "community-and-social-service-occupations",
                        children: {
                            occupations: [
                                {
                                    name: "Counselors",
                                    slug: "counselors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Social workers",
                                    slug: "social-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Clergy",
                                    slug: "clergy",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Social and human service assistants",
                                    slug: "social-and-human-service-assistants",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Probation officers and correctional treatment specialists",
                                    slug:
                                        "probation-officers-and-correctional-treatment-specialists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Miscellaneous community and social service specialists, including health educators and community health workers",
                                    slug:
                                        "miscellaneous-community-and-social-service-specialists-including-health-educators-and-community-health-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Directors, religious activities and education",
                                    slug:
                                        "directors-religious-activities-and-education",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Religious workers, all other",
                                    slug: "religious-workers-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        name: "Legal occupations",
                        slug: "legal-occupations",
                        children: {
                            occupations: [
                                {
                                    name: "Lawyers",
                                    slug: "lawyers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Paralegals and legal assistants",
                                    slug: "paralegals-and-legal-assistants",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Miscellaneous legal support workers",
                                    slug: "miscellaneous-legal-support-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Judges, magistrates, and other judicial workers",
                                    slug:
                                        "judges-magistrates-and-other-judicial-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Judicial law clerks",
                                    slug: "judicial-law-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        name: "Education, training, and library occupations",
                        slug: "education-training-and-library-occupations",
                        children: {
                            occupations: [
                                {
                                    name: "Library technicians",
                                    slug: "library-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Teacher assistants",
                                    slug: "teacher-assistants",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Postsecondary teachers",
                                    slug: "postsecondary-teachers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Elementary and middle school teachers",
                                    slug:
                                        "elementary-and-middle-school-teachers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Secondary school teachers",
                                    slug: "secondary-school-teachers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Other teachers and instructors",
                                    slug: "other-teachers-and-instructors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Preschool and kindergarten teachers",
                                    slug: "preschool-and-kindergarten-teachers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Special education teachers",
                                    slug: "special-education-teachers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Librarians",
                                    slug: "librarians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Other education, training, and library workers",
                                    slug:
                                        "other-education-training-and-library-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Archivists, curators, and museum technicians",
                                    slug:
                                        "archivists-curators-and-museum-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            name: "Computer and mathematical occupations",
            slug: "computer-and-mathematical-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1658,
                        womenMedianWeeklyEarnings: 1353,
                        year: 2019,
                        centsToDollar: 82,
                    },
                    {
                        menMedianWeeklyEarnings: 1369,
                        womenMedianWeeklyEarnings: 1126,
                        year: 2011,
                        centsToDollar: 82,
                    },
                ],
            },
            parent: {
                slug: "professional-and-related-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Computer systems analysts",
                        slug: "computer-systems-analysts",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Computer programmers",
                        slug: "computer-programmers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Software developers, applications and systems software",
                        slug:
                            "software-developers-applications-and-systems-software",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Web developers",
                        slug: "web-developers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Computer support specialists",
                        slug: "computer-support-specialists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Network and computer systems administrators",
                        slug: "network-and-computer-systems-administrators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Computer occupations, all other",
                        slug: "computer-occupations-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Actuaries",
                        slug: "actuaries",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Mathematicians",
                        slug: "mathematicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Miscellaneous mathematical science occupations",
                        slug: "miscellaneous-mathematical-science-occupations",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Operations research analysts",
                        slug: "operations-research-analysts",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Information security analysts",
                        slug: "information-security-analysts",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Database administrators",
                        slug: "database-administrators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Computer network architects",
                        slug: "computer-network-architects",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Statisticians",
                        slug: "statisticians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Computer and information research scientists",
                        slug: "computer-and-information-research-scientists",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Computer systems analysts",
            slug: "computer-systems-analysts",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1580,
                        womenMedianWeeklyEarnings: 1289,
                        year: 2019,
                        centsToDollar: 82,
                    },
                    {
                        menMedianWeeklyEarnings: 1410,
                        womenMedianWeeklyEarnings: 1144,
                        year: 2011,
                        centsToDollar: 81,
                    },
                ],
            },
            parent: {
                slug: "computer-and-mathematical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Computer programmers",
            slug: "computer-programmers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1613,
                        womenMedianWeeklyEarnings: 1463,
                        year: 2019,
                        centsToDollar: 91,
                    },
                    {
                        menMedianWeeklyEarnings: 1330,
                        womenMedianWeeklyEarnings: 1238,
                        year: 2011,
                        centsToDollar: 93,
                    },
                ],
            },
            parent: {
                slug: "computer-and-mathematical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Software developers, applications and systems software",
            slug: "software-developers-applications-and-systems-software",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1920,
                        womenMedianWeeklyEarnings: 1718,
                        year: 2019,
                        centsToDollar: 89,
                    },
                    {
                        menMedianWeeklyEarnings: 1606,
                        womenMedianWeeklyEarnings: 1388,
                        year: 2011,
                        centsToDollar: 86,
                    },
                ],
            },
            parent: {
                slug: "computer-and-mathematical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Web developers",
            slug: "web-developers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1633,
                        womenMedianWeeklyEarnings: 1150,
                        year: 2019,
                        centsToDollar: 70,
                    },
                    {
                        menMedianWeeklyEarnings: 1033,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "computer-and-mathematical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Computer support specialists",
            slug: "computer-support-specialists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1223,
                        womenMedianWeeklyEarnings: 1103,
                        year: 2019,
                        centsToDollar: 90,
                    },
                    {
                        menMedianWeeklyEarnings: 896,
                        womenMedianWeeklyEarnings: 951,
                        year: 2011,
                        centsToDollar: 106,
                    },
                ],
            },
            parent: {
                slug: "computer-and-mathematical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Network and computer systems administrators",
            slug: "network-and-computer-systems-administrators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1541,
                        womenMedianWeeklyEarnings: 1233,
                        year: 2019,
                        centsToDollar: 80,
                    },
                    {
                        menMedianWeeklyEarnings: 1243,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "computer-and-mathematical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Computer occupations, all other",
            slug: "computer-occupations-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1365,
                        womenMedianWeeklyEarnings: 1148,
                        year: 2019,
                        centsToDollar: 84,
                    },
                    {
                        menMedianWeeklyEarnings: 1165,
                        womenMedianWeeklyEarnings: 998,
                        year: 2011,
                        centsToDollar: 86,
                    },
                ],
            },
            parent: {
                slug: "computer-and-mathematical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Engineering technicians, except drafters",
            slug: "engineering-technicians-except-drafters",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1200,
                        womenMedianWeeklyEarnings: 915,
                        year: 2019,
                        centsToDollar: 76,
                    },
                    {
                        menMedianWeeklyEarnings: 952,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Life, physical, and social science occupations",
            slug: "life-physical-and-social-science-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1447,
                        womenMedianWeeklyEarnings: 1237,
                        year: 2019,
                        centsToDollar: 85,
                    },
                    {
                        menMedianWeeklyEarnings: 1156,
                        womenMedianWeeklyEarnings: 1038,
                        year: 2011,
                        centsToDollar: 90,
                    },
                ],
            },
            parent: {
                slug: "professional-and-related-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Medical scientists",
                        slug: "medical-scientists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Physical scientists, all other",
                        slug: "physical-scientists-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Miscellaneous life, physical, and social science technicians",
                        slug:
                            "miscellaneous-life-physical-and-social-science-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Agricultural and food scientists",
                        slug: "agricultural-and-food-scientists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Conservation scientists and foresters",
                        slug: "conservation-scientists-and-foresters",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Psychologists",
                        slug: "psychologists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Biological scientists",
                        slug: "biological-scientists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Environmental scientists and geoscientists",
                        slug: "environmental-scientists-and-geoscientists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Chemists and materials scientists",
                        slug: "chemists-and-materials-scientists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Chemical technicians",
                        slug: "chemical-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Economists",
                        slug: "economists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Life scientists, all other",
                        slug: "life-scientists-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Astronomers and physicists",
                        slug: "astronomers-and-physicists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Atmospheric and space scientists",
                        slug: "atmospheric-and-space-scientists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Survey researchers",
                        slug: "survey-researchers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Sociologists",
                        slug: "sociologists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Urban and regional planners",
                        slug: "urban-and-regional-planners",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Miscellaneous social scientists and related workers",
                        slug:
                            "miscellaneous-social-scientists-and-related-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Agricultural and food science technicians",
                        slug: "agricultural-and-food-science-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Biological technicians",
                        slug: "biological-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Geological and petroleum technicians",
                        slug: "geological-and-petroleum-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Nuclear technicians",
                        slug: "nuclear-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Social science research assistants",
                        slug: "social-science-research-assistants",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Medical scientists",
            slug: "medical-scientists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1214,
                        womenMedianWeeklyEarnings: 1175,
                        year: 2019,
                        centsToDollar: 97,
                    },
                    {
                        menMedianWeeklyEarnings: 1102,
                        womenMedianWeeklyEarnings: 1127,
                        year: 2011,
                        centsToDollar: 102,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Physical scientists, all other",
            slug: "physical-scientists-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1901,
                        womenMedianWeeklyEarnings: 1385,
                        year: 2019,
                        centsToDollar: 73,
                    },
                    {
                        menMedianWeeklyEarnings: 1483,
                        womenMedianWeeklyEarnings: 1167,
                        year: 2011,
                        centsToDollar: 79,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Miscellaneous life, physical, and social science technicians",
            slug: "miscellaneous-life-physical-and-social-science-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 928,
                        womenMedianWeeklyEarnings: 896,
                        year: 2019,
                        centsToDollar: 97,
                    },
                    {
                        menMedianWeeklyEarnings: 807,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Lawyers",
            slug: "lawyers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 2202,
                        womenMedianWeeklyEarnings: 1878,
                        year: 2019,
                        centsToDollar: 85,
                    },
                    {
                        menMedianWeeklyEarnings: 1884,
                        womenMedianWeeklyEarnings: 1631,
                        year: 2011,
                        centsToDollar: 87,
                    },
                ],
            },
            parent: {
                slug: "legal-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Arts, design, entertainment, sports, and media occupations",
            slug: "arts-design-entertainment-sports-and-media-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1231,
                        womenMedianWeeklyEarnings: 1077,
                        year: 2019,
                        centsToDollar: 87,
                    },
                    {
                        menMedianWeeklyEarnings: 995,
                        womenMedianWeeklyEarnings: 856,
                        year: 2011,
                        centsToDollar: 86,
                    },
                ],
            },
            parent: {
                slug: "professional-and-related-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Designers",
                        slug: "designers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Producers and directors",
                        slug: "producers-and-directors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Editors",
                        slug: "editors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Public relations specialists",
                        slug: "public-relations-specialists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Athletes, coaches, umpires, and related workers",
                        slug: "athletes-coaches-umpires-and-related-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Broadcast and sound engineering technicians and radio operators",
                        slug:
                            "broadcast-and-sound-engineering-technicians-and-radio-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Artists and related workers",
                        slug: "artists-and-related-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "News analysts, reporters and correspondents",
                        slug: "news-analysts-reporters-and-correspondents",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Technical writers",
                        slug: "technical-writers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Writers and authors",
                        slug: "writers-and-authors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Miscellaneous media and communication workers",
                        slug: "miscellaneous-media-and-communication-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Actors",
                        slug: "actors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Dancers and choreographers",
                        slug: "dancers-and-choreographers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Musicians, singers, and related workers",
                        slug: "musicians-singers-and-related-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Entertainers and performers, sports and related workers, all other",
                        slug:
                            "entertainers-and-performers-sports-and-related-workers-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Announcers",
                        slug: "announcers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Photographers",
                        slug: "photographers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Television, video, and motion picture camera operators and editors",
                        slug:
                            "television-video-and-motion-picture-camera-operators-and-editors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Media and communication equipment workers, all other",
                        slug:
                            "media-and-communication-equipment-workers-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Designers",
            slug: "designers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1214,
                        womenMedianWeeklyEarnings: 1052,
                        year: 2019,
                        centsToDollar: 87,
                    },
                    {
                        menMedianWeeklyEarnings: 1045,
                        womenMedianWeeklyEarnings: 816,
                        year: 2011,
                        centsToDollar: 78,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Producers and directors",
            slug: "producers-and-directors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1652,
                        womenMedianWeeklyEarnings: 1156,
                        year: 2019,
                        centsToDollar: 70,
                    },
                    {
                        menMedianWeeklyEarnings: 1130,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Healthcare practitioners and technical occupations",
            slug: "healthcare-practitioners-and-technical-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1422,
                        womenMedianWeeklyEarnings: 1130,
                        year: 2019,
                        centsToDollar: 79,
                    },
                    {
                        menMedianWeeklyEarnings: 1129,
                        womenMedianWeeklyEarnings: 965,
                        year: 2011,
                        centsToDollar: 85,
                    },
                ],
            },
            parent: {
                slug: "professional-and-related-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Pharmacists",
                        slug: "pharmacists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Physicians and surgeons",
                        slug: "physicians-and-surgeons",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Physical therapists",
                        slug: "physical-therapists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Health practitioner support technologists and technicians",
                        slug:
                            "health-practitioner-support-technologists-and-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Licensed practical and licensed vocational nurses",
                        slug:
                            "licensed-practical-and-licensed-vocational-nurses",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Nurse practitioners",
                        slug: "nurse-practitioners",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Nurse midwives",
                        slug: "nurse-midwives",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Registered nurses",
                        slug: "registered-nurses",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Clinical laboratory technologists and technicians",
                        slug:
                            "clinical-laboratory-technologists-and-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Diagnostic related technologists and technicians",
                        slug:
                            "diagnostic-related-technologists-and-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Emergency medical technicians and paramedics",
                        slug: "emergency-medical-technicians-and-paramedics",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Dietitians and nutritionists",
                        slug: "dietitians-and-nutritionists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Physician assistants",
                        slug: "physician-assistants",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Occupational therapists",
                        slug: "occupational-therapists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Respiratory therapists",
                        slug: "respiratory-therapists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Speech-language pathologists",
                        slug: "speech-language-pathologists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Therapists, all other",
                        slug: "therapists-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Veterinarians",
                        slug: "veterinarians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Dental hygienists",
                        slug: "dental-hygienists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Dentists",
                        slug: "dentists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Medical records and health information technicians",
                        slug:
                            "medical-records-and-health-information-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Miscellaneous health technologists and technicians",
                        slug:
                            "miscellaneous-health-technologists-and-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Other healthcare practitioners and technical occupations",
                        slug:
                            "other-healthcare-practitioners-and-technical-occupations",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Exercise physiologists",
                        slug: "exercise-physiologists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Chiropractors",
                        slug: "chiropractors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Optometrists",
                        slug: "optometrists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Podiatrists",
                        slug: "podiatrists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Audiologists",
                        slug: "audiologists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Radiation therapists",
                        slug: "radiation-therapists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Recreational therapists",
                        slug: "recreational-therapists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Nurse anesthetists",
                        slug: "nurse-anesthetists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Health diagnosing and treating practitioners, all other",
                        slug:
                            "health-diagnosing-and-treating-practitioners-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Opticians, dispensing",
                        slug: "opticians-dispensing",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Pharmacists",
            slug: "pharmacists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 2245,
                        womenMedianWeeklyEarnings: 1877,
                        year: 2019,
                        centsToDollar: 84,
                    },
                    {
                        menMedianWeeklyEarnings: 1998,
                        womenMedianWeeklyEarnings: 1898,
                        year: 2011,
                        centsToDollar: 95,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Physicians and surgeons",
            slug: "physicians-and-surgeons",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 2500,
                        womenMedianWeeklyEarnings: 1878,
                        year: 2019,
                        centsToDollar: 75,
                    },
                    {
                        menMedianWeeklyEarnings: 1935,
                        womenMedianWeeklyEarnings: 1527,
                        year: 2011,
                        centsToDollar: 79,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Physical therapists",
            slug: "physical-therapists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1610,
                        womenMedianWeeklyEarnings: 1323,
                        year: 2019,
                        centsToDollar: 82,
                    },
                    {
                        menMedianWeeklyEarnings: 1522,
                        womenMedianWeeklyEarnings: 1216,
                        year: 2011,
                        centsToDollar: 80,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Editors",
            slug: "editors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1135,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 933,
                        womenMedianWeeklyEarnings: 892,
                        year: 2011,
                        centsToDollar: 96,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Health practitioner support technologists and technicians",
            slug: "health-practitioner-support-technologists-and-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 843,
                        womenMedianWeeklyEarnings: 712,
                        year: 2019,
                        centsToDollar: 84,
                    },
                    {
                        menMedianWeeklyEarnings: 682,
                        womenMedianWeeklyEarnings: 632,
                        year: 2011,
                        centsToDollar: 93,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Licensed practical and licensed vocational nurses",
            slug: "licensed-practical-and-licensed-vocational-nurses",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 896,
                        womenMedianWeeklyEarnings: 799,
                        year: 2019,
                        centsToDollar: 89,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 720,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Service occupations",
            slug: "service-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 659,
                        womenMedianWeeklyEarnings: 537,
                        year: 2019,
                        centsToDollar: 81,
                    },
                    {
                        menMedianWeeklyEarnings: 551,
                        womenMedianWeeklyEarnings: 433,
                        year: 2011,
                        centsToDollar: 79,
                    },
                ],
            },
            parent: null,
            children: {
                occupations: [
                    {
                        name: "Healthcare support occupations",
                        slug: "healthcare-support-occupations",
                        children: {
                            occupations: [
                                {
                                    name:
                                        "Nursing, psychiatric, and home health aides",
                                    slug:
                                        "nursing-psychiatric-and-home-health-aides",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Physical therapist assistants and aides",
                                    slug:
                                        "physical-therapist-assistants-and-aides",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Massage therapists",
                                    slug: "massage-therapists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Dental assistants",
                                    slug: "dental-assistants",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Medical assistants",
                                    slug: "medical-assistants",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Phlebotomists",
                                    slug: "phlebotomists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Miscellaneous healthcare support occupations, including medical equipment preparers",
                                    slug:
                                        "miscellaneous-healthcare-support-occupations-including-medical-equipment-preparers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Occupational therapy assistants and aides",
                                    slug:
                                        "occupational-therapy-assistants-and-aides",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Medical transcriptionists",
                                    slug: "medical-transcriptionists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Pharmacy aides",
                                    slug: "pharmacy-aides",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Veterinary assistants and laboratory animal caretakers",
                                    slug:
                                        "veterinary-assistants-and-laboratory-animal-caretakers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        name: "Protective service occupations",
                        slug: "protective-service-occupations",
                        children: {
                            occupations: [
                                {
                                    name:
                                        "Bailiffs, correctional officers, and jailers",
                                    slug:
                                        "bailiffs-correctional-officers-and-jailers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Police and sheriff's patrol officers",
                                    slug: "police-and-sheriffs-patrol-officers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Security guards and gaming surveillance officers",
                                    slug:
                                        "security-guards-and-gaming-surveillance-officers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Private detectives and investigators",
                                    slug:
                                        "private-detectives-and-investigators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "First-line supervisors of police and detectives",
                                    slug:
                                        "first-line-supervisors-of-police-and-detectives",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "First-line supervisors of protective service workers, all other",
                                    slug:
                                        "first-line-supervisors-of-protective-service-workers-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Firefighters",
                                    slug: "firefighters",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Detectives and criminal investigators",
                                    slug:
                                        "detectives-and-criminal-investigators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "First-line supervisors of correctional officers",
                                    slug:
                                        "first-line-supervisors-of-correctional-officers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "First-line supervisors of fire fighting and prevention workers",
                                    slug:
                                        "first-line-supervisors-of-fire-fighting-and-prevention-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Fire inspectors",
                                    slug: "fire-inspectors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Fish and game wardens",
                                    slug: "fish-and-game-wardens",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Parking enforcement workers",
                                    slug: "parking-enforcement-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Transit and railroad police",
                                    slug: "transit-and-railroad-police",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Animal control workers",
                                    slug: "animal-control-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Crossing guards",
                                    slug: "crossing-guards",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Transportation security screeners",
                                    slug: "transportation-security-screeners",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Lifeguards and other recreational, and all other protective service workers",
                                    slug:
                                        "lifeguards-and-other-recreational-and-all-other-protective-service-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        name:
                            "Food preparation and serving related occupations",
                        slug:
                            "food-preparation-and-serving-related-occupations",
                        children: {
                            occupations: [
                                {
                                    name: "Chefs and head cooks",
                                    slug: "chefs-and-head-cooks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Cooks",
                                    slug: "cooks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Dining room and cafeteria attendants and bartender helpers",
                                    slug:
                                        "dining-room-and-cafeteria-attendants-and-bartender-helpers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "First-line supervisors of food preparation and serving workers",
                                    slug:
                                        "first-line-supervisors-of-food-preparation-and-serving-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Food preparation workers",
                                    slug: "food-preparation-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Bartenders",
                                    slug: "bartenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Combined food preparation and serving workers, including fast food",
                                    slug:
                                        "combined-food-preparation-and-serving-workers-including-fast-food",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Waiters and waitresses",
                                    slug: "waiters-and-waitresses",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Food servers, nonrestaurant",
                                    slug: "food-servers-nonrestaurant",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Hosts and hostesses, restaurant, lounge, and coffee shop",
                                    slug:
                                        "hosts-and-hostesses-restaurant-lounge-and-coffee-shop",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Dishwashers",
                                    slug: "dishwashers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Counter attendants, cafeteria, food concession, and coffee shop",
                                    slug:
                                        "counter-attendants-cafeteria-food-concession-and-coffee-shop",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Food preparation and serving related workers, all other",
                                    slug:
                                        "food-preparation-and-serving-related-workers-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        name:
                            "Building and grounds cleaning and maintenance occupations",
                        slug:
                            "building-and-grounds-cleaning-and-maintenance-occupations",
                        children: {
                            occupations: [
                                {
                                    name:
                                        "First-line supervisors of housekeeping and janitorial workers",
                                    slug:
                                        "first-line-supervisors-of-housekeeping-and-janitorial-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Janitors and building cleaners",
                                    slug: "janitors-and-building-cleaners",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Maids and housekeeping cleaners",
                                    slug: "maids-and-housekeeping-cleaners",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "First-line supervisors of landscaping, lawn service, and groundskeeping workers",
                                    slug:
                                        "first-line-supervisors-of-landscaping-lawn-service-and-groundskeeping-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Pest control workers",
                                    slug: "pest-control-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Grounds maintenance workers",
                                    slug: "grounds-maintenance-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        name: "Personal care and service occupations",
                        slug: "personal-care-and-service-occupations",
                        children: {
                            occupations: [
                                {
                                    name:
                                        "First-line supervisors of gaming workers",
                                    slug:
                                        "first-line-supervisors-of-gaming-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Personal care aides",
                                    slug: "personal-care-aides",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Recreation and fitness workers",
                                    slug: "recreation-and-fitness-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Gaming services workers",
                                    slug: "gaming-services-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Personal care and service workers, all other",
                                    slug:
                                        "personal-care-and-service-workers-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Nonfarm animal caretakers",
                                    slug: "nonfarm-animal-caretakers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Hairdressers, hairstylists, and cosmetologists",
                                    slug:
                                        "hairdressers-hairstylists-and-cosmetologists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Miscellaneous personal appearance workers",
                                    slug:
                                        "miscellaneous-personal-appearance-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Childcare workers",
                                    slug: "childcare-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Miscellaneous entertainment attendants and related workers",
                                    slug:
                                        "miscellaneous-entertainment-attendants-and-related-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Barbers",
                                    slug: "barbers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Baggage porters, bellhops, and concierges",
                                    slug:
                                        "baggage-porters-bellhops-and-concierges",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "First-line supervisors of personal service workers",
                                    slug:
                                        "first-line-supervisors-of-personal-service-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Animal trainers",
                                    slug: "animal-trainers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Motion picture projectionists",
                                    slug: "motion-picture-projectionists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Ushers, lobby attendants, and ticket takers",
                                    slug:
                                        "ushers-lobby-attendants-and-ticket-takers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Embalmers and funeral attendants",
                                    slug: "embalmers-and-funeral-attendants",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Morticians, undertakers, and funeral directors",
                                    slug:
                                        "morticians-undertakers-and-funeral-directors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Tour and travel guides",
                                    slug: "tour-and-travel-guides",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Residential advisors",
                                    slug: "residential-advisors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            name: "Healthcare support occupations",
            slug: "healthcare-support-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 639,
                        womenMedianWeeklyEarnings: 585,
                        year: 2019,
                        centsToDollar: 92,
                    },
                    {
                        menMedianWeeklyEarnings: 521,
                        womenMedianWeeklyEarnings: 483,
                        year: 2011,
                        centsToDollar: 93,
                    },
                ],
            },
            parent: {
                slug: "service-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Nursing, psychiatric, and home health aides",
                        slug: "nursing-psychiatric-and-home-health-aides",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Physical therapist assistants and aides",
                        slug: "physical-therapist-assistants-and-aides",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Massage therapists",
                        slug: "massage-therapists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Dental assistants",
                        slug: "dental-assistants",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Medical assistants",
                        slug: "medical-assistants",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Phlebotomists",
                        slug: "phlebotomists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Miscellaneous healthcare support occupations, including medical equipment preparers",
                        slug:
                            "miscellaneous-healthcare-support-occupations-including-medical-equipment-preparers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Occupational therapy assistants and aides",
                        slug: "occupational-therapy-assistants-and-aides",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Medical transcriptionists",
                        slug: "medical-transcriptionists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Pharmacy aides",
                        slug: "pharmacy-aides",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Veterinary assistants and laboratory animal caretakers",
                        slug:
                            "veterinary-assistants-and-laboratory-animal-caretakers",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Nursing, psychiatric, and home health aides",
            slug: "nursing-psychiatric-and-home-health-aides",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 588,
                        womenMedianWeeklyEarnings: 556,
                        year: 2019,
                        centsToDollar: 95,
                    },
                    {
                        menMedianWeeklyEarnings: 502,
                        womenMedianWeeklyEarnings: 446,
                        year: 2011,
                        centsToDollar: 89,
                    },
                ],
            },
            parent: {
                slug: "healthcare-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Protective service occupations",
            slug: "protective-service-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 953,
                        womenMedianWeeklyEarnings: 731,
                        year: 2019,
                        centsToDollar: 77,
                    },
                    {
                        menMedianWeeklyEarnings: 797,
                        womenMedianWeeklyEarnings: 602,
                        year: 2011,
                        centsToDollar: 76,
                    },
                ],
            },
            parent: {
                slug: "service-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Bailiffs, correctional officers, and jailers",
                        slug: "bailiffs-correctional-officers-and-jailers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Police and sheriff's patrol officers",
                        slug: "police-and-sheriffs-patrol-officers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Security guards and gaming surveillance officers",
                        slug:
                            "security-guards-and-gaming-surveillance-officers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Private detectives and investigators",
                        slug: "private-detectives-and-investigators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "First-line supervisors of police and detectives",
                        slug: "first-line-supervisors-of-police-and-detectives",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "First-line supervisors of protective service workers, all other",
                        slug:
                            "first-line-supervisors-of-protective-service-workers-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Firefighters",
                        slug: "firefighters",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Detectives and criminal investigators",
                        slug: "detectives-and-criminal-investigators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "First-line supervisors of correctional officers",
                        slug: "first-line-supervisors-of-correctional-officers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "First-line supervisors of fire fighting and prevention workers",
                        slug:
                            "first-line-supervisors-of-fire-fighting-and-prevention-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Fire inspectors",
                        slug: "fire-inspectors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Fish and game wardens",
                        slug: "fish-and-game-wardens",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Parking enforcement workers",
                        slug: "parking-enforcement-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Transit and railroad police",
                        slug: "transit-and-railroad-police",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Animal control workers",
                        slug: "animal-control-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Crossing guards",
                        slug: "crossing-guards",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Transportation security screeners",
                        slug: "transportation-security-screeners",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Lifeguards and other recreational, and all other protective service workers",
                        slug:
                            "lifeguards-and-other-recreational-and-all-other-protective-service-workers",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Bailiffs, correctional officers, and jailers",
            slug: "bailiffs-correctional-officers-and-jailers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 890,
                        womenMedianWeeklyEarnings: 664,
                        year: 2019,
                        centsToDollar: 75,
                    },
                    {
                        menMedianWeeklyEarnings: 722,
                        womenMedianWeeklyEarnings: 586,
                        year: 2011,
                        centsToDollar: 81,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Police and sheriff's patrol officers",
            slug: "police-and-sheriffs-patrol-officers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1143,
                        womenMedianWeeklyEarnings: 922,
                        year: 2019,
                        centsToDollar: 81,
                    },
                    {
                        menMedianWeeklyEarnings: 948,
                        womenMedianWeeklyEarnings: 938,
                        year: 2011,
                        centsToDollar: 99,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Security guards and gaming surveillance officers",
            slug: "security-guards-and-gaming-surveillance-officers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 671,
                        womenMedianWeeklyEarnings: 589,
                        year: 2019,
                        centsToDollar: 88,
                    },
                    {
                        menMedianWeeklyEarnings: 544,
                        womenMedianWeeklyEarnings: 474,
                        year: 2011,
                        centsToDollar: 87,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Food preparation and serving related occupations",
            slug: "food-preparation-and-serving-related-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 576,
                        womenMedianWeeklyEarnings: 492,
                        year: 2019,
                        centsToDollar: 85,
                    },
                    {
                        menMedianWeeklyEarnings: 429,
                        womenMedianWeeklyEarnings: 390,
                        year: 2011,
                        centsToDollar: 91,
                    },
                ],
            },
            parent: {
                slug: "service-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Chefs and head cooks",
                        slug: "chefs-and-head-cooks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Cooks",
                        slug: "cooks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Dining room and cafeteria attendants and bartender helpers",
                        slug:
                            "dining-room-and-cafeteria-attendants-and-bartender-helpers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "First-line supervisors of food preparation and serving workers",
                        slug:
                            "first-line-supervisors-of-food-preparation-and-serving-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Food preparation workers",
                        slug: "food-preparation-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Bartenders",
                        slug: "bartenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Combined food preparation and serving workers, including fast food",
                        slug:
                            "combined-food-preparation-and-serving-workers-including-fast-food",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Waiters and waitresses",
                        slug: "waiters-and-waitresses",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Food servers, nonrestaurant",
                        slug: "food-servers-nonrestaurant",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Hosts and hostesses, restaurant, lounge, and coffee shop",
                        slug:
                            "hosts-and-hostesses-restaurant-lounge-and-coffee-shop",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Dishwashers",
                        slug: "dishwashers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Counter attendants, cafeteria, food concession, and coffee shop",
                        slug:
                            "counter-attendants-cafeteria-food-concession-and-coffee-shop",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Food preparation and serving related workers, all other",
                        slug:
                            "food-preparation-and-serving-related-workers-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Chefs and head cooks",
            slug: "chefs-and-head-cooks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 727,
                        womenMedianWeeklyEarnings: 553,
                        year: 2019,
                        centsToDollar: 76,
                    },
                    {
                        menMedianWeeklyEarnings: 601,
                        womenMedianWeeklyEarnings: 502,
                        year: 2011,
                        centsToDollar: 84,
                    },
                ],
            },
            parent: {
                slug: "food-preparation-and-serving-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Cooks",
            slug: "cooks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 535,
                        womenMedianWeeklyEarnings: 489,
                        year: 2019,
                        centsToDollar: 91,
                    },
                    {
                        menMedianWeeklyEarnings: 406,
                        womenMedianWeeklyEarnings: 363,
                        year: 2011,
                        centsToDollar: 89,
                    },
                ],
            },
            parent: {
                slug: "food-preparation-and-serving-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Dining room and cafeteria attendants and bartender helpers",
            slug: "dining-room-and-cafeteria-attendants-and-bartender-helpers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 605,
                        womenMedianWeeklyEarnings: 513,
                        year: 2019,
                        centsToDollar: 85,
                    },
                    {
                        menMedianWeeklyEarnings: 392,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "food-preparation-and-serving-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Building and grounds cleaning and maintenance occupations",
            slug: "building-and-grounds-cleaning-and-maintenance-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 618,
                        womenMedianWeeklyEarnings: 502,
                        year: 2019,
                        centsToDollar: 81,
                    },
                    {
                        menMedianWeeklyEarnings: 502,
                        womenMedianWeeklyEarnings: 406,
                        year: 2011,
                        centsToDollar: 81,
                    },
                ],
            },
            parent: {
                slug: "service-occupations",
            },
            children: {
                occupations: [
                    {
                        name:
                            "First-line supervisors of housekeeping and janitorial workers",
                        slug:
                            "first-line-supervisors-of-housekeeping-and-janitorial-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Janitors and building cleaners",
                        slug: "janitors-and-building-cleaners",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Maids and housekeeping cleaners",
                        slug: "maids-and-housekeeping-cleaners",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "First-line supervisors of landscaping, lawn service, and groundskeeping workers",
                        slug:
                            "first-line-supervisors-of-landscaping-lawn-service-and-groundskeeping-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Pest control workers",
                        slug: "pest-control-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Grounds maintenance workers",
                        slug: "grounds-maintenance-workers",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name:
                "First-line supervisors of housekeeping and janitorial workers",
            slug:
                "first-line-supervisors-of-housekeeping-and-janitorial-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 758,
                        womenMedianWeeklyEarnings: 639,
                        year: 2019,
                        centsToDollar: 84,
                    },
                    {
                        menMedianWeeklyEarnings: 756,
                        womenMedianWeeklyEarnings: 488,
                        year: 2011,
                        centsToDollar: 65,
                    },
                ],
            },
            parent: {
                slug:
                    "building-and-grounds-cleaning-and-maintenance-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Janitors and building cleaners",
            slug: "janitors-and-building-cleaners",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 610,
                        womenMedianWeeklyEarnings: 510,
                        year: 2019,
                        centsToDollar: 84,
                    },
                    {
                        menMedianWeeklyEarnings: 514,
                        womenMedianWeeklyEarnings: 418,
                        year: 2011,
                        centsToDollar: 81,
                    },
                ],
            },
            parent: {
                slug:
                    "building-and-grounds-cleaning-and-maintenance-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Maids and housekeeping cleaners",
            slug: "maids-and-housekeeping-cleaners",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 520,
                        womenMedianWeeklyEarnings: 484,
                        year: 2019,
                        centsToDollar: 93,
                    },
                    {
                        menMedianWeeklyEarnings: 473,
                        womenMedianWeeklyEarnings: 392,
                        year: 2011,
                        centsToDollar: 83,
                    },
                ],
            },
            parent: {
                slug:
                    "building-and-grounds-cleaning-and-maintenance-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Personal care and service occupations",
            slug: "personal-care-and-service-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 624,
                        womenMedianWeeklyEarnings: 531,
                        year: 2019,
                        centsToDollar: 85,
                    },
                    {
                        menMedianWeeklyEarnings: 562,
                        womenMedianWeeklyEarnings: 422,
                        year: 2011,
                        centsToDollar: 75,
                    },
                ],
            },
            parent: {
                slug: "service-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "First-line supervisors of gaming workers",
                        slug: "first-line-supervisors-of-gaming-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Personal care aides",
                        slug: "personal-care-aides",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Recreation and fitness workers",
                        slug: "recreation-and-fitness-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Gaming services workers",
                        slug: "gaming-services-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Personal care and service workers, all other",
                        slug: "personal-care-and-service-workers-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Nonfarm animal caretakers",
                        slug: "nonfarm-animal-caretakers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Hairdressers, hairstylists, and cosmetologists",
                        slug: "hairdressers-hairstylists-and-cosmetologists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Miscellaneous personal appearance workers",
                        slug: "miscellaneous-personal-appearance-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Childcare workers",
                        slug: "childcare-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Miscellaneous entertainment attendants and related workers",
                        slug:
                            "miscellaneous-entertainment-attendants-and-related-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Barbers",
                        slug: "barbers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Baggage porters, bellhops, and concierges",
                        slug: "baggage-porters-bellhops-and-concierges",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "First-line supervisors of personal service workers",
                        slug:
                            "first-line-supervisors-of-personal-service-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Animal trainers",
                        slug: "animal-trainers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Motion picture projectionists",
                        slug: "motion-picture-projectionists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Ushers, lobby attendants, and ticket takers",
                        slug: "ushers-lobby-attendants-and-ticket-takers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Embalmers and funeral attendants",
                        slug: "embalmers-and-funeral-attendants",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Morticians, undertakers, and funeral directors",
                        slug: "morticians-undertakers-and-funeral-directors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Tour and travel guides",
                        slug: "tour-and-travel-guides",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Residential advisors",
                        slug: "residential-advisors",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "First-line supervisors of gaming workers",
            slug: "first-line-supervisors-of-gaming-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 853,
                        womenMedianWeeklyEarnings: 791,
                        year: 2019,
                        centsToDollar: 93,
                    },
                    {
                        menMedianWeeklyEarnings: 876,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Personal care aides",
            slug: "personal-care-aides",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 581,
                        womenMedianWeeklyEarnings: 509,
                        year: 2019,
                        centsToDollar: 88,
                    },
                    {
                        menMedianWeeklyEarnings: 454,
                        womenMedianWeeklyEarnings: 407,
                        year: 2011,
                        centsToDollar: 90,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Recreation and fitness workers",
            slug: "recreation-and-fitness-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 656,
                        womenMedianWeeklyEarnings: 580,
                        year: 2019,
                        centsToDollar: 88,
                    },
                    {
                        menMedianWeeklyEarnings: 575,
                        womenMedianWeeklyEarnings: 494,
                        year: 2011,
                        centsToDollar: 86,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Sales and office occupations",
            slug: "sales-and-office-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 874,
                        womenMedianWeeklyEarnings: 713,
                        year: 2019,
                        centsToDollar: 82,
                    },
                    {
                        menMedianWeeklyEarnings: 738,
                        womenMedianWeeklyEarnings: 602,
                        year: 2011,
                        centsToDollar: 82,
                    },
                ],
            },
            parent: null,
            children: {
                occupations: [
                    {
                        name: "Sales and related occupations",
                        slug: "sales-and-related-occupations",
                        children: {
                            occupations: [
                                {
                                    name:
                                        "Sales and related workers, all other",
                                    slug: "sales-and-related-workers-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Counter and rental clerks",
                                    slug: "counter-and-rental-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Travel agents",
                                    slug: "travel-agents",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "First-line supervisors of retail sales workers",
                                    slug:
                                        "first-line-supervisors-of-retail-sales-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "First-line supervisors of non-retail sales workers",
                                    slug:
                                        "first-line-supervisors-of-non-retail-sales-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Cashiers",
                                    slug: "cashiers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Retail salespersons",
                                    slug: "retail-salespersons",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Advertising sales agents",
                                    slug: "advertising-sales-agents",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Insurance sales agents",
                                    slug: "insurance-sales-agents",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Securities, commodities, and financial services sales agents",
                                    slug:
                                        "securities-commodities-and-financial-services-sales-agents",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Sales representatives, services, all other",
                                    slug:
                                        "sales-representatives-services-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Sales representatives, wholesale and manufacturing",
                                    slug:
                                        "sales-representatives-wholesale-and-manufacturing",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Real estate brokers and sales agents",
                                    slug:
                                        "real-estate-brokers-and-sales-agents",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Parts salespersons",
                                    slug: "parts-salespersons",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Telemarketers",
                                    slug: "telemarketers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Models, demonstrators, and product promoters",
                                    slug:
                                        "models-demonstrators-and-product-promoters",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Sales engineers",
                                    slug: "sales-engineers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Door-to-door sales workers, news and street vendors, and related workers",
                                    slug:
                                        "door-to-door-sales-workers-news-and-street-vendors-and-related-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        name: "Office and administrative support occupations",
                        slug: "office-and-administrative-support-occupations",
                        children: {
                            occupations: [
                                {
                                    name:
                                        "First-line supervisors of office and administrative support workers",
                                    slug:
                                        "first-line-supervisors-of-office-and-administrative-support-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Bookkeeping, accounting, and auditing clerks",
                                    slug:
                                        "bookkeeping-accounting-and-auditing-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Customer service representatives",
                                    slug: "customer-service-representatives",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Receptionists and information clerks",
                                    slug:
                                        "receptionists-and-information-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Dispatchers",
                                    slug: "dispatchers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Postal service mail carriers",
                                    slug: "postal-service-mail-carriers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Production, planning, and expediting clerks",
                                    slug:
                                        "production-planning-and-expediting-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Shipping, receiving, and traffic clerks",
                                    slug:
                                        "shipping-receiving-and-traffic-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Stock clerks and order fillers",
                                    slug: "stock-clerks-and-order-fillers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Secretaries and administrative assistants",
                                    slug:
                                        "secretaries-and-administrative-assistants",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Data entry keyers",
                                    slug: "data-entry-keyers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Office clerks, general",
                                    slug: "office-clerks-general",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Office and administrative support workers, all other",
                                    slug:
                                        "office-and-administrative-support-workers-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Insurance claims and policy processing clerks",
                                    slug:
                                        "insurance-claims-and-policy-processing-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Reservation and transportation ticket agents and travel clerks",
                                    slug:
                                        "reservation-and-transportation-ticket-agents-and-travel-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Information and record clerks, all other",
                                    slug:
                                        "information-and-record-clerks-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Postal service clerks",
                                    slug: "postal-service-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Postal service mail sorters, processors, and processing machine operators",
                                    slug:
                                        "postal-service-mail-sorters-processors-and-processing-machine-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Weighers, measurers, checkers, and samplers, recordkeeping",
                                    slug:
                                        "weighers-measurers-checkers-and-samplers-recordkeeping",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Computer operators",
                                    slug: "computer-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Bill and account collectors",
                                    slug: "bill-and-account-collectors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Billing and posting clerks",
                                    slug: "billing-and-posting-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Payroll and timekeeping clerks",
                                    slug: "payroll-and-timekeeping-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Library assistants, clerical",
                                    slug: "library-assistants-clerical",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Tellers",
                                    slug: "tellers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Financial clerks, all other",
                                    slug: "financial-clerks-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Court, municipal, and license clerks",
                                    slug: "court-municipal-and-license-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Eligibility interviewers, government programs",
                                    slug:
                                        "eligibility-interviewers-government-programs",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "File clerks",
                                    slug: "file-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Hotel, motel, and resort desk clerks",
                                    slug: "hotel-motel-and-resort-desk-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Interviewers, except eligibility and loan",
                                    slug:
                                        "interviewers-except-eligibility-and-loan",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Loan interviewers and clerks",
                                    slug: "loan-interviewers-and-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Couriers and messengers",
                                    slug: "couriers-and-messengers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Order clerks",
                                    slug: "order-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Human resources assistants, except payroll and timekeeping",
                                    slug:
                                        "human-resources-assistants-except-payroll-and-timekeeping",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Statistical assistants",
                                    slug: "statistical-assistants",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Switchboard operators, including answering service",
                                    slug:
                                        "switchboard-operators-including-answering-service",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Telephone operators",
                                    slug: "telephone-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Communications equipment operators, all other",
                                    slug:
                                        "communications-equipment-operators-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Gaming cage workers",
                                    slug: "gaming-cage-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Procurement clerks",
                                    slug: "procurement-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Brokerage clerks",
                                    slug: "brokerage-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Correspondence clerks",
                                    slug: "correspondence-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Credit authorizers, checkers, and clerks",
                                    slug:
                                        "credit-authorizers-checkers-and-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "New accounts clerks",
                                    slug: "new-accounts-clerks",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Cargo and freight agents",
                                    slug: "cargo-and-freight-agents",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Meter readers, utilities",
                                    slug: "meter-readers-utilities",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Word processors and typists",
                                    slug: "word-processors-and-typists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Desktop publishers",
                                    slug: "desktop-publishers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Mail clerks and mail machine operators, except postal service",
                                    slug:
                                        "mail-clerks-and-mail-machine-operators-except-postal-service",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Office machine operators, except computer",
                                    slug:
                                        "office-machine-operators-except-computer",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Proofreaders and copy markers",
                                    slug: "proofreaders-and-copy-markers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            name: "Sales and related occupations",
            slug: "sales-and-related-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 982,
                        womenMedianWeeklyEarnings: 677,
                        year: 2019,
                        centsToDollar: 69,
                    },
                    {
                        menMedianWeeklyEarnings: 804,
                        womenMedianWeeklyEarnings: 549,
                        year: 2011,
                        centsToDollar: 68,
                    },
                ],
            },
            parent: {
                slug: "sales-and-office-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Sales and related workers, all other",
                        slug: "sales-and-related-workers-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Counter and rental clerks",
                        slug: "counter-and-rental-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Travel agents",
                        slug: "travel-agents",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "First-line supervisors of retail sales workers",
                        slug: "first-line-supervisors-of-retail-sales-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "First-line supervisors of non-retail sales workers",
                        slug:
                            "first-line-supervisors-of-non-retail-sales-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Cashiers",
                        slug: "cashiers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Retail salespersons",
                        slug: "retail-salespersons",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Advertising sales agents",
                        slug: "advertising-sales-agents",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Insurance sales agents",
                        slug: "insurance-sales-agents",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Securities, commodities, and financial services sales agents",
                        slug:
                            "securities-commodities-and-financial-services-sales-agents",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Sales representatives, services, all other",
                        slug: "sales-representatives-services-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Sales representatives, wholesale and manufacturing",
                        slug:
                            "sales-representatives-wholesale-and-manufacturing",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Real estate brokers and sales agents",
                        slug: "real-estate-brokers-and-sales-agents",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Parts salespersons",
                        slug: "parts-salespersons",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Telemarketers",
                        slug: "telemarketers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Models, demonstrators, and product promoters",
                        slug: "models-demonstrators-and-product-promoters",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Sales engineers",
                        slug: "sales-engineers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Door-to-door sales workers, news and street vendors, and related workers",
                        slug:
                            "door-to-door-sales-workers-news-and-street-vendors-and-related-workers",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Sales and related workers, all other",
            slug: "sales-and-related-workers-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 966,
                        womenMedianWeeklyEarnings: 848,
                        year: 2019,
                        centsToDollar: 88,
                    },
                    {
                        menMedianWeeklyEarnings: 985,
                        womenMedianWeeklyEarnings: 618,
                        year: 2011,
                        centsToDollar: 63,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Office and administrative support occupations",
            slug: "office-and-administrative-support-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 771,
                        womenMedianWeeklyEarnings: 721,
                        year: 2019,
                        centsToDollar: 94,
                    },
                    {
                        menMedianWeeklyEarnings: 668,
                        womenMedianWeeklyEarnings: 615,
                        year: 2011,
                        centsToDollar: 92,
                    },
                ],
            },
            parent: {
                slug: "sales-and-office-occupations",
            },
            children: {
                occupations: [
                    {
                        name:
                            "First-line supervisors of office and administrative support workers",
                        slug:
                            "first-line-supervisors-of-office-and-administrative-support-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Bookkeeping, accounting, and auditing clerks",
                        slug: "bookkeeping-accounting-and-auditing-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Customer service representatives",
                        slug: "customer-service-representatives",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Receptionists and information clerks",
                        slug: "receptionists-and-information-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Dispatchers",
                        slug: "dispatchers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Postal service mail carriers",
                        slug: "postal-service-mail-carriers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Production, planning, and expediting clerks",
                        slug: "production-planning-and-expediting-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Shipping, receiving, and traffic clerks",
                        slug: "shipping-receiving-and-traffic-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Stock clerks and order fillers",
                        slug: "stock-clerks-and-order-fillers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Secretaries and administrative assistants",
                        slug: "secretaries-and-administrative-assistants",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Data entry keyers",
                        slug: "data-entry-keyers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Office clerks, general",
                        slug: "office-clerks-general",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Office and administrative support workers, all other",
                        slug:
                            "office-and-administrative-support-workers-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Insurance claims and policy processing clerks",
                        slug: "insurance-claims-and-policy-processing-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Reservation and transportation ticket agents and travel clerks",
                        slug:
                            "reservation-and-transportation-ticket-agents-and-travel-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Information and record clerks, all other",
                        slug: "information-and-record-clerks-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Postal service clerks",
                        slug: "postal-service-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Postal service mail sorters, processors, and processing machine operators",
                        slug:
                            "postal-service-mail-sorters-processors-and-processing-machine-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Weighers, measurers, checkers, and samplers, recordkeeping",
                        slug:
                            "weighers-measurers-checkers-and-samplers-recordkeeping",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Computer operators",
                        slug: "computer-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Bill and account collectors",
                        slug: "bill-and-account-collectors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Billing and posting clerks",
                        slug: "billing-and-posting-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Payroll and timekeeping clerks",
                        slug: "payroll-and-timekeeping-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Library assistants, clerical",
                        slug: "library-assistants-clerical",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Tellers",
                        slug: "tellers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Financial clerks, all other",
                        slug: "financial-clerks-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Court, municipal, and license clerks",
                        slug: "court-municipal-and-license-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Eligibility interviewers, government programs",
                        slug: "eligibility-interviewers-government-programs",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "File clerks",
                        slug: "file-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Hotel, motel, and resort desk clerks",
                        slug: "hotel-motel-and-resort-desk-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Interviewers, except eligibility and loan",
                        slug: "interviewers-except-eligibility-and-loan",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Loan interviewers and clerks",
                        slug: "loan-interviewers-and-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Couriers and messengers",
                        slug: "couriers-and-messengers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Order clerks",
                        slug: "order-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Human resources assistants, except payroll and timekeeping",
                        slug:
                            "human-resources-assistants-except-payroll-and-timekeeping",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Statistical assistants",
                        slug: "statistical-assistants",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Switchboard operators, including answering service",
                        slug:
                            "switchboard-operators-including-answering-service",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Telephone operators",
                        slug: "telephone-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Communications equipment operators, all other",
                        slug: "communications-equipment-operators-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Gaming cage workers",
                        slug: "gaming-cage-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Procurement clerks",
                        slug: "procurement-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Brokerage clerks",
                        slug: "brokerage-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Correspondence clerks",
                        slug: "correspondence-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Credit authorizers, checkers, and clerks",
                        slug: "credit-authorizers-checkers-and-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "New accounts clerks",
                        slug: "new-accounts-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Cargo and freight agents",
                        slug: "cargo-and-freight-agents",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Meter readers, utilities",
                        slug: "meter-readers-utilities",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Word processors and typists",
                        slug: "word-processors-and-typists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Desktop publishers",
                        slug: "desktop-publishers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Mail clerks and mail machine operators, except postal service",
                        slug:
                            "mail-clerks-and-mail-machine-operators-except-postal-service",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Office machine operators, except computer",
                        slug: "office-machine-operators-except-computer",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Proofreaders and copy markers",
                        slug: "proofreaders-and-copy-markers",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name:
                "First-line supervisors of office and administrative support workers",
            slug:
                "first-line-supervisors-of-office-and-administrative-support-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 971,
                        womenMedianWeeklyEarnings: 816,
                        year: 2019,
                        centsToDollar: 84,
                    },
                    {
                        menMedianWeeklyEarnings: 833,
                        womenMedianWeeklyEarnings: 741,
                        year: 2011,
                        centsToDollar: 89,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Bookkeeping, accounting, and auditing clerks",
            slug: "bookkeeping-accounting-and-auditing-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 784,
                        womenMedianWeeklyEarnings: 764,
                        year: 2019,
                        centsToDollar: 97,
                    },
                    {
                        menMedianWeeklyEarnings: 654,
                        womenMedianWeeklyEarnings: 656,
                        year: 2011,
                        centsToDollar: 100,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Customer service representatives",
            slug: "customer-service-representatives",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 736,
                        womenMedianWeeklyEarnings: 673,
                        year: 2019,
                        centsToDollar: 91,
                    },
                    {
                        menMedianWeeklyEarnings: 628,
                        womenMedianWeeklyEarnings: 569,
                        year: 2011,
                        centsToDollar: 91,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Receptionists and information clerks",
            slug: "receptionists-and-information-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 735,
                        womenMedianWeeklyEarnings: 636,
                        year: 2019,
                        centsToDollar: 87,
                    },
                    {
                        menMedianWeeklyEarnings: 521,
                        womenMedianWeeklyEarnings: 520,
                        year: 2011,
                        centsToDollar: 100,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Dispatchers",
            slug: "dispatchers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 854,
                        womenMedianWeeklyEarnings: 763,
                        year: 2019,
                        centsToDollar: 89,
                    },
                    {
                        menMedianWeeklyEarnings: 728,
                        womenMedianWeeklyEarnings: 626,
                        year: 2011,
                        centsToDollar: 86,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Postal service mail carriers",
            slug: "postal-service-mail-carriers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 994,
                        womenMedianWeeklyEarnings: 893,
                        year: 2019,
                        centsToDollar: 90,
                    },
                    {
                        menMedianWeeklyEarnings: 1017,
                        womenMedianWeeklyEarnings: 892,
                        year: 2011,
                        centsToDollar: 88,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Production, planning, and expediting clerks",
            slug: "production-planning-and-expediting-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1039,
                        womenMedianWeeklyEarnings: 872,
                        year: 2019,
                        centsToDollar: 84,
                    },
                    {
                        menMedianWeeklyEarnings: 916,
                        womenMedianWeeklyEarnings: 722,
                        year: 2011,
                        centsToDollar: 79,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Shipping, receiving, and traffic clerks",
            slug: "shipping-receiving-and-traffic-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 686,
                        womenMedianWeeklyEarnings: 662,
                        year: 2019,
                        centsToDollar: 97,
                    },
                    {
                        menMedianWeeklyEarnings: 571,
                        womenMedianWeeklyEarnings: 543,
                        year: 2011,
                        centsToDollar: 95,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Stock clerks and order fillers",
            slug: "stock-clerks-and-order-fillers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 596,
                        womenMedianWeeklyEarnings: 605,
                        year: 2019,
                        centsToDollar: 102,
                    },
                    {
                        menMedianWeeklyEarnings: 488,
                        womenMedianWeeklyEarnings: 501,
                        year: 2011,
                        centsToDollar: 103,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Secretaries and administrative assistants",
            slug: "secretaries-and-administrative-assistants",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 795,
                        womenMedianWeeklyEarnings: 763,
                        year: 2019,
                        centsToDollar: 96,
                    },
                    {
                        menMedianWeeklyEarnings: 757,
                        womenMedianWeeklyEarnings: 651,
                        year: 2011,
                        centsToDollar: 86,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Data entry keyers",
            slug: "data-entry-keyers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 738,
                        womenMedianWeeklyEarnings: 656,
                        year: 2019,
                        centsToDollar: 89,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 597,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Office clerks, general",
            slug: "office-clerks-general",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 718,
                        womenMedianWeeklyEarnings: 677,
                        year: 2019,
                        centsToDollar: 94,
                    },
                    {
                        menMedianWeeklyEarnings: 712,
                        womenMedianWeeklyEarnings: 594,
                        year: 2011,
                        centsToDollar: 83,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Office and administrative support workers, all other",
            slug: "office-and-administrative-support-workers-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 950,
                        womenMedianWeeklyEarnings: 820,
                        year: 2019,
                        centsToDollar: 86,
                    },
                    {
                        menMedianWeeklyEarnings: 792,
                        womenMedianWeeklyEarnings: 645,
                        year: 2011,
                        centsToDollar: 81,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Natural resources, construction, and maintenance occupations",
            slug: "natural-resources-construction-and-maintenance-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 881,
                        womenMedianWeeklyEarnings: 614,
                        year: 2019,
                        centsToDollar: 70,
                    },
                    {
                        menMedianWeeklyEarnings: 740,
                        womenMedianWeeklyEarnings: 515,
                        year: 2011,
                        centsToDollar: 70,
                    },
                ],
            },
            parent: null,
            children: {
                occupations: [
                    {
                        name: "Farming, fishing, and forestry occupations",
                        slug: "farming-fishing-and-forestry-occupations",
                        children: {
                            occupations: [
                                {
                                    name: "Miscellaneous agricultural workers",
                                    slug: "miscellaneous-agricultural-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Graders and sorters, agricultural products",
                                    slug:
                                        "graders-and-sorters-agricultural-products",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "First-line supervisors of farming, fishing, and forestry workers",
                                    slug:
                                        "first-line-supervisors-of-farming-fishing-and-forestry-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Agricultural inspectors",
                                    slug: "agricultural-inspectors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Animal breeders",
                                    slug: "animal-breeders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Fishers and related fishing workers",
                                    slug: "fishers-and-related-fishing-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Hunters and trappers",
                                    slug: "hunters-and-trappers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Forest and conservation workers",
                                    slug: "forest-and-conservation-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Logging workers",
                                    slug: "logging-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        name: "Construction and extraction occupations",
                        slug: "construction-and-extraction-occupations",
                        children: {
                            occupations: [
                                {
                                    name:
                                        "First-line supervisors of construction trades and extraction workers",
                                    slug:
                                        "first-line-supervisors-of-construction-trades-and-extraction-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Brickmasons, blockmasons, and stonemasons",
                                    slug:
                                        "brickmasons-blockmasons-and-stonemasons",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Carpenters",
                                    slug: "carpenters",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Carpet, floor, and tile installers and finishers",
                                    slug:
                                        "carpet-floor-and-tile-installers-and-finishers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Cement masons, concrete finishers, and terrazzo workers",
                                    slug:
                                        "cement-masons-concrete-finishers-and-terrazzo-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Construction laborers",
                                    slug: "construction-laborers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Operating engineers and other construction equipment operators",
                                    slug:
                                        "operating-engineers-and-other-construction-equipment-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Drywall installers, ceiling tile installers, and tapers",
                                    slug:
                                        "drywall-installers-ceiling-tile-installers-and-tapers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Electricians",
                                    slug: "electricians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Insulation workers",
                                    slug: "insulation-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Painters, construction and maintenance",
                                    slug:
                                        "painters-construction-and-maintenance",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Pipelayers, plumbers, pipefitters, and steamfitters",
                                    slug:
                                        "pipelayers-plumbers-pipefitters-and-steamfitters",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Roofers",
                                    slug: "roofers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Mining machine operators",
                                    slug: "mining-machine-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Other extraction workers",
                                    slug: "other-extraction-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Glaziers",
                                    slug: "glaziers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Sheet metal workers",
                                    slug: "sheet-metal-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Structural iron and steel workers",
                                    slug: "structural-iron-and-steel-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Construction and building inspectors",
                                    slug:
                                        "construction-and-building-inspectors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Highway maintenance workers",
                                    slug: "highway-maintenance-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Helpers, construction trades",
                                    slug: "helpers-construction-trades",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Boilermakers",
                                    slug: "boilermakers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Paving, surfacing, and tamping equipment operators",
                                    slug:
                                        "paving-surfacing-and-tamping-equipment-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Pile-driver operators",
                                    slug: "pile-driver-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Paperhangers",
                                    slug: "paperhangers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Plasterers and stucco masons",
                                    slug: "plasterers-and-stucco-masons",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Reinforcing iron and rebar workers",
                                    slug: "reinforcing-iron-and-rebar-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Solar photovoltaic installers",
                                    slug: "solar-photovoltaic-installers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Elevator installers and repairers",
                                    slug: "elevator-installers-and-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Fence erectors",
                                    slug: "fence-erectors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Hazardous materials removal workers",
                                    slug: "hazardous-materials-removal-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Rail-track laying and maintenance equipment operators",
                                    slug:
                                        "rail-track-laying-and-maintenance-equipment-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Septic tank servicers and sewer pipe cleaners",
                                    slug:
                                        "septic-tank-servicers-and-sewer-pipe-cleaners",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Miscellaneous construction and related workers",
                                    slug:
                                        "miscellaneous-construction-and-related-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Derrick, rotary drill, and service unit operators, oil, gas, and mining",
                                    slug:
                                        "derrick-rotary-drill-and-service-unit-operators-oil-gas-and-mining",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Earth drillers, except oil and gas",
                                    slug: "earth-drillers-except-oil-and-gas",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Explosives workers, ordnance handling experts, and blasters",
                                    slug:
                                        "explosives-workers-ordnance-handling-experts-and-blasters",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Roof bolters, mining",
                                    slug: "roof-bolters-mining",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Roustabouts, oil and gas",
                                    slug: "roustabouts-oil-and-gas",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Helpers--extraction workers",
                                    slug: "helpers-extraction-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        name:
                            "Installation, maintenance, and repair occupations",
                        slug: "installation-maintenance-and-repair-occupations",
                        children: {
                            occupations: [
                                {
                                    name:
                                        "First-line supervisors of mechanics, installers, and repairers",
                                    slug:
                                        "first-line-supervisors-of-mechanics-installers-and-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Computer, automated teller, and office machine repairers",
                                    slug:
                                        "computer-automated-teller-and-office-machine-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Radio and telecommunications equipment installers and repairers",
                                    slug:
                                        "radio-and-telecommunications-equipment-installers-and-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Security and fire alarm systems installers",
                                    slug:
                                        "security-and-fire-alarm-systems-installers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Aircraft mechanics and service technicians",
                                    slug:
                                        "aircraft-mechanics-and-service-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Automotive body and related repairers",
                                    slug:
                                        "automotive-body-and-related-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Automotive service technicians and mechanics",
                                    slug:
                                        "automotive-service-technicians-and-mechanics",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Bus and truck mechanics and diesel engine specialists",
                                    slug:
                                        "bus-and-truck-mechanics-and-diesel-engine-specialists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Heavy vehicle and mobile equipment service technicians and mechanics",
                                    slug:
                                        "heavy-vehicle-and-mobile-equipment-service-technicians-and-mechanics",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Miscellaneous vehicle and mobile equipment mechanics, installers, and repairers",
                                    slug:
                                        "miscellaneous-vehicle-and-mobile-equipment-mechanics-installers-and-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Heating, air conditioning, and refrigeration mechanics and installers",
                                    slug:
                                        "heating-air-conditioning-and-refrigeration-mechanics-and-installers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Industrial and refractory machinery mechanics",
                                    slug:
                                        "industrial-and-refractory-machinery-mechanics",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Maintenance and repair workers, general",
                                    slug:
                                        "maintenance-and-repair-workers-general",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Electrical power-line installers and repairers",
                                    slug:
                                        "electrical-power-line-installers-and-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Telecommunications line installers and repairers",
                                    slug:
                                        "telecommunications-line-installers-and-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Millwrights",
                                    slug: "millwrights",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Other installation, maintenance, and repair workers",
                                    slug:
                                        "other-installation-maintenance-and-repair-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Riggers",
                                    slug: "riggers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Avionics technicians",
                                    slug: "avionics-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Electric motor, power tool, and related repairers",
                                    slug:
                                        "electric-motor-power-tool-and-related-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Electrical and electronics installers and repairers, transportation equipment",
                                    slug:
                                        "electrical-and-electronics-installers-and-repairers-transportation-equipment",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Electrical and electronics repairers, industrial and utility",
                                    slug:
                                        "electrical-and-electronics-repairers-industrial-and-utility",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Electronic equipment installers and repairers, motor vehicles",
                                    slug:
                                        "electronic-equipment-installers-and-repairers-motor-vehicles",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Electronic home entertainment equipment installers and repairers",
                                    slug:
                                        "electronic-home-entertainment-equipment-installers-and-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Automotive glass installers and repairers",
                                    slug:
                                        "automotive-glass-installers-and-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Small engine mechanics",
                                    slug: "small-engine-mechanics",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Control and valve installers and repairers",
                                    slug:
                                        "control-and-valve-installers-and-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Home appliance repairers",
                                    slug: "home-appliance-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Maintenance workers, machinery",
                                    slug: "maintenance-workers-machinery",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Precision instrument and equipment repairers",
                                    slug:
                                        "precision-instrument-and-equipment-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Wind turbine service technicians",
                                    slug: "wind-turbine-service-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Coin, vending, and amusement machine servicers and repairers",
                                    slug:
                                        "coin-vending-and-amusement-machine-servicers-and-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Commercial divers",
                                    slug: "commercial-divers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Locksmiths and safe repairers",
                                    slug: "locksmiths-and-safe-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Manufactured building and mobile home installers",
                                    slug:
                                        "manufactured-building-and-mobile-home-installers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Signal and track switch repairers",
                                    slug: "signal-and-track-switch-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Helpers--installation, maintenance, and repair workers",
                                    slug:
                                        "helpers-installation-maintenance-and-repair-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            name: "Farming, fishing, and forestry occupations",
            slug: "farming-fishing-and-forestry-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 593,
                        womenMedianWeeklyEarnings: 513,
                        year: 2019,
                        centsToDollar: 87,
                    },
                    {
                        menMedianWeeklyEarnings: 445,
                        womenMedianWeeklyEarnings: 371,
                        year: 2011,
                        centsToDollar: 83,
                    },
                ],
            },
            parent: {
                slug:
                    "natural-resources-construction-and-maintenance-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Miscellaneous agricultural workers",
                        slug: "miscellaneous-agricultural-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Graders and sorters, agricultural products",
                        slug: "graders-and-sorters-agricultural-products",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "First-line supervisors of farming, fishing, and forestry workers",
                        slug:
                            "first-line-supervisors-of-farming-fishing-and-forestry-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Agricultural inspectors",
                        slug: "agricultural-inspectors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Animal breeders",
                        slug: "animal-breeders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Fishers and related fishing workers",
                        slug: "fishers-and-related-fishing-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Hunters and trappers",
                        slug: "hunters-and-trappers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Forest and conservation workers",
                        slug: "forest-and-conservation-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Logging workers",
                        slug: "logging-workers",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Miscellaneous agricultural workers",
            slug: "miscellaneous-agricultural-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 581,
                        womenMedianWeeklyEarnings: 502,
                        year: 2019,
                        centsToDollar: 86,
                    },
                    {
                        menMedianWeeklyEarnings: 427,
                        womenMedianWeeklyEarnings: 370,
                        year: 2011,
                        centsToDollar: 87,
                    },
                ],
            },
            parent: {
                slug: "farming-fishing-and-forestry-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Construction and extraction occupations",
            slug: "construction-and-extraction-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 873,
                        womenMedianWeeklyEarnings: 711,
                        year: 2019,
                        centsToDollar: 81,
                    },
                    {
                        menMedianWeeklyEarnings: 718,
                        womenMedianWeeklyEarnings: 612,
                        year: 2011,
                        centsToDollar: 85,
                    },
                ],
            },
            parent: {
                slug:
                    "natural-resources-construction-and-maintenance-occupations",
            },
            children: {
                occupations: [
                    {
                        name:
                            "First-line supervisors of construction trades and extraction workers",
                        slug:
                            "first-line-supervisors-of-construction-trades-and-extraction-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Brickmasons, blockmasons, and stonemasons",
                        slug: "brickmasons-blockmasons-and-stonemasons",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Carpenters",
                        slug: "carpenters",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Carpet, floor, and tile installers and finishers",
                        slug: "carpet-floor-and-tile-installers-and-finishers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Cement masons, concrete finishers, and terrazzo workers",
                        slug:
                            "cement-masons-concrete-finishers-and-terrazzo-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Construction laborers",
                        slug: "construction-laborers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Operating engineers and other construction equipment operators",
                        slug:
                            "operating-engineers-and-other-construction-equipment-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Drywall installers, ceiling tile installers, and tapers",
                        slug:
                            "drywall-installers-ceiling-tile-installers-and-tapers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Electricians",
                        slug: "electricians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Insulation workers",
                        slug: "insulation-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Painters, construction and maintenance",
                        slug: "painters-construction-and-maintenance",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Pipelayers, plumbers, pipefitters, and steamfitters",
                        slug:
                            "pipelayers-plumbers-pipefitters-and-steamfitters",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Roofers",
                        slug: "roofers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Mining machine operators",
                        slug: "mining-machine-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Other extraction workers",
                        slug: "other-extraction-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Glaziers",
                        slug: "glaziers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Sheet metal workers",
                        slug: "sheet-metal-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Structural iron and steel workers",
                        slug: "structural-iron-and-steel-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Construction and building inspectors",
                        slug: "construction-and-building-inspectors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Highway maintenance workers",
                        slug: "highway-maintenance-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Helpers, construction trades",
                        slug: "helpers-construction-trades",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Boilermakers",
                        slug: "boilermakers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Paving, surfacing, and tamping equipment operators",
                        slug:
                            "paving-surfacing-and-tamping-equipment-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Pile-driver operators",
                        slug: "pile-driver-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Paperhangers",
                        slug: "paperhangers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Plasterers and stucco masons",
                        slug: "plasterers-and-stucco-masons",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Reinforcing iron and rebar workers",
                        slug: "reinforcing-iron-and-rebar-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Solar photovoltaic installers",
                        slug: "solar-photovoltaic-installers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Elevator installers and repairers",
                        slug: "elevator-installers-and-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Fence erectors",
                        slug: "fence-erectors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Hazardous materials removal workers",
                        slug: "hazardous-materials-removal-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Rail-track laying and maintenance equipment operators",
                        slug:
                            "rail-track-laying-and-maintenance-equipment-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Septic tank servicers and sewer pipe cleaners",
                        slug: "septic-tank-servicers-and-sewer-pipe-cleaners",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Miscellaneous construction and related workers",
                        slug: "miscellaneous-construction-and-related-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Derrick, rotary drill, and service unit operators, oil, gas, and mining",
                        slug:
                            "derrick-rotary-drill-and-service-unit-operators-oil-gas-and-mining",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Earth drillers, except oil and gas",
                        slug: "earth-drillers-except-oil-and-gas",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Explosives workers, ordnance handling experts, and blasters",
                        slug:
                            "explosives-workers-ordnance-handling-experts-and-blasters",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Roof bolters, mining",
                        slug: "roof-bolters-mining",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Roustabouts, oil and gas",
                        slug: "roustabouts-oil-and-gas",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Helpers--extraction workers",
                        slug: "helpers-extraction-workers",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Insurance claims and policy processing clerks",
            slug: "insurance-claims-and-policy-processing-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 739,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 647,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Graders and sorters, agricultural products",
            slug: "graders-and-sorters-agricultural-products",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 549,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 363,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "farming-fishing-and-forestry-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "First-line supervisors of construction trades and extraction workers",
            slug:
                "first-line-supervisors-of-construction-trades-and-extraction-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1167,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1001,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Brickmasons, blockmasons, and stonemasons",
            slug: "brickmasons-blockmasons-and-stonemasons",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 819,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 706,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Carpenters",
            slug: "carpenters",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 826,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 630,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Carpet, floor, and tile installers and finishers",
            slug: "carpet-floor-and-tile-installers-and-finishers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 709,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 581,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Cement masons, concrete finishers, and terrazzo workers",
            slug: "cement-masons-concrete-finishers-and-terrazzo-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 975,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 651,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Construction laborers",
            slug: "construction-laborers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 724,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 587,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Operating engineers and other construction equipment operators",
            slug:
                "operating-engineers-and-other-construction-equipment-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 927,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 809,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Drywall installers, ceiling tile installers, and tapers",
            slug: "drywall-installers-ceiling-tile-installers-and-tapers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 790,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 509,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Electricians",
            slug: "electricians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1015,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 855,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Insulation workers",
            slug: "insulation-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 885,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Painters, construction and maintenance",
            slug: "painters-construction-and-maintenance",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 744,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 555,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Pipelayers, plumbers, pipefitters, and steamfitters",
            slug: "pipelayers-plumbers-pipefitters-and-steamfitters",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 918,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 853,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Roofers",
            slug: "roofers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 690,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 520,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Installation, maintenance, and repair occupations",
            slug: "installation-maintenance-and-repair-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 943,
                        womenMedianWeeklyEarnings: 850,
                        year: 2019,
                        centsToDollar: 90,
                    },
                    {
                        menMedianWeeklyEarnings: 807,
                        womenMedianWeeklyEarnings: 751,
                        year: 2011,
                        centsToDollar: 93,
                    },
                ],
            },
            parent: {
                slug:
                    "natural-resources-construction-and-maintenance-occupations",
            },
            children: {
                occupations: [
                    {
                        name:
                            "First-line supervisors of mechanics, installers, and repairers",
                        slug:
                            "first-line-supervisors-of-mechanics-installers-and-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Computer, automated teller, and office machine repairers",
                        slug:
                            "computer-automated-teller-and-office-machine-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Radio and telecommunications equipment installers and repairers",
                        slug:
                            "radio-and-telecommunications-equipment-installers-and-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Security and fire alarm systems installers",
                        slug: "security-and-fire-alarm-systems-installers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Aircraft mechanics and service technicians",
                        slug: "aircraft-mechanics-and-service-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Automotive body and related repairers",
                        slug: "automotive-body-and-related-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Automotive service technicians and mechanics",
                        slug: "automotive-service-technicians-and-mechanics",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Bus and truck mechanics and diesel engine specialists",
                        slug:
                            "bus-and-truck-mechanics-and-diesel-engine-specialists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Heavy vehicle and mobile equipment service technicians and mechanics",
                        slug:
                            "heavy-vehicle-and-mobile-equipment-service-technicians-and-mechanics",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Miscellaneous vehicle and mobile equipment mechanics, installers, and repairers",
                        slug:
                            "miscellaneous-vehicle-and-mobile-equipment-mechanics-installers-and-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Heating, air conditioning, and refrigeration mechanics and installers",
                        slug:
                            "heating-air-conditioning-and-refrigeration-mechanics-and-installers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Industrial and refractory machinery mechanics",
                        slug: "industrial-and-refractory-machinery-mechanics",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Maintenance and repair workers, general",
                        slug: "maintenance-and-repair-workers-general",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Electrical power-line installers and repairers",
                        slug: "electrical-power-line-installers-and-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Telecommunications line installers and repairers",
                        slug:
                            "telecommunications-line-installers-and-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Millwrights",
                        slug: "millwrights",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Other installation, maintenance, and repair workers",
                        slug:
                            "other-installation-maintenance-and-repair-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Riggers",
                        slug: "riggers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Avionics technicians",
                        slug: "avionics-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Electric motor, power tool, and related repairers",
                        slug: "electric-motor-power-tool-and-related-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Electrical and electronics installers and repairers, transportation equipment",
                        slug:
                            "electrical-and-electronics-installers-and-repairers-transportation-equipment",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Electrical and electronics repairers, industrial and utility",
                        slug:
                            "electrical-and-electronics-repairers-industrial-and-utility",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Electronic equipment installers and repairers, motor vehicles",
                        slug:
                            "electronic-equipment-installers-and-repairers-motor-vehicles",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Electronic home entertainment equipment installers and repairers",
                        slug:
                            "electronic-home-entertainment-equipment-installers-and-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Automotive glass installers and repairers",
                        slug: "automotive-glass-installers-and-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Small engine mechanics",
                        slug: "small-engine-mechanics",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Control and valve installers and repairers",
                        slug: "control-and-valve-installers-and-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Home appliance repairers",
                        slug: "home-appliance-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Maintenance workers, machinery",
                        slug: "maintenance-workers-machinery",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Precision instrument and equipment repairers",
                        slug: "precision-instrument-and-equipment-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Wind turbine service technicians",
                        slug: "wind-turbine-service-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Coin, vending, and amusement machine servicers and repairers",
                        slug:
                            "coin-vending-and-amusement-machine-servicers-and-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Commercial divers",
                        slug: "commercial-divers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Locksmiths and safe repairers",
                        slug: "locksmiths-and-safe-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Manufactured building and mobile home installers",
                        slug:
                            "manufactured-building-and-mobile-home-installers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Signal and track switch repairers",
                        slug: "signal-and-track-switch-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Helpers--installation, maintenance, and repair workers",
                        slug:
                            "helpers-installation-maintenance-and-repair-workers",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Mining machine operators",
            slug: "mining-machine-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1101,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1010,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "First-line supervisors of mechanics, installers, and repairers",
            slug:
                "first-line-supervisors-of-mechanics-installers-and-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1082,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 936,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Computer, automated teller, and office machine repairers",
            slug: "computer-automated-teller-and-office-machine-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 899,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 812,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Radio and telecommunications equipment installers and repairers",
            slug:
                "radio-and-telecommunications-equipment-installers-and-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1058,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 883,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Security and fire alarm systems installers",
            slug: "security-and-fire-alarm-systems-installers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 875,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Aircraft mechanics and service technicians",
            slug: "aircraft-mechanics-and-service-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1265,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 990,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Automotive body and related repairers",
            slug: "automotive-body-and-related-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 885,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 625,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Automotive service technicians and mechanics",
            slug: "automotive-service-technicians-and-mechanics",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 811,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 718,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Bus and truck mechanics and diesel engine specialists",
            slug: "bus-and-truck-mechanics-and-diesel-engine-specialists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 983,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 802,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Heavy vehicle and mobile equipment service technicians and mechanics",
            slug:
                "heavy-vehicle-and-mobile-equipment-service-technicians-and-mechanics",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1008,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 822,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Miscellaneous vehicle and mobile equipment mechanics, installers, and repairers",
            slug:
                "miscellaneous-vehicle-and-mobile-equipment-mechanics-installers-and-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 628,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 463,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Heating, air conditioning, and refrigeration mechanics and installers",
            slug:
                "heating-air-conditioning-and-refrigeration-mechanics-and-installers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 947,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 795,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Industrial and refractory machinery mechanics",
            slug: "industrial-and-refractory-machinery-mechanics",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1028,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 870,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Maintenance and repair workers, general",
            slug: "maintenance-and-repair-workers-general",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 883,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 756,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Electrical power-line installers and repairers",
            slug: "electrical-power-line-installers-and-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1460,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1116,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Telecommunications line installers and repairers",
            slug: "telecommunications-line-installers-and-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 884,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 926,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Other extraction workers",
            slug: "other-extraction-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Millwrights",
            slug: "millwrights",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 897,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Production, transportation, and material moving occupations",
            slug: "production-transportation-and-material-moving-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 780,
                        womenMedianWeeklyEarnings: 593,
                        year: 2019,
                        centsToDollar: 76,
                    },
                    {
                        menMedianWeeklyEarnings: 651,
                        womenMedianWeeklyEarnings: 485,
                        year: 2011,
                        centsToDollar: 75,
                    },
                ],
            },
            parent: null,
            children: {
                occupations: [
                    {
                        name: "Production occupations",
                        slug: "production-occupations",
                        children: {
                            occupations: [
                                {
                                    name:
                                        "First-line supervisors of production and operating workers",
                                    slug:
                                        "first-line-supervisors-of-production-and-operating-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Electrical, electronics, and electromechanical assemblers",
                                    slug:
                                        "electrical-electronics-and-electromechanical-assemblers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Miscellaneous assemblers and fabricators",
                                    slug:
                                        "miscellaneous-assemblers-and-fabricators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Bakers",
                                    slug: "bakers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Butchers and other meat, poultry, and fish processing workers",
                                    slug:
                                        "butchers-and-other-meat-poultry-and-fish-processing-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Food processing workers, all other",
                                    slug: "food-processing-workers-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Metal workers and plastic workers, all other",
                                    slug:
                                        "metal-workers-and-plastic-workers-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Laundry and dry-cleaning workers",
                                    slug: "laundry-and-dry-cleaning-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Machinists",
                                    slug: "machinists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Inspectors, testers, sorters, samplers, and weighers",
                                    slug:
                                        "inspectors-testers-sorters-samplers-and-weighers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Packaging and filling machine operators and tenders",
                                    slug:
                                        "packaging-and-filling-machine-operators-and-tenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Production workers, all other",
                                    slug: "production-workers-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Stationary engineers and boiler operators",
                                    slug:
                                        "stationary-engineers-and-boiler-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Water and wastewater treatment plant and system operators",
                                    slug:
                                        "water-and-wastewater-treatment-plant-and-system-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Chemical processing machine setters, operators, and tenders",
                                    slug:
                                        "chemical-processing-machine-setters-operators-and-tenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Crushing, grinding, polishing, mixing, and blending workers",
                                    slug:
                                        "crushing-grinding-polishing-mixing-and-blending-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Painting workers",
                                    slug: "painting-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Tailors, dressmakers, and sewers",
                                    slug: "tailors-dressmakers-and-sewers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Sewing machine operators",
                                    slug: "sewing-machine-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Computer control programmers and operators",
                                    slug:
                                        "computer-control-programmers-and-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Cutting, punching, and press machine setters, operators, and tenders, metal and plastic",
                                    slug:
                                        "cutting-punching-and-press-machine-setters-operators-and-tenders-metal-and-plastic",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Tool and die makers",
                                    slug: "tool-and-die-makers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Welding, soldering, and brazing workers",
                                    slug:
                                        "welding-soldering-and-brazing-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Printing press operators",
                                    slug: "printing-press-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Food batchmakers",
                                    slug: "food-batchmakers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Cutting workers",
                                    slug: "cutting-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Medical, dental, and ophthalmic laboratory technicians",
                                    slug:
                                        "medical-dental-and-ophthalmic-laboratory-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Shoe and leather workers and repairers",
                                    slug:
                                        "shoe-and-leather-workers-and-repairers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Aircraft structure, surfaces, rigging, and systems assemblers",
                                    slug:
                                        "aircraft-structure-surfaces-rigging-and-systems-assemblers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Engine and other machine assemblers",
                                    slug: "engine-and-other-machine-assemblers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Structural metal fabricators and fitters",
                                    slug:
                                        "structural-metal-fabricators-and-fitters",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Food and tobacco roasting, baking, and drying machine operators and tenders",
                                    slug:
                                        "food-and-tobacco-roasting-baking-and-drying-machine-operators-and-tenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Food cooking machine operators and tenders",
                                    slug:
                                        "food-cooking-machine-operators-and-tenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Etchers and engravers",
                                    slug: "etchers-and-engravers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Molders, shapers, and casters, except metal and plastic",
                                    slug:
                                        "molders-shapers-and-casters-except-metal-and-plastic",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Extruding and drawing machine setters, operators, and tenders, metal and plastic",
                                    slug:
                                        "extruding-and-drawing-machine-setters-operators-and-tenders-metal-and-plastic",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Forging machine setters, operators, and tenders, metal and plastic",
                                    slug:
                                        "forging-machine-setters-operators-and-tenders-metal-and-plastic",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Tire builders",
                                    slug: "tire-builders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Rolling machine setters, operators, and tenders, metal and plastic",
                                    slug:
                                        "rolling-machine-setters-operators-and-tenders-metal-and-plastic",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Drilling and boring machine tool setters, operators, and tenders, metal and plastic",
                                    slug:
                                        "drilling-and-boring-machine-tool-setters-operators-and-tenders-metal-and-plastic",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Grinding, lapping, polishing, and buffing machine tool setters, operators, and tenders, metal and plastic",
                                    slug:
                                        "grinding-lapping-polishing-and-buffing-machine-tool-setters-operators-and-tenders-metal-and-plastic",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Lathe and turning machine tool setters, operators, and tenders, metal and plastic",
                                    slug:
                                        "lathe-and-turning-machine-tool-setters-operators-and-tenders-metal-and-plastic",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Milling and planing machine setters, operators, and tenders, metal and plastic",
                                    slug:
                                        "milling-and-planing-machine-setters-operators-and-tenders-metal-and-plastic",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Metal furnace operators, tenders, pourers, and casters",
                                    slug:
                                        "metal-furnace-operators-tenders-pourers-and-casters",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Model makers and patternmakers, metal and plastic",
                                    slug:
                                        "model-makers-and-patternmakers-metal-and-plastic",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Molders and molding machine setters, operators, and tenders, metal and plastic",
                                    slug:
                                        "molders-and-molding-machine-setters-operators-and-tenders-metal-and-plastic",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Multiple machine tool setters, operators, and tenders, metal and plastic",
                                    slug:
                                        "multiple-machine-tool-setters-operators-and-tenders-metal-and-plastic",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Heat treating equipment setters, operators, and tenders, metal and plastic",
                                    slug:
                                        "heat-treating-equipment-setters-operators-and-tenders-metal-and-plastic",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Layout workers, metal and plastic",
                                    slug: "layout-workers-metal-and-plastic",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Plating and coating machine setters, operators, and tenders, metal and plastic",
                                    slug:
                                        "plating-and-coating-machine-setters-operators-and-tenders-metal-and-plastic",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Tool grinders, filers, and sharpeners",
                                    slug: "tool-grinders-filers-and-sharpeners",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Prepress technicians and workers",
                                    slug: "prepress-technicians-and-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Print binding and finishing workers",
                                    slug: "print-binding-and-finishing-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Pressers, textile, garment, and related materials",
                                    slug:
                                        "pressers-textile-garment-and-related-materials",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Shoe machine operators and tenders",
                                    slug: "shoe-machine-operators-and-tenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Textile bleaching and dyeing machine operators and tenders",
                                    slug:
                                        "textile-bleaching-and-dyeing-machine-operators-and-tenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Textile cutting machine setters, operators, and tenders",
                                    slug:
                                        "textile-cutting-machine-setters-operators-and-tenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Textile knitting and weaving machine setters, operators, and tenders",
                                    slug:
                                        "textile-knitting-and-weaving-machine-setters-operators-and-tenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Textile winding, twisting, and drawing out machine setters, operators, and tenders",
                                    slug:
                                        "textile-winding-twisting-and-drawing-out-machine-setters-operators-and-tenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Extruding and forming machine setters, operators, and tenders, synthetic and glass fibers",
                                    slug:
                                        "extruding-and-forming-machine-setters-operators-and-tenders-synthetic-and-glass-fibers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Fabric and apparel patternmakers",
                                    slug: "fabric-and-apparel-patternmakers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Upholsterers",
                                    slug: "upholsterers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Textile, apparel, and furnishings workers, all other",
                                    slug:
                                        "textile-apparel-and-furnishings-workers-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Cabinetmakers and bench carpenters",
                                    slug: "cabinetmakers-and-bench-carpenters",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Furniture finishers",
                                    slug: "furniture-finishers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Model makers and patternmakers, wood",
                                    slug: "model-makers-and-patternmakers-wood",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Sawing machine setters, operators, and tenders, wood",
                                    slug:
                                        "sawing-machine-setters-operators-and-tenders-wood",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Woodworking machine setters, operators, and tenders, except sawing",
                                    slug:
                                        "woodworking-machine-setters-operators-and-tenders-except-sawing",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Woodworkers, all other",
                                    slug: "woodworkers-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Power plant operators, distributors, and dispatchers",
                                    slug:
                                        "power-plant-operators-distributors-and-dispatchers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Miscellaneous plant and system operators",
                                    slug:
                                        "miscellaneous-plant-and-system-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Extruding, forming, pressing, and compacting machine setters, operators, and tenders",
                                    slug:
                                        "extruding-forming-pressing-and-compacting-machine-setters-operators-and-tenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Furnace, kiln, oven, drier, and kettle operators and tenders",
                                    slug:
                                        "furnace-kiln-oven-drier-and-kettle-operators-and-tenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Jewelers and precious stone and metal workers",
                                    slug:
                                        "jewelers-and-precious-stone-and-metal-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Photographic process workers and processing machine operators",
                                    slug:
                                        "photographic-process-workers-and-processing-machine-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Semiconductor processors",
                                    slug: "semiconductor-processors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Adhesive bonding machine operators and tenders",
                                    slug:
                                        "adhesive-bonding-machine-operators-and-tenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Cleaning, washing, and metal pickling equipment operators and tenders",
                                    slug:
                                        "cleaning-washing-and-metal-pickling-equipment-operators-and-tenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Cooling and freezing equipment operators and tenders",
                                    slug:
                                        "cooling-and-freezing-equipment-operators-and-tenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Paper goods machine setters, operators, and tenders",
                                    slug:
                                        "paper-goods-machine-setters-operators-and-tenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Helpers--production workers",
                                    slug: "helpers-production-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        name: "Transportation and material moving occupations",
                        slug: "transportation-and-material-moving-occupations",
                        children: {
                            occupations: [
                                {
                                    name: "Bus drivers",
                                    slug: "bus-drivers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Flight attendants",
                                    slug: "flight-attendants",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Supervisors of transportation and material moving workers",
                                    slug:
                                        "supervisors-of-transportation-and-material-moving-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Aircraft pilots and flight engineers",
                                    slug:
                                        "aircraft-pilots-and-flight-engineers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Driver/sales workers and truck drivers",
                                    slug:
                                        "driver-sales-workers-and-truck-drivers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Taxi drivers and chauffeurs",
                                    slug: "taxi-drivers-and-chauffeurs",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Industrial truck and tractor operators",
                                    slug:
                                        "industrial-truck-and-tractor-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Laborers and freight, stock, and material movers, hand",
                                    slug:
                                        "laborers-and-freight-stock-and-material-movers-hand",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Packers and packagers, hand",
                                    slug: "packers-and-packagers-hand",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Railroad conductors and yardmasters",
                                    slug: "railroad-conductors-and-yardmasters",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Parking lot attendants",
                                    slug: "parking-lot-attendants",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Automotive and watercraft service attendants",
                                    slug:
                                        "automotive-and-watercraft-service-attendants",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Crane and tower operators",
                                    slug: "crane-and-tower-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Cleaners of vehicles and equipment",
                                    slug: "cleaners-of-vehicles-and-equipment",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Refuse and recyclable material collectors",
                                    slug:
                                        "refuse-and-recyclable-material-collectors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Air traffic controllers and airfield operations specialists",
                                    slug:
                                        "air-traffic-controllers-and-airfield-operations-specialists",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Ambulance drivers and attendants, except emergency medical technicians",
                                    slug:
                                        "ambulance-drivers-and-attendants-except-emergency-medical-technicians",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Motor vehicle operators, all other",
                                    slug: "motor-vehicle-operators-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Locomotive engineers and operators",
                                    slug: "locomotive-engineers-and-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Railroad brake, signal, and switch operators",
                                    slug:
                                        "railroad-brake-signal-and-switch-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Subway, streetcar, and other rail transportation workers",
                                    slug:
                                        "subway-streetcar-and-other-rail-transportation-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Sailors and marine oilers",
                                    slug: "sailors-and-marine-oilers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Ship and boat captains and operators",
                                    slug:
                                        "ship-and-boat-captains-and-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Ship engineers",
                                    slug: "ship-engineers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Bridge and lock tenders",
                                    slug: "bridge-and-lock-tenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Transportation inspectors",
                                    slug: "transportation-inspectors",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Transportation attendants, except flight attendants",
                                    slug:
                                        "transportation-attendants-except-flight-attendants",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Other transportation workers",
                                    slug: "other-transportation-workers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Conveyor operators and tenders",
                                    slug: "conveyor-operators-and-tenders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name:
                                        "Dredge, excavating, and loading machine operators",
                                    slug:
                                        "dredge-excavating-and-loading-machine-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Hoist and winch operators",
                                    slug: "hoist-and-winch-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Machine feeders and offbearers",
                                    slug: "machine-feeders-and-offbearers",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Pumping station operators",
                                    slug: "pumping-station-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Mine shuttle car operators",
                                    slug: "mine-shuttle-car-operators",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Tank car, truck, and ship loaders",
                                    slug: "tank-car-truck-and-ship-loaders",
                                    children: {
                                        occupations: [],
                                    },
                                },
                                {
                                    name: "Material moving workers, all other",
                                    slug: "material-moving-workers-all-other",
                                    children: {
                                        occupations: [],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            name: "Production occupations",
            slug: "production-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 814,
                        womenMedianWeeklyEarnings: 596,
                        year: 2019,
                        centsToDollar: 73,
                    },
                    {
                        menMedianWeeklyEarnings: 667,
                        womenMedianWeeklyEarnings: 483,
                        year: 2011,
                        centsToDollar: 72,
                    },
                ],
            },
            parent: {
                slug:
                    "production-transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [
                    {
                        name:
                            "First-line supervisors of production and operating workers",
                        slug:
                            "first-line-supervisors-of-production-and-operating-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Electrical, electronics, and electromechanical assemblers",
                        slug:
                            "electrical-electronics-and-electromechanical-assemblers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Miscellaneous assemblers and fabricators",
                        slug: "miscellaneous-assemblers-and-fabricators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Bakers",
                        slug: "bakers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Butchers and other meat, poultry, and fish processing workers",
                        slug:
                            "butchers-and-other-meat-poultry-and-fish-processing-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Food processing workers, all other",
                        slug: "food-processing-workers-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Metal workers and plastic workers, all other",
                        slug: "metal-workers-and-plastic-workers-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Laundry and dry-cleaning workers",
                        slug: "laundry-and-dry-cleaning-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Machinists",
                        slug: "machinists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Inspectors, testers, sorters, samplers, and weighers",
                        slug:
                            "inspectors-testers-sorters-samplers-and-weighers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Packaging and filling machine operators and tenders",
                        slug:
                            "packaging-and-filling-machine-operators-and-tenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Production workers, all other",
                        slug: "production-workers-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Stationary engineers and boiler operators",
                        slug: "stationary-engineers-and-boiler-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Water and wastewater treatment plant and system operators",
                        slug:
                            "water-and-wastewater-treatment-plant-and-system-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Chemical processing machine setters, operators, and tenders",
                        slug:
                            "chemical-processing-machine-setters-operators-and-tenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Crushing, grinding, polishing, mixing, and blending workers",
                        slug:
                            "crushing-grinding-polishing-mixing-and-blending-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Painting workers",
                        slug: "painting-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Tailors, dressmakers, and sewers",
                        slug: "tailors-dressmakers-and-sewers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Sewing machine operators",
                        slug: "sewing-machine-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Computer control programmers and operators",
                        slug: "computer-control-programmers-and-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Cutting, punching, and press machine setters, operators, and tenders, metal and plastic",
                        slug:
                            "cutting-punching-and-press-machine-setters-operators-and-tenders-metal-and-plastic",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Tool and die makers",
                        slug: "tool-and-die-makers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Welding, soldering, and brazing workers",
                        slug: "welding-soldering-and-brazing-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Printing press operators",
                        slug: "printing-press-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Food batchmakers",
                        slug: "food-batchmakers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Cutting workers",
                        slug: "cutting-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Medical, dental, and ophthalmic laboratory technicians",
                        slug:
                            "medical-dental-and-ophthalmic-laboratory-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Shoe and leather workers and repairers",
                        slug: "shoe-and-leather-workers-and-repairers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Aircraft structure, surfaces, rigging, and systems assemblers",
                        slug:
                            "aircraft-structure-surfaces-rigging-and-systems-assemblers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Engine and other machine assemblers",
                        slug: "engine-and-other-machine-assemblers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Structural metal fabricators and fitters",
                        slug: "structural-metal-fabricators-and-fitters",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Food and tobacco roasting, baking, and drying machine operators and tenders",
                        slug:
                            "food-and-tobacco-roasting-baking-and-drying-machine-operators-and-tenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Food cooking machine operators and tenders",
                        slug: "food-cooking-machine-operators-and-tenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Etchers and engravers",
                        slug: "etchers-and-engravers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Molders, shapers, and casters, except metal and plastic",
                        slug:
                            "molders-shapers-and-casters-except-metal-and-plastic",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Extruding and drawing machine setters, operators, and tenders, metal and plastic",
                        slug:
                            "extruding-and-drawing-machine-setters-operators-and-tenders-metal-and-plastic",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Forging machine setters, operators, and tenders, metal and plastic",
                        slug:
                            "forging-machine-setters-operators-and-tenders-metal-and-plastic",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Tire builders",
                        slug: "tire-builders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Rolling machine setters, operators, and tenders, metal and plastic",
                        slug:
                            "rolling-machine-setters-operators-and-tenders-metal-and-plastic",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Drilling and boring machine tool setters, operators, and tenders, metal and plastic",
                        slug:
                            "drilling-and-boring-machine-tool-setters-operators-and-tenders-metal-and-plastic",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Grinding, lapping, polishing, and buffing machine tool setters, operators, and tenders, metal and plastic",
                        slug:
                            "grinding-lapping-polishing-and-buffing-machine-tool-setters-operators-and-tenders-metal-and-plastic",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Lathe and turning machine tool setters, operators, and tenders, metal and plastic",
                        slug:
                            "lathe-and-turning-machine-tool-setters-operators-and-tenders-metal-and-plastic",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Milling and planing machine setters, operators, and tenders, metal and plastic",
                        slug:
                            "milling-and-planing-machine-setters-operators-and-tenders-metal-and-plastic",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Metal furnace operators, tenders, pourers, and casters",
                        slug:
                            "metal-furnace-operators-tenders-pourers-and-casters",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Model makers and patternmakers, metal and plastic",
                        slug:
                            "model-makers-and-patternmakers-metal-and-plastic",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Molders and molding machine setters, operators, and tenders, metal and plastic",
                        slug:
                            "molders-and-molding-machine-setters-operators-and-tenders-metal-and-plastic",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Multiple machine tool setters, operators, and tenders, metal and plastic",
                        slug:
                            "multiple-machine-tool-setters-operators-and-tenders-metal-and-plastic",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Heat treating equipment setters, operators, and tenders, metal and plastic",
                        slug:
                            "heat-treating-equipment-setters-operators-and-tenders-metal-and-plastic",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Layout workers, metal and plastic",
                        slug: "layout-workers-metal-and-plastic",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Plating and coating machine setters, operators, and tenders, metal and plastic",
                        slug:
                            "plating-and-coating-machine-setters-operators-and-tenders-metal-and-plastic",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Tool grinders, filers, and sharpeners",
                        slug: "tool-grinders-filers-and-sharpeners",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Prepress technicians and workers",
                        slug: "prepress-technicians-and-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Print binding and finishing workers",
                        slug: "print-binding-and-finishing-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Pressers, textile, garment, and related materials",
                        slug: "pressers-textile-garment-and-related-materials",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Shoe machine operators and tenders",
                        slug: "shoe-machine-operators-and-tenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Textile bleaching and dyeing machine operators and tenders",
                        slug:
                            "textile-bleaching-and-dyeing-machine-operators-and-tenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Textile cutting machine setters, operators, and tenders",
                        slug:
                            "textile-cutting-machine-setters-operators-and-tenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Textile knitting and weaving machine setters, operators, and tenders",
                        slug:
                            "textile-knitting-and-weaving-machine-setters-operators-and-tenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Textile winding, twisting, and drawing out machine setters, operators, and tenders",
                        slug:
                            "textile-winding-twisting-and-drawing-out-machine-setters-operators-and-tenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Extruding and forming machine setters, operators, and tenders, synthetic and glass fibers",
                        slug:
                            "extruding-and-forming-machine-setters-operators-and-tenders-synthetic-and-glass-fibers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Fabric and apparel patternmakers",
                        slug: "fabric-and-apparel-patternmakers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Upholsterers",
                        slug: "upholsterers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Textile, apparel, and furnishings workers, all other",
                        slug:
                            "textile-apparel-and-furnishings-workers-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Cabinetmakers and bench carpenters",
                        slug: "cabinetmakers-and-bench-carpenters",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Furniture finishers",
                        slug: "furniture-finishers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Model makers and patternmakers, wood",
                        slug: "model-makers-and-patternmakers-wood",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Sawing machine setters, operators, and tenders, wood",
                        slug:
                            "sawing-machine-setters-operators-and-tenders-wood",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Woodworking machine setters, operators, and tenders, except sawing",
                        slug:
                            "woodworking-machine-setters-operators-and-tenders-except-sawing",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Woodworkers, all other",
                        slug: "woodworkers-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Power plant operators, distributors, and dispatchers",
                        slug:
                            "power-plant-operators-distributors-and-dispatchers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Miscellaneous plant and system operators",
                        slug: "miscellaneous-plant-and-system-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Extruding, forming, pressing, and compacting machine setters, operators, and tenders",
                        slug:
                            "extruding-forming-pressing-and-compacting-machine-setters-operators-and-tenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Furnace, kiln, oven, drier, and kettle operators and tenders",
                        slug:
                            "furnace-kiln-oven-drier-and-kettle-operators-and-tenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Jewelers and precious stone and metal workers",
                        slug: "jewelers-and-precious-stone-and-metal-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Photographic process workers and processing machine operators",
                        slug:
                            "photographic-process-workers-and-processing-machine-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Semiconductor processors",
                        slug: "semiconductor-processors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Adhesive bonding machine operators and tenders",
                        slug: "adhesive-bonding-machine-operators-and-tenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Cleaning, washing, and metal pickling equipment operators and tenders",
                        slug:
                            "cleaning-washing-and-metal-pickling-equipment-operators-and-tenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Cooling and freezing equipment operators and tenders",
                        slug:
                            "cooling-and-freezing-equipment-operators-and-tenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Paper goods machine setters, operators, and tenders",
                        slug:
                            "paper-goods-machine-setters-operators-and-tenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Helpers--production workers",
                        slug: "helpers-production-workers",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "First-line supervisors of production and operating workers",
            slug: "first-line-supervisors-of-production-and-operating-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1031,
                        womenMedianWeeklyEarnings: 721,
                        year: 2019,
                        centsToDollar: 70,
                    },
                    {
                        menMedianWeeklyEarnings: 929,
                        womenMedianWeeklyEarnings: 665,
                        year: 2011,
                        centsToDollar: 72,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Electrical, electronics, and electromechanical assemblers",
            slug: "electrical-electronics-and-electromechanical-assemblers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 712,
                        womenMedianWeeklyEarnings: 594,
                        year: 2019,
                        centsToDollar: 83,
                    },
                    {
                        menMedianWeeklyEarnings: 591,
                        womenMedianWeeklyEarnings: 449,
                        year: 2011,
                        centsToDollar: 76,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Miscellaneous assemblers and fabricators",
            slug: "miscellaneous-assemblers-and-fabricators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 724,
                        womenMedianWeeklyEarnings: 597,
                        year: 2019,
                        centsToDollar: 82,
                    },
                    {
                        menMedianWeeklyEarnings: 566,
                        womenMedianWeeklyEarnings: 479,
                        year: 2011,
                        centsToDollar: 85,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Bakers",
            slug: "bakers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 590,
                        womenMedianWeeklyEarnings: 522,
                        year: 2019,
                        centsToDollar: 88,
                    },
                    {
                        menMedianWeeklyEarnings: 471,
                        womenMedianWeeklyEarnings: 416,
                        year: 2011,
                        centsToDollar: 88,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Butchers and other meat, poultry, and fish processing workers",
            slug: "butchers-and-other-meat-poultry-and-fish-processing-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 671,
                        womenMedianWeeklyEarnings: 573,
                        year: 2019,
                        centsToDollar: 85,
                    },
                    {
                        menMedianWeeklyEarnings: 515,
                        womenMedianWeeklyEarnings: 479,
                        year: 2011,
                        centsToDollar: 93,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Food processing workers, all other",
            slug: "food-processing-workers-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 779,
                        womenMedianWeeklyEarnings: 573,
                        year: 2019,
                        centsToDollar: 74,
                    },
                    {
                        menMedianWeeklyEarnings: 544,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Metal workers and plastic workers, all other",
            slug: "metal-workers-and-plastic-workers-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 795,
                        womenMedianWeeklyEarnings: 592,
                        year: 2019,
                        centsToDollar: 74,
                    },
                    {
                        menMedianWeeklyEarnings: 583,
                        womenMedianWeeklyEarnings: 517,
                        year: 2011,
                        centsToDollar: 89,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Laundry and dry-cleaning workers",
            slug: "laundry-and-dry-cleaning-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 482,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 447,
                        womenMedianWeeklyEarnings: 386,
                        year: 2011,
                        centsToDollar: 86,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Machinists",
            slug: "machinists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 889,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 767,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Inspectors, testers, sorters, samplers, and weighers",
            slug: "inspectors-testers-sorters-samplers-and-weighers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 939,
                        womenMedianWeeklyEarnings: 693,
                        year: 2019,
                        centsToDollar: 74,
                    },
                    {
                        menMedianWeeklyEarnings: 792,
                        womenMedianWeeklyEarnings: 541,
                        year: 2011,
                        centsToDollar: 68,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Packaging and filling machine operators and tenders",
            slug: "packaging-and-filling-machine-operators-and-tenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 646,
                        womenMedianWeeklyEarnings: 533,
                        year: 2019,
                        centsToDollar: 83,
                    },
                    {
                        menMedianWeeklyEarnings: 505,
                        womenMedianWeeklyEarnings: 421,
                        year: 2011,
                        centsToDollar: 83,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Production workers, all other",
            slug: "production-workers-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 767,
                        womenMedianWeeklyEarnings: 566,
                        year: 2019,
                        centsToDollar: 74,
                    },
                    {
                        menMedianWeeklyEarnings: 612,
                        womenMedianWeeklyEarnings: 483,
                        year: 2011,
                        centsToDollar: 79,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Transportation and material moving occupations",
            slug: "transportation-and-material-moving-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 747,
                        womenMedianWeeklyEarnings: 586,
                        year: 2019,
                        centsToDollar: 78,
                    },
                    {
                        menMedianWeeklyEarnings: 634,
                        womenMedianWeeklyEarnings: 490,
                        year: 2011,
                        centsToDollar: 77,
                    },
                ],
            },
            parent: {
                slug:
                    "production-transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Bus drivers",
                        slug: "bus-drivers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Flight attendants",
                        slug: "flight-attendants",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Supervisors of transportation and material moving workers",
                        slug:
                            "supervisors-of-transportation-and-material-moving-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Aircraft pilots and flight engineers",
                        slug: "aircraft-pilots-and-flight-engineers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Driver/sales workers and truck drivers",
                        slug: "driver-sales-workers-and-truck-drivers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Taxi drivers and chauffeurs",
                        slug: "taxi-drivers-and-chauffeurs",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Industrial truck and tractor operators",
                        slug: "industrial-truck-and-tractor-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Laborers and freight, stock, and material movers, hand",
                        slug:
                            "laborers-and-freight-stock-and-material-movers-hand",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Packers and packagers, hand",
                        slug: "packers-and-packagers-hand",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Railroad conductors and yardmasters",
                        slug: "railroad-conductors-and-yardmasters",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Parking lot attendants",
                        slug: "parking-lot-attendants",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Automotive and watercraft service attendants",
                        slug: "automotive-and-watercraft-service-attendants",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Crane and tower operators",
                        slug: "crane-and-tower-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Cleaners of vehicles and equipment",
                        slug: "cleaners-of-vehicles-and-equipment",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Refuse and recyclable material collectors",
                        slug: "refuse-and-recyclable-material-collectors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Air traffic controllers and airfield operations specialists",
                        slug:
                            "air-traffic-controllers-and-airfield-operations-specialists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Ambulance drivers and attendants, except emergency medical technicians",
                        slug:
                            "ambulance-drivers-and-attendants-except-emergency-medical-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Motor vehicle operators, all other",
                        slug: "motor-vehicle-operators-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Locomotive engineers and operators",
                        slug: "locomotive-engineers-and-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Railroad brake, signal, and switch operators",
                        slug: "railroad-brake-signal-and-switch-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Subway, streetcar, and other rail transportation workers",
                        slug:
                            "subway-streetcar-and-other-rail-transportation-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Sailors and marine oilers",
                        slug: "sailors-and-marine-oilers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Ship and boat captains and operators",
                        slug: "ship-and-boat-captains-and-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Ship engineers",
                        slug: "ship-engineers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Bridge and lock tenders",
                        slug: "bridge-and-lock-tenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Transportation inspectors",
                        slug: "transportation-inspectors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Transportation attendants, except flight attendants",
                        slug:
                            "transportation-attendants-except-flight-attendants",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Other transportation workers",
                        slug: "other-transportation-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Conveyor operators and tenders",
                        slug: "conveyor-operators-and-tenders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Dredge, excavating, and loading machine operators",
                        slug: "dredge-excavating-and-loading-machine-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Hoist and winch operators",
                        slug: "hoist-and-winch-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Machine feeders and offbearers",
                        slug: "machine-feeders-and-offbearers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Pumping station operators",
                        slug: "pumping-station-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Mine shuttle car operators",
                        slug: "mine-shuttle-car-operators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Tank car, truck, and ship loaders",
                        slug: "tank-car-truck-and-ship-loaders",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Material moving workers, all other",
                        slug: "material-moving-workers-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Bus drivers",
            slug: "bus-drivers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 718,
                        womenMedianWeeklyEarnings: 625,
                        year: 2019,
                        centsToDollar: 87,
                    },
                    {
                        menMedianWeeklyEarnings: 645,
                        womenMedianWeeklyEarnings: 579,
                        year: 2011,
                        centsToDollar: 90,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Flight attendants",
            slug: "flight-attendants",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 835,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Stationary engineers and boiler operators",
            slug: "stationary-engineers-and-boiler-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 862,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 851,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Water and wastewater treatment plant and system operators",
            slug: "water-and-wastewater-treatment-plant-and-system-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 930,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 788,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Chemical processing machine setters, operators, and tenders",
            slug: "chemical-processing-machine-setters-operators-and-tenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1017,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 947,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Crushing, grinding, polishing, mixing, and blending workers",
            slug: "crushing-grinding-polishing-mixing-and-blending-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 772,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 702,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Painting workers",
            slug: "painting-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 804,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 608,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Supervisors of transportation and material moving workers",
            slug: "supervisors-of-transportation-and-material-moving-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 978,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 773,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Aircraft pilots and flight engineers",
            slug: "aircraft-pilots-and-flight-engineers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1670,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1466,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Tailors, dressmakers, and sewers",
            slug: "tailors-dressmakers-and-sewers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Driver/sales workers and truck drivers",
            slug: "driver-sales-workers-and-truck-drivers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 861,
                        womenMedianWeeklyEarnings: 660,
                        year: 2019,
                        centsToDollar: 77,
                    },
                    {
                        menMedianWeeklyEarnings: 712,
                        womenMedianWeeklyEarnings: 511,
                        year: 2011,
                        centsToDollar: 72,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Taxi drivers and chauffeurs",
            slug: "taxi-drivers-and-chauffeurs",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 624,
                        womenMedianWeeklyEarnings: 520,
                        year: 2019,
                        centsToDollar: 83,
                    },
                    {
                        menMedianWeeklyEarnings: 576,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Industrial truck and tractor operators",
            slug: "industrial-truck-and-tractor-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 686,
                        womenMedianWeeklyEarnings: 625,
                        year: 2019,
                        centsToDollar: 91,
                    },
                    {
                        menMedianWeeklyEarnings: 556,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Laborers and freight, stock, and material movers, hand",
            slug: "laborers-and-freight-stock-and-material-movers-hand",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 657,
                        womenMedianWeeklyEarnings: 567,
                        year: 2019,
                        centsToDollar: 86,
                    },
                    {
                        menMedianWeeklyEarnings: 520,
                        womenMedianWeeklyEarnings: 416,
                        year: 2011,
                        centsToDollar: 80,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Packers and packagers, hand",
            slug: "packers-and-packagers-hand",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 576,
                        womenMedianWeeklyEarnings: 515,
                        year: 2019,
                        centsToDollar: 89,
                    },
                    {
                        menMedianWeeklyEarnings: 396,
                        womenMedianWeeklyEarnings: 397,
                        year: 2011,
                        centsToDollar: 100,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Railroad conductors and yardmasters",
            slug: "railroad-conductors-and-yardmasters",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1170,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Parking lot attendants",
            slug: "parking-lot-attendants",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 581,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Automotive and watercraft service attendants",
            slug: "automotive-and-watercraft-service-attendants",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 520,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Crane and tower operators",
            slug: "crane-and-tower-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1104,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 736,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Cleaners of vehicles and equipment",
            slug: "cleaners-of-vehicles-and-equipment",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 595,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 458,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Refuse and recyclable material collectors",
            slug: "refuse-and-recyclable-material-collectors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 683,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 580,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Legislators",
            slug: "legislators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Advertising and promotions managers",
            slug: "advertising-and-promotions-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Compensation and benefits managers",
            slug: "compensation-and-benefits-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Training and development managers",
            slug: "training-and-development-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Funeral service managers",
            slug: "funeral-service-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Gaming managers",
            slug: "gaming-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Natural sciences managers",
            slug: "natural-sciences-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Postmasters and mail superintendents",
            slug: "postmasters-and-mail-superintendents",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Emergency management directors",
            slug: "emergency-management-directors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Agents and business managers of artists, performers, and athletes",
            slug:
                "agents-and-business-managers-of-artists-performers-and-athletes",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Buyers and purchasing agents, farm products",
            slug: "buyers-and-purchasing-agents-farm-products",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Compensation, benefits, and job analysis specialists",
            slug: "compensation-benefits-and-job-analysis-specialists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Library technicians",
            slug: "library-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "education-training-and-library-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Nurse practitioners",
            slug: "nurse-practitioners",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1753,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1432,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Reservation and transportation ticket agents and travel clerks",
            slug:
                "reservation-and-transportation-ticket-agents-and-travel-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 789,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Information and record clerks, all other",
            slug: "information-and-record-clerks-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 691,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 737,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Sewing machine operators",
            slug: "sewing-machine-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 521,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 398,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Counter and rental clerks",
            slug: "counter-and-rental-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 620,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Postal service clerks",
            slug: "postal-service-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1014,
                        womenMedianWeeklyEarnings: 892,
                        year: 2011,
                        centsToDollar: 88,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Postal service mail sorters, processors, and processing machine operators",
            slug:
                "postal-service-mail-sorters-processors-and-processing-machine-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Weighers, measurers, checkers, and samplers, recordkeeping",
            slug: "weighers-measurers-checkers-and-samplers-recordkeeping",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Computer operators",
            slug: "computer-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 853,
                        womenMedianWeeklyEarnings: 651,
                        year: 2011,
                        centsToDollar: 76,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Actuaries",
            slug: "actuaries",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "computer-and-mathematical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Mathematicians",
            slug: "mathematicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "computer-and-mathematical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Miscellaneous mathematical science occupations",
            slug: "miscellaneous-mathematical-science-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "computer-and-mathematical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Surveyors, cartographers, and photogrammetrists",
            slug: "surveyors-cartographers-and-photogrammetrists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Agricultural engineers",
            slug: "agricultural-engineers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Biomedical engineers",
            slug: "biomedical-engineers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Environmental engineers",
            slug: "environmental-engineers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Marine engineers and naval architects",
            slug: "marine-engineers-and-naval-architects",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Materials engineers",
            slug: "materials-engineers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Mining and geological engineers, including mining safety engineers",
            slug:
                "mining-and-geological-engineers-including-mining-safety-engineers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Nuclear engineers",
            slug: "nuclear-engineers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Petroleum engineers",
            slug: "petroleum-engineers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Agricultural and food scientists",
            slug: "agricultural-and-food-scientists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Conservation scientists and foresters",
            slug: "conservation-scientists-and-foresters",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Nurse midwives",
            slug: "nurse-midwives",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Physical therapist assistants and aides",
            slug: "physical-therapist-assistants-and-aides",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Massage therapists",
            slug: "massage-therapists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Private detectives and investigators",
            slug: "private-detectives-and-investigators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 891,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Gaming services workers",
            slug: "gaming-services-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Personal care and service workers, all other",
            slug: "personal-care-and-service-workers-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Travel agents",
            slug: "travel-agents",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Industrial production managers",
            slug: "industrial-production-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1469,
                        womenMedianWeeklyEarnings: 1497,
                        year: 2019,
                        centsToDollar: 102,
                    },
                    {
                        menMedianWeeklyEarnings: 1245,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Purchasing managers",
            slug: "purchasing-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1657,
                        womenMedianWeeklyEarnings: 1390,
                        year: 2019,
                        centsToDollar: 84,
                    },
                    {
                        menMedianWeeklyEarnings: 1368,
                        womenMedianWeeklyEarnings: 1026,
                        year: 2011,
                        centsToDollar: 75,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Construction managers",
            slug: "construction-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1511,
                        womenMedianWeeklyEarnings: 1210,
                        year: 2019,
                        centsToDollar: 80,
                    },
                    {
                        menMedianWeeklyEarnings: 1325,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Education administrators",
            slug: "education-administrators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1467,
                        womenMedianWeeklyEarnings: 1335,
                        year: 2019,
                        centsToDollar: 91,
                    },
                    {
                        menMedianWeeklyEarnings: 1532,
                        womenMedianWeeklyEarnings: 1061,
                        year: 2011,
                        centsToDollar: 69,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Food service managers",
            slug: "food-service-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 964,
                        womenMedianWeeklyEarnings: 719,
                        year: 2019,
                        centsToDollar: 75,
                    },
                    {
                        menMedianWeeklyEarnings: 734,
                        womenMedianWeeklyEarnings: 599,
                        year: 2011,
                        centsToDollar: 82,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Lodging managers",
            slug: "lodging-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1096,
                        womenMedianWeeklyEarnings: 894,
                        year: 2019,
                        centsToDollar: 82,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 841,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Medical and health services managers",
            slug: "medical-and-health-services-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1828,
                        womenMedianWeeklyEarnings: 1362,
                        year: 2019,
                        centsToDollar: 75,
                    },
                    {
                        menMedianWeeklyEarnings: 1456,
                        womenMedianWeeklyEarnings: 1166,
                        year: 2011,
                        centsToDollar: 80,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Property, real estate, and community association managers",
            slug: "property-real-estate-and-community-association-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1168,
                        womenMedianWeeklyEarnings: 849,
                        year: 2019,
                        centsToDollar: 73,
                    },
                    {
                        menMedianWeeklyEarnings: 1201,
                        womenMedianWeeklyEarnings: 728,
                        year: 2011,
                        centsToDollar: 61,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Social and community service managers",
            slug: "social-and-community-service-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1452,
                        womenMedianWeeklyEarnings: 1156,
                        year: 2019,
                        centsToDollar: 80,
                    },
                    {
                        menMedianWeeklyEarnings: 1221,
                        womenMedianWeeklyEarnings: 973,
                        year: 2011,
                        centsToDollar: 80,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Managers, all other",
            slug: "managers-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1725,
                        womenMedianWeeklyEarnings: 1317,
                        year: 2019,
                        centsToDollar: 76,
                    },
                    {
                        menMedianWeeklyEarnings: 1406,
                        womenMedianWeeklyEarnings: 1047,
                        year: 2011,
                        centsToDollar: 74,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Business and financial operations occupations",
            slug: "business-and-financial-operations-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1468,
                        womenMedianWeeklyEarnings: 1148,
                        year: 2019,
                        centsToDollar: 78,
                    },
                    {
                        menMedianWeeklyEarnings: 1225,
                        womenMedianWeeklyEarnings: 937,
                        year: 2011,
                        centsToDollar: 76,
                    },
                ],
            },
            parent: {
                slug:
                    "management-business-and-financial-operations-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Business operations specialists, all other",
                        slug: "business-operations-specialists-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Accountants and auditors",
                        slug: "accountants-and-auditors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Financial analysts",
                        slug: "financial-analysts",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Personal financial advisors",
                        slug: "personal-financial-advisors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Insurance underwriters",
                        slug: "insurance-underwriters",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Credit counselors and loan officers",
                        slug: "credit-counselors-and-loan-officers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Agents and business managers of artists, performers, and athletes",
                        slug:
                            "agents-and-business-managers-of-artists-performers-and-athletes",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Buyers and purchasing agents, farm products",
                        slug: "buyers-and-purchasing-agents-farm-products",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Compensation, benefits, and job analysis specialists",
                        slug:
                            "compensation-benefits-and-job-analysis-specialists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Wholesale and retail buyers, except farm products",
                        slug:
                            "wholesale-and-retail-buyers-except-farm-products",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Purchasing agents, except wholesale, retail, and farm products",
                        slug:
                            "purchasing-agents-except-wholesale-retail-and-farm-products",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Claims adjusters, appraisers, examiners, and investigators",
                        slug:
                            "claims-adjusters-appraisers-examiners-and-investigators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Compliance officers",
                        slug: "compliance-officers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Human resources workers",
                        slug: "human-resources-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Training and development specialists",
                        slug: "training-and-development-specialists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Management analysts",
                        slug: "management-analysts",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Market research analysts and marketing specialists",
                        slug:
                            "market-research-analysts-and-marketing-specialists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Meeting, convention, and event planners",
                        slug: "meeting-convention-and-event-planners",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Fundraisers",
                        slug: "fundraisers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Cost estimators",
                        slug: "cost-estimators",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Logisticians",
                        slug: "logisticians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Financial specialists, all other",
                        slug: "financial-specialists-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Appraisers and assessors of real estate",
                        slug: "appraisers-and-assessors-of-real-estate",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Budget analysts",
                        slug: "budget-analysts",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Credit analysts",
                        slug: "credit-analysts",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Financial examiners",
                        slug: "financial-examiners",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Tax examiners and collectors, and revenue agents",
                        slug: "tax-examiners-and-collectors-and-revenue-agents",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Tax preparers",
                        slug: "tax-preparers",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Wholesale and retail buyers, except farm products",
            slug: "wholesale-and-retail-buyers-except-farm-products",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 982,
                        womenMedianWeeklyEarnings: 977,
                        year: 2019,
                        centsToDollar: 99,
                    },
                    {
                        menMedianWeeklyEarnings: 928,
                        womenMedianWeeklyEarnings: 849,
                        year: 2011,
                        centsToDollar: 91,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Purchasing agents, except wholesale, retail, and farm products",
            slug: "purchasing-agents-except-wholesale-retail-and-farm-products",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1202,
                        womenMedianWeeklyEarnings: 1081,
                        year: 2019,
                        centsToDollar: 90,
                    },
                    {
                        menMedianWeeklyEarnings: 1129,
                        womenMedianWeeklyEarnings: 945,
                        year: 2011,
                        centsToDollar: 84,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Claims adjusters, appraisers, examiners, and investigators",
            slug: "claims-adjusters-appraisers-examiners-and-investigators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1277,
                        womenMedianWeeklyEarnings: 972,
                        year: 2019,
                        centsToDollar: 76,
                    },
                    {
                        menMedianWeeklyEarnings: 1077,
                        womenMedianWeeklyEarnings: 804,
                        year: 2011,
                        centsToDollar: 75,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Compliance officers",
            slug: "compliance-officers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1561,
                        womenMedianWeeklyEarnings: 1264,
                        year: 2019,
                        centsToDollar: 81,
                    },
                    {
                        menMedianWeeklyEarnings: 1279,
                        womenMedianWeeklyEarnings: 995,
                        year: 2011,
                        centsToDollar: 78,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Human resources workers",
            slug: "human-resources-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1325,
                        womenMedianWeeklyEarnings: 1149,
                        year: 2019,
                        centsToDollar: 87,
                    },
                    {
                        menMedianWeeklyEarnings: 1053,
                        womenMedianWeeklyEarnings: 912,
                        year: 2011,
                        centsToDollar: 87,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Training and development specialists",
            slug: "training-and-development-specialists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1249,
                        womenMedianWeeklyEarnings: 968,
                        year: 2019,
                        centsToDollar: 78,
                    },
                    {
                        menMedianWeeklyEarnings: 1260,
                        womenMedianWeeklyEarnings: 951,
                        year: 2011,
                        centsToDollar: 75,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Management analysts",
            slug: "management-analysts",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1870,
                        womenMedianWeeklyEarnings: 1517,
                        year: 2019,
                        centsToDollar: 81,
                    },
                    {
                        menMedianWeeklyEarnings: 1514,
                        womenMedianWeeklyEarnings: 1174,
                        year: 2011,
                        centsToDollar: 78,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Market research analysts and marketing specialists",
            slug: "market-research-analysts-and-marketing-specialists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1688,
                        womenMedianWeeklyEarnings: 1228,
                        year: 2019,
                        centsToDollar: 73,
                    },
                    {
                        menMedianWeeklyEarnings: 1446,
                        womenMedianWeeklyEarnings: 1029,
                        year: 2011,
                        centsToDollar: 71,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Public relations and fundraising managers",
            slug: "public-relations-and-fundraising-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1399,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Meeting, convention, and event planners",
            slug: "meeting-convention-and-event-planners",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1018,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 892,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Fundraisers",
            slug: "fundraisers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1229,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Transportation, storage, and distribution managers",
            slug: "transportation-storage-and-distribution-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1238,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 861,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Glaziers",
            slug: "glaziers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Aerospace engineers",
            slug: "aerospace-engineers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 2018,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1745,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Architectural and engineering managers",
            slug: "architectural-and-engineering-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 2457,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1908,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Cost estimators",
            slug: "cost-estimators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1264,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1117,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Logisticians",
            slug: "logisticians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1149,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 938,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Operations research analysts",
            slug: "operations-research-analysts",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1753,
                        womenMedianWeeklyEarnings: 1188,
                        year: 2019,
                        centsToDollar: 68,
                    },
                    {
                        menMedianWeeklyEarnings: 1258,
                        womenMedianWeeklyEarnings: 1326,
                        year: 2011,
                        centsToDollar: 105,
                    },
                ],
            },
            parent: {
                slug: "computer-and-mathematical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Architecture and engineering occupations",
            slug: "architecture-and-engineering-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1589,
                        womenMedianWeeklyEarnings: 1339,
                        year: 2019,
                        centsToDollar: 84,
                    },
                    {
                        menMedianWeeklyEarnings: 1343,
                        womenMedianWeeklyEarnings: 1140,
                        year: 2011,
                        centsToDollar: 85,
                    },
                ],
            },
            parent: {
                slug: "professional-and-related-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Engineering technicians, except drafters",
                        slug: "engineering-technicians-except-drafters",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Surveyors, cartographers, and photogrammetrists",
                        slug: "surveyors-cartographers-and-photogrammetrists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Agricultural engineers",
                        slug: "agricultural-engineers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Biomedical engineers",
                        slug: "biomedical-engineers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Environmental engineers",
                        slug: "environmental-engineers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Marine engineers and naval architects",
                        slug: "marine-engineers-and-naval-architects",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Materials engineers",
                        slug: "materials-engineers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Mining and geological engineers, including mining safety engineers",
                        slug:
                            "mining-and-geological-engineers-including-mining-safety-engineers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Nuclear engineers",
                        slug: "nuclear-engineers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Petroleum engineers",
                        slug: "petroleum-engineers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Aerospace engineers",
                        slug: "aerospace-engineers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Industrial engineers, including health and safety",
                        slug:
                            "industrial-engineers-including-health-and-safety",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Engineers, all other",
                        slug: "engineers-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Architects, except naval",
                        slug: "architects-except-naval",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Civil engineers",
                        slug: "civil-engineers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Chemical engineers",
                        slug: "chemical-engineers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Computer hardware engineers",
                        slug: "computer-hardware-engineers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Electrical and electronics engineers",
                        slug: "electrical-and-electronics-engineers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Mechanical engineers",
                        slug: "mechanical-engineers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Drafters",
                        slug: "drafters",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Surveying and mapping technicians",
                        slug: "surveying-and-mapping-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Industrial engineers, including health and safety",
            slug: "industrial-engineers-including-health-and-safety",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1616,
                        womenMedianWeeklyEarnings: 1487,
                        year: 2019,
                        centsToDollar: 92,
                    },
                    {
                        menMedianWeeklyEarnings: 1356,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Engineers, all other",
            slug: "engineers-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1663,
                        womenMedianWeeklyEarnings: 1446,
                        year: 2019,
                        centsToDollar: 87,
                    },
                    {
                        menMedianWeeklyEarnings: 1361,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Teacher assistants",
            slug: "teacher-assistants",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 707,
                        womenMedianWeeklyEarnings: 579,
                        year: 2019,
                        centsToDollar: 82,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 471,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "education-training-and-library-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Information security analysts",
            slug: "information-security-analysts",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1875,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "computer-and-mathematical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Database administrators",
            slug: "database-administrators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1752,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1470,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "computer-and-mathematical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Computer network architects",
            slug: "computer-network-architects",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1901,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1585,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "computer-and-mathematical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Architects, except naval",
            slug: "architects-except-naval",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1706,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1351,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Civil engineers",
            slug: "civil-engineers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1657,
                        womenMedianWeeklyEarnings: 1353,
                        year: 2019,
                        centsToDollar: 82,
                    },
                    {
                        menMedianWeeklyEarnings: 1436,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "First-line supervisors of food preparation and serving workers",
            slug:
                "first-line-supervisors-of-food-preparation-and-serving-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 657,
                        womenMedianWeeklyEarnings: 545,
                        year: 2019,
                        centsToDollar: 83,
                    },
                    {
                        menMedianWeeklyEarnings: 525,
                        womenMedianWeeklyEarnings: 458,
                        year: 2011,
                        centsToDollar: 87,
                    },
                ],
            },
            parent: {
                slug: "food-preparation-and-serving-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Food preparation workers",
            slug: "food-preparation-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 532,
                        womenMedianWeeklyEarnings: 463,
                        year: 2019,
                        centsToDollar: 87,
                    },
                    {
                        menMedianWeeklyEarnings: 395,
                        womenMedianWeeklyEarnings: 375,
                        year: 2011,
                        centsToDollar: 95,
                    },
                ],
            },
            parent: {
                slug: "food-preparation-and-serving-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Bartenders",
            slug: "bartenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 655,
                        womenMedianWeeklyEarnings: 578,
                        year: 2019,
                        centsToDollar: 88,
                    },
                    {
                        menMedianWeeklyEarnings: 593,
                        womenMedianWeeklyEarnings: 505,
                        year: 2011,
                        centsToDollar: 85,
                    },
                ],
            },
            parent: {
                slug: "food-preparation-and-serving-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Combined food preparation and serving workers, including fast food",
            slug:
                "combined-food-preparation-and-serving-workers-including-fast-food",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 457,
                        womenMedianWeeklyEarnings: 467,
                        year: 2019,
                        centsToDollar: 102,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 385,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "food-preparation-and-serving-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Waiters and waitresses",
            slug: "waiters-and-waitresses",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 594,
                        womenMedianWeeklyEarnings: 491,
                        year: 2019,
                        centsToDollar: 83,
                    },
                    {
                        menMedianWeeklyEarnings: 466,
                        womenMedianWeeklyEarnings: 389,
                        year: 2011,
                        centsToDollar: 83,
                    },
                ],
            },
            parent: {
                slug: "food-preparation-and-serving-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Bill and account collectors",
            slug: "bill-and-account-collectors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 672,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 597,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Billing and posting clerks",
            slug: "billing-and-posting-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 736,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 605,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Payroll and timekeeping clerks",
            slug: "payroll-and-timekeeping-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 756,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 704,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Other installation, maintenance, and repair workers",
            slug: "other-installation-maintenance-and-repair-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 850,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 718,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Computer control programmers and operators",
            slug: "computer-control-programmers-and-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 857,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 781,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Cutting, punching, and press machine setters, operators, and tenders, metal and plastic",
            slug:
                "cutting-punching-and-press-machine-setters-operators-and-tenders-metal-and-plastic",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 816,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 608,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Tool and die makers",
            slug: "tool-and-die-makers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 972,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 930,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Welding, soldering, and brazing workers",
            slug: "welding-soldering-and-brazing-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 810,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 695,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Printing press operators",
            slug: "printing-press-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 886,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 646,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Food batchmakers",
            slug: "food-batchmakers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Riggers",
            slug: "riggers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Cutting workers",
            slug: "cutting-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 540,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Medical, dental, and ophthalmic laboratory technicians",
            slug: "medical-dental-and-ophthalmic-laboratory-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Farmers, ranchers, and other agricultural managers",
            slug: "farmers-ranchers-and-other-agricultural-managers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1162,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 855,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "management-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Chemical engineers",
            slug: "chemical-engineers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1878,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1885,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Computer hardware engineers",
            slug: "computer-hardware-engineers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1919,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1546,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Electrical and electronics engineers",
            slug: "electrical-and-electronics-engineers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1830,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1455,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Mechanical engineers",
            slug: "mechanical-engineers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1635,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1399,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Drafters",
            slug: "drafters",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1047,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1052,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Financial specialists, all other",
            slug: "financial-specialists-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Statisticians",
            slug: "statisticians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "computer-and-mathematical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Community and social service occupations",
            slug: "community-and-social-service-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1064,
                        womenMedianWeeklyEarnings: 941,
                        year: 2019,
                        centsToDollar: 88,
                    },
                    {
                        menMedianWeeklyEarnings: 906,
                        womenMedianWeeklyEarnings: 772,
                        year: 2011,
                        centsToDollar: 85,
                    },
                ],
            },
            parent: {
                slug: "professional-and-related-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Counselors",
                        slug: "counselors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Social workers",
                        slug: "social-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Clergy",
                        slug: "clergy",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Social and human service assistants",
                        slug: "social-and-human-service-assistants",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Probation officers and correctional treatment specialists",
                        slug:
                            "probation-officers-and-correctional-treatment-specialists",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name:
                            "Miscellaneous community and social service specialists, including health educators and community health workers",
                        slug:
                            "miscellaneous-community-and-social-service-specialists-including-health-educators-and-community-health-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Directors, religious activities and education",
                        slug: "directors-religious-activities-and-education",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Religious workers, all other",
                        slug: "religious-workers-all-other",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Counselors",
            slug: "counselors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 944,
                        womenMedianWeeklyEarnings: 1003,
                        year: 2019,
                        centsToDollar: 106,
                    },
                    {
                        menMedianWeeklyEarnings: 874,
                        womenMedianWeeklyEarnings: 808,
                        year: 2011,
                        centsToDollar: 92,
                    },
                ],
            },
            parent: {
                slug: "community-and-social-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Social workers",
            slug: "social-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1108,
                        womenMedianWeeklyEarnings: 944,
                        year: 2019,
                        centsToDollar: 85,
                    },
                    {
                        menMedianWeeklyEarnings: 902,
                        womenMedianWeeklyEarnings: 798,
                        year: 2011,
                        centsToDollar: 88,
                    },
                ],
            },
            parent: {
                slug: "community-and-social-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Clergy",
            slug: "clergy",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1155,
                        womenMedianWeeklyEarnings: 862,
                        year: 2019,
                        centsToDollar: 75,
                    },
                    {
                        menMedianWeeklyEarnings: 961,
                        womenMedianWeeklyEarnings: 889,
                        year: 2011,
                        centsToDollar: 93,
                    },
                ],
            },
            parent: {
                slug: "community-and-social-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Legal occupations",
            slug: "legal-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1999,
                        womenMedianWeeklyEarnings: 1266,
                        year: 2019,
                        centsToDollar: 63,
                    },
                    {
                        menMedianWeeklyEarnings: 1758,
                        womenMedianWeeklyEarnings: 1003,
                        year: 2011,
                        centsToDollar: 57,
                    },
                ],
            },
            parent: {
                slug: "professional-and-related-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Lawyers",
                        slug: "lawyers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Paralegals and legal assistants",
                        slug: "paralegals-and-legal-assistants",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Miscellaneous legal support workers",
                        slug: "miscellaneous-legal-support-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Judges, magistrates, and other judicial workers",
                        slug: "judges-magistrates-and-other-judicial-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Judicial law clerks",
                        slug: "judicial-law-clerks",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Education, training, and library occupations",
            slug: "education-training-and-library-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1265,
                        womenMedianWeeklyEarnings: 987,
                        year: 2019,
                        centsToDollar: 78,
                    },
                    {
                        menMedianWeeklyEarnings: 1109,
                        womenMedianWeeklyEarnings: 869,
                        year: 2011,
                        centsToDollar: 78,
                    },
                ],
            },
            parent: {
                slug: "professional-and-related-occupations",
            },
            children: {
                occupations: [
                    {
                        name: "Library technicians",
                        slug: "library-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Teacher assistants",
                        slug: "teacher-assistants",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Postsecondary teachers",
                        slug: "postsecondary-teachers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Elementary and middle school teachers",
                        slug: "elementary-and-middle-school-teachers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Secondary school teachers",
                        slug: "secondary-school-teachers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Other teachers and instructors",
                        slug: "other-teachers-and-instructors",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Preschool and kindergarten teachers",
                        slug: "preschool-and-kindergarten-teachers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Special education teachers",
                        slug: "special-education-teachers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Librarians",
                        slug: "librarians",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Other education, training, and library workers",
                        slug: "other-education-training-and-library-workers",
                        children: {
                            occupations: [],
                        },
                    },
                    {
                        name: "Archivists, curators, and museum technicians",
                        slug: "archivists-curators-and-museum-technicians",
                        children: {
                            occupations: [],
                        },
                    },
                ],
            },
        },
        {
            name: "Postsecondary teachers",
            slug: "postsecondary-teachers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1670,
                        womenMedianWeeklyEarnings: 1358,
                        year: 2019,
                        centsToDollar: 81,
                    },
                    {
                        menMedianWeeklyEarnings: 1358,
                        womenMedianWeeklyEarnings: 1093,
                        year: 2011,
                        centsToDollar: 80,
                    },
                ],
            },
            parent: {
                slug: "education-training-and-library-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Elementary and middle school teachers",
            slug: "elementary-and-middle-school-teachers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1161,
                        womenMedianWeeklyEarnings: 1042,
                        year: 2019,
                        centsToDollar: 90,
                    },
                    {
                        menMedianWeeklyEarnings: 1022,
                        womenMedianWeeklyEarnings: 933,
                        year: 2011,
                        centsToDollar: 91,
                    },
                ],
            },
            parent: {
                slug: "education-training-and-library-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Secondary school teachers",
            slug: "secondary-school-teachers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1262,
                        womenMedianWeeklyEarnings: 1095,
                        year: 2019,
                        centsToDollar: 87,
                    },
                    {
                        menMedianWeeklyEarnings: 1049,
                        womenMedianWeeklyEarnings: 989,
                        year: 2011,
                        centsToDollar: 94,
                    },
                ],
            },
            parent: {
                slug: "education-training-and-library-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Other teachers and instructors",
            slug: "other-teachers-and-instructors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1190,
                        womenMedianWeeklyEarnings: 942,
                        year: 2019,
                        centsToDollar: 79,
                    },
                    {
                        menMedianWeeklyEarnings: 1105,
                        womenMedianWeeklyEarnings: 739,
                        year: 2011,
                        centsToDollar: 67,
                    },
                ],
            },
            parent: {
                slug: "education-training-and-library-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Psychologists",
            slug: "psychologists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1441,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1244,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Social and human service assistants",
            slug: "social-and-human-service-assistants",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 778,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 597,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "community-and-social-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Paralegals and legal assistants",
            slug: "paralegals-and-legal-assistants",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 970,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 884,
                        womenMedianWeeklyEarnings: 813,
                        year: 2011,
                        centsToDollar: 92,
                    },
                ],
            },
            parent: {
                slug: "legal-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Miscellaneous legal support workers",
            slug: "miscellaneous-legal-support-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1009,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 788,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "legal-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Preschool and kindergarten teachers",
            slug: "preschool-and-kindergarten-teachers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 705,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 603,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "education-training-and-library-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Special education teachers",
            slug: "special-education-teachers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1104,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 967,
                        womenMedianWeeklyEarnings: 935,
                        year: 2011,
                        centsToDollar: 97,
                    },
                ],
            },
            parent: {
                slug: "education-training-and-library-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Librarians",
            slug: "librarians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1093,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 813,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "education-training-and-library-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Biological scientists",
            slug: "biological-scientists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1266,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1177,
                        womenMedianWeeklyEarnings: 853,
                        year: 2011,
                        centsToDollar: 72,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Environmental scientists and geoscientists",
            slug: "environmental-scientists-and-geoscientists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1519,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1408,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Probation officers and correctional treatment specialists",
            slug: "probation-officers-and-correctional-treatment-specialists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1050,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "community-and-social-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Surveying and mapping technicians",
            slug: "surveying-and-mapping-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "architecture-and-engineering-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Chemists and materials scientists",
            slug: "chemists-and-materials-scientists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Chemical technicians",
            slug: "chemical-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Miscellaneous community and social service specialists, including health educators and community health workers",
            slug:
                "miscellaneous-community-and-social-service-specialists-including-health-educators-and-community-health-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "community-and-social-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Judges, magistrates, and other judicial workers",
            slug: "judges-magistrates-and-other-judicial-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "legal-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Economists",
            slug: "economists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Registered nurses",
            slug: "registered-nurses",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1256,
                        womenMedianWeeklyEarnings: 1217,
                        year: 2019,
                        centsToDollar: 97,
                    },
                    {
                        menMedianWeeklyEarnings: 1081,
                        womenMedianWeeklyEarnings: 1034,
                        year: 2011,
                        centsToDollar: 96,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Clinical laboratory technologists and technicians",
            slug: "clinical-laboratory-technologists-and-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1117,
                        womenMedianWeeklyEarnings: 952,
                        year: 2019,
                        centsToDollar: 85,
                    },
                    {
                        menMedianWeeklyEarnings: 888,
                        womenMedianWeeklyEarnings: 845,
                        year: 2011,
                        centsToDollar: 95,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Diagnostic related technologists and technicians",
            slug: "diagnostic-related-technologists-and-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1166,
                        womenMedianWeeklyEarnings: 1076,
                        year: 2019,
                        centsToDollar: 92,
                    },
                    {
                        menMedianWeeklyEarnings: 1054,
                        womenMedianWeeklyEarnings: 964,
                        year: 2011,
                        centsToDollar: 91,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Library assistants, clerical",
            slug: "library-assistants-clerical",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Emergency medical technicians and paramedics",
            slug: "emergency-medical-technicians-and-paramedics",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 991,
                        womenMedianWeeklyEarnings: 786,
                        year: 2019,
                        centsToDollar: 79,
                    },
                    {
                        menMedianWeeklyEarnings: 757,
                        womenMedianWeeklyEarnings: 649,
                        year: 2011,
                        centsToDollar: 86,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Other education, training, and library workers",
            slug: "other-education-training-and-library-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1058,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 979,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "education-training-and-library-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Public relations specialists",
            slug: "public-relations-specialists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1255,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 887,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Dietitians and nutritionists",
            slug: "dietitians-and-nutritionists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 948,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 906,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Physician assistants",
            slug: "physician-assistants",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1763,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Occupational therapists",
            slug: "occupational-therapists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1441,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1193,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Respiratory therapists",
            slug: "respiratory-therapists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1073,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 966,
                        womenMedianWeeklyEarnings: 1028,
                        year: 2011,
                        centsToDollar: 106,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Speech-language pathologists",
            slug: "speech-language-pathologists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1171,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1076,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Therapists, all other",
            slug: "therapists-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 919,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 869,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Veterinarians",
            slug: "veterinarians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1985,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Dental hygienists",
            slug: "dental-hygienists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 1066,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 992,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Athletes, coaches, umpires, and related workers",
            slug: "athletes-coaches-umpires-and-related-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1134,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 919,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Broadcast and sound engineering technicians and radio operators",
            slug:
                "broadcast-and-sound-engineering-technicians-and-radio-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1189,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 872,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Artists and related workers",
            slug: "artists-and-related-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "News analysts, reporters and correspondents",
            slug: "news-analysts-reporters-and-correspondents",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Technical writers",
            slug: "technical-writers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Writers and authors",
            slug: "writers-and-authors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Miscellaneous media and communication workers",
            slug: "miscellaneous-media-and-communication-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Dentists",
            slug: "dentists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Medical records and health information technicians",
            slug: "medical-records-and-health-information-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 799,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 574,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Miscellaneous health technologists and technicians",
            slug: "miscellaneous-health-technologists-and-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 799,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 711,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Dental assistants",
            slug: "dental-assistants",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 613,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 582,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Medical assistants",
            slug: "medical-assistants",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 635,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 518,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Phlebotomists",
            slug: "phlebotomists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 612,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 516,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Miscellaneous healthcare support occupations, including medical equipment preparers",
            slug:
                "miscellaneous-healthcare-support-occupations-including-medical-equipment-preparers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 571,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 480,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Food servers, nonrestaurant",
            slug: "food-servers-nonrestaurant",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 501,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 393,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "food-preparation-and-serving-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Other healthcare practitioners and technical occupations",
            slug: "other-healthcare-practitioners-and-technical-occupations",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1261,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "First-line supervisors of police and detectives",
            slug: "first-line-supervisors-of-police-and-detectives",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1449,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1109,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "First-line supervisors of protective service workers, all other",
            slug:
                "first-line-supervisors-of-protective-service-workers-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 698,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 788,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Firefighters",
            slug: "firefighters",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1203,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 998,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Detectives and criminal investigators",
            slug: "detectives-and-criminal-investigators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1472,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1192,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "First-line supervisors of retail sales workers",
            slug: "first-line-supervisors-of-retail-sales-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 955,
                        womenMedianWeeklyEarnings: 708,
                        year: 2019,
                        centsToDollar: 74,
                    },
                    {
                        menMedianWeeklyEarnings: 759,
                        womenMedianWeeklyEarnings: 599,
                        year: 2011,
                        centsToDollar: 79,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "First-line supervisors of non-retail sales workers",
            slug: "first-line-supervisors-of-non-retail-sales-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1157,
                        womenMedianWeeklyEarnings: 1173,
                        year: 2019,
                        centsToDollar: 101,
                    },
                    {
                        menMedianWeeklyEarnings: 1016,
                        womenMedianWeeklyEarnings: 781,
                        year: 2011,
                        centsToDollar: 77,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Cashiers",
            slug: "cashiers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 510,
                        womenMedianWeeklyEarnings: 499,
                        year: 2019,
                        centsToDollar: 98,
                    },
                    {
                        menMedianWeeklyEarnings: 411,
                        womenMedianWeeklyEarnings: 373,
                        year: 2011,
                        centsToDollar: 91,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Retail salespersons",
            slug: "retail-salespersons",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 806,
                        womenMedianWeeklyEarnings: 578,
                        year: 2019,
                        centsToDollar: 72,
                    },
                    {
                        menMedianWeeklyEarnings: 620,
                        womenMedianWeeklyEarnings: 466,
                        year: 2011,
                        centsToDollar: 75,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Advertising sales agents",
            slug: "advertising-sales-agents",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1143,
                        womenMedianWeeklyEarnings: 874,
                        year: 2019,
                        centsToDollar: 76,
                    },
                    {
                        menMedianWeeklyEarnings: 961,
                        womenMedianWeeklyEarnings: 772,
                        year: 2011,
                        centsToDollar: 80,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Insurance sales agents",
            slug: "insurance-sales-agents",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1034,
                        womenMedianWeeklyEarnings: 806,
                        year: 2019,
                        centsToDollar: 78,
                    },
                    {
                        menMedianWeeklyEarnings: 1033,
                        womenMedianWeeklyEarnings: 665,
                        year: 2011,
                        centsToDollar: 64,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Securities, commodities, and financial services sales agents",
            slug: "securities-commodities-and-financial-services-sales-agents",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1386,
                        womenMedianWeeklyEarnings: 1063,
                        year: 2019,
                        centsToDollar: 77,
                    },
                    {
                        menMedianWeeklyEarnings: 1269,
                        womenMedianWeeklyEarnings: 884,
                        year: 2011,
                        centsToDollar: 70,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Sales representatives, services, all other",
            slug: "sales-representatives-services-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1332,
                        womenMedianWeeklyEarnings: 973,
                        year: 2019,
                        centsToDollar: 73,
                    },
                    {
                        menMedianWeeklyEarnings: 953,
                        womenMedianWeeklyEarnings: 757,
                        year: 2011,
                        centsToDollar: 79,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Sales representatives, wholesale and manufacturing",
            slug: "sales-representatives-wholesale-and-manufacturing",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1262,
                        womenMedianWeeklyEarnings: 1067,
                        year: 2019,
                        centsToDollar: 85,
                    },
                    {
                        menMedianWeeklyEarnings: 1019,
                        womenMedianWeeklyEarnings: 927,
                        year: 2011,
                        centsToDollar: 91,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Real estate brokers and sales agents",
            slug: "real-estate-brokers-and-sales-agents",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1344,
                        womenMedianWeeklyEarnings: 883,
                        year: 2019,
                        centsToDollar: 66,
                    },
                    {
                        menMedianWeeklyEarnings: 992,
                        womenMedianWeeklyEarnings: 676,
                        year: 2011,
                        centsToDollar: 68,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Hosts and hostesses, restaurant, lounge, and coffee shop",
            slug: "hosts-and-hostesses-restaurant-lounge-and-coffee-shop",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 441,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 356,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "food-preparation-and-serving-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Nonfarm animal caretakers",
            slug: "nonfarm-animal-caretakers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 489,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 417,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Hairdressers, hairstylists, and cosmetologists",
            slug: "hairdressers-hairstylists-and-cosmetologists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 569,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 440,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Miscellaneous personal appearance workers",
            slug: "miscellaneous-personal-appearance-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 554,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 413,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Childcare workers",
            slug: "childcare-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 491,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 383,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Dishwashers",
            slug: "dishwashers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 464,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 321,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "food-preparation-and-serving-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "First-line supervisors of landscaping, lawn service, and groundskeeping workers",
            slug:
                "first-line-supervisors-of-landscaping-lawn-service-and-groundskeeping-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 800,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 808,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug:
                    "building-and-grounds-cleaning-and-maintenance-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Pest control workers",
            slug: "pest-control-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 741,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 572,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug:
                    "building-and-grounds-cleaning-and-maintenance-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Grounds maintenance workers",
            slug: "grounds-maintenance-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 607,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 424,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug:
                    "building-and-grounds-cleaning-and-maintenance-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Miscellaneous entertainment attendants and related workers",
            slug: "miscellaneous-entertainment-attendants-and-related-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 557,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Barbers",
            slug: "barbers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 789,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Baggage porters, bellhops, and concierges",
            slug: "baggage-porters-bellhops-and-concierges",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 672,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 561,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Parts salespersons",
            slug: "parts-salespersons",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 768,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 587,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "First-line supervisors of personal service workers",
            slug: "first-line-supervisors-of-personal-service-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Tellers",
            slug: "tellers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 571,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 500,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Financial clerks, all other",
            slug: "financial-clerks-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 797,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Court, municipal, and license clerks",
            slug: "court-municipal-and-license-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 759,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 738,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Exercise physiologists",
            slug: "exercise-physiologists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Eligibility interviewers, government programs",
            slug: "eligibility-interviewers-government-programs",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 756,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 632,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "File clerks",
            slug: "file-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 667,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 620,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Hotel, motel, and resort desk clerks",
            slug: "hotel-motel-and-resort-desk-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 490,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 416,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Interviewers, except eligibility and loan",
            slug: "interviewers-except-eligibility-and-loan",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 734,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 551,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Loan interviewers and clerks",
            slug: "loan-interviewers-and-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 802,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 696,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Couriers and messengers",
            slug: "couriers-and-messengers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 789,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 785,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Order clerks",
            slug: "order-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 577,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Human resources assistants, except payroll and timekeeping",
            slug: "human-resources-assistants-except-payroll-and-timekeeping",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Sheet metal workers",
            slug: "sheet-metal-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 900,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 805,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Structural iron and steel workers",
            slug: "structural-iron-and-steel-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1057,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 870,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Life scientists, all other",
            slug: "life-scientists-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Astronomers and physicists",
            slug: "astronomers-and-physicists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Atmospheric and space scientists",
            slug: "atmospheric-and-space-scientists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Construction and building inspectors",
            slug: "construction-and-building-inspectors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 1134,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 919,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Highway maintenance workers",
            slug: "highway-maintenance-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: 806,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 711,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Statistical assistants",
            slug: "statistical-assistants",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Helpers, construction trades",
            slug: "helpers-construction-trades",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Appraisers and assessors of real estate",
            slug: "appraisers-and-assessors-of-real-estate",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Budget analysts",
            slug: "budget-analysts",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Credit analysts",
            slug: "credit-analysts",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Financial examiners",
            slug: "financial-examiners",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Tax examiners and collectors, and revenue agents",
            slug: "tax-examiners-and-collectors-and-revenue-agents",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Tax preparers",
            slug: "tax-preparers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "business-and-financial-operations-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Computer and information research scientists",
            slug: "computer-and-information-research-scientists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "computer-and-mathematical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Survey researchers",
            slug: "survey-researchers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Sociologists",
            slug: "sociologists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Urban and regional planners",
            slug: "urban-and-regional-planners",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Miscellaneous social scientists and related workers",
            slug: "miscellaneous-social-scientists-and-related-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Agricultural and food science technicians",
            slug: "agricultural-and-food-science-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Biological technicians",
            slug: "biological-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Geological and petroleum technicians",
            slug: "geological-and-petroleum-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Nuclear technicians",
            slug: "nuclear-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Social science research assistants",
            slug: "social-science-research-assistants",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "life-physical-and-social-science-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Directors, religious activities and education",
            slug: "directors-religious-activities-and-education",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "community-and-social-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Religious workers, all other",
            slug: "religious-workers-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "community-and-social-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Judicial law clerks",
            slug: "judicial-law-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "legal-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Archivists, curators, and museum technicians",
            slug: "archivists-curators-and-museum-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "education-training-and-library-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Actors",
            slug: "actors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Dancers and choreographers",
            slug: "dancers-and-choreographers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Musicians, singers, and related workers",
            slug: "musicians-singers-and-related-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Entertainers and performers, sports and related workers, all other",
            slug:
                "entertainers-and-performers-sports-and-related-workers-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Announcers",
            slug: "announcers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Photographers",
            slug: "photographers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Television, video, and motion picture camera operators and editors",
            slug:
                "television-video-and-motion-picture-camera-operators-and-editors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Media and communication equipment workers, all other",
            slug: "media-and-communication-equipment-workers-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "arts-design-entertainment-sports-and-media-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Chiropractors",
            slug: "chiropractors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Optometrists",
            slug: "optometrists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Podiatrists",
            slug: "podiatrists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Audiologists",
            slug: "audiologists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Radiation therapists",
            slug: "radiation-therapists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Recreational therapists",
            slug: "recreational-therapists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Nurse anesthetists",
            slug: "nurse-anesthetists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Health diagnosing and treating practitioners, all other",
            slug: "health-diagnosing-and-treating-practitioners-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Opticians, dispensing",
            slug: "opticians-dispensing",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-practitioners-and-technical-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Occupational therapy assistants and aides",
            slug: "occupational-therapy-assistants-and-aides",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Medical transcriptionists",
            slug: "medical-transcriptionists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Pharmacy aides",
            slug: "pharmacy-aides",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Veterinary assistants and laboratory animal caretakers",
            slug: "veterinary-assistants-and-laboratory-animal-caretakers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "healthcare-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "First-line supervisors of correctional officers",
            slug: "first-line-supervisors-of-correctional-officers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "First-line supervisors of fire fighting and prevention workers",
            slug:
                "first-line-supervisors-of-fire-fighting-and-prevention-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Fire inspectors",
            slug: "fire-inspectors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Fish and game wardens",
            slug: "fish-and-game-wardens",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Parking enforcement workers",
            slug: "parking-enforcement-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Transit and railroad police",
            slug: "transit-and-railroad-police",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Animal control workers",
            slug: "animal-control-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Crossing guards",
            slug: "crossing-guards",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Transportation security screeners",
            slug: "transportation-security-screeners",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Lifeguards and other recreational, and all other protective service workers",
            slug:
                "lifeguards-and-other-recreational-and-all-other-protective-service-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "protective-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Counter attendants, cafeteria, food concession, and coffee shop",
            slug:
                "counter-attendants-cafeteria-food-concession-and-coffee-shop",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "food-preparation-and-serving-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Telemarketers",
            slug: "telemarketers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Food preparation and serving related workers, all other",
            slug: "food-preparation-and-serving-related-workers-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "food-preparation-and-serving-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Animal trainers",
            slug: "animal-trainers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Motion picture projectionists",
            slug: "motion-picture-projectionists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Ushers, lobby attendants, and ticket takers",
            slug: "ushers-lobby-attendants-and-ticket-takers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Embalmers and funeral attendants",
            slug: "embalmers-and-funeral-attendants",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Morticians, undertakers, and funeral directors",
            slug: "morticians-undertakers-and-funeral-directors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Tour and travel guides",
            slug: "tour-and-travel-guides",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Residential advisors",
            slug: "residential-advisors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "personal-care-and-service-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Models, demonstrators, and product promoters",
            slug: "models-demonstrators-and-product-promoters",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Sales engineers",
            slug: "sales-engineers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Door-to-door sales workers, news and street vendors, and related workers",
            slug:
                "door-to-door-sales-workers-news-and-street-vendors-and-related-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "sales-and-related-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Switchboard operators, including answering service",
            slug: "switchboard-operators-including-answering-service",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Telephone operators",
            slug: "telephone-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Communications equipment operators, all other",
            slug: "communications-equipment-operators-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Gaming cage workers",
            slug: "gaming-cage-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Procurement clerks",
            slug: "procurement-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Brokerage clerks",
            slug: "brokerage-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Correspondence clerks",
            slug: "correspondence-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Credit authorizers, checkers, and clerks",
            slug: "credit-authorizers-checkers-and-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "New accounts clerks",
            slug: "new-accounts-clerks",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Cargo and freight agents",
            slug: "cargo-and-freight-agents",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Meter readers, utilities",
            slug: "meter-readers-utilities",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Word processors and typists",
            slug: "word-processors-and-typists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: 594,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Desktop publishers",
            slug: "desktop-publishers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Mail clerks and mail machine operators, except postal service",
            slug:
                "mail-clerks-and-mail-machine-operators-except-postal-service",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Office machine operators, except computer",
            slug: "office-machine-operators-except-computer",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Proofreaders and copy markers",
            slug: "proofreaders-and-copy-markers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "office-and-administrative-support-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "First-line supervisors of farming, fishing, and forestry workers",
            slug:
                "first-line-supervisors-of-farming-fishing-and-forestry-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "farming-fishing-and-forestry-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Agricultural inspectors",
            slug: "agricultural-inspectors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "farming-fishing-and-forestry-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Animal breeders",
            slug: "animal-breeders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "farming-fishing-and-forestry-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Fishers and related fishing workers",
            slug: "fishers-and-related-fishing-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "farming-fishing-and-forestry-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Hunters and trappers",
            slug: "hunters-and-trappers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "farming-fishing-and-forestry-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Forest and conservation workers",
            slug: "forest-and-conservation-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "farming-fishing-and-forestry-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Logging workers",
            slug: "logging-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "farming-fishing-and-forestry-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Boilermakers",
            slug: "boilermakers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Paving, surfacing, and tamping equipment operators",
            slug: "paving-surfacing-and-tamping-equipment-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Pile-driver operators",
            slug: "pile-driver-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Paperhangers",
            slug: "paperhangers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Plasterers and stucco masons",
            slug: "plasterers-and-stucco-masons",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Reinforcing iron and rebar workers",
            slug: "reinforcing-iron-and-rebar-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Solar photovoltaic installers",
            slug: "solar-photovoltaic-installers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Elevator installers and repairers",
            slug: "elevator-installers-and-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Fence erectors",
            slug: "fence-erectors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Hazardous materials removal workers",
            slug: "hazardous-materials-removal-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Rail-track laying and maintenance equipment operators",
            slug: "rail-track-laying-and-maintenance-equipment-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Shoe and leather workers and repairers",
            slug: "shoe-and-leather-workers-and-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Septic tank servicers and sewer pipe cleaners",
            slug: "septic-tank-servicers-and-sewer-pipe-cleaners",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Miscellaneous construction and related workers",
            slug: "miscellaneous-construction-and-related-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Derrick, rotary drill, and service unit operators, oil, gas, and mining",
            slug:
                "derrick-rotary-drill-and-service-unit-operators-oil-gas-and-mining",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Earth drillers, except oil and gas",
            slug: "earth-drillers-except-oil-and-gas",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Explosives workers, ordnance handling experts, and blasters",
            slug: "explosives-workers-ordnance-handling-experts-and-blasters",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Roof bolters, mining",
            slug: "roof-bolters-mining",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Roustabouts, oil and gas",
            slug: "roustabouts-oil-and-gas",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Helpers--extraction workers",
            slug: "helpers-extraction-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "construction-and-extraction-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Avionics technicians",
            slug: "avionics-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Electric motor, power tool, and related repairers",
            slug: "electric-motor-power-tool-and-related-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Electrical and electronics installers and repairers, transportation equipment",
            slug:
                "electrical-and-electronics-installers-and-repairers-transportation-equipment",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Electrical and electronics repairers, industrial and utility",
            slug: "electrical-and-electronics-repairers-industrial-and-utility",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Electronic equipment installers and repairers, motor vehicles",
            slug:
                "electronic-equipment-installers-and-repairers-motor-vehicles",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Electronic home entertainment equipment installers and repairers",
            slug:
                "electronic-home-entertainment-equipment-installers-and-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Automotive glass installers and repairers",
            slug: "automotive-glass-installers-and-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Small engine mechanics",
            slug: "small-engine-mechanics",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Control and valve installers and repairers",
            slug: "control-and-valve-installers-and-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Home appliance repairers",
            slug: "home-appliance-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Maintenance workers, machinery",
            slug: "maintenance-workers-machinery",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Precision instrument and equipment repairers",
            slug: "precision-instrument-and-equipment-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 914,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Wind turbine service technicians",
            slug: "wind-turbine-service-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Coin, vending, and amusement machine servicers and repairers",
            slug: "coin-vending-and-amusement-machine-servicers-and-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Commercial divers",
            slug: "commercial-divers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Locksmiths and safe repairers",
            slug: "locksmiths-and-safe-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Manufactured building and mobile home installers",
            slug: "manufactured-building-and-mobile-home-installers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Signal and track switch repairers",
            slug: "signal-and-track-switch-repairers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Helpers--installation, maintenance, and repair workers",
            slug: "helpers-installation-maintenance-and-repair-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "installation-maintenance-and-repair-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Aircraft structure, surfaces, rigging, and systems assemblers",
            slug: "aircraft-structure-surfaces-rigging-and-systems-assemblers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Engine and other machine assemblers",
            slug: "engine-and-other-machine-assemblers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Structural metal fabricators and fitters",
            slug: "structural-metal-fabricators-and-fitters",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Food and tobacco roasting, baking, and drying machine operators and tenders",
            slug:
                "food-and-tobacco-roasting-baking-and-drying-machine-operators-and-tenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Food cooking machine operators and tenders",
            slug: "food-cooking-machine-operators-and-tenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Etchers and engravers",
            slug: "etchers-and-engravers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Molders, shapers, and casters, except metal and plastic",
            slug: "molders-shapers-and-casters-except-metal-and-plastic",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Extruding and drawing machine setters, operators, and tenders, metal and plastic",
            slug:
                "extruding-and-drawing-machine-setters-operators-and-tenders-metal-and-plastic",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Forging machine setters, operators, and tenders, metal and plastic",
            slug:
                "forging-machine-setters-operators-and-tenders-metal-and-plastic",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Tire builders",
            slug: "tire-builders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Rolling machine setters, operators, and tenders, metal and plastic",
            slug:
                "rolling-machine-setters-operators-and-tenders-metal-and-plastic",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Drilling and boring machine tool setters, operators, and tenders, metal and plastic",
            slug:
                "drilling-and-boring-machine-tool-setters-operators-and-tenders-metal-and-plastic",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Grinding, lapping, polishing, and buffing machine tool setters, operators, and tenders, metal and plastic",
            slug:
                "grinding-lapping-polishing-and-buffing-machine-tool-setters-operators-and-tenders-metal-and-plastic",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 641,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Lathe and turning machine tool setters, operators, and tenders, metal and plastic",
            slug:
                "lathe-and-turning-machine-tool-setters-operators-and-tenders-metal-and-plastic",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Milling and planing machine setters, operators, and tenders, metal and plastic",
            slug:
                "milling-and-planing-machine-setters-operators-and-tenders-metal-and-plastic",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Metal furnace operators, tenders, pourers, and casters",
            slug: "metal-furnace-operators-tenders-pourers-and-casters",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Model makers and patternmakers, metal and plastic",
            slug: "model-makers-and-patternmakers-metal-and-plastic",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Molders and molding machine setters, operators, and tenders, metal and plastic",
            slug:
                "molders-and-molding-machine-setters-operators-and-tenders-metal-and-plastic",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Multiple machine tool setters, operators, and tenders, metal and plastic",
            slug:
                "multiple-machine-tool-setters-operators-and-tenders-metal-and-plastic",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Heat treating equipment setters, operators, and tenders, metal and plastic",
            slug:
                "heat-treating-equipment-setters-operators-and-tenders-metal-and-plastic",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Layout workers, metal and plastic",
            slug: "layout-workers-metal-and-plastic",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Plating and coating machine setters, operators, and tenders, metal and plastic",
            slug:
                "plating-and-coating-machine-setters-operators-and-tenders-metal-and-plastic",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Tool grinders, filers, and sharpeners",
            slug: "tool-grinders-filers-and-sharpeners",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Prepress technicians and workers",
            slug: "prepress-technicians-and-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Print binding and finishing workers",
            slug: "print-binding-and-finishing-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Pressers, textile, garment, and related materials",
            slug: "pressers-textile-garment-and-related-materials",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Shoe machine operators and tenders",
            slug: "shoe-machine-operators-and-tenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Textile bleaching and dyeing machine operators and tenders",
            slug: "textile-bleaching-and-dyeing-machine-operators-and-tenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Textile cutting machine setters, operators, and tenders",
            slug: "textile-cutting-machine-setters-operators-and-tenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Textile knitting and weaving machine setters, operators, and tenders",
            slug:
                "textile-knitting-and-weaving-machine-setters-operators-and-tenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Textile winding, twisting, and drawing out machine setters, operators, and tenders",
            slug:
                "textile-winding-twisting-and-drawing-out-machine-setters-operators-and-tenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Extruding and forming machine setters, operators, and tenders, synthetic and glass fibers",
            slug:
                "extruding-and-forming-machine-setters-operators-and-tenders-synthetic-and-glass-fibers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Fabric and apparel patternmakers",
            slug: "fabric-and-apparel-patternmakers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Upholsterers",
            slug: "upholsterers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Textile, apparel, and furnishings workers, all other",
            slug: "textile-apparel-and-furnishings-workers-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Cabinetmakers and bench carpenters",
            slug: "cabinetmakers-and-bench-carpenters",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Furniture finishers",
            slug: "furniture-finishers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Model makers and patternmakers, wood",
            slug: "model-makers-and-patternmakers-wood",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Sawing machine setters, operators, and tenders, wood",
            slug: "sawing-machine-setters-operators-and-tenders-wood",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Woodworking machine setters, operators, and tenders, except sawing",
            slug:
                "woodworking-machine-setters-operators-and-tenders-except-sawing",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Woodworkers, all other",
            slug: "woodworkers-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Power plant operators, distributors, and dispatchers",
            slug: "power-plant-operators-distributors-and-dispatchers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: 1085,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Miscellaneous plant and system operators",
            slug: "miscellaneous-plant-and-system-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Extruding, forming, pressing, and compacting machine setters, operators, and tenders",
            slug:
                "extruding-forming-pressing-and-compacting-machine-setters-operators-and-tenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Furnace, kiln, oven, drier, and kettle operators and tenders",
            slug: "furnace-kiln-oven-drier-and-kettle-operators-and-tenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Jewelers and precious stone and metal workers",
            slug: "jewelers-and-precious-stone-and-metal-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Photographic process workers and processing machine operators",
            slug:
                "photographic-process-workers-and-processing-machine-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Semiconductor processors",
            slug: "semiconductor-processors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Adhesive bonding machine operators and tenders",
            slug: "adhesive-bonding-machine-operators-and-tenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Cleaning, washing, and metal pickling equipment operators and tenders",
            slug:
                "cleaning-washing-and-metal-pickling-equipment-operators-and-tenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Cooling and freezing equipment operators and tenders",
            slug: "cooling-and-freezing-equipment-operators-and-tenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Paper goods machine setters, operators, and tenders",
            slug: "paper-goods-machine-setters-operators-and-tenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Helpers--production workers",
            slug: "helpers-production-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "production-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Air traffic controllers and airfield operations specialists",
            slug: "air-traffic-controllers-and-airfield-operations-specialists",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name:
                "Ambulance drivers and attendants, except emergency medical technicians",
            slug:
                "ambulance-drivers-and-attendants-except-emergency-medical-technicians",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Motor vehicle operators, all other",
            slug: "motor-vehicle-operators-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Locomotive engineers and operators",
            slug: "locomotive-engineers-and-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Railroad brake, signal, and switch operators",
            slug: "railroad-brake-signal-and-switch-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Subway, streetcar, and other rail transportation workers",
            slug: "subway-streetcar-and-other-rail-transportation-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Sailors and marine oilers",
            slug: "sailors-and-marine-oilers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Ship and boat captains and operators",
            slug: "ship-and-boat-captains-and-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Ship engineers",
            slug: "ship-engineers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Bridge and lock tenders",
            slug: "bridge-and-lock-tenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Transportation inspectors",
            slug: "transportation-inspectors",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Transportation attendants, except flight attendants",
            slug: "transportation-attendants-except-flight-attendants",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Other transportation workers",
            slug: "other-transportation-workers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Conveyor operators and tenders",
            slug: "conveyor-operators-and-tenders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Dredge, excavating, and loading machine operators",
            slug: "dredge-excavating-and-loading-machine-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Hoist and winch operators",
            slug: "hoist-and-winch-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Machine feeders and offbearers",
            slug: "machine-feeders-and-offbearers",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Pumping station operators",
            slug: "pumping-station-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Mine shuttle car operators",
            slug: "mine-shuttle-car-operators",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Tank car, truck, and ship loaders",
            slug: "tank-car-truck-and-ship-loaders",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
        {
            name: "Material moving workers, all other",
            slug: "material-moving-workers-all-other",
            wageGaps: {
                years: [
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2019,
                        centsToDollar: null,
                    },
                    {
                        menMedianWeeklyEarnings: null,
                        womenMedianWeeklyEarnings: null,
                        year: 2011,
                        centsToDollar: null,
                    },
                ],
            },
            parent: {
                slug: "transportation-and-material-moving-occupations",
            },
            children: {
                occupations: [],
            },
        },
    ],
    all: function () {
        return this.gaps;
    },
    get: function (slug) {
        const isGap = (g) => g.slug === slug;
        return this.gaps.find(isGap);
    },
    random: function (excludeSlug) {
        const gapsExcludingSlug = this.gaps.filter(
            (gap) =>
                gap.slug !== excludeSlug &&
                gap.slug !== "total-full-time-wage-and-salary-workers"
        );

        return gapsExcludingSlug[
            Math.floor(Math.random() * gapsExcludingSlug.length)
        ];
    },
    cleanOccupationName: function (occupationName) {
        let cleanName = occupationName.toLowerCase();
        //ends with , hand
        if (cleanName.endsWith(", hand")) {
            return this.cutOffSuffix(cleanName, ", hand");
        }
        //ends with , all other
        if (cleanName.endsWith(", all other")) {
            return this.cutOffSuffix(cleanName, ", all other");
        }
        //starts with miscellaneous
        if (cleanName.startsWith("miscellaneous ")) {
            return cleanName.substring("miscellaneous ".length);
        }
        //starts with other
        if (cleanName.startsWith("other ")) {
            return cleanName.substring("other ".length);
        }
        //waitresses and waiters - waiters
        if (cleanName === "waiters and waitresses") {
            return "waitresses";
        }
        //total, 16 years and over just 16 years and over
        if (cleanName === "total, full-time wage and salary workers") {
            return "in the U.S.";
        }
        return cleanName;
    },
    cutOffSuffix: (str, suffix) => str.substring(0, str.length - suffix.length),
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
};

export default GapAPI;
