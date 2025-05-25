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
};
