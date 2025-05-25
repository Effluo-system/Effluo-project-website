import {
  Assignment,
  CheckCircle,
  Computer,
  Description,
  MenuBook,
  Schedule,
  School,
  Slideshow,
} from '@mui/icons-material';

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

// Reusable MilestoneCard Component
export const MilestoneCard = ({
  milestone,
  index,
}: {
  milestone: Milestone;
  index: number;
}) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle sx={{ fontSize: 16 }} />;
      case 'pending':
        return <Schedule sx={{ fontSize: 16 }} />;
      default:
        return <CheckCircle sx={{ fontSize: 16 }} />;
    }
  };

  const getTypeIcon = (type: string) => {
    const iconProps = { sx: { fontSize: 20 } };
    switch (type) {
      case 'proposal':
        return <Assignment {...iconProps} />;
      case 'presentation':
        return <Slideshow {...iconProps} />;
      case 'research':
        return <Description {...iconProps} />;
      case 'report':
        return <Description {...iconProps} />;
      case 'website':
        return <Computer {...iconProps} />;
      case 'logbook':
        return <MenuBook {...iconProps} />;
      case 'viva':
        return <School {...iconProps} />;
      default:
        return <Description {...iconProps} />;
    }
  };

  return (
    <div
      className="relative pb-8 pl-20"
      style={{
        opacity: 0,
        transform: 'translateX(-30px)',
        animation: `slideInLeft 0.6s ease-out ${index * 0.15}s both`,
      }}
    >
      {/* Timeline Dot */}
      <div
        className={`absolute top-6 w-4 h-4 rounded-full border-3 border-white shadow-lg z-10 ${
          milestone.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
        }`}
        style={{
          boxShadow: '0 0 0 3px rgba(0,0,0,0.1)',
          left: '33px',
        }}
      />

      {/* Milestone Card */}
      <div
        className={`bg-white rounded-2xl p-6 shadow-md border-2 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl ${
          milestone.status === 'completed'
            ? 'border-green-200 hover:border-blue-300'
            : 'border-yellow-200 hover:border-blue-300'
        }`}
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6 gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="p-3 rounded-xl bg-blue-50 text-blue-700">
              {getTypeIcon(milestone.type)}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {milestone.title}
              </h3>
              <p className="text-sm text-gray-600">{milestone.date}</p>
            </div>
          </div>

          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
              milestone.status === 'completed'
                ? 'bg-green-100 text-green-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}
          >
            {getStatusIcon(milestone.status)}
            {milestone.status === 'completed' ? 'Completed' : 'Pending'}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {milestone.description}
        </p>

        {/* Marks Section */}
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border">
          <span className="text-gray-600 text-sm">Marks Allocated</span>
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-blue-700">
              {milestone.marksAllocated} marks
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};
