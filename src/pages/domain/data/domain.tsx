import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import ConstructionIcon from '@mui/icons-material/Construction';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import awsIcon from '../../../assets/aws-svgrepo-com.svg';
import dockerIcon from '../../../assets/docker-svgrepo-com.svg';
import githubIcon from '../../../assets/github-svgrepo-com.svg';
import kubernetesIcon from '../../../assets/kubernetes-svgrepo-com.svg';
import nodeIcon from '../../../assets/node-js-svgrepo-com.svg';
import postgresqlIcon from '../../../assets/postgresql-icon.svg';
import pythonIcon from '../../../assets/python-svgrepo-com.svg';
import pytorchIcon from '../../../assets/pytorch-svgrepo-com.svg';
import reactIcon from '../../../assets/react-svgrepo-com.svg';
import terraformIcon from '../../../assets/terraform-icon-svgrepo-com.svg';
import typescriptIcon from '../../../assets/typescript-svgrepo-com.svg';

export const data = {
  'background-literature': {
    title: 'Background Literature',
    desc: [
      'Project Effluo addresses persistent challenges in modern software development, focusing on merge conflict resolution, CI/CD pipeline generation, and context-aware automation.',
      'In DevOps, maintaining and updating pipelines manually remains a burden due to a steep learning curve and lack of automation [1][2]. There is a growing need for solutions that generate and update pipelines based on developer behavior, with minimal input and more control left to users.',
      'CI/CD pipelines also face issues like build failures, poor PR prioritization, and delayed deployments. Tools like BuildFast [3] and metadata-driven PR risk classifiers [4] have improved reliability, yet many teams still merge PRs without proper CI checks [5]. Research shows that context-aware deployment delays and behavior-informed prioritization can significantly reduce post-deployment issues [6][7].',
      'Furthermore, research shows merge conflicts are common in collaborative development, especially with non-modular contributions and multiple authors [8]. While traditional tools support manual resolution, newer approaches use deep learning (e.g. sequence-to-sequence models [9], token-level classifiers, and GPT-based models [10]) to automate and improve precision, though the field is still emerging with few publications.',
      'For semantic conflict resolution, traditional static and dynamic tools often fall short in detecting logic-level issues. Recent advances include program analysis [11], AST-based tools [59], and automated testing [12], with LLMs like GPT-3 offering promising but still limited results due to context constraints [13].',
      'Overall, the literature supports the vision of Project Effluo: a unified, intelligent system that automates merge resolution and pipeline workflows through behavior analysis, contextual awareness, and AI-driven techniques.',
    ],
    ref: [
      `[1] A. Nayanajith and R. Wickramarachchi, "Challenges Affecting the Successful Adoption of DevOps Practices: A Systematic Literature Review," in 4th International Conference on Advanced Research in Computing (ICARC), Belihuloya, Sri Lanka, 2024.`,
      '[2]M. Senapathi, J. Buchan and H. Osman, "DevOps capabilities, practices, and challenges," in Proceedings of the 22nd International Conference on Evaluation and Assessment in Software Engineering 2018, 2018.',
      `[3] B. Chen, L. Chen and C. Z. a. X. Peng, "BUILDFAST: History-Aware Build Outcome Prediction for Fast Feedback and Reduced Cost in Continuous Integration," in 2020 35th IEEE/ACM International Conference on Automated Software Engineering (ASE), Melbourne, VIC, Australia, 2020. `,
      `[4] T. A. Ghaleb and D. A. d. C. a. Y. Zou, "An empirical study of the long duration of continuous integration builds," Empirical Software Engineering, vol. 24, no. 4, 2019. `,
      `[5] B. Vasilescu, S. v. Schuylenburg and A. S. a. M. G. v. d. J. Wulms, "Continuous Integration in a Social-Coding World: Empirical Evidence from GitHub," in 2014 IEEE International Conference on Software Maintenance and Evolution, Victoria, BC, Canada, , 2014. `,
      `[6] C. Vassallo, S. Proksch and T. Z. a. H. C. Gall, "Every Build You Break: DeveloperOriented Assistance for Build Failure Resolution," Empirical Software Engineering, vol. 25, pp. 2218-2257, 2019.`,
      `[7] G. S. a. P. Leitner, "Search-Based Scheduling of Experiments in Continuous Deployment," in 2018 IEEE International Conference on Software Maintenance and Evolution (ICSME), Madrid, Spain, 2018.`,
      `[8] K. Dias, P. Borba and M. Barreto, "Understanding predictive factors for merge conflicts," Information and Software Technology, vol. 121, p. 106256, 2020.`,
      `[9] E. Dinella, T. Mytkowicz, A. Svyatkovskiy, C. Bird, M. Naik and S. Lahiri, "DeepMerge: Learning to Merge Programs," IEEE Transactions on Software Engineering, vol. 49, no. 4, pp. 1599-1614, 2023. `,
      `[10] J. Dong, Q. Zhu, Z. Sun, Y. Lou and D. Hao, "Merge Conflict Resolution: Classification or Generation?," in 2023 38th IEEE/ACM International Conference on Automated Software Engineering (ASE), Luxembourg, 2023. `,
      `[11] G. Santos De Jesus, P. Borba, R. Bonifácio, and M. Barbosa De Oliveira, "DetectingSemantic Conflicts using Static Analysis," 2024. `,
      `[12] L. Da Silva et al, "Detecting Semantic Conflicts with Unit Tests," Journal of Systems and Software, vol. 214, p. 112070, 2024.`,
      `[13] J. Zhang, T. Mytkowicz, M. Kaufman, R. Piskac, and S. K. Lahiri, "Can Pre-trained 106 Language Models Be Used to Resolve Textual and Semantic Merge Conflicts?".`,
    ],
  },
  'research-gap': [
    {
      icon: <CodeOffIcon sx={{ fontSize: 50, color: '#0e5386' }} />,
      title: 'Absence of behavioral analysis and dynamic pipeline generation',
      desc: 'Current GenAI tools (e.g. ChatGPT, Gemini) and template-based CI/CD platforms cannot monitor user behavior or adapt pipelines automatically based on behavioral changes. There is no existing solution that dynamically generates or updates pipelines in response to user activity or evolving developer workflows. the proposed system introduces a zero-code solution',
    },
    {
      icon: <PriorityHighIcon sx={{ fontSize: 50, color: '#0e5386' }} />,
      title:
        'Lack of Context-Aware Prioritization and Recovery Guidance in CI/CD',
      desc: 'Existing tools lack integrated solutions that combine keyword-based PR urgency with build failure data to guide deployment decisions. Current models may predict outcomes but don’t offer actionable advice like delaying deployments. The proposed system fills this gap by using real-time context to prioritize PRs, detect critical failures, and recommend delays adaptively.',
    },
    {
      icon: <ConstructionIcon sx={{ fontSize: 50, color: '#0e5386' }} />,
      title: 'Lack of multi-granularity and context integration',
      desc: 'While existing tools (e.g. DeepMerge, MergeBert, MergeGen) work at isolated granularity levels (line, token, file) and often omit surrounding code context, no current approach effectively combines multiple granularity levels to capture inter-conflict dependencies and broader contextual usage patterns—a critical step toward human-like resolution reasoning.',
    },
    {
      icon: <OpenWithIcon sx={{ fontSize: 50, color: '#0e5386' }} />,
      title:
        'Limited scalability, context-awareness, and robustness across existing methods',
      desc: 'Current approaches (static analysis, unit tests, language models) struggle with large codebases, complex semantic dependencies, and generalizability. Notably, language model-based techniques are limited by token length and prompt sensitivity, making them unreliable for broad, project-wide semantic conflict detection.',
    },
  ],
  'research-problem': {
    p1: 'Current CI/CD processes lack integrated AI-driven solutions that effectively leverage rich code context and developer behavior to automate and optimize key activities. Specifically, existing approaches to merge conflict resolution and semantic conflict detection fail to fully utilize multi-level contextual information, while pipeline generation tools do not adapt dynamically to changing user behavior. Additionally, deployment scheduling does not account for real-time PR priority and build outcomes, limiting pipeline reliability and responsiveness. This research aims to develop a comprehensive, context-aware, and behavior-driven framework that',
    bullets: [
      'Enhances merge conflict resolution using hierarchical deep learning models with broader code context',
      'Detects semantic conflicts with advanced AI models beyond traditional static or test-based methods',
      'Automatically generates and updates CI/CD pipelines based on continuous analysis of developer behavior',
      'Advises deployment scheduling by integrating PR priority and build status through real-time feedback and reinforcement learning',
    ],
    p2: 'Together, these advancements seek to improve automation, accuracy, and adaptability in modern DevOps workflows.',
  },
  objectives: [
    'Create a GitHub app module that monitors repository activity, analyzes developer behavior patterns, and automatically generates and updates CI/CD pipelines in response to changing behaviors, with minimal user input.',
    'Design a system that advises deployment delays based on pull request priority and build status, aiming to improve CI/CD pipeline reliability by integrating real-time feedback and context-aware decision-making.',
    'Develop a system that automatically detects merge conflicts in pull requests and generates intelligent, context-aware resolution suggestions using hierarchical deep learning models, enhancing developer efficiency through a user-friendly interface.',
    'Build a GitHub application that uses a fine-tuned, context-aware language model to detect semantic merge conflicts in pull requests, generate clear warnings, and integrate seamlessly into the GitHub workflow.',
  ],
  methodology: {
    title: 'Methodology',
    desc: [
      `The proposed system is a GitHub application which can be installed to needed
repositories by the user. Hence the user learning curve of the system will be very low
and can be set up instantly without much effort. Once installed the application will
subscribe to a webhook emitter which listens to events on the installed repository.
When a event is triggered the webhook emitter will forward the event with the data
to the GitHub application if the application is subscribed to the event. This data will
be then used by the four components of the system as required to fire their own
functions to achieve the research objectives as mentioned in the previous section.
`,
      `The GitHub application itself will be hosted in a node server and the model required
to infer the required outputs will be saved in another flask server. If an inference
from the model is needed the node server will make a request to the flask server and
retrieve the necessary output. Although the components are hosted in the same node
server, they do not interact with each other`,
      `The main reason that the components do not interact with each other is to preserve
the modularity of the system. Because of the modularity, the system will be able to
quickly turn the features on and off when the features are needed. Although the
system only contains four solutions as of now, this can be changed as needed
dynamically so that the system itself will be up to date on solving common problems
found in the software development sector`,
    ],
  },
  stack: [
    {
      name: 'GitHub',
      icon: githubIcon,
    },
    {
      name: 'NodeJS',
      icon: nodeIcon,
    },
    {
      name: 'Python',
      icon: pythonIcon,
    },
    {
      name: 'Typescript',
      icon: typescriptIcon,
    },
    {
      name: 'AWS',
      icon: awsIcon,
    },
    {
      name: 'Docker',
      icon: dockerIcon,
    },
    {
      name: 'Kubernetes',
      icon: kubernetesIcon,
    },
    {
      name: 'Terraform',
      icon: terraformIcon,
    },
    {
      name: 'ReactJS',
      icon: reactIcon,
    },
    {
      name: 'PyTorch',
      icon: pytorchIcon,
    },
    {
      name: 'PostgreSQL',
      icon: postgresqlIcon,
    },
  ],
};
