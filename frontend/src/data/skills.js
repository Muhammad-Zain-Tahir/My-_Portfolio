import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiMongoose, SiGit } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const skillsData = [
    {
        category: 'Frontend Development',
        items: [
            { name: 'HTML', icon: FaHtml5, color: 'text-orange-500', level: 90 },
            { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500', level: 85 },
            { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', level: 85 },
            { name: 'React.js', icon: FaReact, color: 'text-cyan-400', level: 80 },
            { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-500', level: 95 },
        ]
    },
    {
        category: 'Backend Development',
        items: [
            { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', level: 75 },
            { name: 'Express.js', icon: SiExpress, color: 'text-gray-300', level: 75 },
            { name: 'REST APIs', icon: FaNodeJs, color: 'text-gray-400', level: 80 },
        ]
    },
    {
        category: 'Database',
        items: [
            { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', level: 80 },
            { name: 'Mongoose', icon: SiMongoose, color: 'text-red-500', level: 75 },
        ]
    },
    {
        category: 'Tools',
        items: [
            { name: 'Git', icon: SiGit, color: 'text-orange-600', level: 85 },
            { name: 'GitHub', icon: FaGithub, color: 'text-white', level: 85 },
            { name: 'VS Code', icon: VscVscode, color: 'text-blue-500', level: 90 },
        ]
    }
];
