import { ISvgIconNameTypes } from "./svg-icon-type";

export interface IDataProps {
   icon: ISvgIconNameTypes;
   title: string;
   description: string;
}

export interface ITestimonialTypes {
   image: string;
   testimony: string;
   name: string;
   companyAndRole: string;
}
