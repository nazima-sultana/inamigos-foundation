import { Program, BlogPost, GalleryImage, Testimonial } from './types';

export const PROGRAMS: Program[] = [
  {
    id: 'education',
    title: 'Education For All',
    tagline: 'Pathways To Opportunities',
    description: 'Providing educational kits, digital learning spaces, scholarships, and active mentoring to underprivileged students in rural and semi-urban communities.',
    iconName: 'GraduationCap',
    colorClass: 'text-orange-600 border-orange-200 bg-orange-50 hover:bg-orange-100',
    bgClass: 'bg-orange-500',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
    details: [
      'Establishing 12 new digital study centers with high-speed internet.',
      'Providing annual educational scholarship-kits to over 500 children.',
      'Interactive weekend mentoring workshops led by field professionals.',
      'Specialized literacy camps for first-generation learners.'
    ]
  },
  {
    id: 'environment',
    title: 'Green Horizon',
    tagline: 'Preserving Tomorrow, Today',
    description: 'Driving urban tree plantations, waste management awareness camps, lake cleaning drives, and encouraging eco-friendly practices among households.',
    iconName: 'Leaf',
    colorClass: 'text-green-600 border-green-200 bg-green-50 hover:bg-green-100',
    bgClass: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
    details: [
      'Targeting over 10,000 tree saplings planted and nurtured annually.',
      'Neighborhood clean-up drives with active community volunteering.',
      'School programs on waste-segregation and upcycling plastic bottles.',
      'Composting initiatives in community resident segments.'
    ]
  },
  {
    id: 'community',
    title: 'Community Care',
    tagline: 'Strength In Solidarity',
    description: 'Supporting marginalized groups with essentials. Organizing regular health checkup camps, clean water distribution, and emergency disaster relief.',
    iconName: 'Heart',
    colorClass: 'text-purple-600 border-purple-200 bg-purple-50 hover:bg-purple-100',
    bgClass: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop',
    details: [
      'Hosting free primary healthcare diagnosis and medicine distribution camps.',
      'Nutritious meal projects aiming to eradicate hunger in localized pockets.',
      'Providing essential clean drinking water infrastructure systems.',
      'Blanket distribution drives during extreme winter seasons.'
    ]
  },
  {
    id: 'youth',
    title: 'Youth Empowerment',
    tagline: 'Igniting Future Leaders',
    description: 'Equipping youth with vocational skills, entrepreneurship mentorship, standard communication workshops, coding primers, and career guidance.',
    iconName: 'Sparkles',
    colorClass: 'text-blue-600 border-blue-200 bg-blue-50 hover:bg-blue-100',
    bgClass: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop',
    details: [
      'Practical career counseling sessions for high school graduates.',
      'Basic and intermediate computer literacy & coding workshops.',
      'Public speaking, communication, and dynamic soft-skill training.',
      'Incubating micro-businesses and local enterprise ideas with small grants.'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Empowering Village Schools with Digital Learning Classrooms',
    date: 'May 28, 2026',
    excerpt: 'How InAmigos Foundation is changing the narrative of rural classrooms by setting up our first smart digital study station in Bilaspur region.',
    content: 'We are incredibly thrilled to announce the launch of our digital learning program in Bilaspur, Chhattisgarh. Recognizing that digital exclusion is one of the highest barriers to progress, InAmigos Foundation took a bold step forward to equip village community centers with tablets, solar panels, and educational resources. Children now learn through interactive multimedia stories, setting off on a beautiful journey of learning filled with visual curiosity. Over 150 children experienced positive literacy gains in the first month alone, and we hope to scale this model to five more neighboring villages by the end of this year.',
    author: 'Sunita Sharma',
    category: 'Education',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'blog-2',
    title: '1,000 Saplings and Still Counting: Our Mega Plantation Week',
    date: 'June 5, 2026',
    excerpt: 'On World Environment Day, volunteers from all paths joined hands to plant life in the heart of community schools and barren common lands.',
    content: 'Our latest Green Horizon drive was a roaring success! This World Environment Day, we did not just talk about climate action—we got our hands in the mud. More than 120 incredible community volunteers, ranging from enthusiastic school students to retired grandmothers, answered our call. We successfully planted 1,000 highly adaptable indigenous saplings (including neem, amla, and banyan) across five designated school backyards and neglected municipal spaces. Crucially, each sapling has been assigned a dynamic volunteer "guardian" to ensure water, tree cages, and long-term survival, realizing true community stewardship.',
    author: 'Rajesh Dewangan',
    category: 'Environment',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'blog-3',
    title: 'Reclaiming Dreams: A Workshop on Crafting Future Micro-Leaders',
    date: 'April 14, 2026',
    excerpt: 'A glimpse into our 3-week youth boot camp offering intensive leadership, career mapping, and active presentation skills.',
    content: 'The youth represent the true fire to drive structural change. In our 3-week comprehensive Youth Empowerment program, InAmigos hosted intensive interactive bootcamps covering public communication strategies, technical presentation essentials, and simple bookkeeping for local business owners. Watching the transformative journey of young adults growing from cautious, shy speakers to confidently pitching localized entrepreneurship solutions (like local nursery ideas or custom handloom marketplaces) was a profound reminder of why "Uniting Minds for Change" remains our core guiding force.',
    author: 'Priya Patel',
    category: 'Youth',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-1',
    url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop',
    caption: 'Distribution of essential education kits to children',
    category: 'Education'
  },
  {
    id: 'gal-2',
    url: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=600&auto=format&fit=crop',
    caption: 'Planting indigenous trees on World Environment Day',
    category: 'Environment'
  },
  {
    id: 'gal-3',
    url: 'https://images.unsplash.com/photo-1541976590-713941af8119?q=80&w=600&auto=format&fit=crop',
    caption: 'Interactive digital classroom pilot training',
    category: 'Education'
  },
  {
    id: 'gal-4',
    url: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=600&auto=format&fit=crop',
    caption: 'Community distribution drives supplying dry ration and food support',
    category: 'Community'
  },
  {
    id: 'gal-5',
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
    caption: 'Skill workshop for local aspiring youth micro-entrepreneurs',
    category: 'Youth'
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
    caption: 'Dynamic volunteer circle discussion and campaign layout',
    category: 'Community'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Aman Sahu',
    role: 'Beneficiary (Digital Education Center)',
    quote: 'Before InAmigos Foundation set up the digital center near my home, we had never used a tablet or a computer. Now, I learn math and science weekly, and I want to study engineering to help my family.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'test-2',
    name: 'Dr. Sandeep Rao',
    role: 'Volunteer Medical Advisor',
    quote: 'Providing primary health checks in areas where facilities are far is vital. The precision and warmth of InAmigos coordinators ensure that medicines and screening reach those who need it most.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'test-3',
    name: 'Shreya Shukla',
    role: 'Corporate Partner & Supporter',
    quote: "Working with InAmigos Foundation is inspiring. Their reporting is highly transparent, and their approach focuses on grassroots partnership, ensuring every rupee creates real, measurable social impact.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
  }
];
