import bigHappy from './assets/big-happy-emoji.png';
import littleHappy from './assets/little-happy-emoji.png';
import neutral from './assets/neutral-emoji.png';
import bigSad from './assets/big-sad-emoji.png';
import littleSad from './assets/little-sad-emoji.png';

export interface QuizData {
  question: string;
  emojis?: string[];
  shortAnswers?: string[];
  longAnswers: string[];
  orientation: 'square' | 'horizontal' | 'vertical';
}

const data: QuizData[] = [
  {
    question:
      'What made you think about switching from Public school? (Select all that apply)',
    shortAnswers: [
      'Personalized experience',
      'Freedom',
      'Quality',
      'Methodology',
      'Support Experience',
      'Flexibility',
      'Challenge',
      'Inclusivity',
      'Safety',
      'Something else',
    ],
    longAnswers: [
      'Wanting a more personalized learning experience for my child.',
      'Wanting more freedom in what and when my child learns.',
      "Worries about the quality of education or my child's needs not being met.",
      'Preferring different ways of teaching or thinking about education.',
      'Looking for more cohesive support in a learning experience for my child.',
      'The desire for greater flexibility in curriculum and scheduling and length of time for child per day to learn.',
      'Looking for more challenging schoolwork or getting ready for college.',
      'Wanting my child to learn in a diverse and inclusive community.',
      'Worries about safety or how discipline is handled at the current school.',
      'I experienced factors beyond those listed here.',
    ],
    orientation: 'square',
  },
  {
    question: "What is your preferred approach to your child's education?",
    shortAnswers: [
      'Independent Schedule',
      'Personalized Support',
      'Alternative Methods',
      'Hybrid Learning',
    ],
    longAnswers: [
      'I appreciate that my child is an independent learner.',
      'I like having a teacher helping my child learn.',
      "I'm curious about other ways people learn and want to try them.",
      'I like both regular school and learning at home sometimes.',
    ],
    orientation: 'horizontal',
  },
  {
    question:
      "What's your approach to balancing finances with investing in education?",
    shortAnswers: [
      'Investment Priority',
      'Financial Balance',
      'Budgeting Education',
      'Prioritizing Learning',
    ],
    longAnswers: [
      'I care a lot about money but will spend on good education for my child.',
      'I want good education but need to find a way to save money too.',
      "I'm eager to explore various learning methods without adversely affecting our finances.",
      "I'm fine with adjusting financial matters to ensure my child's education is prioritized.",
    ],
    orientation: 'horizontal',
  },
  {
    question:
      'What is your top priority regarding finances for school-related matters?',
    shortAnswers: [
      'Priority Spending',
      'Cost-Effective Education',
      'Budget-Conscious Learning',
      'Minimal Expense',
    ],
    longAnswers: [
      'I prioritize other considerations, even if they entail higher expenses.',
      'I want to spend less but still get good education for my child.',
      'I want to find cheap ways for my child to learn without losing quality.',
      "I want the cheapest option for my child's learning, even if it's not the best.",
    ],
    orientation: 'horizontal',
  },
  {
    question:
      "To what extent are you looking to participate in your child's school-related activities?",
    shortAnswers: [
      'Hands-On Parenting',
      'Collaborative Support',
      'Balanced Involvement',
      'Independent Learning',
    ],
    longAnswers: [
      "I want to do everything for my child's learning, even make the lessons.",
      'I want to help but also want teachers to do their job.',
      'I like being involved but also want my child to learn from different people.',
      'I want to help sometimes but let my child learn mostly on their own.',
    ],
    orientation: 'horizontal',
  },
  {
    question:
      "How much time are you willing to commit to your child's education?",
    shortAnswers: [
      'Comprehensive Time Commitment',
      'Occasional Time Commitment',
      'Active Time Commitment',
      'Daily Time Commitment',
    ],
    longAnswers: [
      "I don't have much time, so I want a school that does everything.",
      'I have some availability, so I can attend meetings and other events occasionally.',
      'I have time and like being part of school events and helping out.',
      "I have ample time available and am eager to assist with my child's school activities on a daily basis.",
    ],
    orientation: 'horizontal',
  },
  {
    question:
      'How important is it for you to decide how and where your child learns?',
    shortAnswers: [
      'Comprehensive Oversight',
      'Selective Input',
      'Controlled Guidance',
      'Total Autonomy',
    ],
    longAnswers: [
      "I don't care much, I just want a school that does everything.",
      'I want a say in some things but not everything.',
      'I want to have a lot of control over what and how my child learns.',
      "I want full control over my child's learning and where they learn.",
    ],
    orientation: 'horizontal',
  },
  // halfway point
  {
    question: 'How does your child feel about not going to a Public school?',
    emojis: [bigHappy, littleHappy, littleSad, bigSad, neutral],
    shortAnswers: [
      'Not concerned',
      'Slightly concerned',
      'Moderately concerned',
      'Very concerned',
      'Not applicable',
    ],
    longAnswers: [
      "My child's okay with trying different ways of learning.",
      "My child's a little worried but willing to try other ways of learning.",
      "My child's worried and doesn't like the idea of leaving their old school.",
      'My child really wants to stay in a Public school.',
      "It doesn't apply to my situation.",
    ],
    orientation: 'vertical',
  },
  {
    question:
      "How much flexibility do you want in your child's school schedule?",
    shortAnswers: [
      'Structured Routine',
      'Balanced Flexibility',
      'Adjustable Schedule',
      'Complete Freedom',
    ],
    longAnswers: [
      'I like having a fixed schedule for school stuff.',
      'I want some flexibility but mostly a fixed schedule.',
      "I want some room to change things in my child's school schedule.",
      'I want full flexibility to decide when and how my child learns.',
    ],
    orientation: 'horizontal',
  },
  {
    question:
      "How will you address your child's socialization needs in either public school or homeschooling?",
    shortAnswers: [
      'Priority Focus',
      'Balanced Emphasis',
      'Social & Academic Balance',
      'Social Integration',
    ],
    longAnswers: [
      "I prioritize other aspects over my child's socializing and making friends.",
      'I understand the significance of friendships, but my primary focus lies more with other aspects of school activities.',
      'I want my child to have friends but also need a school that helps them learn.',
      'My child needs to have lots of friends and fit in at school.',
    ],
    orientation: 'horizontal',
  },
  {
    question: 'How do you want to help your child with their learning needs?',
    shortAnswers: [
      'Uniform Curriculum',
      'Moderate Adaptation',
      'Targeted Support',
      'Individualized Learning',
    ],
    longAnswers: [
      "I don't care much, as long as my child learns what everyone else learns.",
      "I'm okay with some changes but want things to be mostly the same.",
      'I want my child to get special help and attention when they need it.',
      "I want everything to be tailored to my child's needs and changed when needed.",
    ],
    orientation: 'horizontal',
  },
  {
    question:
      "What do you hope your child's school experience leads to in the future?",
    shortAnswers: [
      'Academic Preparation',
      'Holistic Development',
      'Diverse Learning',
      'Versatile Readiness',
    ],
    longAnswers: [
      'I want my child to do well in Public school and get ready for college or a job.',
      'I want my child to learn in different ways and become a better person.',
      'I want my child to have lots of ways to learn and change as they grow up.',
      'I want my child to learn online and in person and be ready for anything.',
    ],
    orientation: 'horizontal',
  },
  {
    question: "How prepared are you to follow your state's homeschooling laws?",
    shortAnswers: [
      'I am very prepared',
      'Somewhat prepared',
      'Not very prepared',
      'Not prepared at all',
    ],
    longAnswers: [
      "I already know my state's laws for homeschooling and don't need extra help.",
      'I know a little bit about state laws, but would like extra help.',
      "I don't know much about how that works and want as much help as I can get.",
      'I am not willing to deal with this at all and will need someone to take care of everything for me.',
    ],
    orientation: 'horizontal',
  },
  {
    question:
      'How important is it for you to have access to a supportive community of homeschooling parents?',
    shortAnswers: [
      'Extremely important',
      'Very important',
      'Moderately important',
      'Somewhat important',
      'Not very important',
      'Not important at all',
      'Undecided',
    ],
    longAnswers: [
      'I rely on the support and guidance of other homeschooling parents.',
      'Having support enhances my homeschooling experience and provides valuable connections.',
      'I feel confident in my ability to homeschool without extensive external support.',
      'Having a supportive community is not a critical aspect of my homeschooling journey.',
      'I prefer to homeschool independently and do not feel the need for support.',
      'I am comfortable and confident in my ability to homeschool my child without support.',
      'I am unsure about the importance of having access to a supportive community.',
    ],
    orientation: 'square',
  },
  {
    question:
      'Do you plan to join homeschooling associations or organizations that offer support, resources, or group activities?',
    longAnswers: [
      "I am already in one or many of these and don't want any more options.",
      'I am already in one or many of these and would like to see more options.',
      "Yes, but I don't need more options to consider at the time.",
      'Yes, and I would like more options to consider.',
      "No, because I don't want to, and I won't change my mind.",
      "No, because I don't like the options, but am willing to change my mind if a new option is presented to me.",
      'Unsure.',
    ],
    orientation: 'square',
  },
];

export default data;
