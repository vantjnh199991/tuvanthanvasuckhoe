
import React from 'react';

interface ResultSectionProps {
    title: string;
    content: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    colorClass: string;
}

const ResultSection: React.FC<ResultSectionProps> = ({ title, content, Icon, colorClass }) => {
    return (
        <div className="p-4 bg-gray-800 rounded-xl shadow-lg mb-4 border border-yellow-700/50 transition-all duration-300 hover:shadow-yellow-500/20">
            <div className={`flex items-center mb-3 ${colorClass}`}>
                <Icon className="w-5 h-5 mr-3" />
                <h3 className="text-lg font-semibold text-yellow-500 uppercase">{title}</h3>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                {content.split('\n').map((line, index) => {
                    let renderedLine = line;
                    
                    if (renderedLine.trim().startsWith('-')) {
                         renderedLine = '<span class="mr-2 text-red-400">•</span> ' + renderedLine.trim().substring(1).trim();
                    }
                    
                    renderedLine = renderedLine.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-yellow-300">$1</strong>');
                    
                    renderedLine = renderedLine.replace(/→/g, '<span class="text-yellow-500 mx-2">→</span>');

                    return <p key={index} dangerouslySetInnerHTML={{ __html: renderedLine }} className="mb-1 last:mb-0" />;
                })}
            </div>
        </div>
    );
};

export default ResultSection;
