
import { FC, SVGProps } from 'react';

export interface SymptomGroup {
    id: string;
    title: string;
    icon: FC<SVGProps<SVGSVGElement>>;
    color: string;
    symptoms: string[];
}

export interface AnalysisResult {
    trieuChung: string[];
    ketLuan: string;
    huongHoTro: string;
    goiYSanPham: string;
    cachDung: string;
    anUongSinhHoat: string;
}

export interface FullAnalysisResponse {
    analysis: {
        principalStatus: string;
        cooperativeStatuses: string[];
        combinedStatus: string;
    };
    results: AnalysisResult;
}
