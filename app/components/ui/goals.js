

export default function LearningGoals() {
    const goals = [
      {
        title: "Hands-on training",
        description:
          "Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.",
        icon: "\u2699\ufe0f", // Gear icon
      },
      {
        title: "Certification prep",
        description:
          "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.",
        icon: "\ud83d\udc68\u200d\ud83c\udf93", // Graduation cap icon
      },
      {
        title: "Enterprise Plan",
        description:
          "Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.",
        icon: "\ud83d\udcc8", // Chart increasing icon
      },
      {
        title: "Learning Plan",
        description:
          "Create tailored learning paths for team and organization goals and even host your own content and resources.",
        icon: "\ud83d\udd17", // Link icon
      },
    ];
  
    return (
        <div className="bg-[#e0c4c4]  p-8 w-full  mx-auto ">
      <div className=" max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold  text-gray-800 mb-4 Inter  font-[Inter]">Learning focused on your goals</h2>
        <div className="space-y-4 max-w-3xl mx-auto Inknut font-[Inknut] ">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="flex  font items-start bg-pink-100 hover:bg-pink-50  p-4 rounded-lg shadow-sm"
            >
              <span className="text-2xl mr-4">{goal.icon}</span>
              <div>
                <h3 className="font-extrabold flex items-start text-gray-900 Inknut  font-[Inknut]">{goal.title}</h3>
                <p className="text-gray-700 text-left text-sm">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    );
  }
  