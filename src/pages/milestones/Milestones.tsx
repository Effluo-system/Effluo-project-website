import { Container } from '@mui/material';
import { MilestoneCard } from '../../components/Milestones/MilestoneComponents';

// Define Milestone interface
interface Milestone {
  title: string;
  description: string;
  marksAllocated: number;
  date: string;
  status: 'completed' | 'pending';
  type:
    | 'proposal'
    | 'presentation'
    | 'research'
    | 'report'
    | 'website'
    | 'logbook'
    | 'viva';
}

// Main Milestones Component
const Milestones = () => {
  const milestonesData: Milestone[] = [
    {
      title: 'Proposal Report',
      description:
        'A Project Proposal is a document that describes the project vision. It includes the problem statement, objectives, methodology, and expected outcomes.',
      marksAllocated: 6,
      date: '23rd August 2024',
      status: 'completed',
      type: 'proposal',
    },
    {
      title: 'Proposal Presentation',
      description:
        'A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.',
      marksAllocated: 5,
      date: '5th July 2024',
      status: 'completed',
      type: 'presentation',
    },
    {
      title: 'Progress Presentation I',
      description:
        'Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.',
      marksAllocated: 15,
      date: '4th December 2024',
      status: 'completed',
      type: 'presentation',
    },
    {
      title: 'Research Paper',
      description:
        'Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.',
      marksAllocated: 10,
      date: '20th March 2025',
      status: 'completed',
      type: 'research',
    },
    {
      title: 'Progress Presentation II',
      description:
        'Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.',
      marksAllocated: 18,
      date: '19th March 2025',
      status: 'completed',
      type: 'presentation',
    },

    {
      title: 'Research Logbook',
      description:
        'Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.',
      marksAllocated: 3,
      date: 'June 2025',
      status: 'pending',
      type: 'logbook',
    },
    {
      title: 'Final Report',
      description:
        'Final Report evaluates the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.',
      marksAllocated: 21,
      date: '11th April 2025',
      status: 'completed',
      type: 'report',
    },
    {
      title: 'Final Presentation & Viva',
      description:
        "Viva is held individually to assess each member's contribution to the project.",
      marksAllocated: 20,
      date: '26th May 2025',
      status: 'pending',
      type: 'viva',
    },
    {
      title: 'Website Assessment',
      description:
        'The Website helps to promote our research project and reveals all details related to the project.',
      marksAllocated: 2,
      date: '26th May 2025',
      status: 'pending',
      type: 'website',
    },
  ];

  // Function to parse date strings and convert them to Date objects for sorting
  const parseDate = (dateString: string): Date => {
    if (
      dateString.includes('th') ||
      dateString.includes('st') ||
      dateString.includes('nd') ||
      dateString.includes('rd')
    ) {
      // Handle dates like "20th March 2025" or "2nd June 2025"
      const parts = dateString.split(' ');
      if (parts.length === 3) {
        const day = parseInt(parts[0].replace(/[^\d]/g, ''));
        const month = parts[1];
        const year = parseInt(parts[2]);

        const monthMap: { [key: string]: number } = {
          January: 0,
          February: 1,
          March: 2,
          April: 3,
          May: 4,
          June: 5,
          July: 6,
          August: 7,
          September: 8,
          October: 9,
          November: 10,
          December: 11,
        };

        console.log(`Parsed date: ${day} ${monthMap[month]} ${year}`);
        return new Date(year, monthMap[month], day);
      }
    } else if (dateString.match(/^[A-Za-z]+ \d{4}$/)) {
      // Handle dates like "June 2025"
      const parts = dateString.split(' ');
      const month = parts[0];
      const year = parseInt(parts[1]);

      const monthMap: { [key: string]: number } = {
        January: 0,
        February: 1,
        March: 2,
        April: 3,
        May: 4,
        June: 5,
        July: 6,
        August: 7,
        September: 8,
        October: 9,
        November: 10,
        December: 11,
      };

      return new Date(year, monthMap[month], 1);
    } else if (dateString.match(/^\d{1,2} \w+ \d{4}$/)) {
      // Handle dates like "9 July 2024"
      const parts = dateString.split(' ');
      const day = parseInt(parts[0]);
      const month = parts[1];
      const year = parseInt(parts[2]);

      const monthMap: { [key: string]: number } = {
        January: 0,
        February: 1,
        March: 2,
        April: 3,
        May: 4,
        June: 5,
        July: 6,
        August: 7,
        September: 8,
        October: 9,
        November: 10,
        December: 11,
      };
      return new Date(year, monthMap[month], day);
    }
    // Fallback: return current date if parsing fails
    console.warn(`Failed to parse date: ${dateString}`);
    return new Date();
  };

  // Sort milestones by date in ascending order
  const milestones = [...milestonesData].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateA.getTime() - dateB.getTime();
  });

  const calculateProgress = () => {
    const completedMilestones = milestones.filter(
      (m) => m.status === 'completed'
    ).length;
    return (completedMilestones / milestones.length) * 100;
  };

  const calculateCompletedMarks = () => {
    return milestones
      .filter((m) => m.status === 'completed')
      .reduce((total, m) => total + m.marksAllocated, 0);
  };

  const getTotalMarks = () => {
    return milestones.reduce((total, m) => total + m.marksAllocated, 0);
  };

  const progress = calculateProgress();
  const completedMarks = calculateCompletedMarks();
  const totalMarks = getTotalMarks();

  return (
    <Container className="homeContainer">
      <div className="min-h-screen py-12 pt-6 px-2">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            {/* Progress Overview */}
            <div
              className="rounded-2xl p-8 text-white mb-12 shadow-xl"
              style={{ backgroundColor: '#064472' }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-left">
                  <h2 className="text-2xl font-semibold mb-2">
                    Overall Progress
                  </h2>
                  <p className="opacity-90">
                    {Math.round(progress)}% Complete • {completedMarks}/
                    {totalMarks} Marks Achieved
                  </p>
                </div>

                <div className="flex-2 w-full md:max-w-md">
                  <div className="flex justify-between mb-2 text-sm opacity-90">
                    <span>Progress</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-3 bg-white bg-opacity-30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div
              className="absolute left-10 top-0 bottom-0 w-0.5 bg-gray-300 rounded-full"
              style={{ height: 'calc(100% - 2rem)' }}
            />

            {/* Milestone Cards */}
            {milestones.map((milestone, index) => (
              <MilestoneCard
                key={milestone.title}
                milestone={milestone}
                index={index}
              />
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-2xl p-8 mt-12 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-900 text-center mb-8">
              Assessment Summary
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">
                  {milestones.filter((m) => m.status === 'completed').length}
                </div>
                <div className="text-gray-600">Completed Milestones</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">
                  {milestones.filter((m) => m.status === 'pending').length}
                </div>
                <div className="text-gray-600">Pending Milestones</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  {totalMarks}
                </div>
                <div className="text-gray-600">Total Marks Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Milestones;
