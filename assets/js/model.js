const Task =
{
	taskName: "Search",
	details: "search to target users",
	dateline: Date.now(),
	matirials: [""],
	supTasks: [],
	members:
		[
			{
				userName: "ammar_omran",
				profileIcon: "https://vj.csgrandeur.cn/user/avatar/904733?v=1713209198",
			},
			{
				userName: "ammar_omran",
				profileIcon: "https://vj.csgrandeur.cn/user/avatar/904733?v=1713209198",
			},
			{
				userName: "ammar_omran",
				profileIcon: "https://vj.csgrandeur.cn/user/avatar/904733?v=1713209198",
			}
		]
}

const project =
{
	role: "member",
	project_name: "TeamTracker",
	project_code: "052213",
	project_roadMap:
		[
			{
				phaseName: "Emphasize",
				phaseDescription: " is the foundation of a human-centered design process. To empathize, you",
				due: Date.now(),
				matirials: [
					{
						matName: "Portofolio",
						matIcon: "assets/img/107,70.png",
					},
				],
				supPhase: [
					{
						phaseName: "Observe",
						phaseDescription: " View users and their behavior in the context of their lives",
						due: Date.now(),
						matirials: [
							{
								matName: "Portofolio",
								matIcon: "assets/img/107,70.png",
							},
						],
						supPhase: [],
						tasks: [Task],


					},
					{
						phaseName: "Engage",
						phaseDescription: "Interact with and interview users through both scheduled and short 'intercept' encounters.",
						due: Date.now(),
						matirials: [
							{
								matName: "Portofolio",
								matIcon: "assets/img/107,70.png",
							},
						],
						supPhase: [],
						tasks: [Task],


					},
					{
						phaseName: "Immerse",
						phaseDescription: "Experience your user experiences.",
						due: Date.now(),
						matirials: [
							{
								matName: "Portofolio",
								matIcon: "assets/img/107,70.png",
							},
						],
						supPhase: [],
						tasks: [Task],


					}
				]
			},
			{
				phaseName: "Define",
				phaseDescription: "Define is to unpack and synthesize the empathy findings into compelling needs and insights, and scope a specific and meaningful challenge. To define, you",
				due: Date.now(),
				matirials: [
					{
						matName: "Portofolio",
						matIcon: "assets/img/107,70.png",
					},
				],
				supPhase: [
					{
						phaseName: "Organize",
						phaseDescription: "all the collected data during the previous phase.",
						due: Date.now(),
						matirials: [
							{
								matName: "Portofolio",
								matIcon: "assets/img/107,70.png",
							},
						],
						supPhase: [],
						tasks: [Task],


					},
					{
						phaseName: "Define",
						phaseDescription: "the actionable problem statement from a human-centric perspective.",
						due: Date.now(),
						matirials: [
							{
								matName: "Portofolio",
								matIcon: "assets/img/107,70.png",
							},
						],
						supPhase: [],
						tasks: [Task],


					},
				]
			},
			{
				phaseName: "Ideate",
				phaseDescription: "is to brainstorm creative, human-centered ideas. To ideate you:",
				due: Date.now(),
				matirials: [
					{
						matName: "Portofolio",
						matIcon: "assets/img/107,70.png",
					},
				],
				supPhase: [
					{
						phaseName: "Generate",
						phaseDescription: "radical design alternatives. Mentally it represents a process of  “going wide” in terms of concepts and outcomes—it is a mode of “flaring” rather than “focus” using the suitable techniques among your group.",
						due: Date.now(),
						matirials: [
							{
								matName: "Portofolio",
								matIcon: "assets/img/107,70.png",
							},
						],
						supPhase: [],
						tasks: [Task],


					},
				]
			},
			{
				phaseName: "Prototype",
				phaseDescription: " is to build representations of potential solutions. To prototype you",
				due: Date.now(),
				matirials: [
					{
						matName: "Portofolio",
						matIcon: "assets/img/107,70.png",
					},
				],
				supPhase: [
					{
						phaseName: "Design",
						phaseDescription: " prototype can be anything that takes a physical form – be it a wall of post-it notes, a role-playing activity, a space, an object, an interface, or even a storyboard. The resolution of your prototype should be commensurate with your progress in your project.",
						due: Date.now(),
						matirials: [
							{
								matName: "Portofolio",
								matIcon: "assets/img/107,70.png",
							},
						],
						supPhase: [],
						tasks: [Task],


					},
					{
						phaseName: "Build",
						phaseDescription: " In early explorations keep your prototypes rough and rapid to allow yourself to learn quickly and investigate a lot of different possibilities.",
						due: Date.now(),
						matirials: [
							{
								matName: "Portofolio",
								matIcon: "assets/img/107,70.png",
							},
						],
						supPhase: [],
						tasks: [Task],


					},
				]
			},
			{
				phaseName: "Test",
				phaseDescription: "is to gather feedback from real or target users. To test, you.",
				due: Date.now(),
				matirials: [
					{
						matName: "Portofolio",
						matIcon: "assets/img/107,70.png",
					},
				],
				supPhase: [
					{
						phaseName: "Collect",
						phaseDescription: " collect users' feedback",
						due: Date.now(),
						matirials: [
							{
								matName: "Portofolio",
								matIcon: "assets/img/107,70.png",
							},
						],
						supPhase: [],
						tasks: [Task],


					},
					{
						phaseName: "Analyze",
						phaseDescription: " understand the feedback",
						due: Date.now(),
						matirials: [
							{
								matName: "Portofolio",
								matIcon: "assets/img/107,70.png",
							},
						],
						supPhase: [],
						tasks: [Task],


					},
					{
						phaseName: "Refine",
						phaseDescription: "make better solutions (iterative methodology).",
						due: Date.now(),
						matirials: [
							{
								matName: "Portofolio",
								matIcon: "assets/img/107,70.png",
							},
						],
						supPhase: [],
						tasks: [Task],


					},
				]
			}
		]
}
const User =
{
	userName: "ammar_omran",
	profileIcon: "https://vj.csgrandeur.cn/user/avatar/904733?v=1713209198",
	email: "ammar@teamtracker.com",
	publicUserName: "Ammar Omran",
	password: "Pass#123",
	projects: [project]
}
